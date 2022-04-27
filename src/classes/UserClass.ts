import { addDoc, collection, getDoc, doc } from "firebase/firestore";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { auth, firestore } from "@/firebase";

export default class User {
  /**
   * Регистрируем пользователя в системе
   * @param email - почта
   * @param password - пароль
   */
  async createUserWithEmailAndPassword(email: string, password: string) {
    await createUserWithEmailAndPassword(auth, email, password).then(
      (registeredUser) => {
        addDoc(collection(firestore, "skills_user"), {
          uid: registeredUser.user.uid,
          skills: [
            { id: 1, name: "Дальнобой", stat: 0, startStat: 0 },
            { id: 2, name: "Такси", stat: 0, startStat: 0 },
            { id: 3, name: "Пожарный", stat: 0, startStat: 0 },
            { id: 4, name: "Строитель", stat: 0, startStat: 0 },
            { id: 5, name: "Бокс", stat: 0, startStat: 0 },
            { id: 6, name: "Бег", stat: 0, startStat: 0 },
            { id: 7, name: "Сила", stat: 0, startStat: 0 },
            { id: 8, name: "Зависимость", stat: 0, startStat: 0 },
          ],
        });
        addDoc(collection(firestore, "achievement_user"), {
          uid: registeredUser.user.uid,
          achievements: [
            {
              id: 1,
              name: "Roller Skating",
              description: "fdsfasfad",
              date: "Jan 2011",
              image: "designerAchievement.png",
              got_achievement: 0,
            },
            {
              id: 2,
              name: "Roller Skating",
              description: "fdsfasfad",
              date: "Jan 2011",
              image: "designerAchievement.png",
              got_achievement: 0,
            },
            {
              id: 3,
              name: "Roller Skating",
              description: "fdsfasfad",
              date: "Jan 2011",
              image: "designerAchievement.png",
              got_achievement: 0,
            },
            {
              id: 4,
              name: "Roller Skating",
              description: "fdsfasfad",
              date: "Jan 2011",
              image: "designerAchievement.png",
              got_achievement: 0,
            },
          ],
        });
      }
    );
  }

  /**
   * Авторизация пользователя в системе
   * @param email - почта
   * @param password - пароль
   */
  async signUpWithEmailAndPassword(email: string, password: string) {
    await signInWithEmailAndPassword(auth, email, password);
  }

  /**
   * Получаем умения пользователя
   */
  async getUserSkills() {
    const docRef = doc(firestore, "skills_user", "gNi40wYIGUojimbOtAy5");
    const userSkill = await getDoc(docRef);
    return userSkill.data();
  }

  /**
   * Получаем достижения пользователя
   */
  async getUserAchievements() {
    const docRef = doc(firestore, "achievement_user", "zzGEe2mQITulrR4KJRry");
    const userAchievement = await getDoc(docRef);
    return userAchievement.data();
  }
}
