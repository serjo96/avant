<template>
  <Fragment>
    <DescriptionSection />
    <Advantages />
    <AboutSection />
    <StepSection></StepSection>
<!--    <VideoSection />-->

<!--    <InfoSection />-->
    <ContactSection />
    <MapSection />
    <Social />
  </Fragment>
</template>

<script>
import {Fragment} from "vue-fragment";
import DescriptionSection from "~/components/home-page/description-section/description-section.vue";
import Advantages from "~/components/home-page/advantages/advantages.vue";
import VideoSection from "~/components/home-page/video-section/video-section.vue";
import ContactSection from "~/components/home-page/contact/contact-section.vue";
import InfoSection from "~/components/home-page/info-section/info-section.vue";
import MapSection from "~/components/home-page/map-section/map-section.vue";
import Social from "~/components/social/social.vue";
import AboutSection from "~/components/home-page/about-section/about-section.vue";
import StepSection from "~/components/home-page/steps-section/steps-section.vue";

export default {
  components: {
    Fragment,
    DescriptionSection,
    Advantages,
    VideoSection,
    ContactSection,
    InfoSection,
    MapSection,
    Social,
    AboutSection,
    StepSection
  }
}
</script>

<style scoped></style>

