import { Module, VuexModule, Mutation } from 'vuex-module-decorators';


@Module({
	stateFactory: true,
})
class Authorization extends VuexModule {
	snackBarData = { message: '', color: '' };

	@Mutation
	addSnackBarMessage(message){
		this.snackBarData = message;
	}

	@Mutation
	clearSnackBar(){
		this.snackBarData = {message: '', color: ''};
	}

	get snackBar(){
		return this.snackBarData;
	}


}

export default Authorization;
