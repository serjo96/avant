import { Module, VuexModule, Mutation } from 'vuex-module-decorators';


@Module({
	stateFactory: true,
})
class Chat extends VuexModule {
	snackBarData = {
		message: '',
		color: '',
		timeout: 0
	};

	@Mutation
	addSnackBarMessage(message){
		this.snackBarData = message;
	}

	@Mutation
	clearSnackBar(){
		this.snackBarData = {
			message: '',
			color: '',
			timeout: 0
		};
	}


}

export default Chat;
