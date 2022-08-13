// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCCcBn9H4eO0SNx359Jwme7je0JtfbveNc",
  authDomain: "recipe-app-1234.firebaseapp.com",
  projectId: "recipe-app-1234",
  storageBucket: "recipe-app-1234.appspot.com",
  messagingSenderId: "232861837223",
  appId: "1:232861837223:web:062d55e3d339d1d4fdf882",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export default app;
