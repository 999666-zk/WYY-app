import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "@/assets/fonts/iconfont.css";
import "@/assets/commonts/commonts.css";
import "@/mobile/flexible";

import {
  NavBar,
  Tabbar,
  TabbarItem,
  Row,
  Col,
  Image,
  Cell,
  Icon,
  Search,
  List,
  Toast,
  Loading,
  Tag,
  PullRefresh,
} from "vant";
Vue.use(NavBar);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Row);
Vue.use(Col);
Vue.use(Image);
Vue.use(Cell);
Vue.use(Icon);
Vue.use(Search);
Vue.use(List);
Vue.use(Toast);
Vue.use(Loading);
Vue.use(Tag);
Vue.use(PullRefresh);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
