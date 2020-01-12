import Vue from 'vue';
import Component from 'nuxt-class-component';


@Component({
})
class Profile extends Vue {
	dialog = false;
	showPassword = false;
	name = 'Sergey';
	email = 'example@email.com';
	password = 'some password';


	showField(fieldName) {
		this[fieldName] = !this[fieldName];
	}

	onShowPasswordField() {
		this.showPasswordField = !this.showPasswordField;
	}

}

export default Profile;
