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

    </Fragment>
</template>

<script src="./reset-password-email.js"></script>
<style lang="stylus" src="./reset-password-email.styl" scoped></style>
