import Vue from 'vue';
import Component from 'nuxt-class-component';
import { Prop } from "vue-property-decorator";


@Component({
})
class ProfileSettings extends Vue {
	@Prop(Object) value;

	get () {
		return this.value
	};

	set (value) {
		this.$emit('input', value)
	};

	save (date) {
		this.$refs.menu.save(date);
	}

	convertDate(val) {
		console.log(val);
	}

	sex = ['male', 'female'];
	menu = false;

}

export default ProfileSettings;
