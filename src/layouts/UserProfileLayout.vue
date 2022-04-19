<template>
  <LeftNavBar />

  <div class="container">
    <div class="top-bar">
      <h2 class="top-bar__title">Главная страница</h2>
      <div><UiButton class="button-exit" @click="logOut">Выйти</UiButton></div>
    </div>
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import LeftNavBar from "@/components/NavBar/LeftNavBar.vue";
import UiButton from "@/components/UI/button/UiButton.vue";
import { mapActions } from "pinia";
import { useAuthUserStore } from "@/store/authUser";

export default defineComponent({
  name: "UserProfileLayout",
  components: { LeftNavBar, UiButton },
  methods: {
    ...mapActions(useAuthUserStore, {
      logOut: "logoutUser",
    }),
  },
});
</script>
<style lang="scss">
@import "src/assets/variables";
.container {
  margin-left: 350px;
}
.top-bar {
  margin: 50px 25px 0 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__title {
    margin: 0;
    font-family: $poppins-font;
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 140%;
    /* or 39px */

    /* BG Text */

    color: #3c3f88;
  }
}
.button-exit {
  padding: 10px 15px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
