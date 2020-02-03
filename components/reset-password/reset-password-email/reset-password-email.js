import Vue from 'vue';
import Component, { Mutation } from 'nuxt-class-component';


@Component({})
class ResetPasswordEmail extends Vue {
	emailRules =  [
			v => !!v || 'E-mail is required',
			v => /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(v) || 'E-mail must be valid'
	];
	email = '';
	valid = true;
	@Mutation('authorization/setResponseMessage') setResponseMessage;


	get formValidate(){
		return this.$refs.form .validate();
	}

	async onSubmit(){
		if(this.formValidate){
			try {
				const res = await this.$axios.get(`/auth/email/forgot-password/${this.email}`);
				this.setResponseMessage(res);
				this.$router.push('/auth/sign-in');
			} catch ({response: {data}}) {
				this.setResponseMessage(data.error);
			}
		}
	}
}

export default ResetPasswordEmail;
