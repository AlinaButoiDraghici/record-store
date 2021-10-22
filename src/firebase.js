
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyAZIL6FE2AANR1aqIqAoc6SqvMOeB17wN8",
  authDomain: "record-store-a1193.firebaseapp.com",
  projectId: "record-store-a1193",
  storageBucket: "record-store-a1193.appspot.com",
  messagingSenderId: "299482474573",
  appId: "1:299482474573:web:df3fa9a9cb79a0c71b1404"
};
const app = initializeApp(firebaseConfig);
//const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = getAuth(app)
const db = getFirestore(app)

//const db = app.firestore();
{/*db,*/}

export { db, auth };