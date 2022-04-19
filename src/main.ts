import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";
import UserProfileLayout from "@/layouts/UserProfileLayout.vue";
import LottieAnimation from "lottie-web-vue";

//fa icons
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas, faFontAwesome } from "@fortawesome/free-solid-svg-icons";

library.add(fas, faFontAwesome);

//
import "@/assets/scss/mixins.scss";

createApp(App)
  .use(router)
  .use(createPinia())
  .use(LottieAnimation)
  .component("fa", FontAwesomeIcon)
  .component("default-layout", DefaultLayout)
  .component("auth-layout", AuthLayout)
  .component("user-profile-layout", UserProfileLayout)
  .mount("#app");
