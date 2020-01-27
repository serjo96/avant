import Vue from 'vue';
import Component, { Getter } from 'nuxt-class-component';
import { Prop } from "vue-property-decorator";
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
		this.mobileNav = !this.mobileNav;
	}
}

export default Header;
