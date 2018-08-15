export default {
  mapState: {
    mapStyles: [],
    mapMovements: {}
  },
  newStyle: {
    name: "",
    url: "",
    author: "",
    image: "",
    github: "",
    jsonStyle: "",
    type: "Mapbox_Remote"
  },
  user: {
    name: "",
    image: "",
    email: "",
    id_token: "",
    id: ""
  },
  buttonDisplay: {
    loginVisible: "block",
    logoutVisible: "none",
    printExtentVisible: "none",
    printZoomVisible: "none",
    printFinalizeVisible: "none"
  },
  mapPrinter: {
    _mapTiles: null,
    pixels: null
  }
};
