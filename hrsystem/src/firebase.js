import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage";
import "firebase/functions";



const app = firebase.initializeApp({
  apiKey: "AIzaSyDyxx2rm8RFG9BBv7u9cgGueM1ub3qJiFI",
  authDomain: "hrsystem-f1d32.firebaseapp.com",
  projectId: "hrsystem-f1d32",
  storageBucket: "hrsystem-f1d32.appspot.com",
  messagingSenderId: "22802911292",
  appId: "1:22802911292:web:b6e89e8bf93f9dca587339"
})

export const auth = app.auth();
export const db = app.firestore();
export const functions = app.functions();
export default app
