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
	profileSettings = {
		handler: this.saveProfileSettings
	};

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


	async saveProfileSettings() {
		const profileData = {
			...this.user,
			profilepicture: this.user.avatar,
		};
		profileData.remove('photos');
		profileData.remove('avatar');
		try {
			const {data: {data}} = await this.$axios.post('/users/profile/update', profileData);
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
		const userData = {
			userID: this.userFormatted.userID,
			action: 'remove',
			photoId: 'profilepic.png',
		};
		try {
			const {data: {data}} = await this.$axios.post('/users/gallery/update', userData);
			this.setUser(data.data);
		} catch (error) {
			console.log(error);
		}
	}

}

export default Profile;
