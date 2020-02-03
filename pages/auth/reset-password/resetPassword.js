import Vue from 'vue';
import Component, { State } from 'nuxt-class-component';
import ResetPasswordEmail from "~/components/reset-password/reset-password-email/reset-password-email.vue";
import ResetPasswordForm from "~/components/reset-password/reset-password-form/reset-password-form.vue";



@Component({
    components: { ResetPasswordEmail, ResetPasswordForm },
    middleware: 'resetPassword'
})
class ResetPassword extends Vue {
    @State(state => state.authorization.resetPasswordComponent)  resetPasswordComponent;


}

export default ResetPassword;
