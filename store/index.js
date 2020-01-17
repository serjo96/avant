import Vue from 'vue';
import Vuex, { Module } from 'vuex';
import Authorization from './authorization';

Vue.use(Vuex);

const store = new Vuex.Store({
	modules: {
		Authorization,
	}
});
