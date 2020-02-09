import Vue from 'vue';
import Component, {Getter, Mutation, State} from 'nuxt-class-component';
import Message from "~/components/message/message.vue";
import MessageInput from "~/components/message-input/message-input.vue";


@Component({
	components: { Message, MessageInput }
})
class Chat extends Vue {
	@State(state => state.authorization.user) user;
	@State(state => state.chat.messages) messages;
	@State(state => state.chat.questionType) questionType;
	@State(state => state.chat.chatSettings) chatSettings;
	@Mutation('chat/setMessages') setMessages;
	@Mutation('chat/setUserMessage') setUserMessage;
	lastMessages = [];

	initChat() {
		return this.$axios.post('/chat/init', {
			userID: this.user.id,
		});
	}

	async mounted() {
		const {data: { data }} = await this.initChat();
		this.setMessages(data)
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
			const { data: { data } } = await this.$axios.post('/chat/send-message', {
				message: userMessage,
				chatSessionID: this.chatSettings.chatSessionID,
				questionType: this.questionType,
				userID: this.user.id
			});
			console.log(data);
			this.setMessages(data);
		} catch (error) {
			console.log(error)
		}
	}

}

export default Chat;
