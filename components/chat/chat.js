import Vue from 'vue';
import Component from 'nuxt-class-component';
import Message from "~/components/message/message.vue";
import MessageInput from "~/components/message-input/message-input.vue";


@Component({
	components: { Message, MessageInput }
})
class Chat extends Vue {
	user = null;
	messages = [
		{
			userId: 1,
			date: new Date(),
			type: 'outgoing',
			message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aliquid amet aperiam aspernatur aut consequatur cupiditate debitis ducimus explicabo illum incidunt ipsum iusto laborum modi officiis ratione recusandae sequi tenetur?',
			avatar: 'https://storage.googleapis.com/media.helloumi.com/channels/0_GaDxNWH.svg?time=1527600013.53297',
		},
		{
			userId: 2,
			date: new Date(),
			type: 'incoming',
			message: 'Great!',
		},
		{
			userId: 1,
			date: new Date(),
			type: 'outgoing',
			message: 'I’ll be your guide for today. 🙂',
			avatar: 'https://storage.googleapis.com/media.helloumi.com/channels/0_GaDxNWH.svg?time=1527600013.53297',
		},
		{
			userId: 1,
			date: new Date(),
			type: 'outgoing',
			message: 'I’ll be your guide for today. 🙂',
			avatar: 'https://storage.googleapis.com/media.helloumi.com/channels/0_GaDxNWH.svg?time=1527600013.53297',
		},
		{
			userId: 1,
			date: new Date(),
			type: 'outgoing',
			message: 'I’ll be your guide for today. 🙂',
			avatar: 'https://storage.googleapis.com/media.helloumi.com/channels/0_GaDxNWH.svg?time=1527600013.53297',
		},
	];

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

}

export default Chat;
