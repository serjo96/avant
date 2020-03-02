import {getTokenFromLocalStorage, getUserFromLocalStorage} from "../utils/auth";
import axios from 'axios';
import {API_PATH} from "../core/config";

export default async function ({ store}) {
	const token = getTokenFromLocalStorage();
	if( token ) {
		// $axios.setHeader('Authorization', token);
		axios.defaults.baseURL = API_PATH;
		axios.defaults.headers.common['Authorization'] = token;
	}

	if (getUserFromLocalStorage() ) {
		store.commit('user/setUser', JSON.parse(getUserFromLocalStorage()))
	}

}
