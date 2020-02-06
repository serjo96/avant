import Vue from 'vue';
import Component from 'nuxt-class-component';
import { Prop } from "vue-property-decorator";
import { dateHelper } from '~/helpers/dateHelper.js';


@Component({
})
class Message extends Vue {
	avatar = 'https://storage.googleapis.com/media.helloumi.com/channels/0_GaDxNWH.svg?time=1527600013.53297';
	@Prop(String) messageType;
	@Prop(Boolean) messageGroup;
	@Prop(String) messageDate;
	@Prop([ String, Object ]) messageData;
	@Prop(Boolean) groupMessage;

	get transformDate () {
		return dateHelper(this.messageDate);
	}

	get incomingMessage() {
		return this.messageData.messageType === 'incoming';
	}

	get messageInfoClassName() {
		return [
			'message-info',
			{
				visible: this.groupMessage
			},
		];
	}

	get messageClassName() {
		const messageType = `message-${this.incomingMessage ? 'incoming' : 'outgoing'}`;
		return [
			'message',
			messageType,
			{
				'message--group': this.messageGroup
			},
		]
	}

	get messageText(){
		return this.messageData.description ? this.messageData.description : this.messageData.message;
	}

}

export default Message;
