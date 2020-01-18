import Vue from 'vue';
import Component, {Getter} from 'nuxt-class-component';
import Header from '~/components/header/header.vue';
import Footer from '~/components/footer/footer.vue';
import Profile from "~/components/profile/profile.vue";
import "vuetify/src/components/VGrid/VGrid.sass";
import "vuetify/src/components/VGrid/_grid.sass";

@Component({
	components: {
		Header,
		Footer,
		Profile
	}
})
class Default extends Vue {
	showProfileSettings = false;
	@Getter('authorization/isAuthenticated') isAuthenticated;

	onShowProfileSettings() {
		this.showProfileSettings = true;
	}
}

export default Default;
