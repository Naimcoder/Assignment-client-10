// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpj3Dn137t93JzeAz97wRsdRb6HQSHsOs",
  authDomain: "courses-authentication-context.firebaseapp.com",
  projectId: "courses-authentication-context",
  storageBucket: "courses-authentication-context.appspot.com",
  messagingSenderId: "266271112431",
  appId: "1:266271112431:web:4469285caf684ef4252f1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;