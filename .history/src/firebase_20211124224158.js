import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDPcMsvqO1soVWqDpC-3x-6soOebyHGkvU",
  authDomain: "discord-ebf50.firebaseapp.com",
  projectId: "discord-ebf50",
  storageBucket: "discord-ebf50.appspot.com",
  messagingSenderId: "311038626311",
  appId: "1:311038626311:web:547a714909dbc1904f38a2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
