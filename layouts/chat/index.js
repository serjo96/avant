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
	showProfileSettings = false;
	isAuthenticated = this.$auth.loggedIn;

	onShowProfileSettings() {
		this.showProfileSettings = true;
	}

}

export default ChatLayout;
