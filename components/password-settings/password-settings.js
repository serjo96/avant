import Vue from 'vue';
import Component, {Mutation, State} from 'nuxt-class-component';
import {Prop, Watch} from "vue-property-decorator";


@Component({
})
class PasswordSettings extends Vue {
	newPassword = '';
	showPassword = false;
	@Prop(String) userEmail;

	get dialogModal(){
		return this.value;
	}

	set dialogModal(dialog){
		this.$emit('input', dialog)
	}

	async closeModal(save) {
		if(save){
			const passwordData = {
				email: this.userEmail,
				password: this.newPassword
			};
			try {
				const {data: {data}} = await this.$axios.post('/auth/email/reset-password', passwordData);
				console.log(data)
			} catch (e) {
				console.error(e)
			}

		}
		this.$emit('input', false);
	}

}

export default PasswordSettings;
