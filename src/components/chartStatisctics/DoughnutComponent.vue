<template>
  <div class="chart-doughnut">
    <h3 class="chart-doughnut__title">Honors & Awards</h3>
    <div class="chart-body">
      <DoughnutChart
        v-if="dataChart.achievements"
        :chartData="chartTask"
        :options="optionsChart"
      />
      <div v-if="!dataChart.achievements" class="chart-loader"></div>
    </div>

    <div v-if="dataChart.achievements">
      <div class="chart-doughnut__footer">
        <div
          v-for="item in dataChart.achievements"
          :key="item.id"
          class="info-badge"
        >
          <div
            class="info-badge__header"
            :style="{ background: item.color }"
          ></div>
          <div class="info-badge__body">
            <p class="info-badge__title">{{ item.name }}</p>
            <p class="info-badge__description">{{ item.count }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!dataChart.achievements">
      <div class="chart-doughnut__footer">
        <div class="info-badge__loader" v-for="n in 3" :key="n">
          <div class="info-badge__header-loader"></div>
          <div class="info-badge__body-loader">
            <div class="info-badge__title-loader"></div>
            <div class="info-badge__description-loader"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { DoughnutChart } from "vue-chart-3";
import AwardsModel from "@/models/AwardsModel";
import { doughnutOptions, doughnutData } from "@/charts/DoughnutConfig";
import { Chart, registerables } from "chart.js";
import User from "@/classes/UserClass";
Chart.register(...registerables);
export default defineComponent({
  name: "DoughnutComponent",
  components: { DoughnutChart },
  data() {
    return {
      chartTask: {} as Record<string, unknown>,
      optionsChart: {} as Record<string, unknown>,
      dataChart: {} as AwardsModel,
    };
  },
  created() {
    this.getAwards();
    this.initChart();
  },
  methods: {
    getAwards(): void {
      const userAwards = new User();
      userAwards.getUserAwards().then((user_awards) => {
        this.dataChart = user_awards as AwardsModel;
        this.chartTask = doughnutData(this.dataChart);
      });
    },
    initChart(): void {
      this.optionsChart = doughnutOptions;
    },
  },
});
</script>

<style lang="scss" scoped>
@import "../../assets/scss/mixins";
.chart-doughnut {
  margin: 24px 24px;
  width: 333px;

  box-shadow: 0 0 16px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  background: #fff;
}
.chart-body {
  width: 162px;
  height: 162px;
  margin: 16px 0 24px 16px;
}
.chart-doughnut {
  &__title {
    @include fontTitle;
    padding-top: 16px;
    padding-left: 16px;
    letter-spacing: 0.5px;

    color: #212121;
  }
  &__footer {
    display: flex;
    justify-content: space-around;
    margin: 0 16px;
  }
}
.chart-loader {
  width: 162px;
  height: 162px;
  border-radius: 50%;
  margin: 4px;
  @include loaderPlaceholder;
}
.info-badge__loader {
  width: 92px;
  height: 90px;
  margin-bottom: 16px;
  border-radius: 8px;
  padding: 8px;
  box-sizing: border-box;
  @include loaderPlaceholder;
}
.info-badge__header-loader {
  border-radius: 4px 4px 0 0;
  width: 76px;
  height: 17px;
  margin: 0 auto;
  @include loaderPlaceholder;
}
.info-badge__title-loader {
  margin: 4px 0 4px 0;
  width: 50px;
  height: 12px;
  border-radius: 4px;
  @include loaderPlaceholder;
}
.info-badge__description-loader {
  margin-top: 10px;
  width: 27px;
  height: 27px;
  border-radius: 4px;
  @include loaderPlaceholder;
}
.info-badge {
  width: 92px;
  height: 90px;
  margin-bottom: 16px;
  background: #ffffff;

  border: 1px solid #e6e6e6;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 8px;
  &__header {
    background: #977df5;
    border-radius: 4px 4px 0 0;
    width: 76px;
    height: 17px;
  }
  &__body {
    @include fontTitle;
    color: #000000;
  }
  &__title {
    @include fontTitle;
    font-size: 12px;

    margin: 4px 0 4px 0;
    letter-spacing: 0.5px;

    color: #000000;
  }
  &__description {
    margin: 0;
    font-family: $poppins-font;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 27px;
    text-align: left;
    color: #000000;
  }
}
@keyframes wave-lines {
  @include animationLoadPlaceholder;
}
</style>
