import Vue from 'vue';
import Component  from 'nuxt-class-component';
import { Prop } from 'vue-property-decorator';
import { Action, Mutation } from 'vuex-class';



@Component({
    middleware: 'anonymous',
})
class SignIn extends Vue {
    @Prop(Function) changeComponent;
    @Prop() responseMessage;
    @Action('authorization/login') login;
    email = '';
    password = '';
    valid = true;
    showPassword = false;
    emailRules = [
        v => !!v || 'E-mail is required',
        v => /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(v) || 'E-mail must be valid'
    ];
    passwordRules = {
        required: value => !!value || 'Required.',
    };


    get formValidate(){
        return this.$refs.form.validate()
    }

    async onLogin() {
        try {
            await this.login({
                data : {
                    email: this.email,
                    password: this.password
                },
                methods: {
                    auth: this.$auth,
                    router: this.$router
                }
            });
        } catch (e) {
            console.error(e);
        }
    }

    async resentConfirm() {
        await this.$axios.post('/auth/email/register', {
            ...this.registerData
        });
    }

}

export default SignIn;
