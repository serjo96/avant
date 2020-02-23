import Vue from 'vue';
import Component, {Getter, Mutation, State} from 'nuxt-class-component';
import { Prop, Watch } from "vue-property-decorator";
import ProfileSettings from "~/components/profile-settings/profile-settings.vue";
import PasswordSettings from "~/components/password-settings/password-settings.vue";


@Component({
	components: {
		ProfileSettings,
		PasswordSettings
	}
})
class Profile extends Vue {
	currentTab = 'profileSettings';
	// profileSettings = {
	// 	data: {
	// 		userID: '',
	// 		name: '',
	// 		email: '',
	// 		password: '',
	// 		sex: '',
	// 		birthdaydate: '',
	// 		avatar: ''
	// 	},
	// 	handler: this.saveProfileSettings
	// };

	passwordSettings = {
		data: {
			currentPassword: '',
			newPassword: '',
			email: ''
		},
		handler: this.savePasswordSettings
	};

	@Prop(Boolean) value;
	@State(state => state.user.userData) user;
	@Getter('user/userFormatted') userFormatted;
	@Mutation('user/setUser') setUser;
	@Mutation('user/setProfileData') setProfileData;

	@Watch('userFormatted', {deep: true})
	setProfileUser(val) {
		const email = val.email;
		this.passwordSettings.data = {...this.passwordSettings.data, email};
		this.profileSettings.data = {...val, avatar: val.photos.profilePic.url};
	}

	@Watch('menu')
	menuWatch (val) {
		val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'));
	}



	get dialogModal(){
		return this.value;
	}

	set dialogModal(dialog){
		this.$emit('input', dialog)
	}

	async closeModal(save) {
		if(save){
			try {
				this[this.currentTab].handler();
			} catch (e) {
				console.error(e)
			}
		}
		this.$emit('input', false);
	}

	setCurrentTabName({target}) {
		this.currentTab = target.id;
	}

	uploadImg(img) {
		const data = {...this.profileSettings.data, profilepicture: img};
		this.profileSettings = {...this.profileSettings, data};
	}

	async saveProfileSettings() {
		try {
			const {data: {data}} = await this.$axios.post('/users/profile/update', this.profileSettings.data);
			this.setUser(data.data);
		} catch (e) {
			throw new Error(e);
		}
	}

	async savePasswordSettings() {
		try {
			await this.$axios.post('/auth/email/change-password', this.passwordSettings.data);
		} catch (e) {
			throw new Error(e);
		}

	}

	async removeAvatar() {
		const data = {
			userID: this.userFormatted.userID,
			action: 'remove',
			photoId: 'profilepic.png',
		};
		try {
			await this.$axios.post('/users/gallery/update', data);
		} catch (error) {
			console.log(error);
		}
	}

}

export default Profile;
