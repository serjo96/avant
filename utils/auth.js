import jwtDecode from 'jwt-decode'
import Cookie from 'js-cookie'

const getQueryParams = () => {
	const params = {}
	window.location.href.replace(/([^(?|#)=&]+)(=([^&]*))?/g, ($0, $1, $2, $3) => {
		params[$1] = $3
	});
	return params
};

export const extractInfoFromHash = () => {
	if (process.server) return
	const { id_token, state } = getQueryParams()
	return {
		token: id_token,
		secret: state
	}
}

export const setToken = (token) => {
	if (process.server) return;
	window.localStorage.setItem('token', `Bearer ${token}`);
	// window.localStorage.setItem('user', JSON.stringify(jwtDecode(token)))
	Cookie.set('jwt', token)
};

export const setUser = (user) => {
	if (process.server) return;
	window.localStorage.setItem('user', JSON.stringify(user));
};

export const removeUser = () => {
	if (process.server) return;
	window.localStorage.removeItem('user');
};

export const unsetToken = () => {
	if (process.server) return
	window.localStorage.removeItem('token')
	window.localStorage.removeItem('user')
	window.localStorage.removeItem('secret')
	Cookie.remove('jwt')
	window.localStorage.setItem('logout', Date.now())
};

export const getTokenFromCookie = (req) => {
	if (process.server) return;
	if (!req.headers.cookie) return
	const jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('auth._token.local'))
	if (!jwtCookie) return
	const jwt = jwtCookie.split('%')[1];
	return jwtDecode(jwt)
};

export const getTokenFromLocalStorage = () => {
	if (process.server) return;
	return window.localStorage['auth._token.local'];
};

export const getUserFromLocalStorage = () => {
	if (process.browser) {
		return window.localStorage['user'];
	}
	return null;
};

export const setSecret = (secret) => window.localStorage.setItem('secret', secret);

export const checkSecret = (secret) => window.localStorage.secret === secret;
