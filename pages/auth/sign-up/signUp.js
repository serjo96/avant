import Vue from 'vue'
import Component  from 'nuxt-class-component';
import { Prop } from 'vue-property-decorator'
import { Action, Mutation } from 'vuex-class';
import { mask } from 'vue-the-mask'


@Component({
    directives: {
        mask
    }
})
class SignUp extends Vue {
    registerData = {
        email: '',
        password: '',
        sex: '',
        age: '',
    };
    valid = true;
    mask = '##-##-####';
    sex = ['male', 'female'];
    emailRules = [
        v => !!v || 'E-mail is required',
        v => /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(v) || 'E-mail must be valid'
    ];
    passwordRules = {
        required: value => !!value || 'Required.',
        min: v => v.length >= 6 || 'Min 6 characters',
    };
    showPassword = false;

    @Prop(Function) changeComponent;
    @Action('Authorization/signUpAction') signUp;
    @Mutation clearErrorData;

    async onSubmit(){
        if ( this.$refs.form.validate() ) {
            this.signUp(this.registerData);
            // const auth = await this.$auth.login(this.email, this.password)
        }
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

    async register() {
        try {
            await this.$axios.post('register', {
                username: this.username,
                email: this.email,
                password: this.password
            })

            await this.$auth.loginWith('local', {
                data: {
                    email: this.email,
                    password: this.password
                },
            })

            this.$router.push('/')
        } catch (e) {
            this.error = e.response.data.message
        }
    }

    // beforeDestroy(){
    //     this.clearErrorData();
    // }
}

export default SignUp;
