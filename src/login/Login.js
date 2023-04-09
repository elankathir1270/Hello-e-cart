import { useState } from "react";
import {login } from '../reducers/userReducer';
import {useDispatch, } from 'react-redux';
import { useNavigate } from "react-router-dom";
import "./Login.css";

export const Login =()=>{

    const [userName, setuserName]= useState("");

    const dispatch= useDispatch();
    const navigate = useNavigate();

    return(
        <div className="loginContainer">

            <div className="home-title from-top"><h1>HELLO!</h1></div>
            <p className="sub-title from-bottom">a e-commerce website</p>

            <div className="loginInput">

            <input className="logField" type="text"
             placeholder="Enter your name" 
             onChange={(state)=>{
                    setuserName(state.target.value)
                }} />

                <button className="logBtn" onClick={()=>{
                    dispatch(login({username: userName}))
                    navigate("/home")
                    }}>
                        
                    Login
                    
                </button>

            </div>
             
        </div>

    )

}