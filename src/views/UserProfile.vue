<template>
  <div class="nav-bar">
    <h2 class="nav-bar__title">Главная страница</h2>
    <div><UiButton class="button-exit" @click="logOut">Выйти</UiButton></div>
  </div>
  <div class="wrapper">
    <div class="wrapper__card-hello">
      <div class="info">
        <h2>Привет, я Чопик</h2>
        <img src="../assets/img/Frame.png" />
        <p>
          Я помогу тебе освоить данную систему. Она позволяет легко и быстро
          выполнить ряд функций которые ранее требовали больше времени. Следуй
          указаниям и в конце обязательно дай обратную связь, мне важно знать
          как тебе данная платформа.
        </p>

        <p class="info-badge">
          В дальнейшем здесь будет информация о твоем персонаже
        </p>
      </div>
    </div>

    <div class="wrapper__card wrapper__card-icon">
      Статистика
      <!--      <div class="chart"><LineChart :chartData="chartTask" /></div>-->
    </div>
    <div class="wrapper__card wrapper__card-chart">
      <div class="achievement">
        <h3>Ваши награды</h3>
        <div class="achievements">
          <div>
            <img src="../assets/img/Rectangle30.png" />
            <h4>Мастер побега</h4>
            <p>Похоже что вы смогли удрать от мистера Фермера</p>
          </div>
          <div>
            <img src="../assets/img/Rectangle30.png" />
            <h4>Мастер побега</h4>
            <p>Вы супер бомж</p>
          </div>
          <div>
            <img src="../assets/img/Rectangle30.png" />
            <h4>Мастер побега</h4>
            <p>Вы супер бомж</p>
          </div>
          <div>
            <img src="../assets/img/Rectangle30.png" />
            <h4>Мастер побега</h4>
            <p>Вы супер бомж</p>
          </div>
        </div>
      </div>
    </div>
    <div class="wrapper__card">
      <p class="wrapper__card-title">Возраст</p>
      <div class="wrapper__card-description">25 лет</div>
    </div>
    <div class="wrapper__card">
      <p class="wrapper__card-title">Деньги</p>
      <div class="wrapper__card-description">249.01$</div>
    </div>
    <div class="wrapper__card">
      <p class="wrapper__card-title">Телефон</p>
      <div class="wrapper__card-description">90 32 45</div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { LineChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";
import UiButton from "@/components/UI/button/UiButton.vue";
import { mapActions } from "pinia";
import { useAuthUserStore } from "@/store/authUser";

Chart.register(...registerables);

export default defineComponent({
  components: { UiButton },
  // components: { LineChart },
  data() {
    return {
      chartBar: {} as Record<string, unknown>,
      chartTask: {} as Record<string, unknown>,
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
      this.chartTask = {
        labels: ["Created", "Active", "Completed"],
        options: [
          {
            tooltips: { enabled: false },
            hover: { mode: null },
          },
        ],
        datasets: [
          {
            label: "Chart Info",

            data: [1, 10, 15],
            backgroundColor: ["#FF6600"],
            borderColor: ["#FF6600"],
          },
        ],
      };
    },
  },
});
</script>
<style lang="scss" scoped>
@import "../assets/variables";
.wrapper {
  margin: 70px 24px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 35px;
  grid-row-gap: 35px;
  &__card-title {
    text-align: left;
    margin: 16px 16px;
    font-family: $poppins-font;
  }
  &__card-description {
    text-align: left;
    margin: 8px 16px;
    font-family: $poppins-font;
    font-weight: $bold-font-weight;
  }
  &__card-hello {
    grid-area: 1 / 1 / 3 / 2;
    width: 425px;
    height: 611px;
    background: linear-gradient(101.84deg, #5c24fc 2.78%, #9d7aff 98.95%);

    box-shadow: 0 0 16px rgba(0, 0, 0, 0.15);
    border-radius: 12px;
  }
  &__card {
    max-height: 282px;
    max-width: 900px;
    background: #ffffff;

    box-shadow: 0 0 16px rgba(0, 0, 0, 0.15);
    border-radius: 12px;
  }
}
.card {
  display: flex;
}
.chart {
  height: 400px;
}
.wrapper__card-icon {
  grid-area: 2 / 2 / 3 / 4;
}
.wrapper__card-chart {
  grid-area: 1 / 2 / 2 / 4;
}

.info {
  h2 {
    font-family: $poppins-font;
    font-weight: $bold-font-weight;
    color: #fff;
    font-size: 28px;
  }
  img {
    width: 250px;
  }
  p {
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
.achievement {
  h4,
  p {
    color: #707070;
    margin: 10px 0 4px 0;
  }
  p {
    font-family: $poppins-font;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    width: 130px;
  }
  h3 {
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    font-family: $poppins-font;
    text-align: left;
    padding: 16px 16px 8px 16px;
    margin: 0;
  }
}
.info-badge {
  padding: 15px;
  background: #a0aec0;
  border-radius: 10px;
}
.nav-bar {
  margin: 50px 25px 0 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__title {
    margin: 0;
    font-family: $poppins-font;
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 140%;
    /* or 39px */

    /* BG Text */

    color: #3c3f88;
  }
}
.button-exit {
  padding: 10px 15px;
}
</style>
