import React from 'react';
let Highlight = require('react-highlight');
import PropTypes from 'prop-types';

const JsonStyleViewer = (props) => {
  return (
    <div id="jsonStyleViewer" className={props.jsonStyleClass}>
      <div id="jsonStyleViewerContent" className={props.jsonStyleClass}>
        <span id="jsonStyleViewerCloseSpan" onClick={props.closeJsonStyleViewer}>&times;</span>
        <Highlight className="atom-one-light">
          {props.styleJsonStringified}
        </Highlight>
      </div>
    </div>
  );
};

JsonStyleViewer.propTypes = {
  jsonStyleClass: PropTypes.string.isRequired,
  closeJsonStyleViewer: PropTypes.func.isRequired,
  styleJsonStringified: PropTypes.string.isRequired
};

export default JsonStyleViewer;
