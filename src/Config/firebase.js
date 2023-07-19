// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWfFLaODO2S_NL6epNDEDwurrDMSvxMUU",
  authDomain: "pro-manager-9c1eb.firebaseapp.com",
  projectId: "pro-manager-9c1eb",
  storageBucket: "pro-manager-9c1eb.appspot.com",
  messagingSenderId: "847562029899",
  appId: "1:847562029899:web:5c4e4e6116f01b44e186ce",
  measurementId: "G-S0ZG8MME1R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();