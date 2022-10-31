
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA68YbtHV6BxsYE5MPOZRr8dQAEEq5S-7k",
  authDomain: "career-expo-1b62b.firebaseapp.com",
  projectId: "career-expo-1b62b",
  storageBucket: "career-expo-1b62b.appspot.com",
  messagingSenderId: "326238707952",
  appId: "1:326238707952:web:8e2794753211f21e1de235"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)