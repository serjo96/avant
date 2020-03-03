<template>
    <div class="auth__form">
        <v-btn
                nuxt
                to="/"
                icon
                color="grey lighten-3"
        >
            <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <div class="login">
            <div class="login__title">Login</div>
            <v-form
                    ref="form"
                    v-model="valid"
                    @keyup.native.enter="onLogin"
            >
                <div class="login__inputs">
                    <div class="login__input">
                        <v-text-field
                                v-model="email"
                                :rules="emailRules"
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
                                @click:append="showPassword = !showPassword"
                                :type="showPassword ? 'text' : 'password'"
                                :rules="[passwordRules.required]"
                                v-model="password"
                                name="password"
                                label="Password"
                                color="light-blue darken-1"
                                solo
                                dark
                                prepend-inner-icon="lock"
                                :append-icon="showPassword ? 'visibility' : 'visibility_off'"
                        ></v-text-field>
                    </div>
                </div>

                <v-btn
                        @click="onLogin"
                        color="light-blue darken-1"
                        class="login__button white--text"
                        block
                >
                    Login
                </v-btn>


            </v-form>
            <nuxt-link
                    to="/auth/reset-password"
                    class="login__reset-password-button grey--text text--darken-5"
            >
                Forgot your password?
            </nuxt-link>

            <v-btn
                    key="signUp"
                    block
                    color="green"
                    class="white--text"
                    nuxt
                    to="sign-up"
                >Sign up
            </v-btn>

            <div class="response-message">
                <div
                        :class="{
                        'response-message__text' : true,
                        'red darken-2': !responseMessage.status
                       }"
                >
                    {{responseMessage.message}}
                </div>
                <button
                        v-if="responseMessage.confirm"
                        class="response-message__resend-confirm"
                        @click="resentConfirm"
                >
                    Resend confirm message?
                </button>
            </div>
        </div>
    </div>
</template>

<script src="./sign-in.js"></script>
<style src="./login.stylus" lang="stylus" scoped></style>
