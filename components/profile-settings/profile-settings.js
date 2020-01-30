import Vue from 'vue';
import Component, {Mutation, State} from 'nuxt-class-component';
import {Prop, Watch} from "vue-property-decorator";


@Component({
})
class ProfileSettings extends Vue {
	profileData = {
		name: '',
		email: '',
		password: '',
		sex: '',
		birthdaydate: '',
		photos: {
			profilePic: {

			}
		}
	};


	sex = ['male', 'female'];
	showPassword = false;
	menu = false;
	@Prop(Boolean) value;
	@State(state => state.authorization.user) user;
	@Mutation('authorization/setUser') setUser;

	@Watch('user', {deep: true})
	setProfileUser(val) {
		this.profileData = {...val};
	}

	@Watch('menu')
	menuWatch (val) {
		val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
	}

	save (date) {
		this.$refs.menu.save(date);
	}


	showField(fieldName) {
		this[fieldName] = !this[fieldName];
	}

	onShowPasswordField() {
		this.showPasswordField = !this.showPasswordField;
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
				const {data: {data}} = await this.$axios.post('/users/profile/update', this.profileData);
				this.setUser(data.data);
			} catch (e) {
				console.error(e)
			}

		}
		this.$emit('input', false);
	}

}

export default ProfileSettings;
