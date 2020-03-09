import Vue from 'vue';
import Component from 'nuxt-class-component';
import { Prop } from "vue-property-decorator";


@Component({
})
class MessageInput extends Vue {
	@Prop({ default: 'field'}) inputType;
	@Prop(String) questionType;
	@Prop(Function) sendMessage;
	@Prop(Function) onBackMessage;
	@Prop(Function) setQuestionType;
	@Prop(Array) options;
	@Prop(Number) counterUserMessages;
	messageInput = '';
	date = '';
	menu = false;
	selectedItems = [];
	symptomsAutocomplete = false;
	fieldsProps = {
		field: {
			headerText: '',
		},
		button: {
			headerText: 'Choose an option'
		},
		autocompite: {
			headerText: 'Click here to select your symptoms'
		},
		datepicker: {
			headerText: 'Select your birthday'
		}
	};

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
			this.setQuestionType(`${this.questionType}_list`);
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

	get showAutocomplete() {
		return this.inputType === 'autocompite';
	}
}

export default MessageInput;
