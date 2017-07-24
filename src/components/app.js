// This component handles the App template used on every page.
import React from 'react';
import PropTypes from 'prop-types';
// import { Link, IndexLink } from 'react-router';


class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
