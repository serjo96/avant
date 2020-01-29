import Vue from 'vue';
import Component  from 'nuxt-class-component';
import { Prop } from 'vue-property-decorator';
import { Action, Mutation } from 'vuex-class';



@Component({
    middleware: 'anonymous',
})
class SignIn extends Vue {
    valid = true;
    emailRules = [
        v => !!v || 'E-mail is required',
        v => /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(v) || 'E-mail must be valid'
    ];
    passwordRules = {
        required: value => !!value || 'Required.',
    };
    showPassword = false;
    email = '';
    password = '';

    @Prop(Function) changeComponent;
    @Prop() responseMessage;
    @Mutation('authorization/setResponseMessage') setResponseMessage;
    @Mutation('authorization/clearResponseData') clearResponseData;

    get formValidate(){
        return this.$refs.form.validate()
    }


    async login() {
        try {
            const response = await this.$auth.loginWith('local', {
                data: {
                    "email": this.email,
                    "password": this.password
                }
            });
            this.setResponseMessage(response);
            console.log(this.$auth);
            if (this.$auth.loggedIn) {
                console.log('Successfully Logged In')
            }
        } catch ({response: {data}}) {
            console.log(this.$auth)
            this.setResponseMessage(data.error);
            // throw new Error('Username or Password wrong');
        }
    }

    async resentConfirm() {
        await this.$axios.post('/auth/email/register', {
            ...this.registerData
        });
    }

	destroyed(){
		this.clearResponseData();
	}

}

export default SignIn;
