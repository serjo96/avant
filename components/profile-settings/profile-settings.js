import Vue from 'vue';
import Component from 'nuxt-class-component';
import { Prop } from "vue-property-decorator";
import {API_PATH} from "../../core/config";


@Component({
})
class ProfileSettings extends Vue {
	@Prop(Object) value;
	@Prop(Function) uploadImg;
	imageError = '';
	sex = ['male', 'female'];
	menu = false;

	get () {
		return this.value
	};

	set (value) {
		this.$emit('input', value)
	};

	save (date) {
		this.$refs.menu.save(date);
	}

	get image() {
		return this.value.photos.profilePic.url ? `${API_PATH}${this.value.photos.profilePic.url}` : this.value.profilepicture;
	}

	createBase64Img(file) {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => resolve(reader.result);
			reader.onerror = error => reject(error);
		});
	}

	async uploadFile(){
		this.imageError = '';
		const kbSizeLimit = 500000;
		const input = this.$refs.uploaderInput;
		const file = input.files[0];
		if ( file.size < kbSizeLimit ) {
			const base64 = await this.createBase64Img(file);
			this.uploadImg(base64);
		} else {
			this.imageError = 'File is too large. The maximum allowable size is 500KB'
		}
	}

}

export default ProfileSettings;
