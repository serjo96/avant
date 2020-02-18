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
		data: {
			id: '',
			name: '',
			email: '',
			password: '',
			sex: '',
			birthdaydate: '',
			profilepicture: '',
			photos: {
				profilePic: {
					url: '',
					description: null,
					tags: null,
					date: ''
				}
			}
		},
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
	@Getter('authorization/userFormatted') userFormatted;
	@Mutation('authorization/setUser') setUser;

	@Watch('userFormatted', {deep: true})
	setProfileUser(val) {
		const email = val.email;
		this.passwordSettings.data = {...this.passwordSettings.data, email};
		this.profileSettings.data = {...val};
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
		// save data here
	}

	setCurrentTabName({target}) {
		console.log(target.id);
		this.currentTab = target.id;
	}

	uploadImg(img) {
		const data = {...this.profileSettings.data, profilepicture: img};
		this.profileSettings = {...this.profileSettings, data}
		console.log(this.profileSettings);
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

}

export default Profile;
