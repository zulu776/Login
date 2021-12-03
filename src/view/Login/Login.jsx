import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./Login.style.css"

//Ant
import {
  GoogleOutlined
} from '@ant-design/icons';

//Action
import {
    handleGoogleLoginAction,
    handleLoginWithEmailAction
  } from "../../Redux/actions/login.action";


const Login = () => {

    const [values, setValues] = useState({ emailForm: "", password: "" });

    const { message } = useSelector(store => store.error);
    const dispatch = useDispatch();

    const handleGoogleLogin = e => {
        e.preventDefault();
        dispatch(handleGoogleLoginAction());
      };
    
      const handleLoginWithEmail = e => {
        e.preventDefault();
        dispatch(handleLoginWithEmailAction(values));
      };

    return (
        <div className="w-full h-screen flex justify-center items-center flex-col">
          <div className="w-2/3 tablet:w-4/5 flex login-container bg-green">
            <form className="w-1/2 m-auto flex flex-col justify-center items-center px-15 py-10 " 
            onSubmit={handleLoginWithEmail}>

              {message && <p className="text-red text-center mb-5">{message}</p>}   
          
              <GoogleOutlined 
              className="mb-5 border-2 hover:border-light_green"
              onClick={handleGoogleLogin}/>
                
              <input 
              type="text"
              placeholder="E-mail"
              className="w-3/4 tablet:w-52 mb-10 py-2 px-1 border-2 border-light_green "
              onChange={e => setValues({...values, emailForm: e.target.value})}
              />
              <input 
              type="password"
              placeholder="Password" 
              className="w-3/4 tablet:w-52 mb-10 py-2 px-1 border-2 border-light_green"
              onChange={e => setValues({...values, password: e.target.value})}
              />

              <p>
              If you are not registered,
              <Link to="/signup">
                Sign Up
                </ Link>
              </p>

              <input 
              type="submit" 
              value="Sign In"
              className="w-2/4 tablet:w-full mb-10 py-2 bg-light_green login-submit"
              />

             

            </form>
          </div>
        </div>
    )
}

export default Login
