<template>
  <div>
    <Header />
    <nuxt/>
    <Footer />
  </div>
</template>

<script>
  import Header from '../components/header/header.vue';
  import Footer from '~/components/footer/footer.vue';

  export default {
    components: {
      Header,
      Footer
    }
  }
</script>

<style src="./global.styl" lang="stylus"></style>

