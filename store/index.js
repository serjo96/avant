import Vue from 'vue';
import Vuex, { Module } from 'vuex';
import Authorization from './authorization';
import global from './global';

Vue.use(Vuex);

const store = new Vuex.Store({
	modules: {
		Authorization,
		global,
	}
});
