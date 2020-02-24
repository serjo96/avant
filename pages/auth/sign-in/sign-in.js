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
    @Mutation('user/setUser') setUser;

    get formValidate(){
        return this.$refs.form.validate()
    }


    async login() {
        if (this.formValidate) {

            try {
                await this.$auth.loginWith('local', {
                    data: {
                        "email": this.email,
                        "password": this.password
                    }
                });

                const {data: {data}}  = await this.$axios.post('/auth/email/login', {
                    email: this.email,
                    password: this.password
                });

				this.$auth.setToken('local', 'Bearer ' + data.token.access_token);
				// this.$auth.setRefreshToken('local', data.refresh_token);
				this.$axios.setHeader('Authorization', 'Bearer ' + data.token.access_token);
				this.$auth.ctx.app.$axios.setHeader('Authorization', 'Bearer ' + data.token.access_token);
                this.setUser(data.user);
				// this.$router.push('/');
                if (this.$auth.loggedIn) {
                    console.log('Successfully Logged In')
                }
            } catch ({response: {data}}) {
                this.setResponseMessage(data.error);
            }
        }
    }

    async resentConfirm() {
        await this.$axios.post('/auth/email/register', {
            ...this.registerData
        });
    }

}

export default SignIn;
