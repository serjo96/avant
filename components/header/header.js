import Vue from 'vue';
import Component, {Getter, Mutation, State} from 'nuxt-class-component';
import {Prop, Watch} from "vue-property-decorator";
import NavMenu from "~/components/nav-menu/nav-menu.vue"
import {API_PATH} from "../../core/config";

@Component({
	components: {
		NavMenu,
	}
})
class Header extends Vue {
	@Prop(Function) onShowProfileSettings;
	@State(state => state.user.userData) user;
	@Mutation('authorization/logout') logout;
	mobileNav = false;

	get isAuthenticated() {
		return Boolean(this.$store.state.user.userData.userID);
	}

	toggleNav() {
		if (window.innerWidth <= 960) {
			this.mobileNav = !this.mobileNav;
		}
	}

	logOut() {
		this.$auth.logout();
		this.$router.push('/');
		this.logout();
		window.location.reload();
	}

	get avatar() {
		return this.user.photos.profilePic.url ? `${API_PATH}${this.user.photos.profilePic.url}` : null;
	}

	get userLogin() {
		return this.user.name ? this.user.name : this.user.email;
	}
}

export default Header;
