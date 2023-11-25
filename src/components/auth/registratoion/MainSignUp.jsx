// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import RegNotification from "./RegNotification";
import LoginForReg from "../login/LoginForReg";
// import db from "../firebase";
// import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
const MainSignUp = () => {
  const [nickName, setNickName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [regNotification, setRegNotification] = useState(false);
  const [login, setLogin] = useState(false);
  const [msgToNotification, setMsgToNotification] = useState('')

  // const usersCollection = collection(db, "users")
  // console.log(usersCollection);
  // const createEmail = async () => {
  //   await addDoc(usersCollection, {email: email})
  // }

  const setEmailToLocalStorage = () => {
    localStorage.setItem('email', email)
  }
  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setRegNotification(true);
        setMsgToNotification('You have successfully registered!')
        setEmailToLocalStorage();
        console.log(email);
      })
      .catch((err) => {
        console.log(err.message);
        if(err.message == 'Firebase: Error (auth/missing-password).'){
          setRegNotification(true)
          setMsgToNotification('Fill all inputs!')
        } else if(err.message == 'Firebase: Error (auth/email-already-in-use).') {
          setRegNotification(true)
          setMsgToNotification('Email already in use!')
        } else if(err.message == 'Firebase: Error (auth/admin-restricted-operation).') {
          setRegNotification(true)
          setMsgToNotification('Check inputs again!')
        }else if(err.message == 'Firebase: Error (auth/invalid-email).') {
          setRegNotification(true)
          setMsgToNotification('Wrong email')
        }else if(err.message == 'Firebase: Password should be at least 6 characters (auth/weak-password).') { 
          setRegNotification(true)
          setMsgToNotification('Password should be at least 6 characters')
        }
      })
  };
  const toLogin = () => {
    const signUpButton = document.querySelector(".button");
    signUpButton.setAttribute("href", "/login");
  };
  return (
    <div className="SignUp-window">
      <h1 className="pb-50">Registration</h1>
      <form
        className="d-flex flex-column justify-center align-center mt-50"
        onSubmit={signUp}
      >
        <input
          value={nickName}
          type="text"
          placeholder="Enter you nickname"
          onChange={(e) => {
            setNickName(e.target.value);
          }}
        />
        <input
          value={email}
          type="text"
          placeholder="Enter you email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          value={password}
          type="password"
          placeholder="Enter you password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          className="button"
          type="submit"
          onClick={() => {
            console.log(password, email, nickName);
            if (password != null || email != null || nickName != null) {
              signUp
              setRegNotification(false)
            } else {
              setRegNotification(true);
            }
          }}
        >
          Sign Up
        </button>
      </form>
      {regNotification && <RegNotification text={msgToNotification}/>}
    </div>
  );
};

export default MainSignUp;
