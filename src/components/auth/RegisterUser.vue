<template>
  <h2>Регистрация</h2>
  <form class="form-user">
    <div class="group-input">
      <UiInput
        class="form-user__input"
        v-model="registerForm.email"
        placeholder="Введите email"
        :class="{
          error: v$.registerForm.email.$error,
          successful: !v$.registerForm.email.$invalid,
        }"
      />
      <span class="input-error" v-if="v$.registerForm.email.$error">
        {{ v$.registerForm.email.$errors[0].$message }}
      </span>
      <UiInput
        class="form-user__input"
        v-model="registerForm.password"
        placeholder="Введите пароль"
        :class="{
          error: v$.registerForm.password.$error,
          successful: !v$.registerForm.password.$invalid,
        }"
      />
      <span class="input-error" v-if="v$.registerForm.password.$error">
        {{ v$.registerForm.password.$errors[0].$message }}
      </span>
    </div>
    <UiButton @click.prevent="registerUserClass" class="form-user__button"
      >Регистрация</UiButton
    >
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useVuelidate from "@vuelidate/core";
import UiInput from "@/components/UI/input/UiInput.vue";
import UiButton from "@/components/UI/button/UiButton.vue";
import { email, helpers, required, minLength } from "@vuelidate/validators";
import User from "@/classes/UserClass";

export default defineComponent({
  name: "RegisterUser",
  components: { UiButton, UiInput },
  template: "AuthLayout",
  data() {
    return {
      v$: useVuelidate(),
      registerSuccessful: false,
      registerForm: {
        email: "",
        password: "",
      },
      errorMessage: "",
    };
  },
  emits: ["auth-user"],
  validations() {
    return {
      registerForm: {
        email: {
          email: helpers.withMessage("Указан неверный формат почты", email),
          required: helpers.withMessage("Обязательное поле", required),
        },
        password: {
          minLength: helpers.withMessage(
            `Минимальная длина пароля 6 символов`,
            minLength(6)
          ),
          required: helpers.withMessage("Обязательное поле", required),
        },
      },
    };
  },
  methods: {
    /**
     * Регистрируем пользователя в системе
     */
    async registerUserClass() {
      const registerUserClass = new User();
      await registerUserClass
        .createUserWithEmailAndPassword(
          this.registerForm.email,
          this.registerForm.password
        )
        .then(() => {
          this.$emit("auth-user");
        })
        .catch((error) => {
          this.v$.$validate();
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
        })
        .finally(() => {
          this.registerSuccessful = false;
        });
    },
    // async registerUser() {
    //   await createUserWithEmailAndPassword(
    //     auth,
    //     this.registerForm.email,
    //     this.registerForm.password
    //   )
    //     .then(() => {
    //       this.$emit("auth-user");
    //     })
    //     .catch((error) => {
    //       this.v$.$validate();
    //       switch (error.code) {
    //         case "auth/invalid-email":
    //           this.errorMessage = "Неверный формат email";
    //           break;
    //         case "auth/email-already-in-use":
    //           this.errorMessage =
    //             "Учетная запись с таким адресом электронной почты уже использутеся";
    //           break;
    //         case "auth/weak-password":
    //           this.errorMessage = "Введен слабый пароль";
    //           break;
    //         default:
    //           this.errorMessage = "Email  или пароль неверны";
    //           break;
    //       }
    //     })
    //     .finally(() => {
    //       this.registerSuccessful = false;
    //     });
    // },
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
  text-align: left;
  margin-left: 10px;
  width: 300px;
}
.group-input {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
