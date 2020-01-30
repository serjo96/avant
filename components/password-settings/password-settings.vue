<template>
    <div class="password-settings">
        <div class="profile__tab-section">

            <div class="profile__tab-title primary--text">Account settings</div>

            <div class="form-group">
                <div class="form-group__label">Password: </div>

                <div class="form-group__field">
                    <v-text-field
                            name="password"
                            dense
                            v-model="newPassword"
                            :append-icon="showPassword ? 'visibility' : 'visibility_off'"
                            :type="showPassword ? 'text' : 'password'"
                            @click:append="showPassword = !showPassword"
                    ></v-text-field>
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

<script src="./password-settings.js"></script>
<style lang="stylus" src="./password-settings.styl" scoped></style>
