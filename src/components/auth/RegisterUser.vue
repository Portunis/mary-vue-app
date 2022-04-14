<template>
  <h2>Регистрация</h2>
  <form class="form-user">
    <div class="group-input">
      <UiInput
        class="form-user__input"
        v-model="registerForm.email"
        placeholder="Введите email"
      />
      <UiInput
        class="form-user__input"
        v-model="registerForm.password"
        placeholder="Введите пароль"
      />
    </div>
    <span v-if="errorMsg" class="input-error">{{ errorMsg }}</span>
    <UiButton @click.prevent="userRegister" class="form-user__button"
      >Регистрация</UiButton
    >
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import UiInput from "@/components/UI/input/UiInput.vue";
import UiButton from "@/components/UI/button/UiButton.vue";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";

export default defineComponent({
  name: "RegisterUser",
  components: { UiButton, UiInput },
  template: "AuthLayout",
  data() {
    return {
      registerForm: {
        email: "",
        password: "",
      },
      errorMessage: "",
    };
  },
  methods: {
    /**
     * Регистрируем пользователя в системе
     */
    async registerUser() {
      await createUserWithEmailAndPassword(
        auth,
        this.registerForm.email,
        this.registerForm.password
      )
        .then(() => {
          console.log(1);
        })
        .catch((error) => {
          switch (error.code) {
            case "auth/invalid-email":
              this.errorMessage = "Неверный формат email";
              break;
            case "auth/email-already-in-use":
              this.errorMessage =
                "Учетная запись с таким адресом электронной почты уже использутеся";
              break;
            case "auth/weak-password":
              this.errorMessage = "Введен слабый пароль";
              break;
            default:
              this.errorMessage = "Email  или пароль неверны";
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
  align-items: center;

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
  text-align: center;
  width: 300px;
}
.group-input {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
