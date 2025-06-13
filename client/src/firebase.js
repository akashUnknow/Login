// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-867fd.firebaseapp.com",
  projectId: "mern-auth-867fd",
  storageBucket: "mern-auth-867fd.firebasestorage.app",
  messagingSenderId: "1012239134001",
  appId: "1:1012239134001:web:da4384cfa6057265a2d410",
  measurementId: "G-55YV2GJXKP"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const app = initializeApp(firebaseConfig);
