<template>
    <v-dialog
            v-model="dialogModal"
            width="500"
    >
            <v-card
                    class="profile"
                    min-height="540"
            >
                <v-tabs
                        background-color="transparent"
                        color="basil"
                        grow
                        show-arrows
                >
                    <v-tab
                            id="profileSettings"
                            active-class="profile__tab-trigger"
                            @click="setCurrentTabName"
                    >Profile settings</v-tab>
                    <v-tab
                            id="passwordSettings"
                            active-class="profile__tab-trigger"
                            @click="setCurrentTabName"
                    >Password settings</v-tab>

                        <v-tab-item eager class="profile__tab-content">
                            <ProfileSettings
                                    :uploadImg="uploadImg"
                                    :removeAvatar="removeAvatar"
                                    :userData="user"
                                    :setProfileData="setProfileData"
                            ></ProfileSettings>
                        </v-tab-item>

                        <v-tab-item>
                            <PasswordSettings
                                    v-model="passwordSettings.data"
                            ></PasswordSettings>
                        </v-tab-item>

                </v-tabs>
                <v-card-actions class="profile__footer">
                    <v-btn
                            text
                            large
                            @click="closeModal()"
                    >
                        Cancel
                    </v-btn>

                    <v-btn
                            tile
                            large
                            depressed
                            color="primary"
                            @click="closeModal(true)"
                    >
                        Save
                    </v-btn>
                </v-card-actions>
            </v-card>
    </v-dialog>
</template>

<script src="./profile.js"></script>
<style lang="stylus" src="./profile.styl"></style>
