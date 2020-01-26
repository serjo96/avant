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
    @Prop() AuthError;
    // @Action loginAction;
    // @Mutation clearErrorData;

    get formValidate(){
        return this.$refs.form.validate()
    }


    async login() {
        try {
            await this.$auth.loginWith('local', {
                data: {
                    "email": this.email,
                    "password": this.password
                }
            }).catch(e => {
                console.error(e);
            });
            if (this.$auth.loggedIn) {
                console.log('Successfully Logged In')
            }
        } catch (e) {
            throw new Error('Username or Password wrong');
        }
    }

    // beforeDestroy(){
    //     this.clearErrorData();
    // }

}

export default SignIn;
