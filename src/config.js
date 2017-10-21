let getApiRoot = () => {
    let url = window.location.href;
    let apiRoot =  (url.includes('vectortilestyles.com')) ? "http://104.236.128.167/" : "http://awesome.dev/git/natevatt/";
    return apiRoot;
};

const Config = {
    mapboxToken: "pk.eyJ1IjoibmF0ZXZhdHQiLCJhIjoiR1hVR1ZIdyJ9.gFwSyghJZIERfjLkzgTx6A",
    apiRoot: getApiRoot()
};

export default Config;
