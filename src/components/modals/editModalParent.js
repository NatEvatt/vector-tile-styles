import React, { Component } from "react";
import ModalStyles from "../modals/modalStyles";
import CreateMapStyle from "../modals/createMapStyle";
import Modal from "react-modal";

class EditModalParent extends Component {
  constructor(props, context) {
    super(props, context);

  }

  updateNewStyleState(event) {
    const field = event.target.name;
    let newStyle = this.state.newStyle;
    newStyle[field] = event.target.value;
    return this.setState({ newStyle: newStyle });
  }

  closeModal(){
      this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.props.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={ModalStyles}
          contentLabel="Example Modal"
        >
          <CreateMapStyle
            newStyle={this.props.currentStyleOptions}
            onChange={this.updateNewStyleState}
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
    </div>
    );
  }
}

export default EditModalParent;
