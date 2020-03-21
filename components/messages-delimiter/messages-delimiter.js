import Vue from 'vue';
import Component from 'nuxt-class-component';
import { Prop } from "vue-property-decorator";
import { dateHelper } from '~/helpers/dateHelper.js';

@Component({
})
class MessagesDelimiter extends Vue {
	@Prop([ String, Date ]) messageDate;

	get transformDate () {
		return dateHelper(this.messageDate);
	}

}

export default MessagesDelimiter;
