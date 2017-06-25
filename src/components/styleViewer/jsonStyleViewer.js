import React from 'react';
// import PropTypes from 'prop-types';

const JsonStyleViewer = (props) => {
  return (
    <div id="jsonStyleViewer" className={props.jsonStyleClass}>
      <div id="jsonStyleViewerContent" className={props.jsonStyleClass}>
        <span id="jsonStyleViewerCloseSpan" onClick={props.closeJsonStyleViewer}>&times;</span>
        <pre>{props.styleJsonStringified}</pre>
      </div>
    </div>
  );
};

// SecondHeader.propTypes = {
//   currentStyleName: PropTypes.string.isRequired
// };

export default JsonStyleViewer;
