<template>
  <div class="projects-card__item">
    <div class="projects-card__item-left">
      <img
        class="projects-card__item-image"
        :src="require(`../../assets/img/${dataProject.image}`)"
      />
      <div class="projects-card__item-info">
        <div class="projects-card__item-title">
          <p class="projects-card__item-name">{{ dataProject.title }}</p>
          <p
            class="projects-card__item-badge"
            :style="{
              background: dataProject.backgroundColor,
              color: dataProject.colorText,
            }"
          >
            {{ dataProject.badgeInfo }}
          </p>
        </div>
        <p class="projects-card__item-span">{{ dataProject.college }}</p>
      </div>
    </div>
    <div class="projects-card__item-buttons">
      <p class="projects-card__item-date">{{ dataProject.date }}</p>
      <div class="projects-card__item-button">
        <a class="button__name" :href="dataProject.buttonLink">Link</a>
        <fa class="button__link" icon="link" />
      </div>
      <div @click="aboutInfo" class="projects-card__item-button">
        <a class="button__name">Details</a>
        <fa class="button__link" icon="angle-right" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CardProject",
  props: {
    dataProject: {
      type: Object,
      required: true,
    },
  },
  methods: {
    /**
     * Передаем выбранный объект
     */
    aboutInfo() {
      this.$emit("projectInfo", this.dataProject);
    },
  },
});
</script>

<style lang="scss" scoped>
@import "../../assets/scss/mixins";
.projects-card {
  &__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 24px 32px 12px 42px;
  }
  &__item-title {
    display: flex;
    align-items: center;
    margin: 0 0 4px 0;
  }
  &__item-info {
    margin: 0 16px;
  }
  &__item-name {
    margin: 0;
    @include descriptionText;
    color: #212121;
    font-size: 15px;
    font-weight: 600;
  }
  &__item-badge {
    @include descriptionText;
    font-weight: 600;
    color: #3ddb86;
    padding: 2px 6px;
    background: rgba(61, 219, 134, 0.2);
    border-radius: 4px;
    margin: 0 12px;
  }
  &__item-span {
    @include descriptionText;
    text-align: left;
    margin: 0;
  }
  &__item-left {
    display: flex;
    align-items: center;
  }
  &__item-buttons {
    display: flex;
    align-items: center;
  }
  &__item-date {
    @include descriptionText;
    font-weight: 600;
    margin: 0 8px;
  }
  &__item-button {
    padding: 8px 12px;
    background: rgba(189, 189, 189, 0.15);
    border-radius: 6px;
    margin: 0 8px;
    color: #707070;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    font-family: $poppins-font;
    cursor: pointer;
  }
}
.button {
  &__name {
    margin: 0 10px 0 0;
    text-decoration: none;
    color: #707070;
  }
}
</style>
