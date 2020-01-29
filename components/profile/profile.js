import Vue from 'vue';
import Component, {State} from 'nuxt-class-component';
import {Prop, Watch} from "vue-property-decorator";


@Component({
})
class Profile extends Vue {
	profileData = {
		name: '',
		email: '',
		password: '',
		sex: '',
		birthdaydate: '',
	};

	@State(state => state.authorization.user) user;

	sex = ['male', 'female'];
	showPassword = false;
	menu = false;
	@Prop(Boolean) value;

	@Watch('user', {deep: true})
	setProfileUser(val) {
		this.profileData = val;
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

	closeModal(save) {
		if(save){

		}
		this.$emit('input', false);
		// save data here
	}

}

export default Profile;
