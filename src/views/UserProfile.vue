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
      <div class="achievements">
        <AchievementUser
          v-for="achievement in achievements"
          :key="achievement.id"
          :achievement="achievement"
        />
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
      achievements: [
        {
          id: 1,
          title: "Roller Skating Nationals",
          description: "Represented Delhi in Roller Skating Nationals ",
          date: "Jan 2011",
          image: "Rectangle30.png",
        },
        {
          id: 2,
          title: "Art Prefect",
          description: "Becam an Art-Prefect in Student Council",
          date: "Mar 2012",
          image: "startAchievement.png",
        },
        {
          id: 3,
          title: "First Startup",
          description: "Started my own Startup in 2nd year of college ",
          date: "Oct 2016",
          image: "startUpAchievement.png",
        },
        {
          id: 4,
          title: "UI/UX Designer",
          description: "Started my professional journey as a Designer",
          date: "Jun 2018",
          image: "designerAchievement.png",
        },
      ],
    };
  },
  created() {
    this.initChart();
  },
  methods: {
    ...mapActions(useAuthUserStore, {
      logOut: "logoutUser",
    }),
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
.wrapper__card-achievements {
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
</style>
