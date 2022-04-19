<template>
  <div class="achievement">
    <img
      class="achievement__image"
      :src="require(`@/assets/img/${achievement.image}`)"
    />
    <h4 class="achievement__title">{{ achievement.title }}</h4>
    <p class="achievement__description">
      {{ achievement.description }}
    </p>
    <p class="achievement__date">{{ achievement.date }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import AchievementModel from "@/models/AchievementModel";

export default defineComponent({
  name: "AchievementUser",
  props: {
    achievement: {
      type: Object as PropType<AchievementModel>,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
@import "../../assets/scss/mixins";
.achievement {
  &__title {
    @include fontTitle;
    text-align: center;
    color: #707070;
    margin: 2px auto;
  }
  &__description {
    color: #8d8d8d;
  }
  &__description {
    @include descriptionText;
    width: 157px;
    margin: 2px auto;
  }
  &__date {
    @include descriptionText;
    color: #aeaeae;
    margin: 2px auto;
  }
}
</style>
