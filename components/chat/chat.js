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
	messageInput = '';

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
			userID: 1
		});
	}

	async mounted() {
		const {data: { data }} = await this.initChat();
		this.setMessages(data)
	}

	async sendMessage() {
		const {data: { data } } = await this.$axios.post('/chat/send-message', {
			message: this.messageInput,
			chatSessionID: this.chatSessionID,
			questionType: this.questionType,
			userID: 1
		});
		this.setMessages(data)
	}

}

export default Chat;
