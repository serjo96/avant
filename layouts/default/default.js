import Vue from 'vue';
import Component, {Getter, Mutation, State} from 'nuxt-class-component';
import Header from '~/components/header/header.vue';
import Footer from '~/components/footer/footer.vue';
import Profile from "~/components/profile/profile.vue";
import "vuetify/src/components/VGrid/VGrid.sass";
import "vuetify/src/components/VGrid/_grid.sass";
import '~/assets/styles/variables/vuetify.scss'

@Component({
	components: {
		Header,
		Footer,
		Profile
	}
})
class Default extends Vue {
	showProfileSettings = false;
	isAuthenticated = this.$auth.loggedIn;
	@State(state => state.authorization.user) user;
	@Mutation('authorization/setUser') setUser;

	 onShowProfileSettings() {
	 	this.showProfileSettings = true;
	}

}

export default Default;
