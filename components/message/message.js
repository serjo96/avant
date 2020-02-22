import Vue from 'vue';
import Component from 'nuxt-class-component';
import { Prop } from "vue-property-decorator";
import TypingSpinner from "~/components/typing-spinner/typing-spinner.vue";
import { dateHelper } from '~/helpers/dateHelper.js';
import avatar from '~/assets/doctor_yellow.svg';


@Component({
	components: { TypingSpinner }
})
class Message extends Vue {
	avatar = avatar;
	@Prop(String) messageType;
	@Prop(Boolean) messageGroup;
	@Prop(Boolean) isLoading;
	@Prop(String) messageDate;
	@Prop([ String, Object ]) messageData;
	@Prop(Boolean) groupMessage;
	collapse = true;

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
				visible: !this.groupMessage
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

	get showCollapseItems() {
		return this.messageData.description || this.messageData.treatments || this.messageData.prevention
	}

	toggleCollapse() {
		this.collapse = !this.collapse;
	}

	get collapseButtonText() {
		return this.collapse ? 'Show more' : 'Show less' ;
	}

	get collapseClass() {
		return {
			collapse: true,
			'collapse--is-open': !this.collapse,
		}
	}

}

export default Message;
