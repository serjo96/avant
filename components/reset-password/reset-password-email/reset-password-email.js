import Vue from 'vue';
import Component, { Mutation, Action } from 'nuxt-class-component';
import { Prop } from "vue-property-decorator";


@Component({})
class ResetPasswordEmail extends Vue {
	@Mutation('authorization/setResponseMessage') setResponseMessage;
	@Mutation('authorization/clearResponseData') clearResponseData;
	@Action('authorization/resetPassword') resetPassword;
	@Prop() responseMessage;
	emailRules =  [
			v => !!v || 'E-mail is required',
			v => /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(v) || 'E-mail must be valid'
	];
	email = '';
	valid = true;


	get formValidate(){
		return this.$refs.form.validate();
	}

	async onSubmit(){
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
