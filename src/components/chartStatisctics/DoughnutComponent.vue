<template>
  <div class="chart-doughnut">
    <h3 class="chart-doughnut__title">Honors & Awards</h3>
    <div class="chart-body">
      <DoughnutChart :chartData="chartTask" :options="optionsChart" />
    </div>
    <div class="chart-doughnut__footer">
      <div v-for="item in dataChart" :key="item.id" class="info-badge">
        <div
          class="info-badge__header"
          :style="{ background: item.color }"
        ></div>
        <div class="info-badge__body">
          <p class="info-badge__title">{{ item.labels }}</p>
          <p class="info-badge__description">{{ item.data }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { DoughnutChart } from "vue-chart-3";

import { doughnutChart, doughnutOptions } from "@/charts/DoughnutConfig";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
export default defineComponent({
  name: "DoughnutComponent",
  components: { DoughnutChart },
  data() {
    return {
      chartTask: {} as Record<string, unknown>,
      optionsChart: {} as Record<string, unknown>,
      dataChart: [
        { id: 1, labels: "Certificates", data: 28, color: "#937BF5" },
        { id: 2, labels: "Trophies", data: 9, color: "#F97381" },
        { id: 3, labels: "Medals", data: 23, color: "#FFBB38" },
      ],
    };
  },
  created() {
    this.initChart();
  },
  methods: {
    initChart(): void {
      this.optionsChart = doughnutOptions;
      this.chartTask = doughnutChart;
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
</style>
