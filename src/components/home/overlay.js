import React from 'react';
import PropTypes from 'prop-types';

const Overlay = (props) => {

  const closeNav = () => {
    props.onClick();
  }

  const handleOnKeyUp = () => {
    props.searchKeyUp();
  }

  const handleOnClick = (styleName) => {
    props.updateMapStyle(styleName);
    closeNav();
  }

  return (
    <div id="myNav" className={props.overlayClass}>
      <div id="searchDiv">
        <label id="searchLabel" >Search</label>
        <input id="searchInput" type="text" />
      </div>

      <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
      <div className="overlay-content">
        {

          props.mapStyles.map((style, index) =>
          <div className="mapStyleDiv"
            key={index}
            onClick={() => handleOnClick(style.name)}>
            <div className="mapStyleDivContainer">
              <h2 className="previewTitle">{
                  style.name
                }
              </h2>
              <p className="mapStyleAuthor">
                Created By: {
                  style.author
                }
              </p>
              <img className="stylePreview" src={
                  style.image
                } />
              </div>
            </div>

          )
        }
      </div>
    </div>

  );
};

Overlay.propTypes = {
  overlayClass: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Overlay;
