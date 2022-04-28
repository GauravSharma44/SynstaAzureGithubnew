import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import "./google.css"

const clientId = "955927754598-s858l9lgkd40p2c845oom111kihl91cb.apps.googleusercontent.com";

function GoogleFacebookLogin() {

    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);
    const onLoginSuccess = (res) => {
        console.log('Login Success:', res.profileObj);
        setShowloginButton(false);
        setShowlogoutButton(true);
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    const onSignoutSuccess = () => {
        alert("You have been logged out successfully");
        console.clear();
        setShowloginButton(true);
        setShowlogoutButton(false);
    };
    return (
        <div className='google'>
            { showloginButton ?
                <GoogleLogin
                    clientId={clientId}
                    buttonText= "Continue With Google"
                    
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                /> : null}

            { showlogoutButton ?
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Sign Out"
                    onLogoutSuccess={onSignoutSuccess}
                >
                </GoogleLogout> : null
            }
        </div>
    );
}
export default GoogleFacebookLogin;