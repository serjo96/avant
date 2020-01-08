import Vue from 'vue';
import { Prop, Component } from 'vue-property-decorator';
import { Action, Mutation } from 'vuex-class';



@Component({
})
class Login extends Vue {
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


    login(){
        // if (this.formValidate) {
        //     this.loginAction({email: this.email, password: this.password});
        // }
    }

    // beforeDestroy(){
    //     this.clearErrorData();
    // }

}

export default Login;
