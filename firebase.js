// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAZqSQgSNif08LEys8Zmn_gJpDFO6X4GgE",
  authDomain: "uvivo-app-bdfc8.firebaseapp.com",
  projectId: "uvivo-app-bdfc8",
  storageBucket: "uvivo-app-bdfc8.firebasestorage.app",
  messagingSenderId: "599565186529",
  appId: "1:599565186529:web:ba0e151e82a47ee7224ea0",
  measurementId: "G-FPL1EJY8BG"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, analytics, storage };