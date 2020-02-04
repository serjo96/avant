import Vue from 'vue';
import Vuex, { Module } from 'vuex';
import Authorization from './authorization';
import Global from './global';
import Chat from './chat';

Vue.use(Vuex);

const store = new Vuex.Store({
	modules: {
		Authorization,
		Chat,
		Global,
	}
});
