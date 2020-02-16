import Vue from 'vue';
import Component from 'nuxt-class-component';
import Chat from "~/components/chat/chat.vue";


@Component({
	components: { Chat }
})
class ChatPage extends Vue {
	get chatHeight() {
		if (process.server) return;
		const headerHeight = document.getElementById('header').clientHeight;
		const footerHeight = document.getElementById('footer').clientHeight;
		return `${window.innerHeight - headerHeight - footerHeight}px`;
	}


}

export default ChatPage;
