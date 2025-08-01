// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0_uWdbiRt1elh_fjcDl3FBX8Fwg26C-8",
  authDomain: "christncode.firebaseapp.com",
  projectId: "christncode",
  storageBucket: "christncode.firebasestorage.app",
  messagingSenderId: "688445074434",
  appId: "1:688445074434:web:7ac38982238a9322b74b1b",
  measurementId: "G-HQLCSMR9CT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();




