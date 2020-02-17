import Vue from 'vue';
import Component from 'nuxt-class-component';
import { Prop } from "vue-property-decorator";


@Component({
})
class ChatHeader extends Vue {
	@Prop(Function) restartChat;

}

export default ChatHeader;
