import React from 'react';
import {GoogleLogin, GoogleLogout}  from 'react-google-login';
import PropTypes from 'prop-types';

const LoginModal = ({responseGoogle, logoutGoogle, loginVisible, logoutVisible}) => {
    return (
        <div>
            <h1 className="modalHeader" style={{display: loginVisible}}>Login</h1>
            <h1 className="modalHeader" style={{display: logoutVisible}}>Logout</h1>
            <p>Please login to add a new vector tile style<br />
            Using google: </p>

            <div style={{display: loginVisible}}>
                <GoogleLogin clientId="357217477337-f2ifm717ikgaobrp8oqjtp3hs45d4ib0.apps.googleusercontent.com"
                    className="googleButton"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle} >
                    <div id="customBtn" className="customGPlusSignIn" >
                        <span className="googleIcon" />
                        <span className="buttonText">Sign In</span>
                    </div>
                </GoogleLogin>
            </div>
            <div style={{display: logoutVisible}}>
                <GoogleLogout
                    className="googleButton"
                    buttonText="Logout"
                    onLogoutSuccess={logoutGoogle} >
                    <div id="customBtn" className="customGPlusSignIn">
                        <span className="googleIcon" />
                        <span className="buttonText">Log Out</span>
                    </div>
                </GoogleLogout>
            </div>
        </div>
    );
};

LoginModal.propTypes = {
    responseGoogle: PropTypes.func.isRequired,
    logoutGoogle: PropTypes.func.isRequired,
    loginVisible: PropTypes.string.isRequired,
    logoutVisible: PropTypes.string.isRequired
};

export default LoginModal;
