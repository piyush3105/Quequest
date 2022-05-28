import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyA1rLUY8m0JMF6IcMQ5r9760YMfNaPsovA",
  authDomain: "quequest-7b34e.firebaseapp.com",
  projectId: "quequest-7b34e",
  storageBucket: "quequest-7b34e.appspot.com",
  messagingSenderId: "841990874029",
  appId: "1:841990874029:web:ef20ed1b18609565e3f724",
  measurementId: "G-17LFPZKYJL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
