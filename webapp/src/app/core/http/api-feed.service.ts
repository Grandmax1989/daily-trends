import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpModule } from './http.module';
import { environment } from 'src/environments/environment';
import { Feed } from 'src/app/shared/models/feed.model';

@Injectable({
  providedIn: HttpModule
})
export class ApiFeedService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  /**
   * constructor
   */
  constructor(
    private http: HttpClient,
  ) { }

  getFeeds() {
    return this.http.get<any[]>(`${environment.apiFeed}/feeds`, this.httpOptions);
  }

  getFeedById(id: string) {
    return this.http.get<any[]>(`${environment.apiFeed}/feeds/${id}`, this.httpOptions);
  }

  postFeeds(data: Feed) {
    if (!data._id) {
      return this.http.post<Feed>(`${environment.apiFeed}/feeds`, data, this.httpOptions);
    } else {
      return this.http.patch<Feed>(`${environment.apiFeed}/feeds`, data, this.httpOptions);
    }
  }
  deleteFeed(id: string) {
    console.log(id)
    return this.http.delete<Feed>(`${environment.apiFeed}/feeds/${id}`, this.httpOptions);
  }
}
