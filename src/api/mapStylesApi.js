import React from 'react';
import Congfig from '../config';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import configureStore from '../store/configureStore';



class MapStylesApi {

    static getMapStyles() {
        return fetch(Congfig.apiRoot + 'vts-api/public/get_mapstyles')
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson;
        });
    }

    static saveNewMapStyle(newStyle, token) {
        const store = configureStore();
        return fetch(Congfig.apiRoot + 'vts-api/public/save_new_map_style', {
            method: 'POST',
            body: JSON.stringify(newStyle),
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then((response) => response.json())
        .then((responseJson) => {
            return responseJson;
        });
    }
}

export default MapStylesApi;
