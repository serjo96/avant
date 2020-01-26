import Vue from 'vue';
import Component  from 'nuxt-class-component';
import { Prop } from 'vue-property-decorator';


@Component({
	layout: 'authLayout'
})
class MobileNav extends Vue {
	@Prop(Boolean) mobileNav;

}

export default MobileNav;
