// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgr4SwrBk9N_X2kHuzdNm2F2JyGM6_PSc",
  authDomain: "taskify-4b7b4.firebaseapp.com",
  projectId: "taskify-4b7b4",
  storageBucket: "taskify-4b7b4.appspot.com",
  messagingSenderId: "231318523821",
  appId: "1:231318523821:web:ef3ede7efeb48852d05b24",
  measurementId: "G-N11875Z2QQ"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app)


