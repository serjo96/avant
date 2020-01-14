import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader version "^2.1.1" ,
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import colors from "vuetify/es5/util/colors";
Vue.use(Vuetify);

export default ctx => {
	const vuetify = new Vuetify({
		theme: {
			dark: {
				background: colors.shades.white,
				primary: colors.lightBlue.accent2,
				...colors
			} // From 2.0 You have to select the theme dark or light here
		}
	})

	ctx.app.vuetify = vuetify
	ctx.$vuetify = vuetify.framework
}
