import React, { Component, useState } from 'react';
import {BrowserRouter,Routes,Route, useNavigate, Navigate} from "react-router-dom";
import {useAuth} from "../contexts/AuthContext";
import { db } from '../firebase';

const CurrentUserRoutes = ({children}) => {

   const {currentUser} = useAuth();

   const [roles, setRoles] = useState("");

   if(currentUser){
    db.collection('users').doc(currentUser.uid).get().then(doc => {
        console.log(doc.data().role)
        setRoles(doc.data().role)
    })
   }
//    const navigate = useNavigate();

   return currentUser ? children : <Navigate to="/" />
}

export default CurrentUserRoutes;