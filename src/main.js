import { createApp } from "vue";
import "./style.css";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

import CountTo from "./plugins/CountTo";
import lazyload from "./plugins/lazyload/lazyload";
import permission from "./plugins/permission";
import overflow from "./plugins/TextOverflow";
import "./utils/request.js";
// import "../mock/index.js";

const pinia = createPinia();
const app = createApp(App);
app
  .use(router)
  .use(pinia)
  .use(CountTo)
  .use(lazyload, { default: "./src/assets/loading.svg" })
  .use(permission)
  .use(overflow)
  .mount("#app");

app.config.globalProperties.testmessage = "testttttt";
