import Vue from 'vue';
import { Watch } from "vue-property-decorator";
import Component from "vue-class-component";
import  { Getter, Mutation, State, Action } from 'nuxt-class-component';
import Message from "~/components/message/message.vue";
import ChatHeader from "~/components/chat/chat-header/chat-header.vue";
import ChatFooter from "~/components/chat/chat-footer/chat-footer.vue";
import MessagesDelimiter from "~/components/messages-delimiter/messages-delimiter.vue";


@Component({
	components: { Message, MessagesDelimiter, ChatHeader, ChatFooter }
})
class Chat extends Vue {
	@State(state => state.user.userData) user;
	@State(state => state.chat.messages) messages;
	@State(state => state.chat.questionType) questionType;
	@State(state => state.chat.chatSettings) chatSettings;
	@Getter('global/getPageHeight') getPageHeight;
	@Getter('chat/formattedMessages') formattedMessages;
	@Action('chat/getLocalHistory') getLocalHistory;
	@Action('chat/sendMessage') sendMessage;
	@Action('chat/initChat') initChat;
	@Action('chat/restartChat') restartChat;
	@Mutation('chat/setMessages') setMessages;
	@Mutation('chat/setUserMessage') setUserMessage;
	@Mutation('chat/setFakeIncomingMessage') setFakeIncomingMessage;
	@Mutation('chat/setDelimiterMessage') setDelimiterMessage;
	@Mutation('chat/setQuestionType') setQuestionType;
	lastMessages = [];


	@Watch('messages')
	onWatchMessages() {
		this.scrollToBottom();
	}


	async mounted() {
		await this.getLocalHistory();
		if (this.messages.length) {
			this.setDelimiterMessage();
		}
		await this.initChat(this.user.userID);
	}

	setLastMessages(message) {
		if (this.lastMessages.length >= 2) {
			this.lastMessages = [];
		}
		const newMessages = this.lastMessages;
		newMessages.push(message);
		this.lastMessages = newMessages;
	}

	onSendMessage(message) {
		try {
			this.setUserMessage({ message, userID: this.user.userID });
			this.setLastMessages(message);
			this.scrollToBottom();
			this.sendMessage({
				message,
				chatSessionID: this.chatSettings.chatSessionID,
				questionType: this.questionType,
				userID: this.user.userID
			})
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
		for (let i = this.messages.length - 1; i >= 0; --i) {
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
			this.onSendMessage(lastMessage.message);
		}
	}

	scrollToBottom() {
		setTimeout(()=> this.$refs.chatBody.scrollTop = this.$refs.chatBody.scrollHeight);
	}

	async handlerRestartChat() {
		this.setDelimiterMessage();
		this.setFakeIncomingMessage();
		this.scrollToBottom();
		try {
			await this.restartChat(this.user.userID);
		} catch (e) {
			console.log(e)
		} finally {
			this.scrollToBottom();
		}
	}

}

export default Chat;
