import { required, helpers, email } from "@vuelidate/validators";
const validationsForms = {
  email: {
    email: helpers.withMessage("Указан неверный формат почты", email),
    required: helpers.withMessage("Обязательное поле1", required),
  },
  password: {
    required: helpers.withMessage("Обязательное поле2", required),
  },
};
export { validationsForms };
