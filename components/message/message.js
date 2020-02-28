import Vue from 'vue';
import Component from 'nuxt-class-component';
import { Prop } from "vue-property-decorator";
import avatar from '~/assets/doctor_yellow.svg';
import { dateHelper } from '~/helpers/dateHelper.js';
import TypingSpinner from "~/components/typing-spinner/typing-spinner.vue";


@Component({
	components: { TypingSpinner }
})
class Message extends Vue {
	avatar = avatar;
	@Prop(String) messageType;
	@Prop(Boolean) groupMessage;
	@Prop(Boolean) isLoading;
	@Prop([ String, Date ]) messageDate;
	@Prop([ String, Object ]) messageData;
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
				'message--group': this.groupMessage
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
