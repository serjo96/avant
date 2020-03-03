import Vue from 'vue';
import Component  from 'nuxt-class-component';
import { Prop } from 'vue-property-decorator';


@Component({
	layout: 'authLayout'
})
class NavMenu extends Vue {
	@Prop(Boolean) isAuthenticated;
	@Prop(Boolean) mobileNav;
	@Prop(Function) toggleNav;

}

export default NavMenu;
