<template>
    <v-form class="reset-password-form"
            ref="form"
            @keyup.native.enter="onSubmit"
    >
        <div class="reset-password-form__field">
            <v-text-field
                    name="newPassword"
                    label="new password"
                    solo
                    prepend-inner-icon="lock"
                    v-model="newPassword"
                    :append-icon="showPassword ? 'visibility' : 'visibility_off'"
                    :rules="[passwordRules.required, passwordRules.min]"
                    :type="showPassword ? 'text' : 'password'"
                    color="green"
                    dark
                    @click:append="showPassword = !showPassword"
            ></v-text-field>

            <div class="reset-password-form__field__password-status">
                <v-progress-linear
                        :value="progress()"
                        :color="color()"
                        height="5"
                ></v-progress-linear>
                <div v-if="newPassword.length >= 6"
                     class="reset-password-form__field__password-status-text"
                     :class="color() + '--text'"
                >
                    {{passwordStatus}}
                </div>
            </div>
        </div>

        <div class="reset-password-form__field">
            <v-text-field
                    name="confirmPassword"
                    label="Confirm password"
                    solo
                    prepend-inner-icon="lock"
                    v-model="confirmPassword"
                    :append-icon="showConfirmPassword ? 'visibility' : 'visibility_off'"
                    :rules="[passwordRules.required]"
                    :type="showConfirmPassword ? 'text' : 'password'"
                    color="green"
                    dark
                    @click:append="showConfirmPassword = !showConfirmPassword"
            ></v-text-field>
        </div>

        <v-btn
                block
                @click="onSubmit"
                color="blue-grey lighten-5"
                class="login__button mb-3">
            Change password
        </v-btn>
    </v-form>
</template>

<script src="./change-password.js"></script>
<style lang="stylus" src="./change-password.styl" scoped></style>
