import axios, { AxiosInstance } from 'axios';
import { RequestInterception } from '../../../service/axiosServer';

export class NewsService<Model> {
  public server: AxiosInstance;
  constructor(requestInterception: RequestInterception, baseUrl: string) {
    this.server = axios.create({
      baseURL: baseUrl,
    });
    this.server.interceptors.request.use(requestInterception);
  }
  async getEveryThing(query: string, searchIn: string, pageSize: number, page: number, language =  'pt', orderBy = 'publishedAt') {
    return await this.server.get(`/everything?q=${query}&language=${language}&`);
  }

  async getHeadLines(query: string, pageSize: number, page: number, category: string, country =  'us') {
    return await this.server.get(`/top-headlines?country=${country}${pageSize?`&pageSize=${pageSize}`:''}${page?`&page=${page}`:''}${category?`&category=${category}`:'' }${query?`&query=${query}`:''}`);
  }
}

