import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBslQjH4BLP7G4zHhyPYA4kBBmQIff4cOQ",
  authDomain: "devcode-37e33.firebaseapp.com",
  projectId: "devcode-37e33",
  storageBucket: "devcode-37e33.appspot.com",
  messagingSenderId: "371222001713",
  appId: "1:371222001713:web:fa5d019138dc0288673d10",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
