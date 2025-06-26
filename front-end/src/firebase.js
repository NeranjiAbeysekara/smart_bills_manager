// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBbu9LVkE4SW5UBqVm8qlgTHfizlHsNqtE",
  authDomain: "smartbillmanagement-5dd32.firebaseapp.com",
  projectId: "smartbillmanagement-5dd32",
  appId: "1:23006806500:web:00a5b418a78e4eed3f47f1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
