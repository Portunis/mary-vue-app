//firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

//
const firebaseConfig = {
  apiKey: "AIzaSyCdOOPkuw2QYm1kqRQFFDOeH3YQ71GCwj4",
  authDomain: "vue-task-portunis.firebaseapp.com",
  projectId: "vue-task-portunis",
  storageBucket: "vue-task-portunis.appspot.com",
  messagingSenderId: "71168184352",
  appId: "1:71168184352:web:771f9077c396d9bcacac45",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
const firestore = getFirestore(app);

export { auth, firebaseConfig, app, db, firestore };
