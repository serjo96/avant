import Vue from 'vue';
import { Watch, Component } from 'vue-property-decorator';
// import { Getter } from 'vuex-class';


@Component({
	layout: 'authLayout'
})
class Auth extends Vue {

	// @Getter('userData') User;
	// @Getter AuthError;
	//
	// @Watch('User', {deep: true})
	// onUserChange(auth) {
	// 	if (auth) {
	// 		this.$router.replace(this.nextRoute)
	// 	}
	// }


	get nextRoute () {
		return `${this.$route.query.redirect && '/'}` || '/'
	}
}

export default Auth;
