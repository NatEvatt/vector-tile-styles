import React from 'react';
import PropTypes from 'prop-types';

const SecondHeader = (props) => {

  // const handleChange = (e) => {
  //   props.onChange(e);
  // };

  const handleOpen = (e) => {
    props.openOptions(e);
  };

  const jsonStyleDisabled = (props.currentStyleOptions.jsonStyle) ? "" : "disabled";
  const githubDisabled = (props.currentStyleOptions.github) ? "" : "disabled";

  const handleOnClick = (styleName) => {
    props.jsonStyleOnclick(styleName);
  };

  return (
    <div>
      <div id="secondHeader">
        <div className="navLeft">
          <li className="sub-menu-parent">
            <span className="dotOptions">⋮</span>
            <ul className="sub-menu">
                <li><a href="#">{props.currentStyleOptions.name}</a></li>
                <li><a className={githubDisabled} href={props.currentStyleOptions.github}>Github page</a></li>
                <li><a className={jsonStyleDisabled} onClick={() => handleOnClick(props.currentStyleOptions.name)}
                  >View JSON Style</a></li>
                <li><a href="#">{props.currentStyleOptions.author}</a></li>
          </ul>
        </li>
      </div>
      <span className="openButton"
        onClick={handleOpen}>
        <img className="openButtonImage" src="../images/downArrowBlue.png" />
      </span>
      <div className="navRight">
        <div id="currentBasemapTitle">Current Basemap: {props.currentStyleOptions.name}</div>
      </div>
    </div>
  </div>
);
};

SecondHeader.propTypes = {
  onChange: PropTypes.func.isRequired,
  openOptions: PropTypes.func.isRequired,
  currentStyleOptions: PropTypes.object.isRequired
};

export default SecondHeader;
