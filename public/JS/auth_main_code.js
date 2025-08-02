import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";

//Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyB0_uWdbiRt1elh_fjcDl3FBX8Fwg26C-8",    
  authDomain: "christncode.firebaseapp.com",
  projectId: "christncode",
  storageBucket: "christncode.firebasestorage.app",
  messagingSenderId: "688445074434",
  appId: "1:688445074434:web:7ac38982238a9322b74b1b",
  measurementId: "G-HQLCSMR9CT"
};

//Initializing Firebase app
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
