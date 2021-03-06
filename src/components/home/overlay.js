import React, { Component } from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";
import CreateMapStyle from "../modals/createMapStyle";
import UploadImage from "../modals/uploadImage";
import PleaseLogin from "../modals/pleaseLogin";
import InitialState from "../../reducers/initialState";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as MapActions from "../../actions/mapActions";
import * as UploadActions from "../../actions/uploadActions";
import ModalStyles from "../modals/modalStyles";

class Overlay extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      mapStyles: this.props.mapStyles,
      filteredMapStyles: this.props.mapStyles,
      modalIsOpen: false,
      newStyle: InitialState.newStyle,
      createStyleDisplay: "block",
      uploadImageDisplay: "none",
      uploadedImage: "",
      formValidated: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.closeNav = this.closeNav.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.saveStyle = this.saveStyle.bind(this);
    this.updateNewStyleState = this.updateNewStyleState.bind(this);
    this.imageUploadChange = this.imageUploadChange.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  componentWillReceiveProps = function(newProps) {
    this.setState({
      mapStyles: newProps.mapStyles,
      filteredMapStyles: newProps.mapStyles
    });
  };

  closeNav() {
    this.props.onClick();
    this.setState({
      filteredMapStyles: this.props.mapStyles
    });
  }

  handleChange(event) {
    let regx = new RegExp(event.target.value, "i");
    let filteredMapStyles = this.state.mapStyles.filter(function(style) {
      return regx.test(style.name);
    });

    this.setState({
      filteredMapStyles: filteredMapStyles
    });
  }

  handleOnClick(styleName) {
    this.props.updateMapStyle(styleName);
    this.closeNav();
  }

  openModal() {
    this.setState({
      modalIsOpen: true,
      createStyleDisplay: "block",
      uploadImageDisplay: "none"
    });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  // finish() {
  //   this.setState({
  //     modalIsOpen: false,
  //     uploadedImage: imageList.download,
  //     mapStyles: newMapStyles,
  //     newStyle: {
  //       name: "",
  //       url: "",
  //       author: "",
  //       image: "",
  //       github: "",
  //       jsonStyle: "",
  //       type: "Mapbox_Remote"
  //     },
  //     createStyleDisplay: "block",
  //     uploadImageDisplay: "none"
  //   });
  // }

  saveStyle() {
    event.preventDefault();
    this.setState({ saving: true });
    this.props.actions
      .saveNewStyle(this.state.newStyle)
      .then(() => {
        this.setState({
          createStyleDisplay: "none",
          uploadImageDisplay: "block"
        });
      })
      .catch(() => {
        this.setState({ saving: false });
      });
  }

  updateNewStyleState(event) {
    const field = event.target.name;
    let newStyle = this.state.newStyle;
    newStyle[field] = event.target.value;
    this.validateForm(newStyle);
    return this.setState({ newStyle: newStyle });
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
      .uploadImage(files, this.state.newStyle)
      .then(imageList => {
        let i = this.state.mapStyles.length - 1; // number of newly added style
        let newMapStyles = this.state.mapStyles;
        newMapStyles[i]["image"] = imageList.download;
        this.setState({
          uploadedImage: imageList.download,
          mapStyles: newMapStyles,
          newStyle: {
            name: "",
            url: "",
            author: "",
            image: "",
            github: "",
            jsonStyle: "",
            type: "Mapbox_Remote"
          }
        });
      });
  }

  render() {
    const defaultImage =
      "http://awesome.dev/git/natevatt/vts-api/public/mapPreviews/no_image/thumbs/mapNoImage.png";
    return (
      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={ModalStyles}
          contentLabel="Example Modal"
        >
          <CreateMapStyle
            newStyle={this.state.newStyle}
            onChange={this.updateNewStyleState}
            display={this.state.createStyleDisplay}
            formVisible={this.props.buttonState.logoutVisible}
          />

          <UploadImage
            imageUploadChange={this.imageUploadChange}
            display={this.state.uploadImageDisplay}
            uploadedImage={this.state.uploadedImage}
          />

          <PleaseLogin
            notSignedInVisible={this.props.buttonState.loginVisible}
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
            onClick={this.closeModal}
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
        <div id="myNav" className={this.props.overlayClass}>
          <button
            id="createMapStyleButton"
            className="myButtons"
            onClick={this.openModal}
          >
            Add A Style
          </button>

          <h2 className="overlayHeader">Choose a Map Style to Explore</h2>

          <div id="searchDiv">
            <label className="title">Search</label>
            <input
              id="searchInput"
              className="inputBox"
              type="text"
              onChange={this.handleChange}
            />
          </div>

          <a
            href="javascript:void(0)"
            className="closebtn"
            onClick={this.closeNav}
          >
            &times;
          </a>
          <div className="overlay-content">
            {this.state.filteredMapStyles.map((style, index) => (
              <div
                className="mapStyleDiv"
                key={index}
                onClick={() => this.handleOnClick(style.name)}
              >
                <div className="mapStyleDivContainer">
                  <h2 className="previewTitle">{style.name}</h2>
                  <p className="mapStyleAuthor">Created By: {style.author}</p>
                  <img
                    className="stylePreview"
                    src={style.image.length > 1 ? style.image : defaultImage}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

Overlay.propTypes = {
  overlayClass: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  updateMapStyle: PropTypes.func.isRequired,
  mapStyles: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  mapState: PropTypes.object.isRequired,
  buttonState: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    mapState: state.mapState,
    buttonState: state.buttonState
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

export default connect(mapStateToProps, mapDispatchToProps)(Overlay);
