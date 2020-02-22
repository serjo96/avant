import Vue from 'vue';
import Component, {Mutation, State} from 'nuxt-class-component';
import Header from '~/components/header/header.vue';
import Profile from "~/components/profile/profile.vue";
import "vuetify/src/components/VGrid/VGrid.sass";
import "vuetify/src/components/VGrid/_grid.sass";
import '~/assets/styles/variables/vuetify.scss'

@Component({
	components: {
		Header,
		Profile
	}
})
class ChatLayout extends Vue {
	@Mutation('global/calculatePageHeight') calculatePageHeight;
	showProfileSettings = false;
	isAuthenticated = this.$auth.loggedIn;

	onShowProfileSettings() {
		this.showProfileSettings = true;
	}

	setChatHeight() {
		const headerHeight = this.$refs.header.$el.offsetHeight;
		this.calculatePageHeight(window.innerHeight - headerHeight);
	}

	mounted() {
		this.setChatHeight();
		window.addEventListener('resize', this.setChatHeight);
	}

	destroy() {
		window.removeEventListener('resize', this.setChatHeight);
	}

}

export default ChatLayout;
