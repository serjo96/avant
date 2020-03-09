import Vue from 'vue';
import Component, { State } from 'nuxt-class-component';
import ResetPasswordEmail from "~/components/reset-password/reset-password-email/reset-password-email.vue";
import ChangePassword from "~/components/reset-password/change-password/change-password.vue";



@Component({
    components: { ResetPasswordEmail, ChangePassword },
    middleware: 'resetPassword'
})
class ResetPassword extends Vue {
    @State(state => state.authorization.resetPasswordComponent) resetPasswordComponent;
    @State(state => state.authorization.responseMessage) responseMessage;


}

export default ResetPassword;
