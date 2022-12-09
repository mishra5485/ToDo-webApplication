import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAh5x8lQSYfUnucGmq0zVb_MIb03mQexjo",
  authDomain: "todo-2db8b.firebaseapp.com",
  projectId: "todo-2db8b",
  storageBucket: "todo-2db8b.appspot.com",
  messagingSenderId: "302269636970",
  appId: "1:302269636970:web:8111c72658dfd431bc8513",
  measurementId: "G-FJMWEXHRB0",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
