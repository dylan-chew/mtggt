import * as firebase from "firebase/app";
import "firebase/auth";

console.log("firebase is connected");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFntxl_mNUFiAFp4SS5gWgWr_Z-MGKjj0",
  authDomain: "mtg-game-tracker-ba8da.firebaseapp.com",
  databaseURL: "https://mtg-game-tracker-ba8da.firebaseio.com",
  projectId: "mtg-game-tracker-ba8da",
  storageBucket: "mtg-game-tracker-ba8da.appspot.com",
  messagingSenderId: "309153768869",
  appId: "1:309153768869:web:c4a94ce3fb68c18a81f44c",
  measurementId: "G-NSHY467HN0"
};
// Initialize Firebase
let app = null;
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
