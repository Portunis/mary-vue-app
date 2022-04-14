import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";
import UserProfileLayout from "@/layouts/UserProfileLayout.vue";
import LottieAnimation from "lottie-web-vue";
createApp(App)
  .use(router)
  .use(createPinia())
  .use(LottieAnimation)
  .component("default-layout", DefaultLayout)
  .component("auth-layout", AuthLayout)
  .component("user-profile-layout", UserProfileLayout)
  .mount("#app");
