import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import axios from "axios";
import { removeUser } from "~/utils/auth";


@Module({
	stateFactory: true,
})
class Authorization extends VuexModule {
	email = '';
	resetPasswordComponent = 'ResetPasswordEmail';
	responseMessage = {
		message: '',
		code: '',
		status: false,
		success: false,
		confirm: false
	};

	@Mutation
	setResponseMessage(payload) {
		this.responseMessage = payload;
	}

	@Mutation
	clearResponseData() {
		this.responseMessage = {
			message: '',
			status: false,
			success: false,
			confirm: false
		};
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
		} catch ({response: { data }}) {
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
		} catch ({response: { data }}) {
			this.context.commit('setResponseMessage', data.error);
		}

	}

	@Action
	async resetPassword({ data , methods }) {
		try {
			const res = await axios.get(`/auth/email/forgot-password/${data.email}`);
			this.context.commit('setResponseMessage', res);
			// methods.router.push('/auth/sign-in');
		} catch ({response: { data }}) {
			this.context.commit('setResponseMessage', data.error);
		}
	}

	@Action
	async changePassword({ data , methods }) {
		try {
			await axios.post('/auth/email/change-password', {
				newPassword: data.newPassword,
				newPasswordToken: data.newPasswordToken
			});
			methods.router.push('/auth/sign-in');
		} catch ({response: { data }}) {
			this.context.commit('setResponseMessage', data.error);
		}
	}

	@Action
	async resentConfirm() {
		try {
			const res = await axios.get(`/auth/email/resend-verification/${this.email}`);
			this.context.commit('setResponseMessage', res);
		} catch ({response: { data }}) {
			this.context.commit('setResponseMessage', data.error);
		}
	}

	@Mutation
	setEmail(email) {
		this.email = email;
	}

}

export default Authorization;
