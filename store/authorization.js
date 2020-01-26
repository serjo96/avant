import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import axios from 'axios';
import { API_PATH } from "~/core/config";

@Module({
	stateFactory: true,
	namespaced: true,
	name: 'Authorization'
})
class Authorization extends VuexModule {
	__auth = null;
	__router = null;
	user = {};
	authError = {
		code: '',
		message: ''
	};
	successResetPasswordMessage = '';

	constructor(props) {
		super(props);
		this.__auth = props.$auth;
		this.__router = props.$router;
	}

	get AuthError() {
		return this.authError;
	}

	get loggedUser() {
		return this.user
	}

	get isAuthenticated() {
		return !!this.user
	}


	@Action({rawError: true})
	async register() {
		try {
			await this.$axios.post('register', {
				username: this.username,
				email: this.email,
				password: this.password
			})

			await this.$auth.loginWith('local', {
				data: {
					email: this.email,
					password: this.password
				},
			})

			this.$router.push('/')
		} catch (e) {
			this.error = e.response.data.message
		}
	}

	@Mutation
	SET_USER(user) {
		console.log(user);
		this.user = user ;
	}

	@Action({rawError: true})
	loginAction(payload) {
		// firebase.auth().signInAndRetrieveDataWithEmailAndPassword(payload.email, payload.password)
		// 	.then(res=>{
		// 		this.context.commit('login', res);
		// 		this.context.commit('setCurrentUser', firebase.auth().currentUser);
		// 		Router.push('/');
		// 	})
		// 	.catch(error=>{
		// 		this.context.commit('error', error);
		// 	});
	}

	@Mutation
	error(error) {
		this.authError = error;
	}

	@Mutation
	successResetPassword() {
		this.successResetPasswordMessage = 'A message with instructions for resetting the password has been sent to your email.';
	}

	@Mutation
	login(payload) {
		this.user = payload.result;
	}

	@Action
	logOut() {
		// firebase.auth().signOut()
		// 	.then((res)=> {
		// 		console.log(res);
		// 		this.context.commit('setCurrentUser', firebase.auth().currentUser);
		// 		localStorage.removeItem('user');
		// 		Router.push('/auth');
		// 	})
		// 	.catch(error=> {
		// 		console.log(error);
		// 		this.context.commit('setCurrentUser', firebase.auth().currentUser);
		// 	});
	}

	@Action
	resetPassword(email) {
		// const actionCodeSettings = {url: 'http://localhost:8080'};
		//
		// firebase.auth().sendPasswordResetEmail(email, actionCodeSettings)
		// 	.then(()=> {
		// 		this.context.commit('successResetPassword');
		// 	})
		// 	.catch(error=> {
		// 		this.context.commit('error', error);
		// 	});
	}


	@Mutation
	clearErrorData() {
		this.authError = {
			code: '',
			message: ''
		};
	}

	@Mutation
	clearPasswordMessage() {
		this.successResetPasswordMessage = '';
	}
}

export default Authorization;
