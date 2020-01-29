import { Module, VuexModule, Mutation } from 'vuex-module-decorators';
import {getUserFromLocalStorage, setUser} from "../utils/auth";

@Module({
	stateFactory: true,
})
class Authorization extends VuexModule {
	responseMessage = {
		message: '',
		status: false,
		confirm: false
	};

	user = getUserFromLocalStorage() ? JSON.parse(getUserFromLocalStorage()) : null;

	test = {};


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
	clearResponseData() {
		this.responseMessage = {
			message: '',
			status: false,
			confirm: false
		};
	}

}

export default Authorization;
