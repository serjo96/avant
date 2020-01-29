import Vue from 'vue';
import Component, { Getter } from 'nuxt-class-component';
import {Prop, Watch} from "vue-property-decorator";
import NavMenu from "~/components/nav-menu/nav-menu.vue"

@Component({
	components: {
		NavMenu,
	}
})
class Header extends Vue {
	isAuthenticated = this.$auth.loggedIn;
	mobileNav = false;
	@Prop(Function) onShowProfileSettings;


	toggleNav() {
		if (window.innerWidth <= 960) {
			this.mobileNav = !this.mobileNav;
		}
	}

	logOut() {
		this.$auth.logout();
		this.$router.push('/');
		window.location.reload();
	}
}

export default Header;
