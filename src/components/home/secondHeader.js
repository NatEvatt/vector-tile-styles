import React, { Component } from "react";
import PropTypes from "prop-types";
import ModalStyles from "../modals/modalStyles";
import CreateMapStyle from "../modals/createMapStyle";
import DeleteStyle from "../modals/deleteStyle";
import UploadImage from "../modals/uploadImage";
import Modal from "react-modal";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as MapActions from "../../actions/mapActions";
import * as UploadActions from "../../actions/uploadActions";

class SecondHeader extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      modalIsOpen: false,
      deleteModalIsOpen: false,
      newStyle: {},
      createStyleDisplay: "block",
      uploadImageDisplay: "none",
      formValidated: true
    };

    this.updateNewStyleState = this.updateNewStyleState.bind(this);
    this.saveStyle = this.saveStyle.bind(this);
    this.imageUploadChange = this.imageUploadChange.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.deleteStyle = this.deleteStyle.bind(this);
  }

  componentWillReceiveProps = function(newProps) {
    // let newStyle = newProps.currentStyleOptions;
    let newStyle = Object.assign({}, newProps.currentStyleOptions);
    this.setState({
      newStyle: newStyle
    });
  };

  handleOpen = e => {
    this.props.openOptions(e);
  };

  handleOnClick = styleName => {
    this.props.jsonStyleOnclick(styleName);
  };

  editStyleOnClick = () => {
    this.validateForm(this.state.newStyle);
    this.setState({ modalIsOpen: true });
  };

  deleteStyleCheckOnClick = () => {
    this.setState({ deleteModalIsOpen: true });
  };

  imageUploadChange(files) {
    if (files) {
      //  check file type, this is just a fall-back,
      //      the input field already has accept="image/*"
      for (let i = 0; i < files.length; i++) {
        if (files[i].type.match(/image\/.*/) === null) {
          alert("Unsupported File Type");
          return;
        }
      }
    }
    this.props.actions
      .uploadImage(files, this.props.mapState.newStyle)
      .then(imageList => {
        let thisStyle = this.state.newStyle;
        thisStyle["image"] = imageList.download;
        this.setState({
          newStyle: thisStyle
        });
      });
  }

  closeModal = () => {
    this.setState({
      modalIsOpen: false,
      deleteModalIsOpen: false,
      createStyleDisplay: "block",
      uploadImageDisplay: "none"
    });
  };

  finish = () => {
    this.setState({
      modalIsOpen: false,
      createStyleDisplay: "block",
      uploadImageDisplay: "none"
    });
  };

  saveStyle() {
    event.preventDefault();
    // this.setState({ saving: true });
    this.props.actions
      .editStyle(this.state.newStyle)
      .then(() => {
        this.setState({
          createStyleDisplay: "none",
          uploadImageDisplay: "block"
        });
      })
      .catch(() => {
        // this.setState({ saving: false });
      });
  }

  updateNewStyleState(event) {
    const field = event.target.name;
    let newStyle = this.state.newStyle;
    newStyle[field] = event.target.value;
    this.validateForm(newStyle);
    return this.setState({ newStyle: newStyle });
  }

  deleteStyle() {
    let thisMapStyle = this.state.newStyle;
    this.props.actions.deleteStyle(thisMapStyle).then(() => {
      this.setState({
        deleteModalIsOpen: false
      });
    });
  }

  validateForm(newStyle) {
    if (
      newStyle.name.length >= 1 &&
      newStyle.author.length >= 1 &&
      newStyle.url.length >= 1
    ) {
      this.setState({
        formValidated: false
      });
    } else {
      this.setState({
        formValidated: true
      });
    }
  }

  render() {
    const githubDisabled = this.props.currentStyleOptions.github
      ? ""
      : "disabled";
    const jsonStyleDisabled = this.props.currentStyleOptions.jsonStyle
      ? ""
      : "disabled";
    const editDisabled = this.props.currentStyleOptions.editable
      ? ""
      : "disabled";

    return (
      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={ModalStyles}
          contentLabel="Edit MapStyle Modal"
        >
          <CreateMapStyle
            newStyle={this.state.newStyle}
            onChange={this.updateNewStyleState}
            display={this.state.createStyleDisplay}
          />

          <UploadImage
            imageUploadChange={this.imageUploadChange}
            display={this.state.uploadImageDisplay}
            uploadedImage={this.state.newStyle.image}
          />

          <button
            id="nextButton"
            className="myButtons"
            disabled={this.state.formValidated}
            onClick={this.saveStyle}
            style={{ display: this.state.createStyleDisplay }}
          >
            NEXT
          </button>

          <button
            id="saveButton"
            className="myButtons"
            style={{ display: this.state.uploadImageDisplay }}
            onClick={this.finish}
          >
            FINISH
          </button>

          <button
            className="myButtons"
            onClick={this.closeModal}
            id="closeButton"
          >
            CLOSE
          </button>
        </Modal>

        <Modal
          isOpen={this.state.deleteModalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={ModalStyles}
          contentLabel="Delete MapStyle Modal"
        >
          <DeleteStyle newStyle={this.state.newStyle} />
          <button
            id="closeButton"
            className="myButtons"
            onClick={this.closeModal}
          >
            CANCEL
          </button>

          <button
            id="closeButton"
            className="deleteWarning"
            onClick={this.deleteStyle}
          >
            YES, DELETE THIS STYLE
          </button>
        </Modal>

        <div id="secondHeader">
          <div className="navLeft">
            <li className="sub-menu-parent">
              <span className="dotOptions">⋮</span>
              <ul className="sub-menu">
                <li>
                  <a href="#">{this.props.currentStyleOptions.name}</a>
                </li>
                <li>
                  <a
                    className={githubDisabled}
                    href={this.props.currentStyleOptions.github}
                  >
                    Github page
                  </a>
                </li>
                <li>
                  <a
                    className={jsonStyleDisabled}
                    onClick={() =>
                      this.handleOnClick(this.props.currentStyleOptions.name)}
                  >
                    View JSON Style
                  </a>
                </li>
                <li>
                  <a href="#">{this.props.currentStyleOptions.author}</a>
                </li>
                <li>
                  <a
                    className={editDisabled}
                    onClick={() => this.editStyleOnClick()}
                    href="#"
                  >
                    Edit Style
                  </a>
                  <a
                    className={editDisabled}
                    onClick={() => this.deleteStyleCheckOnClick()}
                    href="#"
                  >
                    Delete Style
                  </a>
                </li>
              </ul>
            </li>
          </div>
          <div className="openButton" onClick={this.handleOpen}>
            <p>Select a Map Style</p>
            <img
              className="openButtonImage"
              src="../images/downArrowBlue.png"
            />
          </div>
          <div className="navRight">
            <div id="currentBasemapTitle">
              Current Basemap: {this.props.currentStyleOptions.name}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SecondHeader.propTypes = {
  onChange: PropTypes.func.isRequired,
  openOptions: PropTypes.func.isRequired,
  currentStyleOptions: PropTypes.object.isRequired,
  jsonStyleOnclick: PropTypes.func.isRequired,
  userData: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  mapState: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    mapState: state.mapState
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      Object.assign({}, MapActions, UploadActions),
      dispatch
    )
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SecondHeader);
