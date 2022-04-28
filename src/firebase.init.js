// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMMD_MFW_InO9Dkn_yA8ngE9Xx6k4tcNU",
  authDomain: "ema-john-simple-with-aut-48815.firebaseapp.com",
  projectId: "ema-john-simple-with-aut-48815",
  storageBucket: "ema-john-simple-with-aut-48815.appspot.com",
  messagingSenderId: "332429896412",
  appId: "1:332429896412:web:ca9acb372aad623009e219"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;