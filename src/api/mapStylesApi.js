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
}

export default MapStylesApi;
