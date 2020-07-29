import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/firebase-storage";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDn64PcGqjAiqCelxVPNwyey5DWGnHiFIs",
  authDomain: "distribution-site-e295f.firebaseapp.com",
  databaseURL: "https://distribution-site-e295f.firebaseio.com",
  projectId: "distribution-site-e295f",
  storageBucket: "distribution-site-e295f.appspot.com",
  messagingSenderId: "298001463228",
  appId: "1:298001463228:web:a06d755599f68030a29db9",
  measurementId: "G-7GJKPG1ZP0",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//初期化されたFirebaseをexport
export default firebase;
