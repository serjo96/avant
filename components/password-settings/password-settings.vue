<template>
    <div class="password-settings">
        <div class="profile__tab-section">

            <div class="profile__tab-title primary--text">Password settings</div>

            <div class="form-group">
                <div class="form-group__label">Current password: </div>

                <div class="form-group__field">
                    <v-text-field
                            name="currentPassword"
                            dense
                            v-model="value.currentPassword"
                            :append-icon="showPassword ? 'visibility' : 'visibility_off'"
                            :type="showOldPassword ? 'text' : 'password'"
                            @click:append="showOldPassword = !showOldPassword"
                    ></v-text-field>
                </div>
            </div>

            <div class="form-group">
                <div class="form-group__label">New password: </div>

                <div class="form-group__field">
                    <v-text-field
                        name="newPassword"
                        dense
                        v-model="value.newPassword"
                        :append-icon="showPassword ? 'visibility' : 'visibility_off'"
                        :type="showPassword ? 'text' : 'password'"
                        color="green"
                        @click:append="showPassword = !showPassword"
                ></v-text-field>

                    <div class="sign-up__password-status">
                        <v-progress-linear
                                :value="progress()"
                                :color="color()"
                                height="5"
                        ></v-progress-linear>
                        <div v-if="value.newPassword.length >= 6"
                             class="sign-up__password-status-text"
                             :class="color() + '--text'"
                        >
                            {{passwordStatus}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./password-settings.js"></script>
<style lang="stylus" src="./password-settings.styl" scoped></style>
