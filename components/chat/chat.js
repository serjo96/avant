import Vue from 'vue';
import Component, {State} from 'nuxt-class-component';
import Message from "~/components/message/message.vue";
import MessageInput from "~/components/message-input/message-input.vue";


@Component({
	components: { Message, MessageInput }
})
class Chat extends Vue {
	messages = [

	];
	@State(state => state.authorization.user) user;

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
		const res = await this.initChat();
		console.log(res);
	}

}

export default Chat;
