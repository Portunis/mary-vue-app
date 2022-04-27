<template>
  <div class="wrapper">
    <div class="wrapper__card-info">
      <div class="info">
        <h2 class="info__title">Привет, я Чопик</h2>
        <img class="info__image" src="../assets/img/Frame.png" />
        <p class="info__description">
          Я помогу тебе освоить данную систему. Она позволяет легко и быстро
          выполнять ряд функций которые ранее требовали больше времени. Следуй
          указаниям и в конце обязательно дай обратную связь, мне важно знать
          как тебе данная платформа.
        </p>

        <p class="info-badge">
          В дальнейшем здесь будет информация о твоем персонаже
        </p>
      </div>
    </div>

    <div class="wrapper__card wrapper__card-chart">
      <h3 class="wrapper__card-title">Professional Journey</h3>

      <div class="chart-body">
        <LineChart
          :height="230"
          :chartData="chartTask"
          :options="optionsChart"
        />
      </div>
    </div>
    <div class="wrapper__card wrapper__card-achievements">
      <h3 class="wrapper__card-title">Personal Journey</h3>

      <div v-if="achievements.achievements?.length" class="achievements">
        <AchievementUser
          v-for="achievement in achievements.achievements"
          :key="achievement.id"
          :achievement="achievement"
        />
      </div>
      <div v-if="!achievements.achievements?.length" class="achievements">
        <div v-for="achievementLoader in 5" :key="achievementLoader">
          <div class="achievement">
            <div class="achievement__image"></div>
            <h4 class="achievement__title"></h4>
          </div>
        </div>
      </div>
    </div>
    <CardInfo />
    <CardInfo />
    <CardInfo />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { LineChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";
import { lineChart, lineOptions } from "@/charts/LineConfig";

import { mapActions } from "pinia";
import { useAuthUserStore } from "@/store/authUser";
import AchievementUser from "@/components/achievement/AchievementUser.vue";
import CardInfo from "@/components/cardInfo/CardInfo.vue";
import User from "@/classes/UserClass";

import AchievementModel from "@/models/AchievementModel";

Chart.register(...registerables);

export default defineComponent({
  components: {
    CardInfo,
    AchievementUser,
    LineChart,
  },
  data() {
    return {
      chartBar: {} as Record<string, unknown>,
      chartTask: {} as Record<string, unknown>,
      optionsChart: {} as Record<string, unknown>,
      achievements: {} as AchievementModel,
    };
  },
  created() {
    this.initChart();
    this.getAchievements();
  },
  methods: {
    ...mapActions(useAuthUserStore, {
      logOut: "logoutUser",
    }),
    /**
     * Получаем достижения пользователя
     */
    getAchievements() {
      const achievement = new User();
      achievement.getUserAchievements().then((item: any) => {
        this.achievements = item;
        console.log(this.achievements);
      });
    },
    /**
     * Подгружаем график
     */
    initChart(): void {
      this.optionsChart = lineOptions;
      this.chartTask = lineChart;
    },
  },
});
</script>
<style lang="scss" scoped>
@import "../assets/variables";
@import "../assets/scss/mixins";
.chart-body {
  position: relative;
  width: 900px;
}
.wrapper {
  margin: 70px 24px;
  display: grid;
  grid-column-gap: 35px;
  &__card-title {
    @include fontTitle;
    padding: 16px 16px 8px 16px;
    margin: 0;
  }
  &__card-info {
    grid-area: 1 / 1 / 3 / 2;
    width: 425px;
    height: 611px;
    background: linear-gradient(101.84deg, #5c24fc 2.78%, #9d7aff 98.95%);
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.15);
    border-radius: 12px;
  }
  &__card {
    max-height: 300px;
    width: 900px;
    background: #ffffff;
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.15);
    border-radius: 12px;
    margin: 0 0 24px 0;
  }
}
.wrapper__card-chart {
  grid-area: 2 / 2 / 3 / 4;
  height: 300px;
}
w .wrapper__card-achievements {
  grid-area: 1 / 2 / 2 / 4;
  height: 282px;
}

.info {
  &__title {
    font-family: $poppins-font;
    font-weight: $bold-font-weight;
    color: #fff;
    font-size: 28px;
  }
  &__image {
    width: 250px;
  }
  &__description {
    color: #fff;
    font-family: $poppins-font;
    width: 300px;
    margin: 10px auto;
  }
}
.achievements {
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  padding: 47px 16px 16px 16px;
}

.info-badge {
  padding: 15px;
  background: #a0aec0;
  border-radius: 10px;
  color: #fff;
  width: 300px;
  margin: 10px auto;
}

.achievement {
  border: none;
  &__image {
    border-radius: 10px;
    width: 70px;
    height: 70px;
    @include loaderPlaceholder;
  }
  &__title {
    margin: 10px auto;
    width: 50px;
    height: 10px;
    border-radius: 4px;
    @include loaderPlaceholder;
  }
}
@keyframes wave-lines {
  @include animationLoadPlaceholder;
}
</style>
