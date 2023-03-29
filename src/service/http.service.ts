import { AxiosRequestConfig, AxiosRequestHeaders } from 'axios';
import { API_KEY, API_URL, PROXY_URL } from '../config/const';
import congnitoAuthService from '../dependences/cognito/Service/CognitoAuthService';
import { NewsService } from './news.service';

export class HttpServer {
  headers!: AxiosRequestHeaders;
  async getHeaders() {
    let key = API_KEY
    this.headers = {
      'Content-Type': 'application/json',
      Authorization: key,
    };
  }
}

export let httpServer = new HttpServer();

export type RequestInterception = (config: AxiosRequestConfig) => Promise<AxiosRequestConfig>;

export const interceptorFunction = async (request: AxiosRequestConfig) => {
  request.headers = {
    ...request.headers,
    'Content-Type': 'application/json',
  };
  try {
    let key = API_KEY
    request.headers.Authorization = key;
  } catch (error) {
    console.error(error);
  }
  httpServer.headers = request.headers;
  return request;
};

export const newsService = new NewsService(interceptorFunction, API_URL);
