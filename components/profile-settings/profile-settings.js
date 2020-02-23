import Vue from 'vue';
import Component from 'nuxt-class-component';
import { Prop } from "vue-property-decorator";
import {API_PATH} from "../../core/config";


@Component({
})
class ProfileSettings extends Vue {
	@Prop(Object) userData;
	@Prop(Function) setProfileData;
	@Prop(Function) uploadImg;
	@Prop(Function) removeAvatar;
	imageError = '';
	sex = ['male', 'female'];
	menu = false;

	changeProfileInput(key, val) {
		this.setProfileData({key, val});
	}

	save (date) {
		this.$refs.menu.save(date);
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
			this.changeProfileInput('avatar', base64);
		} else {
			this.imageError = 'File is too large. The maximum allowable size is 500KB'
		}
	}

}

export default ProfileSettings;
