<template>
  <lottie-animation
    ref="anim"
    :animationData="require('@/assets/animationLottie/loading.json')"
    :loop="true"
  />
</template>

<script lang="ts">
import { LottieAnimation } from "lottie-web-vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "uiLoading",
  components: { LottieAnimation },
});
</script>

<style lang="scss" scoped>
.loader__title {
  p {
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: #272727;
    text-align: center;
  }
}
.lottie-animation-container {
  margin: 0 auto;
}
</style>
