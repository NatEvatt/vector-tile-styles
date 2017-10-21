import React from 'react';
import {Link} from 'react-router';
import Modal from 'react-modal';
import ModalStyles from '../modals/modalStyles';
import LoginModal from '../modals/loginModal';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as MapActions from '../../actions/userActions';
import * as ButtonStateActions from '../../actions/buttonStateActions';
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
        this.logoutGoogle = this.logoutGoogle.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    logoutGoogle() {
        this.props.actions.clearUserData();
        this.props.actions.toggleLoginButtons();
        this.closeModal();
    }

    responseGoogle (googleUser) {
        let id_token = googleUser.getAuthResponse().id_token;
        let profile = googleUser.getBasicProfile();
        let userData = {
            "name": profile.getName(),
            "image": profile.getImageUrl(),
            "email": profile.getEmail(),
            "id_token": id_token
        };
        this.props.actions.loadUserData(userData);
        this.props.actions.toggleLoginButtons();
        this.closeModal();
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
                        responseGoogle={this.responseGoogle}
                        logoutGoogle={this.logoutGoogle}
                        loginVisible={this.props.buttonState.loginVisible}
                        logoutVisible={this.props.buttonState.logoutVisible} />

                    <button className="myButtons" onClick={this.closeModal} id="closeButton">CLOSE</button>

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
        buttonState: state.buttonState,
        userData: state.user
    };
}

function mapDispatchToProps (dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, ButtonStateActions, MapActions), dispatch)
    };
}

FirstHeader.propTypes = {
    actions: PropTypes.object.isRequired,
    userData: PropTypes.object.isRequired,
    buttonState: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(FirstHeader);
