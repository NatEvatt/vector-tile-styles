import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import CreateMapStyle from '../modals/createMapStyle';
import InitialState from '../../reducers/initialState';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as mapActions from '../../actions/mapActions';
import ModalStyles from '../modals/modalStyles';

class Overlay extends Component {

    constructor(props, context){
        super(props, context);

        this.state = {
            mapStyles: this.props.mapStyles,
            filteredMapStyles: this.props.mapStyles,
            modalIsOpen: false,
            newStyle: InitialState.newStyle
        };

        this.handleChange = this.handleChange.bind(this);
        this.closeNav = this.closeNav.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.saveStyle = this.saveStyle.bind(this);
        this.updateNewStyleState = this.updateNewStyleState.bind(this);
    }

    componentWillReceiveProps = function(newProps){
        this.setState({
            mapStyles: newProps.mapStyles,
            filteredMapStyles: newProps.mapStyles
        });
    }

    closeNav(){
        this.props.onClick();
        this.setState({
            filteredMapStyles: this.props.mapStyles
        });
    }

    handleChange(event){
        let regx = new RegExp(event.target.value, "i");
        let filteredMapStyles = this.state.mapStyles.filter(function(style){
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
        this.setState({modalIsOpen: true});
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    saveStyle(){
        event.preventDefault();
        this.setState({saving: true});
        this.props.actions.saveNewStyle(this.state.newStyle)
        .then(() => {
            debugger;
            console.log(InitialState);
            this.setState({
                modalIsOpen: false,
                newStyle: {
                    "name": "",
                    "url": "",
                    "author": "",
                    "image": "",
                    "github": "",
                    "jsonStyle": "",
                    "type": "Mapbox_Remote"
                },
            });
        })
        .catch(error => {
            debugger;
            this.setState({saving: false});
        })
    }

    updateNewStyleState(event) {
        const field = event.target.name;
        let newStyle = this.state.newStyle;
        newStyle[field] = event.target.value;
        return this.setState({newStyle: newStyle});
    }

    render() {
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
                        onChange={this.updateNewStyleState} />

                    <button className="myButtons" onClick={this.closeModal} id="closeButton">CLOSE</button>
                    <button className="myButtons" onClick={this.saveStyle}>SAVE</button>

                </Modal>
                <div id="myNav" className={this.props.overlayClass}>
                    <button id="createMapStyleButton" className="myButtons" onClick={this.openModal}>Add A Style</button>

                    <div id="searchDiv">
                        <label className="title" >Search</label>
                        <input id="searchInput" className="inputBox" type="text" onChange={this.handleChange} />
                    </div>

                    <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
                    <div className="overlay-content">
                        {
                            this.state.filteredMapStyles.map((style, index) =>
                            <div className="mapStyleDiv"
                                key={index}
                                onClick={()=>this.handleOnClick(style.name)}>
                                <div className="mapStyleDivContainer">
                                    <h2 className="previewTitle">{
                                            style.name
                                        }
                                    </h2>
                                    <p className="mapStyleAuthor">
                                        Created By: {
                                            style.author
                                        }
                                    </p>
                                    <img className="stylePreview" src={
                                            style.image
                                        } />
                                    </div>
                                </div>
                            )
                        }
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
    actions: PropTypes.object.isRequired
};

function mapStateToProps (state) {
    return {
        mapState: state.mapState
    };
}

function mapDispatchToProps (dispatch) {
    return {
        actions: bindActionCreators(mapActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Overlay);
