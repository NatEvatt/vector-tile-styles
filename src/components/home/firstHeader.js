import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="container-fluid nav-container">
        <Link to="/">
        <div className="navbar-header">
          <img className="logoIcon" src="../images/mapIcon3_white.png" />
          <h3>Mapbox-GL-Style-Viewer</h3>
        </div>
        </Link>
      </div>
    );
  }
}

export default HomePage;
