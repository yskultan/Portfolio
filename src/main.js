import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueAnalytics from 'vue-analytics';


import { library } from "@fortawesome/fontawesome-svg-core";
import { faAddressCard, faHome, faFileArchive, faLink} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faTelegram, faVk, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faAddressCard, faHome, faFileArchive, faLink, faGithub, faTelegram, faVk, faInstagram);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false

Vue.use(VueAnalytics, {
  id: 'G-NZ0RB6XGN9'
});

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
