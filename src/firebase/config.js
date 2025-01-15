import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC1mj6hxt5jFmraJ6GOhqWvY6cVhQvYo98",
  authDomain: "carlink-db.firebaseapp.com",
  projectId: "carlink-db",
  storageBucket: "carlink-db.firebasestorage.app",
  messagingSenderId: "184854213564",
  appId: "1:184854213564:web:c1d02529319a015a4831b9"
};

export const app = initializeApp(firebaseConfig);