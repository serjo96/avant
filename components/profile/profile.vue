<template>
    <v-dialog
            v-model="dialogModal"
            width="500"
    >
            <v-card class="profile-settings">
                <div class="profile-settings__section">

                    <div class="profile-settings__title primary--text">Account settings</div>
                    <div class="profile-info">
                        <div class="profile-info__data">
                            <div class="form-group">
                                <div class="form-group__label">Display name</div>

                                <div
                                        class="form-group__field"
                                >
                                    <v-text-field
                                            :value="name"
                                            dense
                                            autofocus
                                    ></v-text-field>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="form-group__label">Email: </div>

                                <div
                                        class="form-group__field"
                                >
                                    <v-text-field
                                            :value="email"
                                            dense
                                    ></v-text-field>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="form-group__label">Password: </div>

                                <div
                                        class="form-group__field"
                                >
                                    <v-text-field
                                            name="password"
                                            dense
                                            v-model="password"
                                            :append-icon="showPassword ? 'visibility' : 'visibility_off'"
                                            :type="showPassword ? 'text' : 'password'"
                                            @click:append="showPassword = !showPassword"
                                    ></v-text-field>
                                </div>
                            </div>
                        </div>
                        <div class="profile-avatar">
                            <v-avatar
                                color="primary white--text"
                                size="128"
                                class="profile-avatar__image"
                            >
                                CJ
                                <div class="profile-avatar__change-btn">
                                    <span>Edit avatar</span>
                                </div>
                            </v-avatar>
                        </div>
                    </div>
                </div>

                <v-card-actions class="profile-settings__footer">
                    <v-btn
                        text
                        large
                    >
                        Cancel
                    </v-btn>

                    <v-btn
                            large
                            color="primary"
                    >
                        Save
                    </v-btn>
                </v-card-actions>
            </v-card>
    </v-dialog>
</template>

<script src="./profile.js"></script>
<style lang="stylus" src="./profile.styl" scoped></style>
