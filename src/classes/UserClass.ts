import { addDoc, collection } from "firebase/firestore";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { auth, firestore } from "@/firebase";

export default class User {
  async createUserWithEmailAndPassword(email: string, password: string) {
    await createUserWithEmailAndPassword(auth, email, password).then(
      (registeredUser) => {
        addDoc(collection(firestore, "skills_user"), {
          uid: registeredUser.user.uid,
          skills: [
            { id: 1, name: "Дальнобой", stat: 0 },
            { id: 2, name: "Такси", stat: 0 },
            { id: 3, name: "Пожарный", stat: 0 },
            { id: 4, name: "Строитель", stat: 0 },
            { id: 5, name: "Бокс", stat: 0 },
            { id: 6, name: "Бег", stat: 0 },
            { id: 7, name: "Сила", stat: 0 },
            { id: 8, name: "Зависимость", stat: 0 },
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
              got_achievement: 0,
            },
            {
              id: 2,
              name: "Roller Skating",
              description: "fdsfasfad",
              date: "Jan 2011",
              got_achievement: 0,
            },
            {
              id: 3,
              name: "Roller Skating",
              description: "fdsfasfad",
              date: "Jan 2011",
              got_achievement: 0,
            },
            {
              id: 4,
              name: "Roller Skating",
              description: "fdsfasfad",
              date: "Jan 2011",
              got_achievement: 0,
            },
          ],
        });
      }
    );
  }
  async signUpWithEmailAndPassword(email: string, password: string) {
    await signInWithEmailAndPassword(auth, email, password);
  }
}
