// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBobF95D2G5PH8n1kRVkACxpqwVHj8BKrQ",
    authDomain: "facebook-clone-d41d4.firebaseapp.com",
    databaseURL: "https://facebook-clone-d41d4.firebaseio.com",
    projectId: "facebook-clone-d41d4",
    storageBucket: "facebook-clone-d41d4.appspot.com",
    messagingSenderId: "449115971701",
    appId: "1:449115971701:web:b873c67dced3177cda583c",
    measurementId: "G-SVL2E31TVY"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db;