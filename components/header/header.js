import Vue from 'vue';
import Component, {Getter} from 'nuxt-class-component';
import {Prop} from "vue-property-decorator";


@Component({
})
class Header extends Vue {
	@Prop(Function) onShowProfileSettings;
	@Getter('authorization/isAuthenticated') isAuthenticated;
}

export default Header;
