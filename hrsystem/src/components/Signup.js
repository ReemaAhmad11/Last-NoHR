import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import VaildateSignup from './ValidateSignup';
import background from '../images/background.jpg';
import noaawinLogo from '../images/noaawinLogo.PNG';
import {useAuth} from "../contexts/AuthContext";
import { FaUser } from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
import { db } from '../firebase';
import swal from 'sweetalert';

function Signup(){

    const {signup} = useAuth();
    const [name, setName] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [submit, setSubmit] = useState(false);

    const [errors, setErrors] = useState({});

    const [emailErr, setEmailErr] = useState("");

    const navigate = useNavigate();

    const handleName = (event) => {
        setName(event.target.value);
    };

    const handlePhoneNum = (event) => {
        setPhoneNum(event.target.value);
    };

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
    };
    
    const handleSignup = () => {
        navigate("/")
    };

    async function handleFormSubmit(event){
        event.preventDefault();

        const validationResult = VaildateSignup(name, phoneNum, email, password);

        if(validationResult){
            setErrors(validationResult);
        }
        else{

            try{
                setErrors("")
                setSubmit(true)
                await signup(email, password).then(user => {
                    db.collection("users").doc(user.user.uid).set({
                        name: name,
                        phoneNum: phoneNum,
                        email: email,
                        role: "user"

                    })
                })

                swal({
                    title: "تم تسجيلك بنجاح",
                    text: "فضلاً قم بتسجيل الدخول",
                    icon: "success",
                    button: false,
                  });

                navigate("/")

            } catch(e){
                console.log(e)
                var error=""
                if(e.code.startsWith("auth/email-already-in-use")){
                    error = "البريد الإلكتروني مسجل مسبقاً";
                    setEmailErr(error)
                    return setSubmit(false)
                }
            }
            
        }
    };

    return (
        <>
        <img src={background} className="register-background" />
        <img src={noaawinLogo} className="logo" />

            <div className="company-name1">
                <b>نظام نعاون للنقل الطبي الإسعافي</b>
            </div>
            <div className="company-name1-1">
                 <b>للموارد البشرية</b>
            </div>

            <a href='https://twitter.com/noaawin?s=21&t=xFsif2babApW_li7N1xmew' className="twitter"><BsTwitter /></a>

            <a href='https://www.instagram.com/noaawin/?igshid=YmMyMTA2M2Y%3D' className="instagram"><AiFillInstagram /></a>

            <a href='https://www.linkedin.com/in/noaawin-ltd-1b5b31230/' className="linked-in"><ImLinkedin /></a>

           <h2 className="title2">تسجيل حساب</h2>
           <form className="form-wrapper">
                      
            <input
            className="input-name"
            type="text"
            name="name"
            value={name.name}
            onChange={handleName}
            placeholder="الإسم"
            />
            <label className="name"><FaUser /></label>

            {errors.name && <p className='error-name'>{errors.name}</p>}

            <input
            className="input-phone-num"
            type="text"
            name="phoneNum"
            value={phoneNum.phoneNum}
            onChange={handlePhoneNum}
            placeholder="رقم الجوال"
            />
            <label className="phone-num"><AiFillPhone /></label>

            {errors.phoneNum && <p className='error-phoneNum'>{errors.phoneNum}</p>}

            <input
            className="input-email-signup"
            type="text"
            name="email"
            value={email.email}
            onChange={handleEmail}
            placeholder="الإيميل"
            />
            <label className="email-signup"><MdEmail /></label>

            {errors.email && <p className='errors-email'>{errors.email}</p>}
            {emailErr && <p className='errors-email-registered'>{emailErr}</p>}

              <input
              className="input-password-signup"
              type="password"
              name="password"
              value={password.password}
              onChange={handlePassword}
              placeholder="كلمة المرور"
              />
              <label className="password-signup"><RiLockPasswordFill /></label>

              {errors.password && <p className='errors-password'>{errors.password}</p>} 

            <button className="submit2" onClick={handleFormSubmit} disabled={submit}>
                 تسجيل
            </button>
            <p className="message2">
                 <b>لديك حساب؟</b> <a onClick={handleSignup}><b> سجل الدخول</b></a>
            </p>
           </form>
        </>
    )

}

export default Signup;