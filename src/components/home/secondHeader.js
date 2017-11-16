import React, { Component } from "react";
import PropTypes from "prop-types";
import ModalStyles from "../modals/modalStyles";
import CreateMapStyle from "../modals/createMapStyle";
import Modal from "react-modal";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as mapActions from "../../actions/mapActions";

class SecondHeader extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      modalIsOpen: false,
      newStyle: this.props.currentStyleOptions,
      createStyleDisplay: "block"
    };

    this.updateNewStyleState = this.updateNewStyleState.bind(this);
    this.saveStyle = this.saveStyle.bind(this);
  }

  componentWillReceiveProps = function(newProps) {
    this.setState({
      newStyle: newProps.currentStyleOptions
    });
  };

  handleOpen = e => {
    this.props.openOptions(e);
  };

  handleOnClick = styleName => {
    this.props.jsonStyleOnclick(styleName);
  };

  editStyleOnClick = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  saveStyle() {
    event.preventDefault();
    this.setState({ saving: true });
    this.props.actions
      .saveNewStyle(this.state.newStyle)
      .then(() => {
        this.setState({
          modalIsOpen: false,
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
      })
      .catch(() => {
        this.setState({ saving: false });
      });
  }

  updateNewStyleState(event) {
    const field = event.target.name;
    let newStyle = this.state.newStyle;
    newStyle[field] = event.target.value;
    return this.setState({ newStyle: newStyle });
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
          contentLabel="Example Modal"
        >
          <CreateMapStyle
            newStyle={this.state.newStyle}
            onChange={this.updateNewStyleState}
            display={this.state.createStyleDisplay}
          />

          <button
            className="myButtons"
            onClick={this.closeModal}
            id="closeButton"
          >
            CLOSE
          </button>
          <button className="myButtons" onClick={this.saveStyle}>
            SAVE
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
                    onClick={() =>
                      this.editStyleOnClick(
                        this.props.currentStyleOptions.name
                      )}
                    href="#"
                  >
                    Edit Style Details
                  </a>
                </li>
              </ul>
            </li>
          </div>
          <span className="openButton" onClick={this.handleOpen}>
            <img
              className="openButtonImage"
              src="../images/downArrowBlue.png"
            />
          </span>
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
};

function mapStateToProps(state) {
  return {
    mapState: state.mapState
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(mapActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SecondHeader);
