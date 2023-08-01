import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBBxVyJbjWCSpH4jGbVpUyeGWi_w0KYJ24",
  authDomain: "fresh-pick-76066.firebaseapp.com",
  projectId: "fresh-pick-76066",
  storageBucket: "fresh-pick-76066.appspot.com",
  messagingSenderId: "418933395579",
  appId: "1:418933395579:web:0b72dbd6db5d8f048012de",
  measurementId: "G-JTP6JW87VK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
