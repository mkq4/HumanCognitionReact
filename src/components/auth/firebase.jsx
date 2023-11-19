// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDx7oxK76oJTpoyJTWYCibSWs7oNoRgzLA",
  authDomain: "humancognitionauth.firebaseapp.com",
  projectId: "humancognitionauth",
  storageBucket: "humancognitionauth.appspot.com",
  messagingSenderId: "1064929358039",
  appId: "1:1064929358039:web:1551676237baf838e38092"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

const colRef = collection(db, "users");
getDocs(colRef)
.then((snapshot) => {
  let users = []
    snapshot.docs.forEach((doc)=> {
      users.push( {...doc.data()} )
    })
    // console.log(users);
  })
  .catch((err) => console.log(err));

export const auth = getAuth(app);
export default db