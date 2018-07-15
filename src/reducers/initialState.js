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
    logoutVisible: "none"
  },
  mapPrinter: {
    extent: null,
    zoom: null
  }
};
