<template>
  <div class="nav-bar">
    <div class="user">
      <div class="user__info">
        <img class="user__avatar" src="../../assets/img/pngegg.png" />
        <p>{{ user.email }}</p>
      </div>
    </div>
    <div class="nav-bar__links">
      <div class="nav-bar__link">
        <fa icon="user" class="icon" />
        <a>Главная</a>
      </div>
      <div class="nav-bar__link">
        <fa icon="star" class="icon" />
        <a>Умения</a>
      </div>
      <div class="nav-bar__link">
        <fa icon="house" class="icon" />
        <a>Имущество</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "pinia";
import { useAuthUserStore } from "@/store/authUser";

export default {
  name: "LeftNavBar",
  computed: {
    ...mapState(useAuthUserStore, {
      user: "user",
    }),
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/variables";
.icon {
  width: 30px;
  height: 30px;
}
.nav-bar {
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  width: 350px;
  background: #ffffff;

  box-shadow: 0 0 16px rgba(0, 0, 0, 0.15);
  &__links {
    font-family: $poppins-font;
    font-weight: $regular-font-weight;
    text-align: left;
    margin: 50px 0 0 15px;
  }
  &__link {
    position: relative;
    color: #fff;
    font-family: $poppins-font;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 140%;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 20px;
    background: linear-gradient(101.84deg, #5c24fc 2.78%, #9d7aff 98.95%);
    border-radius: 10px;
    margin: 10px 15px;
  }
}
.user {
  &__info {
    margin: 30px 0;
    font-family: $poppins-font;
    font-weight: $regular-font-weight;
  }
  &__avatar {
    img {
      max-width: 150px;
    }
    max-width: 150px;
  }
}
</style>
