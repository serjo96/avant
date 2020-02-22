import { Module, VuexModule, Mutation } from 'vuex-module-decorators';


@Module({
	stateFactory: true,
})
class Authorization extends VuexModule {
	pageHeight = '500px';
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

	get snackBar(){
		return this.snackBarData;
	}

	get getPageHeight(){
		return this.pageHeight;
	}


	@Mutation
	calculatePageHeight(height) {
		this.pageHeight = `${height}px`;
	}


}

export default Authorization;
