<template>
    <v-app dark>
        <Header :onShowProfileSettings="onShowProfileSettings" />
        <v-content>
            <nuxt/>
        </v-content>
    </v-app>
</template>

<script src="./chat"></script>

<style src="./global.scss" lang="scss"></style>
