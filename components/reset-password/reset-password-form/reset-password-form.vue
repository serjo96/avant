<template>
    <v-form class="reset-password-form">
        <div class="reset-password-form__field">
            <v-text-field
                    name="password"
                    label="Password"
                    solo
                    prepend-inner-icon="lock"
                    v-model="registerData.password"
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
                <div v-if="registerData.password.length >= 6"
                     class="reset-password-form__field__password-status-text"
                     :class="color() + '--text'"
                >
                    {{passwordStatus}}
                </div>
            </div>
        </div>
    </v-form>
</template>

<script src="./reset-password-form.js"></script>
<style lang="stylus" src="./reset-password-form.styl" scoped></style>
