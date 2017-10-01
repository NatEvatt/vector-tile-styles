// import MapStyles from './mapStyles';
import Congfig from '../config';

class MapStylesApi {
    static getMapStyles() {
        return fetch(Congfig.apiRoot + 'vts-api/public/get_mapstyles')
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson;
        });
    }

    static saveNewMapStyle(newStyle) {
        return fetch(Congfig.apiRoot + 'vts-api/public/save_new_map_style', {
            method: 'POST',
            body: JSON.stringify(newStyle)
        }).then((response) => response.json())
        .then((responseJson) => {
            return responseJson
        })
    }
}

export default MapStylesApi;
