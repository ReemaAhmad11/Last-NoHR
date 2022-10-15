import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {useAuth} from "../contexts/AuthContext";
import ValidateLogin from './ValidateLogin';
import background from '../images/background.jpg';
import noaawinLogo from '../images/noaawinLogo.PNG';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
import swal from 'sweetalert';


function Login() {

    const {login} = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [submit, setSubmit] = useState(false);

    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
    };
     
    const handleRegister = () => {
        navigate("/signup")
    };

    async function handleFormSubmit(event){
        event.preventDefault();

        const validationResult = ValidateLogin(email, password)

        if(validationResult){
            setErrors(validationResult);
        }
        else{

            // navigate("/homepage")
            try{
                setErrors("")
                setSubmit(true)
                await login(email, password)

                navigate("/homepage")
            
            } catch(e){
                if(e.code.startsWith("auth/user-not-found")){
                    swal({
                        title: "الإيميل غير مسجل مسبقاً" ,
                        text: "فضلاً قم بتسجيل حساب",
                        icon: "error",
                        button: false,
                      });
                      
                    navigate("/signup")
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

         <div>
           <h2 className="title">تسجيل الدخول</h2>
         </div>
         <form className="form-wrapper">
            <input
            className="input-email"
            type="text"
            name="email"
            value={email.email}
            onChange={handleEmail}
            placeholder="الإيميل"
            />
            <label className="email"><MdEmail /></label>

            {errors.email && <p className='error-email'>{errors.email}</p>}
         
            <input
            className="input-password"
            type="password"
            name="password"
            value={password.password}
            onChange={handlePassword}
            placeholder="كلمة المرور"
            />
            <label className="password"><RiLockPasswordFill /></label>

            {errors.password && <p className='error-password'>{errors.password}</p>}
    
            <button className="submit1"  onClick={handleFormSubmit} disabled={submit}>
                تسجيل الدخول
            </button>
            <p className="message">
                <b>ليس لديك حساب؟</b><a onClick={handleRegister}><b> قم بالتسجيل</b></a>
            </p>
        
        </form>
    </>
    )
}

export default Login;