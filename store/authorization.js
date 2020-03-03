import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import axios from "axios";
import { removeUser, setToken } from "~/utils/auth";


@Module({
	stateFactory: true,
})
class Authorization extends VuexModule {
	resetPasswordComponent = 'ResetPasswordEmail';
	responseMessage = {
		message: '',
		status: false,
		confirm: false
	};

	@Mutation
	setResponseMessage(payload) {
		this.responseMessage = payload;
	}

	@Mutation
	changeResetPasswordComponent(payload) {
		if (payload) {
			this.resetPasswordComponent = 'ChangePassword'
		} else {
			this.resetPasswordComponent = 'ResetPasswordEmail';
		}

	}

	@Mutation
	clearResponseData() {
		this.responseMessage = {
			message: '',
			status: false,
			confirm: false
		};
	}

	@Mutation
	logout() {
		delete axios.defaults.headers.common['Authorization'];
		removeUser();
	}

	@Action
	async login( { data: { email, password }, methods }) {
		try {
			const {data: { data }}  = await axios.post('/auth/email/login', {
				email,
				password
			});
			methods.auth.setToken('local', 'Bearer ' + data.token.access_token);
			methods.auth.ctx.app.$axios.setHeader('Authorization', 'Bearer ' + data.token.access_token);
			axios.defaults.headers.common['Authorization'] =  'Bearer ' + data.token.access_token;

			await methods.auth.loginWith('local', {
				data: {
					email,
					password,
				}
			});

			this.context.commit('user/setUser', data.user, { root: true });
		} catch ({response: {data}}) {
			this.context.commit('setResponseMessage', data.error);
		}
	}


	@Action
	async signUp({ data , methods }) {
		try {
			const response = await axios.post('/auth/email/register', {
				birthdaydate: new Date(data.birthdaydate),
				...data
			});
			this.context.commit('setResponseMessage', response);
			methods.router.push('/auth/sign-in');
		} catch ({response: {data}}) {
			this.context.commit('setResponseMessage', data.error);
		}

	}

	@Action
	async resentConfirm() {
		await axios.post('/auth/email/register', {
			...this.registerData
		});
	}

}

export default Authorization;
