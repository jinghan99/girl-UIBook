import Vue from 'vue';
import Vant from 'vant';
import { post, fetch } from './plugins/axios';
import App from './App.vue';
import router from './router';
import 'vant/lib/index.css';
import filters from './common/filters';

// 定义全局过滤器
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));


Vue.use(Vant);
// 定义全局变量
Vue.prototype.$post = post;
Vue.prototype.$fetch = fetch;

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
