import Vue from 'vue';
import Component from 'nuxt-class-component';
import {Prop} from "vue-property-decorator";


@Component({
})
class PasswordSettings extends Vue {
	@Prop(Object) value;
	showOldPassword = false;
	showPassword = false;

	get () {
		return this.value
	};

	set (value) {
		this.$emit('input', value)
	};

	save (date) {
		this.$refs.menu.save(date);
	}


	progressText() {
		const password = this.value.newPassword;
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
}

export default PasswordSettings;
