export default function ({ store, redirect }) {
	store.commit('authorization/clearResponseData')
}
