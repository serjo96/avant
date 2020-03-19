import Vue from 'vue';
import { Prop } from "vue-property-decorator";
import Component, { Mutation, Action } from 'nuxt-class-component';


@Component({})
class ResetPasswordEmail extends Vue {
	@Mutation('authorization/setResponseMessage') setResponseMessage;
	@Mutation('authorization/clearResponseData') clearResponseData;
	@Action('authorization/resetPassword') resetPassword;
	email = '';
	valid = true;
	emailRules =  [
			v => !!v || 'E-mail is required',
			v => /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(v) || 'E-mail must be valid'
	];


	get formValidate(){
		return this.$refs.form.validate();
	}

	onSubmit(){
		if(this.formValidate){
			this.resetPassword({
				data: {
					email: this.email
				},
				methods: {
					router: this.$router
				}
			})
		}
	}
}

export default ResetPasswordEmail;
