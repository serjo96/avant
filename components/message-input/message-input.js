import Vue from 'vue';
import Component from 'nuxt-class-component';
import {Prop, Watch} from "vue-property-decorator";


@Component({
})
class MessageInput extends Vue {
	@Prop({ default: 'input'}) inputType;
	@Prop(Function) sendMessage;
	@Prop(Function) onBackMessage;
	@Prop(Array) options;
	@Prop(Number) counterUserMessages;
	messageInput = '';
	date = '';
	menu = false;


	save (date) {
		this.$refs.menu.save(date);
	}

	formatDate (date) {
		if (!date) return null;

		const [year, month, day] = date.split('-');
		return `${month}-${day}-${year}`;
	}

	get computedDateFormatted () {
		if( !this.date ) return null;
		return this.formatDate(this.date)
	}

	onSendMessage() {
		if ( this.messageInput ) {
			this.sendMessage(this.messageInput);
			this.messageInput = '';
		}
	}

	onSendDate() {
		if ( this.computedDateFormatted ) {
			this.sendMessage(this.computedDateFormatted);
		}
	}
}

export default MessageInput;
