import { Module, VuexModule, Mutation } from 'vuex-module-decorators';
import {getUserFromLocalStorage, removeUser, setUser} from "../utils/auth";

const localUser = process.browser ? getUserFromLocalStorage() : null;

@Module({
	stateFactory: true,
})
class User extends VuexModule {
	userData = localUser ? JSON.parse(localUser) : {
		userID: '',
		name: '',
		email: '',
		password: '',
		sex: '',
		birthdaydate: '',
		avatar: ''
	};

	get userFormatted() {
		if (!this.user) return null;
		const birthdaydate = this.user.birthdaydate ? new Date(this.user.birthdaydate).toISOString().substr(0, 10) : '';
		return {...this.user, birthdaydate};
	}


	@Mutation
	setUser(user) {
		this.userData = user;
		setUser(user);
	}


	@Mutation
	setProfileData({ key, val }) {
		this.userData[key] = val;
	}


}

export default User;
