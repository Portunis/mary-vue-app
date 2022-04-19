<template>
  <div class="chart-line">
    <h3 class="chart-line__title">Tool Comfort and Skill</h3>
    <div
      class="chart-bar-vertical"
      v-for="skillsItem in dataSkills"
      :key="skillsItem.id"
    >
      <h3 class="chart-title">{{ skillsItem.name }}</h3>
      <div class="chart-bar">
        <div
          class="chart-progress"
          :style="{ width: skillsItem.startStats + '%' }"
        >
          <p class="chart-progress__count">{{ skillsItem.startStats }}%</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SkillsUserModel from "@/models/SkillsUserModel";

export default defineComponent({
  name: "SkillsComponent",
  data() {
    return {
      dataSkills: [
        {
          id: 1,
          name: "Дальнобой",
          stats: 100,
          startStats: 0,
        },
        {
          id: 2,
          name: "Таксист",
          stats: 51,
          startStats: 0,
        },
        {
          id: 3,
          name: "Пожарный",
          stats: 70,
          startStats: 0,
        },
        {
          id: 4,
          name: "Строитель",
          stats: 52,
          startStats: 0,
        },
        {
          id: 5,
          name: "Бокс",
          stats: 90,
          startStats: 0,
        },
        {
          id: 6,
          name: "Бег",
          stats: 79,
          startStats: 0,
        },
        {
          id: 7,
          name: "Сила",
          stats: 36,
          startStats: 0,
        },
        {
          id: 8,
          name: "Зависимость",
          stats: 51,
          startStats: 0,
        },
      ] as SkillsUserModel[],
    };
  },
  created() {
    this.initChart();
  },
  methods: {
    initChart() {
      this.dataSkills.forEach((item) => {
        const interval = setInterval(() => {
          if (item.startStats < item.stats) {
            item.startStats += 1;
          } else {
            clearInterval(interval);
          }
        }, 20);
      });
    },
  },
});
</script>

<style lang="scss" scoped>
@import "../../assets/scss/mixins";
.chart-line {
  margin: 24px 24px;
  width: 333px;
  max-height: 400px;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  background: #fff;
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
.chart-bar-vertical {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0 16px 0 0;
}
.chart-bar {
  position: relative;
  width: 200px;
  height: 15px;
  background: #ebeeff;
  border-radius: 0 2px 2px 0;
  margin: 0 5px 0 16px;
  .chart-progress {
    position: absolute;
    width: 123px;
    height: 22px;
    left: 0;
    top: -3px;
    background: #1657ff;
    border-radius: 0 4px 4px 0;
    &__count {
      @include descriptionText;
      color: #fff;
      margin: 2px;
    }
  }
}
.chart-title {
  @include fontTitle;
  font-size: 12px;
  line-height: 18px;

  letter-spacing: 0.5px;

  color: #000000;
}
</style>
