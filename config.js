import firebase from "firebase/compat/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDflU2Uu5Seg6_2apBm4QoT7nykRNwTLd4",
  authDomain: "jalshi.firebaseapp.com",
  databaseURL:
    "https://jalshi-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "jalshi",
  storageBucket: "jalshi.appspot.com",
  messagingSenderId: "41472295102",
  appId: "1:41472295102:web:82b392f58feb2423525eef",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const db = getDatabase();
export { db };
