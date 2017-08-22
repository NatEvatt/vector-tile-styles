import * as mapStyles from "./mapStyles";

class MapStylesApi {
  static getMapStyles() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign([], mapStyles));
      }, 500);
    });
  }
}

export default MapStylesApi;
