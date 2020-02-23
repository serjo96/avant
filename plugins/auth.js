import {getTokenFromLocalStorage, getUserFromLocalStorage} from "../utils/auth";

export default async function ({$axios, store}) {
	const token = getTokenFromLocalStorage();
	if( token ) {
		$axios.setHeader('Authorization', token);
	}

	if (getUserFromLocalStorage() ) {
		store.commit('user/setUser', JSON.parse(getUserFromLocalStorage()))
	}

}
