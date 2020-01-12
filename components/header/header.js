import Vue from 'vue';
import Component from 'nuxt-class-component';
import {Prop} from "vue-property-decorator";


@Component({
})
class Header extends Vue {
	@Prop(Function) onShowProfileSettings;

}

export default Header;
