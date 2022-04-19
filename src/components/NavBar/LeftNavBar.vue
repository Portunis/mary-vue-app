<template>
  <div class="nav-bar">
    <div class="user">
      <div class="user__info">
        <img class="user__avatar" :src="user.photoURL" />
        <p class="user__name">{{ user.email }}</p>
        <p class="user__server">ServerName</p>
      </div>
    </div>
    <div class="nav-bar__links">
      <router-link to="/user" class="link">
        <fa icon="user" class="icon" />
        <a class="link__item">Главная</a>
      </router-link>
      <router-link to="/user/skills" class="link">
        <fa icon="star" class="icon" />
        <a class="link__item">Умения</a>
      </router-link>
      <router-link to="/user/projects" class="link">
        <fa icon="square-poll-horizontal" class="icon" />
        <a class="link__item">Проекты</a>
      </router-link>
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
    text-align: left;
    margin: 50px 0 0 15px;
  }
}
.link {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  margin: 10px 15px;
  color: rgba(0, 0, 0, 0.4);
  text-decoration: none;
  &:hover {
    background: linear-gradient(101.84deg, #5c24fc 2.78%, #9d7aff 98.95%);
    color: #fff;
    .link__item {
      color: #fff;
    }
  }
  &__item {
    font-family: $poppins-font;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 140%;
    color: rgba(0, 0, 0, 0.4);
  }
}
.router-link-active.router-link-exact-active {
  background: linear-gradient(101.84deg, #5c24fc 2.78%, #9d7aff 98.95%);
  color: #fff;
  .link__item {
    color: #fff;
  }
}
.user {
  width: 300px;
  margin: 0 auto;
  &__name {
    word-break: break-all;
    font-family: $poppins-font;
    font-style: normal;
    font-weight: 900;
    font-size: 24px;
    line-height: 140%;

    text-align: center;
    letter-spacing: 0.01em;

    color: #212121;
  }
  &__server {
    font-family: $poppins-font;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 140%;
    /* or 22px */

    text-align: center;

    color: #bbbbbb;
  }
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
