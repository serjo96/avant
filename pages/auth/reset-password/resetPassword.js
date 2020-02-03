import Vue from 'vue';
import Component  from 'nuxt-class-component';
import { Prop } from 'vue-property-decorator'
import { Action, Mutation, Getter } from 'vuex-class';



@Component({
    data: ()=> ({
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(v) || 'E-mail must be valid'
        ],

    }),
    middleware: 'resetPassword'
})
class ResetPassword extends Vue {
    email = '';
    valid = true;
    @Prop(Function) changeComponent;
    @Prop() responseMessage;
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

export default ResetPassword;
