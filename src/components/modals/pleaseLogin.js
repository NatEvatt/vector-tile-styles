import React from "react";
import PropTypes from "prop-types";

const PleaseLogin = ({ notSignedInVisible}) => {
  return (
    <div style={{display: notSignedInVisible}}>
        <h2>Please Login to create or edit a map style</h2>
    </div>
  );
};

PleaseLogin.propTypes = {
  notSignedInVisible: PropTypes.string.isRequired
};

export default PleaseLogin;
