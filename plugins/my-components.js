import Vue from 'vue';
import Container from '~/components/container/container.vue'

const components = { Container };

Object.entries(components).forEach(([name, component]) => {
	Vue.component(name, component)
});


// nuxt.config.js
export default {
	plugins: ['~plugins/my-components']
}
