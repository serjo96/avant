import axios from 'axios';
import { API_PATH } from "~/core/config";
import { getTokenFromLocalStorage, getUserFromLocalStorage } from "~/utils/auth";

export default async function ({ store, $axios }) {
	const token = getTokenFromLocalStorage();
	axios.defaults.baseURL = API_PATH;

	if( token ) {
		$axios.setHeader('Authorization', token);
		axios.defaults.headers.common['Authorization'] = token;
	}

	if (getUserFromLocalStorage() ) {
		store.commit('user/setUser', JSON.parse(getUserFromLocalStorage()))
	}

}
