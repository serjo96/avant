<template>
    <div class="auth__form">
        <div class="reset-password">
            <div class="reset-password__title">Reset password</div>
            <component
                    :is="resetPasswordComponent"
            ></component>

            <div v-if="showResetConfirm" class="response-message">
                <div
                        :class="{
                        'response-message__text' : true,
                        'red darken-2': !responseMessage.status
                       }"
                >
                    {{responseMessage.message}}
                </div>
            </div>

            <v-btn
                    class="reset-password__buck-navigate white--text"
                    color="light-blue darken-1"
                    nuxt
                    to="sign-in"
            >
                <v-icon left dark>arrow_back_ios</v-icon>
                Buck to login
            </v-btn>
        </div>
    </div>
</template>

<script src="./resetPassword.js"></script>

<style lang="stylus" scoped>
    .reset-password {
        &__buck-navigate{
            margin-left: 0
        }

        &__title{
            font-weight: 200
            font-size: 2.5rem;
            letter-spacing: 0.05rem;
            margin-bottom: 10px
        }
    }

</style>
