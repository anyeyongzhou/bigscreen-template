import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "/@/App.vue";
import router from "/@/router";
import { directive } from "/@/directive/index";
import ElementPlus from "element-plus";
import "/@/assets/scss/style.scss";
import "/@/assets/font/font.scss";
// import { jsonp } from "vue-jsonp";
import vue3SeamlessScroll from "vue3-seamless-scroll";

const app = createApp(App);

const pinia = createPinia();

directive(app);

// app.config.globalProperties.$jsonp = jsonp;

app
  .use(pinia)
  .use(router)
  .use(ElementPlus)
  .use(vue3SeamlessScroll)
  .mount("#app");
