import Vue from 'vue';
import Component, {Mutation, State} from 'nuxt-class-component';
import Message from "~/components/message/message.vue";
import MessageInput from "~/components/message-input/message-input.vue";


@Component({
	components: { Message, MessageInput }
})
class Chat extends Vue {
	@State(state => state.authorization.user) user;
	@State(state => state.chat.messages) messages;
	@State(state => state.chat.questionType) questionType;
	@State(state => state.chat.chatSettings.chatSessionID) chatSessionID;
	@Mutation('chat/setMessages') setMessages;
	@Mutation('chat/setUserMessage') setUserMessage;

	validateMessages(userID) {
		// if(!this.user) {
		// 	this.user = userID;
		// 	return true;
		// }
		//
		// if (this.user === userID) {
		// 	return false;
		// }
		//
		// this.user = userID;
		return true;
	}

	initChat() {
		return this.$axios.post('/chat/init', {
			userID: this.user.id
		});
	}

	async mounted() {
		const {data: { data }} = await this.initChat();
		this.setMessages(data)
	}

	async sendMessage(userMessage) {
		try {
			this.setUserMessage(userMessage);

			const { data: { data } } = await this.$axios.post('/chat/send-message', {
				message: userMessage,
				chatSessionID: this.chatSessionID,
				questionType: this.questionType,
				userID: this.user.id
			});
			this.setMessages(data);
			this.messageInput = '';
		} catch (error) {
			console.log(error)
		}
	}

}

export default Chat;
