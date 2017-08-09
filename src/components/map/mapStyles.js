const MapStyles = [
  {
    name: "A Children's Map",
    jsonStyle: "a_childredns_map",
    url: "http://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/Esri_Childrens_Map/VectorTileServer/resources/styles/root.json",
    type: "ESRI",
    author: "ESRI / Wesley Jones",
    image: "images/mapPreviews/a_childrens_map.png"
  },
  {
    name: "Autumn Canvas",
    url: "http://www.arcgis.com/sharing/rest/content/items/ced56f9c9086489f8a3748bb7d0f842d/resources/styles/root.json",
    type: "ESRI",
    author: "ESRI / Andrew Skinner",
    image: "images/mapPreviews/autumn.png"
  },
  {
    name: "Black and White Map",
    url: "http://www.arcgis.com/sharing/rest/content/items/4eb1a158191a451d89cb744878946273/resources/styles/root.json",
    type: "ESRI",
    author: "ESRI / Andrew Skinner",
    image: "images/mapPreviews/black_and_white.png"
  },
  {
    name: "Blueprint",
    jsonStyle: "blueprint",
    url: "./mapStyles/blueprint.json",
    type: "Local",
    github: "https://github.com/jingsam/mapbox-gl-styles/blob/master/Blueprint.json",
    author: "Amy Lee Walton",
    image: "https://api.mapbox.com/styles/v1/natevatt/cj2bwqhdc002j2rqil74bpt1a/static/-71.063663,42.369393,15.45,0.00,0.00/600x400?access_token=pk.eyJ1IjoibmF0ZXZhdHQiLCJhIjoiR1hVR1ZIdyJ9.gFwSyghJZIERfjLkzgTx6A"
  },
  {
    name: "Camouflage",
    url: "mapbox://styles/natevatt/cizbfe0cf00772sqi5nguh3y1",
    type: "Mapbox_Remote",
    github: "https://github.com/jingsam/mapbox-gl-styles/blob/master/Camouflage.json",
    author: "Eden Halperin",
    image: "images/mapPreviews/camo.png"
  },
  {
    name: "Dark Blue Canvas",
    url: "http://www.arcgis.com/sharing/rest/content/items/8e4423e88139420ca0f0a4edce03523c/resources/styles/root.json",
    type: "ESRI",
    author: "ESRI / Witt Lahub",
    image:"images/mapPreviews/dark_blue_canvas.png"
  },
  {
    name: "Dark Gray Canvas",
    jsonStyle: "dark_gray_canvas",
    url: "https://www.arcgis.com/sharing/rest/content/items/5ad3948260a147a993ef4865e3fad476/resources/styles/root.json",
    author: "ESRI",
    type: "ESRI",
    image:"images/mapPreviews/dark_gray_canvas.png"
  },
  {
    name: "Dark Matter",
    jsonStyle: "dark_matter",
    url: "./mapStyles/dark_matter.json",
    author: "OpenMapTiles",
    type: "Local",
    github:"https://github.com/openmaptiles/dark-matter-gl-style",
    image:"https://camo.githubusercontent.com/d53d4701fc55608696527fdbf4a46426e5890c7e/687474703a2f2f64656d6f2e74696c657365727665722e6f72672f7374796c65732f6461726b2d6d61747465722f7374617469632f382e3631393138342c34372e3333363230332c31302e30372f363030783430304032782e706e67"
  },
  {
    name: "Emerald",
    url: "mapbox://styles/mapbox/emerald-v8",
    type: "Mapbox_Remote",
    author: "Mapbox",
    image: "https://api.mapbox.com/styles/v1/natevatt/cj2bx82lk002u2ssc92dwoxso/static/0.085015,51.480599,8.19,0.00,0.00/600x400?access_token=pk.eyJ1IjoibmF0ZXZhdHQiLCJhIjoiR1hVR1ZIdyJ9.gFwSyghJZIERfjLkzgTx6A"
  },
  {
    name: "ESRI Brand Map",
    url: "http://www.arcgis.com/sharing/rest/content/items/961371bf763245eb8e828ab6a7225045/resources/styles/root.json",
    type: "ESRI",
    author: "ESRI / Andrew Skinner",
    image: "images/mapPreviews/esri_brand_map.png"
  },
  {
    name: "Fiord Color",
    url: "./mapStyles/fiord_color.json",
    jsonStyle: "fiord_color",
    type: "Local",
    author: "OpenMapTiles",
    github: "https://github.com/openmaptiles/fiord-color-gl-style",
    image:"https://camo.githubusercontent.com/f01f204c4640b18c93ef076cff26223d2737d3a5/68747470733a2f2f6170692e6d6170626f782e636f6d2f7374796c65732f76312f6f70656e6d617074696c65732f6369776775693378353030317732706e7668633063327767302f7374617469632f382e3631393138342c34372e3333363230332c392e30372c302e30302c302e30302f363030783430303f6163636573735f746f6b656e3d706b2e65794a31496a6f696233426c626d3168634852706247567a4969776959534936496d4e70646e593365544a785a7a41774d474d796233427064574a6d616a63784e7a636966512e685031427863786c644968616b4d6350534a4c513151"
  },
  {
    name: "Happy Holloween",
    url: "http://www.arcgis.com/sharing/rest/content/items/eab9c6255657430ca448a263ebaba3a6/resources/styles/root.json",
    jsonStyle: "happy_holloween",
    author: "ESRI / Andrew Skinner",
    type: "ESRI",
    image:"images/mapPreviews/happy_holloween.png"
  },
  {
    name: "Klokantech 3D",
    url: "./mapStyles/klokantech_3D.json",
    jsonStyle: "klokantech_3d",
    author: "OpenMapTiles",
    type: "Local",
    github:"https://github.com/openmaptiles/klokantech-3d-gl-style",
    image:"https://cloud.githubusercontent.com/assets/1288339/21714427/36bc28b0-d3ff-11e6-95ea-0ddf851ae678.png"
  },
  {
    name: "Klokantech Basic",
    url: "./mapStyles/klokantech_basic.json",
    jsonStyle: "klokantech_basic",
    author: "OpenMapTiles",
    type: "Local",
    github:"https://github.com/openmaptiles/klokantech-basic-gl-style",
    image:"https://camo.githubusercontent.com/08dcb3dd384c6083b02e6692c939d68c4114eb33/687474703a2f2f64656d6f2e74696c657365727665722e6f72672f7374796c65732f6b6c6f6b616e746563682d62617369632f7374617469632f382e3631393138342c34372e3333363230332c31302e30372f363030783430304032782e706e67"
  },
  {
    name: "Light Gray Canvas",
    url: "https://www.arcgis.com/sharing/rest/content/items/5dd75c1a544b46c3af01ba5736bfdfa0/resources/styles/root.json",
    jsonStyle: "light_gray_canvas",
    author: "ESRI",
    type: "ESRI",
    image: "images/mapPreviews/light_gray_canvas.png"
  },
  {
    name: "Klokantech Terrain",
    url: "./mapStyles/klokantech_terrain.json",
    jsonStyle: "klokantech_terrain",
    author: "OpenMapTiles",
    type: "Local",
    github: "https://github.com/openmaptiles/klokantech-terrain-gl-style",
    image: "images/mapPreviews/klokantech_terrain.png"
  },
  {
    name: "Mapbox Basic",
    url: "mapbox://styles/mapbox/basic-v9",
    type: "Mapbox_Remote",
    author: "Mapbox",
    github: "https://github.com/mapbox/mapbox-gl-styles/blob/master/styles/basic-v9.json",
    image: "images/mapPreviews/mapbox_basic.png"
  },
  {
    name: "Mapbox Bright",
    url: "mapbox://styles/mapbox/bright-v9",
    type: "Mapbox_Remote",
    author: "Mapbox",
    github: "https://github.com/mapbox/mapbox-gl-styles/blob/master/styles/bright-v9.json",
    image: "images/mapPreviews/mapbox_bright.png"
  },
  {
    name: "Mapbox Street",
    url : "mapbox://styles/mapbox/streets-v9",
    type: "Mapbox_Remote",
    author: "Mapbox",
    image: "https://api.mapbox.com/styles/v1/mapbox/streets-v10/static/151.146169,-33.915718,10.30,0.00,0.00/600x400?access_token=pk.eyJ1IjoibmF0ZXZhdHQiLCJhIjoiR1hVR1ZIdyJ9.gFwSyghJZIERfjLkzgTx6A"
  },
  {
    name: "Mapbox Dark",
    url: "mapbox://styles/mapbox/dark-v9",
    type: "Mapbox_Remote",
    author: "Mapbox",
    image: "https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/-117.171178,32.719795,10.97,0.00,0.00/600x400?access_token=pk.eyJ1IjoibmF0ZXZhdHQiLCJhIjoiR1hVR1ZIdyJ9.gFwSyghJZIERfjLkzgTx6A"
  },
  {
    name: "Mapbox Light",
    url: "mapbox://styles/mapbox/light-v9",
    type: "Mapbox_Remote",
    author: "Mapbox",
    image: "https://api.mapbox.com/styles/v1/mapbox/light-v9/static/-70.878491,6.049648,4.41,0.00,0.00/600x400?access_token=pk.eyJ1IjoibmF0ZXZhdHQiLCJhIjoiR1hVR1ZIdyJ9.gFwSyghJZIERfjLkzgTx6A"
  },
  {
    name: "Mapbox Outdoors",
    url: "mapbox://styles/mapbox/outdoors-v9",
    type: "Mapbox_Remote",
    author: "Mapbox",
    image: "https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/static/-122.079883,36.996620,14.48,0.00,0.00/600x400?access_token=pk.eyJ1IjoibmF0ZXZhdHQiLCJhIjoiR1hVR1ZIdyJ9.gFwSyghJZIERfjLkzgTx6A"
  },
  {
    name: "Mapbox Satellite Streets",
    url: "mapbox://styles/mapbox/satellite-streets-v9",
    type: "Mapbox_Remote",
    author: "Mapbox",
    image: "https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v10/static/-0.110556,51.554575,15.16,0.00,0.00/600x400?access_token=pk.eyJ1IjoibmF0ZXZhdHQiLCJhIjoiR1hVR1ZIdyJ9.gFwSyghJZIERfjLkzgTx6A"
  },
  {
    name: "Mapbox Satellite",
    url: "mapbox://styles/mapbox/satellite-v9",
    type: "Mapbox_Remote",
    author: "Mapbox",
    image: "https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/-78.784725,22.574613,9.89,0.00,0.00/600x400?access_token=pk.eyJ1IjoibmF0ZXZhdHQiLCJhIjoiR1hVR1ZIdyJ9.gFwSyghJZIERfjLkzgTx6A",
    github: "https://github.com/mapbox/mapbox-gl-styles/blob/master/styles/satellite-v9.json"
  },
  {
    name: "Mid-Century",
    jsonStyle: "mid_century",
    url: "http://www.arcgis.com/sharing/rest/content/items/2557730096db4d2fa3e64980d431c29e/resources/styles/root.json",
    type: "ESRI",
    Author: "ESRI / Cindy Prostak",
    image: "images/mapPreviews/mid_century.png"
  },
  {
    name: "Modern Antique",
    jsonStyle: "modern_antique",
    url: "http://www.arcgis.com/sharing/rest/content/items/95d4d6b61c0b4690adaf8cbdabb28196/resources/styles/root.json",
    type: "ESRI",
    Author: "ESRI",
    image: "images/mapPreviews/modern_antique.png"
  },
  {
    name: "Merry Christmas",
    jsonStyle: "merry_christmas",
    url: "http://www.arcgis.com/sharing/rest/content/items/dfcb45f8a2ad4b58a1a7547188a0a00c/resources/styles/root.json",
    type: "ESRI",
    uthor: "ESRI",
    image: "images/mapPreviews/merry_christmas.png"
  },
  {
    name: "Moonlight",
    url: "mapbox://styles/natevatt/cj4c28run05532so9qwwvktwv",
    type: "Mapbox_Remote",
    author: "Rasagy Sharma",
    image: "https://api.mapbox.com/styles/v1/natevatt/cj4c28run05532so9qwwvktwv/static/-110.904158,32.235687,9.44,0.00,0.00/600x400?access_token=pk.eyJ1IjoibmF0ZXZhdHQiLCJhIjoiR1hVR1ZIdyJ9.gFwSyghJZIERfjLkzgTx6A"
  },
  {
    name: "Navigation Map",
    url: "https://www.arcgis.com/sharing/rest/content/items/e19e9330bf08490ca8353d76b5e2e658/resources/styles/root.json",
    type: "ESRI",
    author: "ESRI",
    image: "https://api.mapbox.com/styles/v1/natevatt/ciysueqcy000i2sqvzsc3hcqc/static/-118.887473,34.697753,6.38,0.00,0.00/600x400?access_token=pk.eyJ1IjoibmF0ZXZhdHQiLCJhIjoiR1hVR1ZIdyJ9.gFwSyghJZIERfjLkzgTx6A"
  },
  {
    name: "Neon",
    url: "mapbox://styles/natevatt/cj0wknst000dg2smyysy56vjk",
    github:"https://github.com/NatEvatt/awesome-mapbox-gl-styles/tree/master/styles/Neon",
    type: "Mapbox_Remote",
    author: "Stephen Smith",
    image: "https://api.mapbox.com/styles/v1/natevatt/cj0wknst000dg2smyysy56vjk/static/139.755724,35.684667,12.63,0.00,0.00/600x400?access_token=pk.eyJ1IjoibmF0ZXZhdHQiLCJhIjoiR1hVR1ZIdyJ9.gFwSyghJZIERfjLkzgTx6A"
  },
  {
    name: "Newspaper",
    url: "http://www.arcgis.com/sharing/rest/content/items/86e885fac753433ea2e4bb1e2faa890f/resources/styles/root.json",
    type: "ESRI",
    author: "ESRI / Cindy Prostak",
    image: "images/mapPreviews/newspaper.png"
  },
  {
    name: "North Star",
    url: "mapbox://styles/natevatt/cj49edx972r632rp904oj4acj",
    type: "Mapbox_Remote",
    author: "Nat Slaughter",
    image: "https://api.mapbox.com/styles/v1/natevatt/cj49edx972r632rp904oj4acj/static/-79.484681,21.398225,5.23,0.00,0.00/600x400?access_token=pk.eyJ1IjoibmF0ZXZhdHQiLCJhIjoiR1hVR1ZIdyJ9.gFwSyghJZIERfjLkzgTx6A"
  },
  {
    name: "OSM Bright",
    url: "./mapStyles/osm_bright.json",
    jsonStyle: "osm_bright",
    github: "https://github.com/openmaptiles/osm-bright-gl-style",
    image: "https://camo.githubusercontent.com/45a3002c9f042d205d6792f9afc651bf1a21fa1f/687474703a2f2f64656d6f2e74696c657365727665722e6f72672f7374796c65732f6f736d2d6272696768742f7374617469632f382e3534303538372c34372e3337303535352c31352e30382f363030783430304032782e706e67",
    author: "OpenMapTiles",
    type: "Local"
  },
  {
    name: "Oyster",
    url: "./mapStyles/Oyster.json",
    jsonStyle: "Oyster",
    type: "Local",
    author: "Roderick Chow",
    image: "images/mapPreviews/oyster.png"
  },
  {
    name: "Pencil",
    url: "http://www.arcgis.com/sharing/rest/content/items/5a787c28aad242148cb4416f3786b4ba/resources/styles/root.json",
    jsonStyle: "pencil",
    type: "ESRI",
    author: "ESRI / Cindy Prostak",
    image: "images/mapPreviews/pencil.png"
  },
  {
    name: "Positron",
    url: "./mapStyles/positron.json",
    jsonStyle: "positron",
    author: "OpenMapTiles",
    type: "Local",
    github: "https://github.com/openmaptiles/positron-gl-style",
    image: "https://camo.githubusercontent.com/770b247b80b22724342bd6265388b2934da1deb6/687474703a2f2f64656d6f2e74696c657365727665722e6f72672f7374796c65732f706f736974726f6e2f7374617469632f382e3631393138342c34372e3333363230332c31302e30372f363030783430304032782e706e67"
  },
  {
    name: "Spring Canvas",
    url: "http://www.arcgis.com/sharing/rest/content/items/d89f98318175488393ec41b10f958360/resources/styles/root.json",
    type: "ESRI",
    author: "ESRI / Andrew Skinner",
    image: "images/mapPreviews/spring_canvas.png"
  },
  {
    name: "Standard",
    url: "mapbox://styles/natevatt/cj507c5iu05ub2spb79kqyojz",
    type: "Mapbox_Remote",
    author: "Saman Bemel Benurd",
    image: "https://api.mapbox.com/styles/v1/natevatt/cj507c5iu05ub2spb79kqyojz/static/-97.449600,35.237294,12.65,0.00,0.00/600x400?access_token=pk.eyJ1IjoibmF0ZXZhdHQiLCJhIjoiR1hVR1ZIdyJ9.gFwSyghJZIERfjLkzgTx6A"
  },
  {
    name: "Streets",
    url: "https://www.arcgis.com/sharing/rest/content/items/a60a37a27cc140ddad15f919cd5a69f2/resources/styles/root.json",
    type: "ESRI",
    author: "ESRI",
    image: "images/mapPreviews/streets.png"
  },
  {
    name: "Summer Canvas",
    url: "http://www.arcgis.com/sharing/rest/content/items/71177fff2bde422ab099434030a37575/resources/styles/root.json",
    type: "ESRI",
    author: "ESRI / Andrew Skinner",
    image: "images/mapPreviews/summer_canvas.png"
  },
  {
    name: "Swiss Ski",
    url: "mapbox://styles/natevatt/ciyrdiidq001e2rp4iq3ex34b",
    type: "Mapbox_Remote",
    author: "Amy Lee Watson",
    github: "https://github.com/mapbox/mapbox-gl-swiss-ski-style",
    image: "images/mapPreviews/swiss_ski.png"
  },
  {
    name: "Toner",
    url: "./mapStyles/toner.json",
    jsonStyle: "toner",
    author: "OpenMapTiles",
    type: "Local",
    github: "https://github.com/openmaptiles/toner-gl-style",
    image: "images/mapPreviews/toner.png"
  },
  {
    name: "Topographic",
    url: "https://www.arcgis.com/sharing/rest/content/items/86d5ed4b6dc741de9dad5f0fbe09ae95/resources/styles/root.json",
    jsonStyle: "topographic",
    author: "ESRI",
    type: "ESRI",
    image: "images/mapPreviews/topographic.png"
  },
  {
    name: "Vintage",
    url: "mapbox://styles/natevatt/ciystnpxs000f2so6jmr047oh",
    type: "Mapbox_Remote",
    author: "Amy Lee Watson",
    github: "https://github.com/mapbox/mapbox-gl-vintage-style",
    image: "https://api.mapbox.com/styles/v1/natevatt/ciystnpxs000f2so6jmr047oh/static/-111.966236,35.062219,3.85,0.00,0.00/600x400?access_token=pk.eyJ1IjoibmF0ZXZhdHQiLCJhIjoiR1hVR1ZIdyJ9.gFwSyghJZIERfjLkzgTx6A"
  },
  {
    name: "Whaam",
    url: "mapbox://styles/natevatt/ciysueqcy000i2sqvzsc3hcqc",
    type: "Mapbox_Remote",
    author: "Amy Lee Watson",
    github: "https://github.com/mapbox/mapbox-gl-whaam-style",
    image: "https://api.mapbox.com/styles/v1/natevatt/ciysueqcy000i2sqvzsc3hcqc/static/-118.887473,34.697753,6.38,0.00,0.00/600x400?access_token=pk.eyJ1IjoibmF0ZXZhdHQiLCJhIjoiR1hVR1ZIdyJ9.gFwSyghJZIERfjLkzgTx6A"
  },
  {
    name: "Winter Canvas",
    url: "http://www.arcgis.com/sharing/rest/content/items/1b312a1bcd0749b48d99dc52eef59789/resources/styles/root.json",
    type: "ESRI",
    author: "ESRI / Andrew Skinner",
    image: "images/mapPreviews/winter_canvas.png"
  }
];

export default MapStyles;
