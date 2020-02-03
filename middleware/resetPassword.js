export default async function ({ store, query, $axios }) {
	if (query.changePass && query.token) {
		try {
			const { data: { data } } = await $axios.post('/auth/email/validate-token' , {
				newPasswordToken: query.token
			});
			store.commit('authorization/changeResetPasswordComponent', data.validToken)
		} catch (error) {
			store.commit('global/addSnackBarMessage', {
				color: 'error',
				message: error.response.data.message,
				timeout: 0
			});
		}
	}
}
