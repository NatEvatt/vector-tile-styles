import React from 'react';
import {Link} from 'react-router';
import Modal from 'react-modal';
import ModalStyles from '../modals/modalStyles';
import LoginModal from '../modals/loginModal';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as mapActions from '../../actions/userActions';
import PropTypes from 'prop-types';

class FirstHeader extends React.Component {
    constructor(props, context){
        super(props, context);

        this.state = {
            modalIsOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.responseGoogle = this.responseGoogle.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    responseGoogle (googleUser) {
        var id_token = googleUser.getAuthResponse().id_token;
        var profile = googleUser.getBasicProfile();
        let userData = {
            "name": profile.getName(),
            "image": profile.getImageUrl(),
            "email": profile.getEmail(),
            "id_token": id_token
        }
        this.props.actions.loadUserData(userData);
    }


    render() {
        return (
            <div>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={ModalStyles}
                    contentLabel="Create Map Style"
                    >
                    <LoginModal
                        responseGoogle={this.responseGoogle}/>
                    <button className="myButtons" onClick={this.closeModal} id="closeButton">CLOSE</button>
                    <button className="myButtons" onClick={this.saveStyle}>SAVE</button>

                </Modal>
                <div className="container-fluid nav-container">
                    <Link to="/">
                        <div className="navbar-header">
                            <img className="logoIcon" src="../images/mapIcon3_white.png" />
                            <h3>Vector Tile Styles</h3>
                        </div>
                    </Link>
                </div>
                <div id="loginButton" onClick={this.openModal}>Login</div>
                <span id="userSpan" >{this.props.userData.name.toUpperCase()}</span>
            </div>
        );
    }
}

function mapStateToProps (state) {
  return {
    userData: state.user
  };
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(mapActions, dispatch)
  };
}

FirstHeader.propTypes = {
   actions: PropTypes.object.isRequired,
   userData: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(FirstHeader);
