import Vue from 'vue';
import Component from 'nuxt-class-component';
import { Prop } from "vue-property-decorator";
import { dateHelper } from '~/helpers/dateHelper.js';


@Component({
})
class Message extends Vue {
	@Prop(String) messageType;
	@Prop(Boolean) messageGroup;
	@Prop(Object) messageData;
	@Prop(Boolean) groupMessage;

	get transformDate () {
		return dateHelper(this.messageData.date);
	}

	get outgoingMessage() {
		return this.messageType === 'outgoing';
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
		const messageType = `message-${this.messageType}`;
		return [
			'message',
			messageType,
			{
				'message--group': this.messageGroup
			},
		]
	}

}

export default Message;
