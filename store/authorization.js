import {Module, VuexModule, Mutation, Action, MutationAction} from 'vuex-module-decorators';
import axios from 'axios';
import { API_PATH } from "../Core/config";

@Module({
	stateFactory: true
})
class Authorization extends VuexModule {
	signUpData = null;
	authError = {
		code: '',
		message: ''
	};
	successResetPasswordMessage = '';

	get AuthError() {
		return this.authError;
	}

	get restPasswordMessage() {
		return this.successResetPasswordMessage;
	}


	@Action({rawError: true})
	async signUpAction(payload) {
		await axios.post(`${API_PATH}/users`, payload);
		console.log('DONE')
		// firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
		// 	.then(res=> {
		// 		this.context.commit('setCurrentUser', firebase.auth().currentUser);
		// 		this.context.commit('setSingUpResult', res);
		// 		Router.push('/');
		// 	})
		// 	.catch(error=> {
		// 		this.context.commit('error',  error);
		// 	});
	}

	@Mutation
	setSingUpResult(payload) {
		this.signUpData = payload.result;
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
		this.singUpData = payload.result;
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
