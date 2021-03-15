import { boot } from 'quasar/wrappers';
import axios, { AxiosInstance } from 'axios';
import { Notify } from 'quasar';
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
  }
}

const api = axios.create({ baseURL: 'https://api.example.com' });
api.interceptors.response.use(
  (response) => {
    if (response.status >= 400) {
      // some error happens
      Notify.create({
        color: 'negative',
        position: 'top',
        message: response.statusText,
        icon: 'report_problem',
      });
    }
    return response;
  },
  (error) => {
    Notify.create({
      color: 'negative',
      position: 'top',
      message: 'Some Error Happened',
      icon: 'report_problem',
    });
    return Promise.reject(error);
  }
);
export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios;
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api;
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
});

export { axios, api };
