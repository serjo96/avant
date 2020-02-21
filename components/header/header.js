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
	isAuthenticated = this.$auth.loggedIn;
	mobileNav = false;
	@Prop(Function) onShowProfileSettings;
	@State(state => state.authorization.user) user;
	@Mutation('authorization/logout') logout;


	toggleNav() {
		if (window.innerWidth <= 960) {
			this.mobileNav = !this.mobileNav;
			document.documentElement.classList.toggle('overflow-y-hidden')
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
