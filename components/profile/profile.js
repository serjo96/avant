import Vue from 'vue';
import Component from 'nuxt-class-component';
import {Prop} from "vue-property-decorator";


@Component({
})
class Profile extends Vue {
	showPassword = false;
	name = 'Sergey';
	email = 'example@email.com';
	password = 'some password';
	@Prop(Boolean) value;


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

}

export default Profile;
