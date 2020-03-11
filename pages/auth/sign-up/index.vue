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
        <div class="sign-up">
            <div class="sign-up__header">
                <div class="sign-up__header-title">Hello there!</div>
                <div class="sign-up__header-subtitle">We're almost done. Before using our services you need to create an account.</div>
            </div>


            <v-form
                    ref="form"
                    v-model="valid"
            >

                <v-text-field
                        v-model="registerData.email"
                        :rules="emailRules"
                        label="E-mail"
                        type="email"
                        required
                        solo
                        prepend-inner-icon="email"
                        color="green"
                        dark
                ></v-text-field>

                <div class="sign-up__password">
                    <v-text-field
                            name="password"
                            label="Password"
                            solo
                            prepend-inner-icon="lock"
                            hint="Min 6 characters"
                            persistent-hint
                            v-model="registerData.password"
                            :append-icon="showPassword ? 'visibility' : 'visibility_off'"
                            :rules="[passwordRules.required, passwordRules.min]"
                            :type="showPassword ? 'text' : 'password'"
                            color="green"
                            dark
                            @click:append="showPassword = !showPassword"
                    ></v-text-field>

                    <div class="sign-up__password-status">
                        <v-progress-linear
                                :value="progress()"
                                :color="color()"
                                height="5"
                        ></v-progress-linear>
                        <div v-if="registerData.password.length >= 6"
                             class="sign-up__password-status-text"
                             :class="color() + '--text'"
                        >
                            {{passwordStatus}}
                        </div>
                    </div>

                </div>

                <v-select
                        label="sex"
                        :items="sex"
                        v-model="registerData.sex"
                        solo
                        dark
                ></v-select>


                <v-menu
                        ref="menu"
                        v-model="menu"
                        :close-on-content-click="false"
                        transition="scale-transition"
                        offset-y
                        min-width="290px"
                >
                    <template v-slot:activator="{ on }">
                        <v-text-field
                                v-model="registerData.birthdaydate"
                                label="Birthday date"
                                prepend-inner-icon="event"
                                readonly
                                v-on="on"
                                solo
                                dark
                        ></v-text-field>
                    </template>
                    <v-date-picker
                            ref="picker"
                            v-model="registerData.birthdaydate"
                            :max="new Date().toISOString().substr(0, 10)"
                            min="1950-01-01"
                            @change="save"
                    ></v-date-picker>
                </v-menu>

                <v-btn
                        block
                        @click="onSubmit"
                        color="success"
                >
                    SignUp
                </v-btn>
            </v-form>
            <v-btn
                    block
                    color="light-blue darken-1"
                    nuxt
                    class="my-3"
                    to="sign-in"
            >
                Login
            </v-btn>

            <div
                    v-if="responseMessage.message"
                    class="response-message">
                <div
                        :class="{
                        'response-message__text' : true,
                        'red darken-2': !responseMessage.success
                       }"
                >
                    {{responseMessage.message}}
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./signUp.js"></script>
<style src="./sign-up.stylus" lang="stylus" scoped></style>
