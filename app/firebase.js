import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAALMJY3PVpS4Knu8NRIlD08r7BY72yRhM",
  authDomain: "care360-b37da.firebaseapp.com",
  projectId: "care360-b37da",
  storageBucket: "care360-b37da.appspot.com",
  messagingSenderId: "434533364041",
  appId: "1:434533364041:web:d42bf2f40a1b2797db6a98"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db, signInWithPopup, signOut };