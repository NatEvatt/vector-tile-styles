import React from "react";
import PropTypes from "prop-types";

const UploadImage = ({ imageUploadChange, display, uploadedImage }) => {
  // const divDisplay = display ? "block" : "none";
  return (
    <div style={{ display: display }}>
      <h2 className="title">Upload A Map Image</h2>

      <table className="createMapStyleTable">
        <tbody>
          <tr>
            <td>
              <label>UPLOAD AN IMAGE</label>
            </td>
            <td>
              <a className="js-browseLink" href="#">
                <label htmlFor="photoFileInput">
                  Browse
                  <img src="images/folder.svg" className="uploadFolder" />
                </label>
              </a>
              <input
                multiple
                className="js-photoFileInput hide"
                type="file"
                accept="image/*"
                id="photoFileInput"
                onChange={e => imageUploadChange(e.target.files)}
              />
            </td>
          </tr>
        </tbody>
      </table>

      <img src={uploadedImage} />
      <p className="modalTip">
        For best results, upload an image that is 300px wide and 200px tall.
        Otherwise, the program will resize and crop it for you
      </p>
    </div>
  );
};

UploadImage.propTypes = {
  imageUploadChange: PropTypes.func.isRequired,
  display: PropTypes.string.isRequired,
  uploadedImage: PropTypes.string.isRequired
};

export default UploadImage;
