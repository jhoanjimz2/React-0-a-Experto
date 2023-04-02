import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyAHTztv6pS7RhKD-cQtQVZ9y7WxvZEbkEo",
  authDomain: "react-cursos-afa72.firebaseapp.com",
  projectId: "react-cursos-afa72",
  storageBucket: "react-cursos-afa72.appspot.com",
  messagingSenderId: "1076010537388",
  appId: "1:1076010537388:web:429405d539103ea253aa09"
};

export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB   = getFirestore(FirebaseApp);