<template>
    <div class="auth">
        <div class="login">
            <div class="login__title">Login</div>
            <v-form
                    ref="form"
            >
                <div class="login__inputs">
                    <div class="login__input">
                        <v-text-field
                                label="E-mail"
                                type="email"
                                required
                                color="light-blue darken-1"
                                prepend-inner-icon="email"
                                solo
                                dark
                        ></v-text-field>
                    </div>
                    <div class="login__input">
                        <v-text-field
                                name="password"
                                label="Password"
                                color="light-blue darken-1"
                                solo
                                dark
                                prepend-inner-icon="lock"
                        ></v-text-field>
                    </div>
                </div>

                <v-btn
                        color="light-blue darken-1"
                        class="login__button"
                        block
                >
                    Login
                </v-btn>


            </v-form>
            <button
                    class="login__reset-password-button"
            >
                Forgot your password?
            </button>

            <v-btn
                    key="signUp"
                    block
                    color="green"
            >Sign up
            </v-btn>
        </div>
    </div>
</template>

<script>
	export default {
		name: "sign-in"
	}
</script>

<style lang="stylus" src="./sign-in.styl" scoped></style>
