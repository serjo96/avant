import Vue from 'vue';
import Component  from 'nuxt-class-component';
import { Prop } from 'vue-property-decorator';


@Component({
	layout: 'authLayout'
})
class MobileNav extends Vue {
	isAuthenticated = this.$auth.loggedIn;
	@Prop(Boolean) mobileNav;
	@Prop(Function) toggleNav;

}

export default MobileNav;
