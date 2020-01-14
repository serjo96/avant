import {Module, VuexModule, Mutation, Action, MutationAction} from 'vuex-module-decorators';
// import axios from 'axios';
// import { API_PATH } from "../Core/api_config";

@Module({ stateFactory: true })
class Register extends VuexModule {
    // form = {
    //     name: '',
    //     email: '',
    //     phone: '',
    //     agreement: true,
    // };
    // recaptchaToken = null;
    // smsCode = null;
    // smsCountdownTime = 0;
    // errors = [];
    // seconds = 0;
    // errorSmsCode = false;
    // step = 'form';
    // currentCountry = '';
    // smsResponse = {};
    //
    //
    // get isRuCountry() {
    //     return this.currentCountry === 'RU';
    // }
    //
    // @Mutation
    // SET_COUNTDOWN_TIME(time) {
    //     this.smsCountdownTime = time;
    // }
    //
    // @Mutation
    // SET_NAME(payload) {
    //     this.form.name = payload;
    // }
    //
    // @Mutation
    // SET_PHONE(payload) {
    //     this.form.phone = payload;
    // }
    //
    // @Mutation
    // SET_EMAIL(payload) {
    //     this.form.email = payload;
    // }
    //
    // @Mutation
    // SET_STEP(payload) {
    //     this.step = payload;
    // }
    //
    // @Mutation
    // SET_SECONDS(payload) {
    //     this.seconds = payload;
    // }
    //
    // @Mutation
    // EMPTY_ERRORS() {
    //     this.errors = [];
    // }
    //
    // @Mutation
    // ADD_ERROR(payload) {
    //     this.errors = [...this.errors, payload];
    // }
    //
    // @Mutation
    // SET_SMS(payload) {
    //     this.smsCode = payload;
    // }
    //
    // @Mutation
    // SET_ERROR_SMS(payload) {
    //     this.errorSmsCode = payload;
    // }
    //
    // @Mutation
    // SET_TOKEN(payload) {
    //     this.recaptchaToken = payload;
    // }
    //
    // @Mutation
    // setCurrentCountry(country) {
    //     this.currentCountry = country;
    // }
    //
    // @Mutation
    // setSmsResponse(payload){
	// 	this.smsResponse = payload;
    // }
    //
    // @Mutation
	// CLEAR_PHONE_NUMBER() {
    // 	this.form.phone = '';
	// }
    //
    // @Action
    // getPosition() {
    //     ymaps.ready( async ()=> {
    //         const geolocation = ymaps.geolocation;
    //
    //         try {
    //             const result = await geolocation.get({
    //                 provider: 'yandex',
    //                 mapStateAutoApply: true,
    //             });
    //             const {country_code} = result.geoObjects.get(0).properties.get('metaDataProperty').GeocoderMetaData.Address;
    //             this.context.commit('setCurrentCountry', country_code);
    //         } catch (err) {
    //             throw new Error(err);
    //         }
    //
    //     });
    // }
    //
    // @Action
    // validateBeforeSendSms() {
    //     this.context.commit('EMPTY_ERRORS');
    //     this.context.commit('SET_ERROR_SMS', false);
    //
    //     if (!validator.isEmail(this.form.email))
    //         this.context.commit('ADD_ERROR', {
    //             text: 'Введите верный email',
    //             fieldName: 'email',
    //         });
    //
    //     if (!validator.isByteLength(this.form.name, {min: 3, max: undefined})){
    //         this.context.commit('ADD_ERROR', {
    //             text:'Имя слишком короткое',
    //             fieldName: 'name'
    //         });
    //     }
    //
    //     if (!/\d{10,}/.test(this.form.phone)) {
    //         this.context.commit('ADD_ERROR', {
    //             text: 'Введите номер телефона в правильном формате',
    //             fieldName: 'phone',
    //         });
    //     }
    // }
    //
    // @Action
    // async initRecaptchaToken(vueContext) {
    //     const token = await vueContext.$recaptcha.execute('register');
    //     this.context.commit('SET_TOKEN', token);
    // }
    //
    // @Action
    // async sendRegisterRequest() {
    //     try {
    //         this.context.commit('EMPTY_ERRORS');
    //         await axios.post(`${API_PATH}/auth/users/`, {
    //             phone: this.form.phone,
    //             email: this.form.email,
    //             otp_code: this.smsCode,
    //             first_name: this.form.name,
    //             recaptcha: this.recaptchaToken
    //         });
    //         this.context.commit('SET_STEP', 'success');
    //     } catch (err) {
    //         if (err.response.data.non_field_errors
    //             && err.response.data.non_field_errors.includes("Убедитесь, что ввели правильный код.")) {
    //             this.context.commit('SET_ERROR_SMS', true);
    //         }
    //
    //         if(err.response.data.phone){
    //             if(Array.isArray(err.response.data.phone)){
    //                 err.response.data.phone.forEach((error) => {
    //                     this.context.commit('ADD_ERROR', error);
    //                 })
    //             }
    //             else if(typeof err.response.data.phone === 'object')
    //                 this.context.commit('ADD_ERROR', {
    //                     text: err.response.data.phone,
    //                     fieldName: phone
    //                 });
    //         }
    //     }
    // }
    //
    // @Action
    // async sendSmsRequest() {
    //     try {
    //         if (this.interval){
    //             return;
    //         }
    //
    //         const {data} = await axios.post(`${API_PATH}/auth/get_otp/`, {
    //             phone: this.form.phone,
    //             recaptcha: this.recaptchaToken
    //         });
    //         this.context.commit('setSmsResponse', data);
    //         this.context.commit('SET_COUNTDOWN_TIME', data.RESEND_TTL);
    //     } catch (err) {
    //         if(err.response.data.ttl){
    //             // this.context.commit('SET_SECONDS', err.response.data.ttl);
    //             this.context.commit('SET_COUNTDOWN_TIME', err.response.data.ttl);
    //             this.context.commit('SET_STEP', 'sms');
    //             this.context.commit('ADD_ERROR', {
    //                 text: "Вы исчерпали количество попыток. Попробуйте позже",
    //                 fieldName: 'sms'
    //             });
    //
    //         }
    //         else if(err.response.data.phone){
    //             this.context.commit('SET_STEP', 'form');
    //             this.context.commit('ADD_ERROR', {
    //                 text: err.response.data.phone[0],
    //                 fieldName: phone
    //             })
    //         }
    //     }
    //
    // }
    //
    // @Action
    // async getCode() {
    //     let seconds = this.smsResponse.RESEND_TTL ? this.smsResponse.RESEND_TTL : this.smsResponse.ttl;
    //     if (this.errors.length > 0){
    //         return;
    //     }
    //     await this.context.dispatch('sendSmsRequest');
	// 	this.context.commit('SET_COUNTDOWN_TIME', seconds);
	// 	this.context.commit('SET_STEP', 'sms');
    //
    // }
    //
    // @Action
	// async signIn(payload) {
    //     try {
    //         this.context.commit('EMPTY_ERRORS');
    //         await axios.post(`${API_PATH}/auth/token/login/`, {
    //             ...payload,
    //             recaptcha: this.recaptchaToken
    //         });
    //     } catch (err) {
    //         const errData = err.response.data;
    //         if( 'non_field_errors' in errData) {
    //             this.context.commit('ADD_ERROR', {
    //                 text: errData.non_field_errors[0],
    //                 fieldName: 'phone',
    //             });
    //             this.context.commit('ADD_ERROR', {
    //                 text: '',
    //                 fieldName: 'password',
    //             });
    //         } else {
    //             for ( let error in errData) {
    //                 this.context.commit('ADD_ERROR', {
    //                     text: errData[error][0],
    //                     fieldName: error,
    //                 });
    //             }
    //         }
    //     }
	// }

}

export default Register;
