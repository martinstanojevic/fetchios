import http from './index';
import { HttpResponseInterceptor } from './types';

export class RetryErrorRequest implements HttpResponseInterceptor {
    retryMap = {};
  
    constructor(private retryTimes = 1) {}
  
    responseError(response: Response, args: any[]) {
      const retryCount = this.retryMap[response.url] || 0;
  
      if (retryCount >= this.retryTimes) {
        delete this.retryMap[response.url];
  
        return Promise.reject(response);
      }
  
      if (response.status >= 500) {
        this.retryMap[response.url] = retryCount + 1;
  
        return http.fetchWithIntercept(...args);
      }
  
      return Promise.reject(response);
    }
  }