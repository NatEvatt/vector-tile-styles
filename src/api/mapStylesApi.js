// import MapStyles from './mapStyles';

class MapStylesApi {
    static getMapStyles() {
          return fetch('http://awesome.dev/git/vt-api/public/get_mapstyles')
          .then((response) => response.json())
          .then((responseJson) => {
            return responseJson;
          })
    }
}

export default MapStylesApi;
