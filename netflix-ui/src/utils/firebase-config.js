
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAKPFncl-iylaafV-GxW7zYoO7CtTffSvo",
  authDomain: "netfilx-build.firebaseapp.com",
  projectId: "netfilx-build",
  storageBucket: "netfilx-build.appspot.com",
  messagingSenderId: "247369224097",
  appId: "1:247369224097:web:7932dfb9a31700488545e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)