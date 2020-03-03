import Vue from 'vue';
import Component, { State } from 'nuxt-class-component';


@Component({
	layout: 'authLayout',
	middleware: 'anonymous'
})
class Auth extends Vue {
	@State(state => state.authorization.responseMessage) responseMessage;

}

export default Auth;
