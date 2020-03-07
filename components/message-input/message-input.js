import Vue from 'vue';
import Component from 'nuxt-class-component';
import { Prop } from "vue-property-decorator";


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
	selectedItems = [];


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

	onSendSymptoms() {
		if( this.selectedItems.length ) {
			const messageToString = this.selectedItems.join(', ');
			this.$refs.chatAutocomplete.blur();
			this.selectedItems = [];
			this.sendMessage(messageToString);
		}
	}

	onSendDate() {
		if ( this.computedDateFormatted ) {
			this.sendMessage(this.computedDateFormatted);
		}
	}

	removeChip (item) {
		const index = this.selectedItems.indexOf(item);
		if (index >= 0) this.selectedItems.splice(index, 1)
	}
}

export default MessageInput;
