const environment: any = {
  local: {
    API_URL: 'https://newsapi.org/v2',
    API_KEY: 'd409f08460c04aa0bea1839d0182642f',
    PROXY_URL: 'http://localhost:3333/'
  },
};

let appStage = import.meta.env.VITE_APP_STAGE || 'local';
let apiUrl = environment.local.API_URL;
let apiKey = environment.local.API_KEY;
let proxyUrl = environment.local.PROXY_URL;


if (environment[appStage]) {
  apiUrl = environment[appStage].API_URL;
  apiKey = environment[appStage].API_KEY;
  proxyUrl = environment[appStage].PROXY_URL;

}

export const API_URL = apiUrl;
export const API_KEY = apiKey;
export const PROXY_URL = proxyUrl;
