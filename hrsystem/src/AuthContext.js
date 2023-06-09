import React, { useContext, useState, useEffect } from "react"
import {auth} from "../firebase"
import firebase from "firebase/app"
import { db } from "../firebase"
import * as firebase from 'firebase';


const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)
  const timestamp = new Date();
  //const [role, setRole] = useState()

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function setUpRecaptcha(number) {
    const recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",{}
    );
    recaptchaVerifier.render();
    return auth.signInWithPhoneNumber(number, recaptchaVerifier);
  }

  function logout() {
    return auth.signOut()
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email)
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password)
  }
  

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
      
      
    })
    
    return unsubscribe
  }, [])


  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    setUpRecaptcha
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
