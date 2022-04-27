<template>
  <div class="chart-line">
    <h3 class="chart-line__title">Tool Comfort and Skill</h3>
    <div v-if="user_skills.skills?.length">
      <div
        class="chart-bar-vertical"
        v-for="skillsItem in user_skills.skills"
        :key="skillsItem.id"
      >
        <h3 v-if="user_skills.skills.length" class="chart-title">
          {{ skillsItem.name }}
        </h3>
        <div v-if="user_skills.skills.length" class="chart-bar">
          <div class="chart-progress" :style="{ width: skillsItem.stat + '%' }">
            <!--          <p class="chart-progress__count">{{ skillsItem.stats }}%</p>-->
          </div>
        </div>
      </div>
    </div>
    <div v-if="!user_skills.skills?.length">
      <div
        v-for="itemLoader in 8"
        :key="itemLoader"
        class="chart-bar-vertical chart-bar-vertical__loader"
      >
        <h3 class="chart-title chart-title__loader"></h3>
        <div class="chart-bar chart-bar__loader">
          <div class="chart-progress chart-progress__loader">
            <!--          <p class="chart-progress__count">{{ skillsItem.stats }}%</p>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import SkillsUserModel from "@/models/SkillsUserModel";
import User from "@/classes/UserClass";

export default defineComponent({
  name: "SkillsComponent",
  data() {
    return {
      user_skills: {} as SkillsUserModel,
    };
  },
  created() {
    this.getUserSkill();
  },
  methods: {
    /**
     * Получаем достижения пользователя
     */
    getUserSkill(): void {
      const userSkill = new User();
      userSkill.getUserSkills().then((skills_user: any) => {
        this.user_skills = skills_user;
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
  &__loader {
    background: none;
  }
  .chart-progress {
    transition: 0.6s ease-in;
    position: absolute;
    width: 123px;
    height: 22px;
    left: 0;
    top: -3px;
    background: #1657ff;
    border-radius: 0 4px 4px 0;
    &__loader {
      border-radius: 4px;
      width: 100%;
      background: rgba(130, 130, 130, 0.2);
      background: -webkit-gradient(
        linear,
        left top,
        right top,
        color-stop(8%, rgba(130, 130, 130, 0.2)),
        color-stop(18%, rgba(130, 130, 130, 0.3)),
        color-stop(33%, rgba(130, 130, 130, 0.2))
      );
      background: linear-gradient(
        to right,
        rgba(130, 130, 130, 0.2) 8%,
        rgba(130, 130, 130, 0.3) 18%,
        rgba(130, 130, 130, 0.2) 33%
      );
      background-size: 800px 100px;
      animation: wave-lines 2s infinite ease-out;
    }
    &__count {
      @include descriptionText;
      color: #fff;
      margin: 2px;
    }
  }
}
.chart-title {
  &__loader {
    width: 60px;
    height: 15px;
    border-radius: 4px;
    background: rgba(130, 130, 130, 0.2);
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      color-stop(8%, rgba(130, 130, 130, 0.2)),
      color-stop(18%, rgba(130, 130, 130, 0.3)),
      color-stop(33%, rgba(130, 130, 130, 0.2))
    );
    background: linear-gradient(
      to right,
      rgba(130, 130, 130, 0.2) 8%,
      rgba(130, 130, 130, 0.3) 18%,
      rgba(130, 130, 130, 0.2) 33%
    );
    background-size: 800px 100px;
    animation: wave-lines 2s infinite ease-out;
  }
  @include fontTitle;
  font-size: 12px;
  line-height: 18px;

  letter-spacing: 0.5px;

  color: #000000;
}
@keyframes wave-lines {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}
</style>
