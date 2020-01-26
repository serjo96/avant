import Vue from 'vue';
import Component  from 'nuxt-class-component';
import { Fragment } from "vue-fragment";
import DescriptionSection from "~/components/home-page/description-section/description-section.vue";
import Advantages from "~/components/home-page/advantages/advantages.vue";
import VideoSection from "~/components/home-page/video-section/video-section.vue";
import ContactSection from "~/components/home-page/contact/contact-section.vue";
import InfoSection from "~/components/home-page/info-section/info-section.vue";
import MapSection from "~/components/home-page/map-section/map-section.vue";
import Social from "~/components/social/social.vue";
import AboutSection from "~/components/home-page/about-section/about-section.vue";
import StepSection from "~/components/home-page/steps-section/steps-section.vue";


@Component({
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
})
class Index extends Vue {

	mounted() {
		this.$nextTick(()=> {
			this.activeNavClass();
			window.addEventListener("scroll", this.activeNavClass)
		})
	}

	destroy() {
		window.removeEventListener("scroll", this.activeNavClass);
	}

	activeNavClass () {
		const fromTop = window.scrollY;
		const navBarLinks = document.querySelectorAll(".main-nav__link");
		navBarLinks.forEach(link => {
			const sectionID = link.hash.slice(1, link.length);
			const section = document.getElementById(sectionID);
			if (
				section && section.offsetTop <= fromTop &&
				section.offsetTop + section.offsetHeight > fromTop
			) {
				link.classList.add("main-nav__link--active");
			} else {
				link.classList.remove("main-nav__link--active");
			}
		});
	}
}

export default Index;
