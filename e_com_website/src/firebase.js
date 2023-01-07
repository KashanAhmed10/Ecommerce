import firebase from 'firebase'
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCI4F-tpP0O6MP22qCC4a-S6ItErBM7iFg",
  authDomain: "e-comerce-website.firebaseapp.com",
  projectId: "e-comerce-website",
  storageBucket: "e-comerce-website.appspot.com",
  messagingSenderId: "822043945874",
  appId: "1:822043945874:web:8d24c126bda4dbc23d2f4b",
  measurementId: "G-TVM7FNWL50"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };