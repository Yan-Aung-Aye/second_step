
import firebase from "firebase/app"
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBa5kNSo51KBWGyEzz3hTR32DS6DsYK_7Y",
    authDomain: "livechat-d6e29.firebaseapp.com",
    projectId: "livechat-d6e29",
    storageBucket: "livechat-d6e29.appspot.com",
    messagingSenderId: "139217339403",
    appId: "1:139217339403:web:10a5acd5fc66b09b3af30e"
};


firebase.initializeApp(firebaseConfig)


let db = firebase.firestore()
let timestamp = firebase.firestore.FieldValue.serverTimestamp



export { db, timestamp }