import Vue from 'vue';
import Component, {Getter, Mutation, State} from 'nuxt-class-component';
import Message from "~/components/message/message.vue";
import ChatHeader from "~/components/chat/chat-header/chat-header.vue";
import ChatFooter from "~/components/chat/chat-footer/chat-footer.vue";


@Component({
	components: { Message, ChatHeader, ChatFooter }
})
class Chat extends Vue {
	@State(state => state.authorization.user) user;
	@State(state => state.chat.messages) messages;
	@State(state => state.chat.questionType) questionType;
	@State(state => state.chat.chatSettings) chatSettings;
	@Getter('global/getPageHeight') getPageHeight;
	@Mutation('chat/setMessages') setMessages;
	@Mutation('chat/setUserMessage') setUserMessage;
	@Mutation('chat/setFakeIncomingMessage') setFakeIncomingMessage;
	lastMessages = [];

	initChat() {
		return this.$axios.post('/chat/init', {
			userID: this.user.userID,
		});
	}

	async mounted() {
		const messagesLength = this.messages.length;
		const {data: { data }} = await this.initChat();
		this.setMessages({ data });
	}

	setLastMessages(message) {
		if (this.lastMessages.length >= 2) {
			this.lastMessages = [];
		}
		const newMessages = this.lastMessages;
		newMessages.push(message);
		this.lastMessages = newMessages;
	}

	async sendMessage(userMessage) {
		try {
			this.setUserMessage(userMessage);
			this.setLastMessages(userMessage);
			this.scrollToBottom();
			const messagesLength = this.messages.length;
			const { data: { data } } = await this.$axios.post('/chat/send-message', {
				message: userMessage,
				chatSessionID: this.chatSettings.chatSessionID,
				questionType: this.questionType,
				userID: this.user.userID
			});
			this.setMessages({ data, messagesLength });
		} catch (error) {
			console.log(error)
		} finally {
			this.scrollToBottom();
		}
	}

	get counterUserMessages() {
		let counter = 0;
		for ( let i = 0; i < this.messages.length; i ++ ) {
			const message = this.messages[i];
			if ( message.messageType === 'incoming' ) {
				counter++;
			}
			if ( counter >= 2) {
				break;
			}
		}
		return counter;
	}

	onBackMessage() {
		let lastMessage = '';
		for (let i = this.messages.length-1; i >= 0; --i) {
			const message = this.messages[i];
			let count = 0;

			if ( message.messageType === 'incoming' ) {
				lastMessage = message;
				count ++;
			}
			if ( count >= 2) {
				break;
			}
		}

		if ( lastMessage ) {
			this.sendMessage(lastMessage.message);
		}
	}

	scrollToBottom() {
		setTimeout(()=> this.$refs.chatBody.scrollTop = this.$refs.chatBody.scrollHeight);
	}

	async restartChat() {
		this.setFakeIncomingMessage();
		this.scrollToBottom();
		const messagesLength = this.messages.length;
		try {
			const {data: { data }} = await this.initChat();
			this.setMessages({ data, messagesLength })
		} catch (e) {
			console.log(e)
		} finally {
			this.scrollToBottom();
		}
	}

}

export default Chat;
