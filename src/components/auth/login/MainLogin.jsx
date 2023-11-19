import "./Index.scss";
import React, { useEffect, useState, createContext } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import LoginNotification from "./LoginNotification";
export const loginUser = createContext();
const MainLogin = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [loginNotfication, setLoginNotfication] = useState(false);
  const [textNotification, setTextNotification] = useState('')
  const [login, setLogin] = useState('user');

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setLoginNotfication(false);
        localStorage.setItem('email', userCredential._tokenResponse.email)
        setLoginNotfication(true)
        setTextNotification('You`re successfuly loginned!')
        setEmail('')
        setPassword('')
      })
      .catch((err) => {
        if (
          err.message == "Firebase: Error (auth/invalid-login-credentials)."
        ) {
          setLoginNotfication(true);
          setTextNotification('Wrong login or password!')
        } else if(err.message == "INVALID_LOGIN_CREDENTIALS") {
          setLoginNotfication(true)
          setLoginNotfication('Wrong login or password!')
        } 
        else if(err.message == "TOO_MANY_ATTEMPTS_TRY_LATER : Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.") {
          setLoginNotfication(true)
          setLoginNotfication('Too many attempts')
        }
        else {
          setLoginNotfication(true)
          setLoginNotfication('Error')
        }

      });
  };

  return (
    <div className="SignIn-window">
      <h1 className="pb-50">Sign In</h1>
      <form
        className="d-flex flex-column justify-center align-center mt-50"
        onSubmit={signIn}
      >
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
        <button className="button" type="submit">
          Sign In
        </button>
      </form>
      {loginNotfication && <LoginNotification text={textNotification} />}
    </div>
  );
};
export default MainLogin;
   