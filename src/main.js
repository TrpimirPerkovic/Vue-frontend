import { createApp } from "vue";

import App from "./App.vue";
import NavBar from "./components/NavBar.vue";
import HelloWorld from "./components/HelloWorld";
import router from "./router";
const app = createApp(App);
app.component("hello-world", HelloWorld);
app.component("nav-bar", NavBar);
app.use(router);
app.mount("#app");
