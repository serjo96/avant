import Vue from 'vue';
import Component from 'nuxt-class-component';
import {Prop} from "vue-property-decorator";


@Component({
})
class PasswordSettings extends Vue {
	@Prop(Object) value;
	showPassword = false;

	get () {
		return this.value
	};

	set (value) {
		this.$emit('input', value)
	};

	save (date) {
		this.$refs.menu.save(date);
	}
}

export default PasswordSettings;
