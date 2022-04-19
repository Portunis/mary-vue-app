<template>
  <div class="cards-hobbies">
    <h3 class="cards-hobbies__title">Additional Skills and Hobbies</h3>
    <div class="cards">
      <div
        class="card-hobbies"
        v-for="itemHobbies in hobbiesData"
        :key="itemHobbies.id"
      >
        <img :src="require(`@/assets/img/${itemHobbies.image}`)" />
        <p class="card-hobbies__title">{{ itemHobbies.title }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HobbiesInfo",
  data() {
    return {
      hobbiesData: [
        { id: 1, title: "Cricket", image: "cricket.png" },
        { id: 2, title: "Badminton", image: "badminton.png" },
        { id: 3, title: "Sketching", image: "sketching.png" },
        { id: 4, title: "Football", image: "football.png" },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../../assets/scss/mixins";
.cards {
  display: flex;
  justify-content: space-evenly;
}
.cards-hobbies {
  width: 970px;
  height: 289px;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  background: #fff;
  margin: 24px 24px;
  &__title {
    @include fontTitle;
    padding-top: 16px;
    padding-left: 16px;
    letter-spacing: 0.5px;

    color: #212121;
  }
}
.card-hobbies {
  border-radius: 12px;
  border: 1px solid #e6e6e6;
  width: 141px;
  height: 177px;
  padding: 17px 19px;
  margin: 0 12px 0 12px;
  &__title {
    @include descriptionText;
    margin: 35px auto 0 auto;
    color: #3c3f88;
    font-size: 15px;
  }
}
</style>
