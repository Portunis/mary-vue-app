import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { auth, firestore } from "@/firebase";
import SkillsUserModel from "@/models/SkillsUserModel";
import AchievementModel from "@/models/AchievementModel";
import AwardsModel from "@/models/AwardsModel";

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
              date: "",
              image: "designerAchievement.png",
              got_achievement: 0,
              title: "Achivka",
            },
            {
              id: 2,
              name: "Roller Skating",
              description: "fdsfasfad",
              date: "",
              image: "designerAchievement.png",
              got_achievement: 0,
              title: "Achivka",
            },
            {
              id: 3,
              name: "Roller Skating",
              description: "fdsfasfad",
              date: "",
              image: "designerAchievement.png",
              got_achievement: 0,
              title: "Achivka",
            },
            {
              id: 4,
              name: "Roller Skating",
              description: "fdsfasfad",
              date: "",
              image: "designerAchievement.png",
              got_achievement: 0,
              title: "Achivka",
            },
            {
              id: 5,
              name: "Roller Skating",
              description: "fdsfasfad",
              date: "",
              image: "designerAchievement.png",
              got_achievement: 0,
              title: "Achivka",
            },
          ],
        });
        addDoc(collection(firestore, "awards_user"), {
          uid: registeredUser.user.uid,
          achievements: [
            {
              id: 1,
              name: "Certificates",
              count: 28,
              color: "rgb(147, 123, 245)",
            },
            {
              id: 2,
              name: "Trophies",
              count: 9,
              color: "rgb(249, 115, 129)",
            },
            {
              id: 3,
              name: "Medals",
              count: 23,
              color: "rgb(255, 187, 56)",
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
  async getUserSkills(): Promise<SkillsUserModel | undefined> {
    const docRef = doc(firestore, "skills_user", "gNi40wYIGUojimbOtAy5");
    const userSkill = await getDoc(docRef);
    return userSkill.data() as SkillsUserModel;
  }

  /**
   * Получаем достижения пользователя
   */
  async getUserAchievements(): Promise<AchievementModel | undefined> {
    const docRef = doc(firestore, "achievement_user", "TJmbJo4Nhpl0UFMGW4MC");
    const userAchievement = await getDoc(docRef);
    return userAchievement.data() as AchievementModel;
  }
  async getUserAwards(): Promise<AwardsModel | undefined> {
    const docRef = doc(firestore, "awards_user", "XO6OAZfpY45uwqD4YBEd");
    const userAwards = await getDoc(docRef);
    return userAwards.data() as AwardsModel;
  }
}
