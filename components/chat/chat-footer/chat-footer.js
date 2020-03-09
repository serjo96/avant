import Vue from 'vue';
import Component from 'nuxt-class-component';
import MessageInput from "~/components/message-input/message-input.vue";
import {Prop} from "vue-property-decorator";


@Component({
	components: { MessageInput }
})
class ChatFooter extends Vue {
	@Prop(String) inputType;
	@Prop(String) questionType;
	@Prop(Function) sendMessage;
	@Prop(Function) setQuestionType;
	@Prop(Function) onBackMessage;
	@Prop(Array) options;
	@Prop(Number) counterUserMessages;

}

export default ChatFooter;
