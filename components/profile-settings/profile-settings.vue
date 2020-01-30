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
                                    v-model="profileData.name"
                                    dense
                                    autofocus
                            ></v-text-field>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="form-group__label">Email: </div>

                        <div class="form-group__field">
                            <v-text-field
                                    v-model="profileData.email"
                                    dense
                            ></v-text-field>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="form-group__label">Sex: </div>
                        <div class="form-group__field">
                            <v-select
                                    :items="sex"
                                    v-model="profileData.sex"
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
                                            v-model="profileData.birthdaydate"
                                            prepend-inner-icon="event"
                                            readonly
                                            v-on="on"
                                            dense
                                    ></v-text-field>
                                </template>
                                <v-date-picker
                                        ref="picker"
                                        v-model="profileData.birthdaydate"
                                        :max="new Date().toISOString().substr(0, 10)"
                                        min="1950-01-01"
                                        @change="save"
                                ></v-date-picker>
                            </v-menu>
                        </div>
                    </div>
                </div>
                <div class="profile-avatar">
                    <v-avatar
                            color="primary white--text"
                            size="128"
                            class="profile-avatar__image"
                    >
                        <img v-if="profileData.photos.profilePic.src" :src="profileData.photos.profilePic.src" alt="profile">
                        <div v-if="!profileData.photos.profilePic.src">{{profileData.name ? profileData.name[0] : profileData.email[0]}}</div>
                        <div class="profile-avatar__change-btn">
                            <span>Edit avatar</span>
                        </div>
                    </v-avatar>
                </div>
            </div>
        </div>

        <v-card-actions class="profile__footer">
            <v-btn
                    text
                    large
                    @click="closeModal()"
            >
                Cancel
            </v-btn>

            <v-btn
                    large
                    color="primary"
                    @click="closeModal(true)"
            >
                Save
            </v-btn>
        </v-card-actions>
    </div>
</template>

<script src="./profile-settings.js"></script>
<style lang="stylus" src="./profile-settings.styl" scoped></style>
