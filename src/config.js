// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD2TEaXeV2R9cRTon7ruOyMepX6LGsCN-g",
  authDomain: "am-commerce.firebaseapp.com",
  projectId: "am-commerce",
  storageBucket: "am-commerce.appspot.com",
  messagingSenderId: "311663457118",
  appId: "1:311663457118:web:7639e017584987ba9955cf",
  measurementId: "G-HHFNCL3RNS",
};

const firebaseApp = initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
const db = getFirestore(firebaseApp);

// const auth = firebase.auth();
const auth = getAuth(firebaseApp);

const storage = getStorage(firebaseApp);

export { db, auth, storage };
