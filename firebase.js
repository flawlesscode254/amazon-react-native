import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBtJGAIPg0pro9kZmf5WK2cPZx5nABjGJs",
    authDomain: "fir-f483e.firebaseapp.com",
    projectId: "fir-f483e",
    storageBucket: "fir-f483e.appspot.com",
    messagingSenderId: "685121976782",
    appId: "1:685121976782:web:fb5124ed2ca7c4c815539f"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = firebase.firestore();

export default db;