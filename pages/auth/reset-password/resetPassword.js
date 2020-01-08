import Vue from 'vue'
import { Prop, Component } from 'vue-property-decorator'
import { Action, Mutation, Getter } from 'vuex-class';



@Component({
    data: ()=> ({

        emailRules: [
            v => !!v || 'E-mail is required',
            v => /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(v) || 'E-mail must be valid'
        ],

    })
})
class ResetPassword extends Vue {
    email = '';
    valid = true;

    // @Action resetPassword;
    // @Mutation clearErrorData;
    // @Mutation clearPasswordMessage;
    // @Getter AuthError;
    // @Getter restPasswordMessage;
    @Prop(Function) changeComponent;

    get formValidate(){
        return this.$refs.form .validate();
    }

    onInput(val) {
        this.email = val;
        // if(this.AuthError.message){
        //     this.clearErrorData();
        // }
    }

    onSubmit(){
        if(this.formValidate){
            // this.resetPassword(this.email);
        }
    }

    // beforeDestroy(){
    //     this.clearPasswordMessage();
    //     this.clearErrorData();
    // }

}

export default ResetPassword;
