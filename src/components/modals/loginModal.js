import React from 'react';
import GoogleLogin from 'react-google-login';

const LoginModal = ({responseGoogle}) => {



    return (
        <div>
            <h1 className="modalHeader">Login</h1>
            <p>Please login to add a new vector tile style<br />
            Using google: </p>
            <GoogleLogin clientId="357217477337-f2ifm717ikgaobrp8oqjtp3hs45d4ib0.apps.googleusercontent.com"
                className="google-login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}>
                <div id="customBtn" className="customGPlusSignIn">
                    <span className="googleIcon"></span>
                    <span className="buttonText">Sign In</span>
                </div>
            </GoogleLogin>
        </div>
    );
}

export default LoginModal;
