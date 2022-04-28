import React from 'react'
import "./forgotPassword.css"
import { Link } from 'react-router-dom';

export default function ForgotPassword() {
    return (
        <div>
            <Link className='forgot-goBack' to='/log_in'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
        <div className="forgotpassword">
            
            <h1 className="forgottext">
            Forgot Your Password?
            </h1>
            <h3 className="forgoth2">
                Please enter your registered E-mail id.
            </h3>
            <input className='forgotinput' type="email" placeholder='Enter your E-mail'></input>
            <button className="forgot-password-submit" type="submit">
                Forgot Password
            </button>
        </div>
        </div>
    )
}
