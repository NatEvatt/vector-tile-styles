import React from "react";
import PropTypes from "prop-types";

const CreateStyle = ({ newStyle, onChange, display }) => {
  return (
    <div style={{ display: display }}>
      <h2 className="title">Add New Map Style</h2>
      <div id="mapStyleTypeDiv">
        <input
          type="radio"
          className="radioButton"
          name="type"
          value="Mapbox_Remote"
          onChange={onChange}
        />
        <label className="radioButtonLabel">Mapbox</label>
        <input
          type="radio"
          className="radioButton"
          name="type"
          value="ESRI"
          onChange={onChange}
        />
        <label className="radioButtonLabel">ESRI</label>
        <input
          type="radio"
          className="radioButton"
          name="type"
          value="Local"
          onChange={onChange}
        />
        <label className="radioButtonLabel">OpenMapTiles</label>
      </div>
      <table className="createMapStyleTable">
        <tbody>
          <tr>
            <td>
              <label>NAME</label>
            </td>
            <td>
              <input
                type="text"
                name="name"
                className="inputBox sml"
                value={newStyle.name}
                onChange={onChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>URL</label>
            </td>
            <td>
              <input
                type="text"
                className="inputBox sml"
                name="url"
                value={newStyle.url}
                onChange={onChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>AUTHOR</label>
            </td>
            <td>
              <input
                type="text"
                className="inputBox sml"
                name="author"
                value={newStyle.author}
                onChange={onChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>GITHUB LINK</label>
            </td>
            <td>
              <input
                type="text"
                className="inputBox sml"
                name="github"
                value={newStyle.github}
                onChange={onChange}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

CreateStyle.propTypes = {
  newStyle: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  display: PropTypes.string.isRequired
};

export default CreateStyle;
