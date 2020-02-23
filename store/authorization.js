import { Module, VuexModule, Mutation } from 'vuex-module-decorators';
import { removeUser } from "../utils/auth";


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
		removeUser()
	}

}

export default Authorization;
