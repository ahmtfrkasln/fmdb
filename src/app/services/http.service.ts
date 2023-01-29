import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  private apiBaseUrl = 'https://api.themoviedb.org/3/'
  private apiKey = '70e485ff76270023305e9f3c203e8426';
  lang = 'en-US';

  get(path: String, queries: {name: string, value: string}[] = []): Observable<any>{
    let url = this.apiBaseUrl + path;
    let queryParams = new HttpParams().append("api_key", this.apiKey).append("language",this.lang);
    queries.forEach(q => queryParams.append(q.name, q.value));
    return this.http.get(url,{params:queryParams});
  }
}
