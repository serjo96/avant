<template>
    <div class="profile-settings">
        <div class="profile__tab-section">

            <div class="profile__tab-title primary--text">Account settings</div>
            <div class="profile-info">
                <div class="profile-info__data">
                    <div class="form-group">
                        <div class="form-group__label">Display name:</div>
                        <div class="form-group__field">
                            <v-text-field
                                    :value="userData.name"
                                    @input="changeProfileInput('name', $event)"
                                    dense
                                    autofocus
                                    outlined
                            ></v-text-field>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="form-group__label">Email: </div>

                        <div class="form-group__field">
                            <v-text-field
                                    :value="userData.email"
                                    @input="changeProfileInput('email', $event)"
                                    dense
                                    outlined
                            ></v-text-field>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="form-group__label">Sex: </div>
                        <div class="form-group__field">
                            <v-select
                                    :items="sex"
                                    :value="userData.sex"
                                    @input="changeProfileInput('sex', $event)"
                                    dense
                                    outlined
                            ></v-select>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="form-group__label">Birthday date: </div>
                        <div class="form-group__field">
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
                                            :value="userData.birthdaydate"
                                            prepend-inner-icon="event"
                                            v-on="on"
                                            readonly
                                            dense
                                            outlined
                                    ></v-text-field>
                                </template>
                                <v-date-picker
                                        ref="picker"
                                        :value="userData.birthdaydate"
                                        :max="new Date().toISOString().substr(0, 10)"
                                        @input="changeProfileInput('birthdaydate', $event)"
                                        min="1920-01-01"
                                        @change="save"
                                ></v-date-picker>
                            </v-menu>
                        </div>
                    </div>
                </div>
                <div class="profile-avatar">
                    <input accept="image/*"
                           id="upload-image"
                           class="profile-avatar__uploader"
                           type="file"
                           ref="uploaderInput"
                           @change="uploadFile"
                    >
                    <label for="upload-image">
                        <v-avatar
                                color="primary white--text"
                                size="128"
                                class="profile-avatar__image"
                        >
                                <img
                                        v-if="userData.avatar"
                                        :src="userData.avatar"
                                        alt="profile"
                                >
                                <div v-if="!userData.avatar">{{userData.name ? userData.name[0] : userData.email[0]}}</div>
                                <div class="profile-avatar__change-btn">
                                    <span>Edit avatar</span>
                                </div>
                        </v-avatar>
                    </label>
                    <div v-if="imageError" class="profile-avatar__error red--text lighten-1--text">{{imageError}}</div>

                    <div class="profile-avatar__remove">
                        <v-btn
                                small
                                outlined
                                color="error"
                                @click="removeAvatar">Delete photo</v-btn>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./profile-settings.js"></script>
<style lang="stylus" src="./profile-settings.styl" scoped></style>
