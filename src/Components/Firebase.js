import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAOzhIeaWNNhQrh2W4HloHf9TasvyeoePQ",
  authDomain: "login-page-b136b.firebaseapp.com",
  projectId: "login-page-b136b",
  storageBucket: "login-page-b136b.appspot.com",
  messagingSenderId: "74947584237",
  appId: "1:74947584237:web:c5c7a08cd56a7b55172ce4"
};

const app = initializeApp(firebaseConfig);

export const auth= getAuth()
export const db=getFirestore(app)
export default app