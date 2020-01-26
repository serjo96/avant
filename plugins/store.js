import { getModule } from 'vuex-module-decorators'
import Authorization from '~/store/authorization'

let authStore;

export const storeInitializer = ctx => {
	authStore = getModule(Authorization, ctx.store);
	new Authorization(ctx);
	authStore.$auth = ctx.$auth;
	authStore.$router = ctx.$router;
	authStore.$axios = ctx.$axios;

};

export default storeInitializer

export { authStore }
