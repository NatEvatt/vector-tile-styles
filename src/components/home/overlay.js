import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Overlay extends Component {
  // const Overlay = (props) => {

  constructor(props, context){
    super(props, context);
    debugger;
    this.state = {
      mapStyles: this.props.mapStyles,
      filteredMapStyles: this.props.mapStyles
    }

    this.handleChange = this.handleChange.bind(this);
    this.closeNav = this.closeNav.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  closeNav(){
    this.props.onClick();
    this.setState({
      filteredMapStyles: this.props.mapStyles
    });
  }

  handleChange(event){
    let regx = new RegExp(event.target.value, "i");
    let filteredMapStyles = this.state.mapStyles.filter(function(style){
      return regx.test(style.name);
    });

    this.setState({
      filteredMapStyles: filteredMapStyles
    });

    // this.props.searchKeyUp(event.target.value);
  }

  handleOnClick(styleName) {
    this.props.updateMapStyle(styleName);
    this.closeNav();
  }

  render() {
debugger;
    return (
      <div id="myNav" className={this.props.overlayClass}>
        <div id="searchDiv">
          <label id="searchLabel" >Search</label>
          <input id="searchInput" type="text" onChange={this.handleChange} />
        </div>

        <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
        <div className="overlay-content">
          {
            this.props.mapStyles.map((style, index) =>
            <div className="mapStyleDiv"
              key={index}
              onClick={()=>this.handleOnClick(style.name)}>
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

  }
}

Overlay.propTypes = {
  overlayClass: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
