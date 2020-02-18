import Vue from 'vue';
import Component, {Mutation, State} from 'nuxt-class-component';
import Header from '~/components/header/header.vue';
import "vuetify/src/components/VGrid/VGrid.sass";
import "vuetify/src/components/VGrid/_grid.sass";
import '~/assets/styles/variables/vuetify.scss'

@Component({
	components: {
		Header,
	}
})
class ChatLayout extends Vue {
	showProfileSettings = false;
	isAuthenticated = this.$auth.loggedIn;
	@State(state => state.authorization.user) user;
	@Mutation('authorization/setUser') setUser;

	async onShowProfileSettings() {
		try {
			const {data: {data}} = await this.$axios.get(`/users/user/${this.user.email}`);

			setTimeout(()=> {this.setUser(data.data)}, 0);
			this.showProfileSettings = true;
		} catch (err) {
			console.warn(err)
		}

	}

}

export default ChatLayout;
