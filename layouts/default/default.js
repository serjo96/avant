import Vue from 'vue';
import Component from 'nuxt-class-component';
import Header from '~/components/header/header.vue';
import Footer from '~/components/footer/footer.vue';
import Profile from "~/components/profile/profile.vue";


@Component({
	components: {
		Header,
		Footer,
		Profile
	}
})
class Default extends Vue {
	showProfileSettings = false;

	onShowProfileSettings() {
		this.showProfileSettings = true;
	}
}

export default Default;
