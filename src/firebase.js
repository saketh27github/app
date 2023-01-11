import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";
// import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2scCBLf979_Rg5gO4XNdsmU_oSbLrFjQ",
  authDomain: "chat-e13df.firebaseapp.com",
  projectId: "chat-e13df",
  storageBucket: "chat-e13df.appspot.com",
  messagingSenderId: "154947589614",
  appId: "1:154947589614:web:e6d831ba4d66855f916aff"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();