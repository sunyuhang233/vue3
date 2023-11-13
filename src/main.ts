import "element-plus/dist/index.css";
import "normalize.css";
import "@/assets/css/index.scss";
import { createApp } from "vue";

import "virtual:svg-icons-register";

import "@/icons/iconfont/iconfont";
import SvgIcon from "@/components/svg-icon";
import App from "./App.vue";
import router from "./router";
import registerIcons from "./global/register-icons";
import "virtual:svg-icons-register";
import "./permission";
import registerStore from "./stores";
import i18n from "./i18n";
const app = createApp(App);

app.use(registerStore);
app.use(router);
app.use(registerIcons);
app.use(SvgIcon);
app.use(i18n);

app.mount("#app");
