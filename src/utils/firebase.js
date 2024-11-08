// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBu294Ars1Xif6U4RZtccb41WBGCY46L4w",
  authDomain: "netflixgpt-f86a7.firebaseapp.com",
  projectId: "netflixgpt-f86a7",
  storageBucket: "netflixgpt-f86a7.firebasestorage.app",
  messagingSenderId: "361037844974",
  appId: "1:361037844974:web:7ad86042534e467c7e3eff",
  measurementId: "G-VPZMHHCL2V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();