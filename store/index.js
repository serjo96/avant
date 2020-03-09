import Vue from 'vue';
import Vuex from 'vuex';
import Authorization from './authorization';
import Global from './global';
import Chat from './chat';
import User from './user';

Vue.use(Vuex);

const store = new Vuex.Store({
	modules: {
		Authorization,
		Chat,
		Global,
		User
	}
});
