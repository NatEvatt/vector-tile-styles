import React, { Component } from 'react';
// import ReactMap from "react-mapbox-gl";
import ESRIMap from './esriMap';
// import JsonDisplayHelper from '../utils/jsonDisplayHelper';

const accessToken = "pk.eyJ1IjoibmF0ZXZhdHQiLCJhIjoiR1hVR1ZIdyJ9.gFwSyghJZIERfjLkzgTx6A";

export default class MapPage extends Component {

  constructor(props, context){
    super(props, context);

    this.state = {
      height: (window.innerHeight - 83) + 'px',
      width: window.innerWidth + 'px'
    }
  }



  render() {

    const containerStyle = {
      height: this.state.height,
      width: this.state.width
    };

    return (
      <div>
        <ESRIMap
          containerStyle={containerStyle} />
      </div>

    );
  }
}
