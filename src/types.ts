export interface HTTPRequestInterceptor {
  request(url: string, config: RequestInit): Array<string | RequestInit>;
}

export interface HTTPResponseInterceptor {
  response?(response: Response): Response;
  responseError?(error: Response, args: any[]): Promise<any>;
}

export interface HTTPConfig {
  baseURL?: string;
  timeout?: number;
  headers?: object;
}
