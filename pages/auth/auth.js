import Vue from 'vue';
import Component, {State} from 'nuxt-class-component';
import { Watch } from 'vue-property-decorator';
// import { Getter } from 'vuex-class';


@Component({
	layout: 'authLayout'
})
class Auth extends Vue {
	@State(state => state.authorization.responseMessage) responseMessage;

}

export default Auth;
