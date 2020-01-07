<template>
  <v-app>
    <Header />
    <nuxt/>
    <Footer />
  </v-app>
</template>

<script>
  import Header from '~/components/header/header.vue';
  import Footer from '~/components/footer/footer.vue';

  export default {
    components: {
      Header,
      Footer
    }
  }
</script>

<style src="./global.styl" lang="stylus"></style>

