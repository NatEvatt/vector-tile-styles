import * as esriLoader from 'esri-loader';
import React from 'react';

export default class ESRIMapPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { active: false }
    // this.handleMove = this.handleMove.bind(this)
  }

  componentDidMount() {
    // has the ArcGIS API been added to the page?
    if (!esriLoader.isLoaded()) {
      // no, lazy load it the ArcGIS API before using its classes
      esriLoader.bootstrap((err) => {
        if (err) {
          console.error(err);
        } else {
          // once it's loaded, create the map
          // createMap();
          console.log('I am esri i am going to create the map');
        }
      }, {
        // use a specific version instead of latest 4.x
        // url: 'https://js.arcgis.com/3.20/'
      });
    } else {
      // ArcGIS API is already loaded, just create the map
      // createMap();
    }
  }

  render() {
    // const { children } = this.props
    // const { map } = this.state

    return (
      <div>
      <p>You are a butthole</p>
      </div>
      // <div style={ this.props.containerStyle } ref={(x) => {
      //   this.container = x
      // }}>
      // { map && children }
      // </div>
    )
  }
}
