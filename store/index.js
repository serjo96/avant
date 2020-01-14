import Vue from 'vue';
import Vuex, { Module } from 'vuex';
import Register from "./register";


Vue.use(Vuex);

const store = new Vuex.Store({
	modules: {
		Register,
	}
});
