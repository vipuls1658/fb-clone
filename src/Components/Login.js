import { Button } from '@material-ui/core'
import React from 'react'
import './Css/Login.css'
import {auth, provider } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
    const [state, dispatch] = useStateValue();
    
    const signIn = () => {

        auth
        .signInWithPopup(provider)
        .then((result) => {

            dispatch({
                type:actionTypes.SET_USER,
                user:result.user,
            });
        })
        .catch((error) => alert(error.message));
    }; 
    return (
        <div className="Login">
            <div className="login_logo">
                <img src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512" alt=""/>
                <img src="https://freepngimg.com/thumb/facebook/24851-7-facebook-logo.png" alt="" />
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login
