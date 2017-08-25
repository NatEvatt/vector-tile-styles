import MapStyles from './mapStyles';

class MapStylesApi {
  static getMapStyles() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(MapStyles);
      }, 500);
    });
  }
}

export default MapStylesApi;
