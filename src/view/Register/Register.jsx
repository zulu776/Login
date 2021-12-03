import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//Action
import { handleRegisterAction } from "../../Redux/actions/login.action";

//Styles



const Register = () => {

    const { message } = useSelector(store => store.error);
    const dispatch = useDispatch();

    const [userInfo, setUserInfo] = useState({
        userName: "",
        email: "",
        password: ""
    });

    const handleRegister = e => {
        e.preventDefault();
        dispatch(handleRegisterAction(userInfo));
    };
    
    return (
        <div className="w-full h-screen flex justify-center items-center flex-col">
            <div className="w-2/3 tablet:w-4/5 flex login-container bg-green">
                <form className="w-1/2 m-auto flex flex-col justify-center items-center px-15 py-10 "
                onSubmit={handleRegister}
                >

                    {message && <p className="text-red text-center mb-5">{message}</p>}

                    <input 
                        type="text"
                        placeholder="User name"
                        className="w-3/4 tablet:w-52 mb-10 py-2 px-1 border-2 border-light_green "
                        onChange={e => setUserInfo({...userInfo, UserName: e.target.value})}
                    />

                    <input 
                        type="text"
                        placeholder="E-mail"
                        className="w-3/4 tablet:w-52 mb-10 py-2 px-1 border-2 border-light_green "
                        onChange={e => setUserInfo({...userInfo, email: e.target.value})}
                    />

                    <input 
                        type="password"
                        placeholder="Password" 
                        className="w-3/4 tablet:w-52 mb-10 py-2 px-1 border-2 border-light_green textfield"
                        onChange={e => setUserInfo({...userInfo, password: e.target.value})}
                    />

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

export default Register
