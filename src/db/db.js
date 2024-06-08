
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA60VM5FXujz40Gu615mjQW4mDDiRNHRE8",
  authDomain: "game-over-65b68.firebaseapp.com",
  projectId: "game-over-65b68",
  storageBucket: "game-over-65b68.appspot.com",
  messagingSenderId: "976942430387",
  appId: "1:976942430387:web:9a792a9c1a2483c4fad8c6"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();

export default db