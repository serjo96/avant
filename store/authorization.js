import { Module, VuexModule, Mutation } from 'vuex-module-decorators';

@Module({
	stateFactory: true,
})
class Authorization extends VuexModule {
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
	clearResponseData() {
		this.responseMessage = {
			message: '',
			status: false,
			confirm: false
		};
	}

}

export default Authorization;
