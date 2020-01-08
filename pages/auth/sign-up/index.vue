<template>
    <div class="auth__form">
        <v-btn
                nuxt
                to="/"
                icon
                color="black"
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
                        v-model="email"
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
                            v-model="password"
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
                        <div v-if="password.length >= 6"
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
                        lrequired
                        solo
                        dark
                ></v-select>


                <v-select
                        label="age"
                        :items="ages"
                        lrequired
                        solo
                        dark
                ></v-select>

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
        </div>
    </div>
</template>

<script src="./signUp.js"></script>
<style src="./sign-up.stylus" lang="stylus" scoped></style>
