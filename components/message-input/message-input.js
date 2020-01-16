import Vue from 'vue';
import Component from 'nuxt-class-component';
import {Prop} from "vue-property-decorator";


@Component({
})
class MessageInput extends Vue {
	@Prop(String) inputButtonText;

}

export default MessageInput;