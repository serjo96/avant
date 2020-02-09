import Vue from 'vue';
import Component from 'nuxt-class-component';
import {Prop} from "vue-property-decorator";


@Component({
})
class MessageInput extends Vue {
	@Prop({ default: 'input'}) inputType;
	@Prop(Function) sendMessage;
	messageInput = '';

	onSendMessage() {
		this.sendMessage(this.messageInput);
		this.messageInput = '';
	}
}

export default MessageInput;
