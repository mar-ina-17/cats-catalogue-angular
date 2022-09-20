import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Cat } from '../models';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private readonly API_ENDPOINT: string = 'https://api.thecatapi.com/v1';

  constructor(private http: HttpClient) {}

  callAPI() {
    return this.http.get<Cat[]>(
      `${this.API_ENDPOINT}/images/search?limit=9&api_key=live_z7hK8I6dNqVPxghWXKcgxdwaJX08VLt97Xln2EaQxbTtrzgf3AIuNLwZxBbA2Afs`
    );
  }
}
