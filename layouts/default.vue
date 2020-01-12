<template>
  <v-app dark>
    <Header />
    <v-content>
      <nuxt/>
    </v-content>
    <Profile />
    <Footer />
  </v-app>
</template>

<script>
  import Header from '~/components/header/header.vue';
  import Footer from '~/components/footer/footer.vue';
  import Profile from "~/components/profile/profile.vue";

  export default {
    components: {
      Header,
      Footer,
      Profile
    }
  }
</script>

<style src="./global.styl" lang="stylus"></style>

