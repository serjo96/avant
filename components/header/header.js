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
	@Prop(Function) onShowProfileSettings;
	@Getter('authorization/isAuthenticated') isAuthenticated;
	mobileNav = false;

	toggleNav() {
		this.mobileNav = !this.mobileNav;
	}
}

export default Header;
