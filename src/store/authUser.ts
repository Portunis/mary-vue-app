import { defineStore } from "pinia";
import router from "@/router";
import { auth } from "@/firebase";
import {
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  OAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import UserClasses from "@/classes/UserClasses";

export const useAuthUserStore = defineStore("auth-user", {
  state: () => ({
    isLoggedIn: false,
    user: {},
    errorMessage: "",
  }),
  actions: {
    /**
     * Получаем данные о пользователе который авторизировался
     */
    getUserAuth(): void {
      onAuthStateChanged(auth, (user) => {
        if (!user) {
          router.push("/auth");
        } else {
          this.user = user;
          localStorage.setItem("USER_LOGGED", user.uid);
          this.isLoggedIn = true;
          new UserClasses(user.uid);
        }
      });
    },
    /**
     * google авторизация
     */
    async authGoogle() {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider)
        .then(() => router.push("/user"))
        .then(() => {
          console.log("213");
          this.getUserAuth();
        })
        .catch((error) => {
          console.log(error);
          this.errorMessage = error.message;
          setTimeout(() => {
            this.errorMessage = "";
          }, 2000); //убрать дублирвоанние кода
        });
    },
    /**
     * apple авторизация
     */
    async authApple() {
      const provider = new OAuthProvider("apple.com");
      await signInWithPopup(auth, provider)
        .then(() => router.push("/user"))
        .catch((error) => {
          console.log(error);
          this.errorMessage = error.message;
          setTimeout(() => {
            this.errorMessage = "";
          }, 2000);
        });
    },
    /**
     * выводим пользователя из системы
     */
    async logoutUser() {
      await signOut(auth).then(() => router.push("/auth"));
      this.isLoggedIn = false;
      localStorage.removeItem("USER_LOGGED");
    },
    /**
     *
     * Сброс пароля пользователя по почте
     * @param email - почта пользователя
     */
    async resetPassword(email: string) {
      await sendPasswordResetEmail(auth, email)
        .then(() => {
          console.log("скинул");
        })
        .catch((error) => {
          console.log(error.code);
        });
    },
  },
});
