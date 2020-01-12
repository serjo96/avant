<template>
  <v-app dark>
    <Header :onShowProfileSettings="onShowProfileSettings" />
    <v-content>
      <nuxt/>
    </v-content>
    <Profile v-model="showProfileSettings" />
    <Footer />
  </v-app>
</template>

<script src="./default/default.js"></script>
<style src="./global.styl" lang="stylus"></style>

