export default function ({ redirect, $auth }) {
	if (!$auth.loggedIn) {
		return redirect('/auth/sign-in')
	}
}
