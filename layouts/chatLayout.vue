<template>
    <v-app dark>
        <Header :onShowProfileSettings="onShowProfileSettings" />
        <v-content>
            <nuxt/>
        </v-content>
        <Profile
                v-if="isAuthenticated && showProfileSettings"
                v-model="showProfileSettings"
        />
    </v-app>
</template>

<script src="./chat"></script>

<style src="./global.scss" lang="scss"></style>
