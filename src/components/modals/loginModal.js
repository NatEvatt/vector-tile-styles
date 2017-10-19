import React from 'react';
import {GoogleLogin, GoogleLogout}  from 'react-google-login';

const LoginModal = ({responseGoogle, logoutGoogle, loginVisible, logoutVisible}) => {
    return (
        <div>
            <h1 className="modalHeader">Login</h1>
            <p>Please login to add a new vector tile style<br />
            Using google: </p>

            {
              loginVisible
                ? <GoogleLogin clientId="357217477337-f2ifm717ikgaobrp8oqjtp3hs45d4ib0.apps.googleusercontent.com"
                        className="googleButton"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}>
                        <div id="customBtn" className="customGPlusSignIn">
                            <span className="googleIcon"></span>
                            <span className="buttonText">Sign In</span>
                        </div>
                </GoogleLogin>
                : null
            }

            {
              logoutVisible
                ? <GoogleLogout
                    className="googleButton"
                    buttonText="Logout"
                    onLogoutSuccess={logoutGoogle} >
                    <div id="customBtn" className="customGPlusSignIn">
                        <span className="googleIcon"></span>
                        <span className="buttonText">Log Out</span>
                    </div>
                </GoogleLogout>
                : null
            }
        </div>
    );
}

export default LoginModal;
