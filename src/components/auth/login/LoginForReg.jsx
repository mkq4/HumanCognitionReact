/* eslint-disable react/prop-types */
import "./Index.scss"
import React, {useState} from "react";
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from "firebase/auth";
const MainLogin = ( {email, password} ) => {

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      console.log(userCredential);
			console.log('loggined');
    })
    .catch((err)=> {
      console.log(err);
    })}
	const [handEmail, setHandEmail] = useState("");
	const [handPassword, setHandPassword] = useState("");
  return (
    <div className="SignIn-window">
    <h1 className="pb-50">Sign In</h1>
    <form
      className="d-flex flex-column justify-center align-center mt-50"
      // onSubmit={}
    >
      <input
        value={email}
        type="text"
        placeholder="Enter you email"
				onChange={(e) => setHandEmail(e.target.value)}
      />
      <input
        value={password}
        type="password"
        placeholder="Enter you password"
				onChange={(e) => setHandPassword(e.target.value)}
      />
      <button className="button" type="submit">
        Sign In
      </button>
    </form>
  </div>
  )
}

export default MainLogin