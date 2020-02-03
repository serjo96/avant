<template>
    <Fragment>
        <v-form
                ref="form"
                v-model="valid"
                @keyup.native.enter="onSubmit"
        >
            <v-text-field
                    :rules="emailRules"
                    v-model="email"
                    label="E-mail"
                    type="email"
                    required
                    color="blue-grey lighten-4"
                    prepend-inner-icon="email"
                    solo
                    dark
            ></v-text-field>


            <v-btn
                    block
                    @click="onSubmit"
                    color="blue-grey lighten-5"
                    class="login__button mb-3">
                Reset password
            </v-btn>
        </v-form>

        <v-btn
                class="reset-password__buck-navigate white--text"
                color="light-blue darken-1"
                nuxt
                to="sign-in"
        >
            <v-icon left dark>arrow_back_ios</v-icon>
            Buck to login
        </v-btn>

    </Fragment>
</template>

<script src="./reset-password-email.js"></script>
<style lang="stylus" src="./reset-password-email.styl" scoped></style>
