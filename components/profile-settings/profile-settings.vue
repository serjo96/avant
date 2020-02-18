<template>
    <div class="profile-settings">
        <div class="profile__tab-section">

            <div class="profile__tab-title primary--text">Account settings</div>
            <div class="profile-info">
                <div class="profile-info__data">
                    <div class="form-group">
                        <div class="form-group__label">Display name</div>
                        <div class="form-group__field">
                            <v-text-field
                                    v-model="value.name"
                                    dense
                                    autofocus
                            ></v-text-field>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="form-group__label">Email: </div>

                        <div class="form-group__field">
                            <v-text-field
                                    v-model="value.email"
                                    dense
                            ></v-text-field>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="form-group__label">Sex: </div>
                        <div class="form-group__field">
                            <v-select
                                    :items="sex"
                                    v-model="value.sex"
                                    dense
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
                                            v-model="value.birthdaydate"
                                            prepend-inner-icon="event"
                                            v-on="on"
                                            readonly
                                            dense
                                    ></v-text-field>
                                </template>
                                <v-date-picker
                                        ref="picker"
                                        v-model="value.birthdaydate"
                                        :max="new Date().toISOString().substr(0, 10)"
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
                                        v-if="value.profilepicture"
                                        :src="value.profilepicture"
                                        alt="profile"
                                >
                                <div v-if="!value.profilepicture">{{value.name ? value.name[0] : value.email[0]}}</div>
                                <div class="profile-avatar__change-btn">
                                    <span>Edit avatar</span>
                                </div>
                        </v-avatar>
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./profile-settings.js"></script>
<style lang="stylus" src="./profile-settings.styl" scoped></style>
