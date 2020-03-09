import { Module, VuexModule, Mutation } from 'vuex-module-decorators';
import { getUserFromLocalStorage, setUser } from "~/utils/auth";
import { API_PATH } from "~/core/config";

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
		avatar: '',
	};

	get userFormatted() {
		const birthdaydate = this.userData.birthdaydate ? new Date(this.userData.birthdaydate).toISOString().substr(0, 10) : '';
		return { ...this.userData, birthdaydate };
	}


	@Mutation
	setUser(user) {
		const avatar = user.photos.profilePic.url ? `${API_PATH}${user.photos.profilePic.url}` : '';
		this.userData = { ...user, avatar };
		setUser(user);
	}


	@Mutation
	setProfileData({ key, val }) {
		this.userData[key] = val;
	}


}

export default User;
