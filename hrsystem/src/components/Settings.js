import React from "react";
import { useNavigate } from "react-router-dom";

function Settings(){

    const navigate = useNavigate();

    const backFromSettings = () => {
        navigate("/homepage")
    };

    return(
        <>
         <div className="header-background1"></div>
         <div className="header-background2">
           <div className="header-logo"></div>

           <button className="back-from-settings" onClick={backFromSettings}>
             <b>العودة إلى القائمة الرئيسية</b>
           </button>
         </div>
         <div className="border-horizantal"></div>
         <div className="border-vertical"></div>
        </>
    )
}
export default Settings;