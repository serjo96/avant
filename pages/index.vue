<template>
  <div>
    <DescriptionSection />
    <Advantages />

<!--    <VideoSection />-->

<!--    <InfoSection />-->
    <ContactSection />

  </div>
</template>

<script>

import DescriptionSection from "~/components/home-page/description-section/description-section.vue";
import Advantages from "~/components/home-page/advantages/advantages.vue";
import VideoSection from "~/components/home-page/video-section/video-section.vue";
import ContactSection from "~/components/home-page/contact/contact-section.vue";
import InfoSection from "~/components/home-page/info-section/info-section.vue";

export default {
  components: {
    DescriptionSection,
    Advantages,
    VideoSection,
    ContactSection,
    InfoSection,
  }
}
</script>

<style scoped></style>

