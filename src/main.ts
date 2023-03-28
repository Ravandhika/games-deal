import { createApp } from "vue";
import { createPinia } from "pinia";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

import "@/index.css";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
const pinia = createPinia();

library.add(faSun);
library.add(faMoon);

app.use(pinia);
app.use(router);
// ADD OTHER UTILITIES HERE
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
