<template>
  <h2 v-if="!activeResetPassword">Авторизация</h2>
  <h2 v-if="activeResetPassword">Восстановление пароля</h2>
  <form class="form-user">
    <div v-if="!activeResetPassword" class="group-input">
      <UiInput
        class="form-user__input"
        v-model="authForm.email"
        placeholder="Введите email"
        :class="{
          error: v$.authForm.email.$error,
        }"
      />
      <span class="input-error" v-if="v$.authForm.email.$error">
        {{ v$.authForm.email.$errors[0].$message }}
      </span>

      <UiInput
        class="form-user__input"
        v-model="authForm.password"
        placeholder="Введите пароль"
        :class="{
          error: v$.authForm.password.$error,
        }"
      />
      <span class="input-error" v-if="v$.authForm.password.$error">
        {{ v$.authForm.password.$errors[0].$message }}
      </span>
    </div>

    <span
      class="resetPassword"
      v-if="!activeResetPassword"
      @click="activeResetPassword = true"
      >Забыли пароль ?</span
    >

    <UiInput
      v-if="activeResetPassword"
      class="form-user__input"
      placeholder="Введите почту"
      v-model="emailResetPassword"
    />
    <div v-if="!loadingAuth">
      <UiButton
        v-if="!activeResetPassword"
        @click.prevent="authUser"
        class="form-user__button"
        >Авторизация</UiButton
      >
      <UiButton
        v-if="activeResetPassword"
        @click.prevent="resetUserPassword"
        class="form-user__button"
        >Сбросить пароль</UiButton
      >
    </div>
    <div v-if="loadingAuth" class="loaderAuth">
      <UiLoading />
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import useVuelidate from "@vuelidate/core";

import UiInput from "@/components/UI/input/UiInput.vue";
import UiButton from "@/components/UI/button/UiButton.vue";
import { mapActions } from "pinia";
import { useAuthUserStore } from "@/store/authUser";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";
import router from "@/router";
import UiLoading from "@/components/UI/loading/loading.vue";
import { email, helpers, required } from "@vuelidate/validators";

export default defineComponent({
  name: "LoginUser",
  components: { UiLoading, UiButton, UiInput },
  template: "AuthLayout",
  data() {
    return {
      v$: useVuelidate(),
      loadingAuth: false,
      activeResetPassword: false,
      emailResetPassword: "",
      authForm: {
        email: "",
        password: "",
      },
      errorMsg: "",
    };
  },
  validations() {
    return {
      authForm: {
        email: {
          email: helpers.withMessage("Указан неверный формат почты", email),
          required: helpers.withMessage("Обязательное поле", required),
        },
        password: {
          required: helpers.withMessage("Обязательное поле", required),
        },
      },
      emailResetPassword: {
        email: helpers.withMessage("Указан неверный формат почты", email),
        required: helpers.withMessage("Обязательное поле", required),
      },
    };
  },
  methods: {
    /**
     * Авторизируем пользователя в системе
     */
    ...mapActions(useAuthUserStore, {
      resetPassword: "resetPassword",
    }),
    /**
     * вызываем функцию сброса пароля
     */
    async resetUserPassword() {
      this.loadingAuth = true;
      await this.resetPassword(this.emailResetPassword)
        .then(() => {
          this.v$.$validate();
          this.loadingAuth = false;
        })
        .catch((error) => {
          this.loadingAuth = false;
          this.v$.$validate();
          console.log(error.code);
          this.errorMsg = error.code;
        });
    },
    /**
     * авторизация пользователя по почта/пароль
     */
    async authUser() {
      this.loadingAuth = true;
      await signInWithEmailAndPassword(
        auth,
        this.authForm.email,
        this.authForm.password
      )
        .then(() => {
          router.push("/");
          this.loadingAuth = false;
        })
        .catch((error) => {
          this.v$.$validate();
          this.loadingAuth = false;
          switch (error.code) {
            case "auth/invalid-email":
              this.errorMsg = "Неверный email";
              break;
            case "auth/user-not-found":
              this.errorMsg =
                "Учетная запись с таким адресом электронной почты не найдена";
              break;
            case "auth/wrong-password":
              this.errorMsg = "Неверный пароль";
              break;
            default:
              this.errorMsg = "Email  или пароль неверны";
              break;
          }
        });
    },
  },
});
</script>

<style lang="scss" scoped>
.form-user {
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  &__input {
    margin: 38px 0 17px 0;
    width: 317px;
  }
  &__button {
    width: 369px;
    padding: 18px 0;
    margin-top: 45px;
  }
}
.input-error {
  color: #f16063;
  text-align: left;
  width: 350px;
  margin-left: 10px;
}
.group-input {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.loaderAuth {
  width: 100px;
  margin: 15px auto;
}
.resetPassword {
  &:hover {
    color: #4d47c3;
    cursor: pointer;
  }
}
</style>
