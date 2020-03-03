import Vue from 'vue';
import Component from 'nuxt-class-component';
import Chat from "~/components/chat/chat.vue";


@Component({
	components: { Chat },
	middleware: ['auth'],
	layout: 'chatLayout'
})
class ChatPage extends Vue {

}

export default ChatPage;
