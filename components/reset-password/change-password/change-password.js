import Vue from 'vue';
import Component from 'nuxt-class-component';


@Component({
})
class ChangePassword extends Vue {
	newPassword = '';
	confirmPassword = '';
	showPassword = false;
	showConfirmPassword = false;
	passwordRules = {
		required: value => !!value || 'Required.',
		min: v => v.length >= 6 || 'Min 6 characters',
	};

	matchPassword () {
		return this.confirmPassword === this.newPassword || 'Password doesnt match';
	}

	progressText() {
		const password = this.password;
		let prog = [/[$@$!%*#?&]/, /[A-Z]/, /[0-9]/, /[a-z]/]
			.reduce((memo, test) => memo + Number(test.test(password)), 0);

		if(prog > 2 && password.length >= 6){
			prog++;
		}

		let progress = 0;
		switch (prog) {
			case 0:
			case 1:
				progress = 0;
				break;
			case 2:
				progress = 1;
				break;
			case 3:
				progress = 2;
				break;
			case 4:
				progress = 3;
				break;
			case 5:
				progress = 4;
				break;
		}

		return progress;
	}

	get passwordStatus(){
		const passwordStatus  = {
			0: 'Very weak',
			1: 'Weak',
			2: 'Average',
			3: 'Strong',
			4: 'Very strong',
		};

		return passwordStatus[this.progressText()]
	}

	progress () {
		return Math.min(100, this.progressText() * 25)
	}

	color () {
		return ['darken-4 red', 'error', 'darken-4 lime', 'warning', 'success'][this.progressText()]
	}

	passwordMatch() {
		return this.newPassword === this.retryPassword;
	}

	async onSubmit() {
		const newPasswordToken = this.$route.query.token;
		if ( this.$refs.form.validate() ) {
			await this.$axios('/email/change-password', {
				newPassword: this.newPassword,
				newPasswordToken
			});
		}
	}
}
// TODO: add match password validation
export default ChangePassword;
