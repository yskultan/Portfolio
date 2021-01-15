import Vue from 'vue'
import App from './App.vue'
import store from './store'


import { library } from "@fortawesome/fontawesome-svg-core";
import { faAddressCard, faMap, faChartBar, faLink} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faTwitter, faVk, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faAddressCard, faMap, faChartBar, faLink, faGithub, faTwitter, faVk, faInstagram);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
