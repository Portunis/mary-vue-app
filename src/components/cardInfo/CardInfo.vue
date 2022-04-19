<template>
  <div class="card">
    <p class="card__title">Age</p>
    <div class="card__description">25 Years</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CardInfo",
});
</script>

<style lang="scss" scoped>
@import "../../assets/variables";
.card {
  max-height: 930px;
  max-width: 900px;
  background: #ffffff;

  box-shadow: 0 0 16px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  &__title {
    text-align: left;
    margin: 16px 16px;
    font-family: $poppins-font;
  }
  &__description {
    text-align: left;
    margin: 8px 16px;
    font-family: $poppins-font;
    font-weight: $bold-font-weight;
  }
}
</style>
