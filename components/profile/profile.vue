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
                >

                    <v-tab>Profile settings</v-tab>
                    <v-tab>Password settings</v-tab>

                    <v-tab-item eager class="profile__tab-content">
                        <ProfileSettings></ProfileSettings>
                    </v-tab-item>

                    <v-tab-item>
                        <PasswordSettings :userEmail="user.email"></PasswordSettings>
                    </v-tab-item>
                </v-tabs>

            </v-card>
    </v-dialog>
</template>

<script src="./profile.js"></script>
<style lang="stylus" src="./profile.styl"></style>
