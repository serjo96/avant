import Vue from 'vue';
import Component from 'nuxt-class-component';
import {Prop} from "vue-property-decorator";


@Component({
})
class TypingSpinner extends Vue {
	@Prop(Boolean) isLoading;

	get spinnerCalss() {
		return [
			'typing-spinner',
			{
				'typing-spinner--isShow': this.isLoading
			}
		]


	}

}

export default TypingSpinner;
