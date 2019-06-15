export interface HttpRequestInterceptor {
  request(url: string, config: RequestInit): Array<string | RequestInit>;
}

export interface HttpResponseInterceptor {
  response?(response: Response): Response;
  responseError?(error: Response, args: any[]): Promise<any>;
}
