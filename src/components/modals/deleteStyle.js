import React from "react";
import PropTypes from "prop-types";

const DeleteStyle = ({ newStyle }) => {
  return (
    <div>
      <h2 className="title">DELETE STYLE</h2>
      <p className="deleteText">
        You are about to permanently the style {newStyle.name}. Are you sure
        this<br /> is what you want to do?
      </p>
    </div>
  );
};

DeleteStyle.propTypes = {
  newStyle: PropTypes.object.isRequired
};

export default DeleteStyle;
