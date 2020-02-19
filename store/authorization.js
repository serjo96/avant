import { Module, VuexModule, Mutation } from 'vuex-module-decorators';
import {getUserFromLocalStorage, removeUser, setUser} from "../utils/auth";

const localUser = process.browser ? getUserFromLocalStorage() : null;

@Module({
	stateFactory: true,
})
class Authorization extends VuexModule {
	user = localUser ? JSON.parse(localUser): {id: ''};
	resetPasswordComponent = 'ResetPasswordEmail';
	responseMessage = {
		message: '',
		status: false,
		confirm: false
	};

	get userFormatted() {
		if (!this.user) return null;
		const birthdaydate = this.user.birthdaydate ? new Date(this.user.birthdaydate).toISOString().substr(0, 10) : '';
		return {...this.user, birthdaydate};
	}

	@Mutation
	setResponseMessage(payload) {
		this.responseMessage = payload;
	}

	@Mutation
	setUser(user) {
		this.user = user;
		setUser(user);
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
		removeUser()
	}

}

export default Authorization;
