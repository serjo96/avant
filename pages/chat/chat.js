import Vue from 'vue';
import Component from 'nuxt-class-component';
import Chat from "~/components/chat/chat.vue";


@Component({
	components: { Chat },
	middleware: 'authenticated',
	layout: 'chatLayout'
})
class ChatPage extends Vue {
	get chatHeight() {
		if (process.server) return;
		const headerHeight = document.getElementById('header').clientHeight;
		return `${window.innerHeight - headerHeight}px`;
	}


}

export default ChatPage;
