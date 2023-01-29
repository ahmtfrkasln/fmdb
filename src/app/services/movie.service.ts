import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpService: HttpService) { }

  getMovieDetails(id: String): Observable<any>{
    return this.httpService.get('movie/' + id);
  }

  getMovieCredits(id: String): Observable<any>{
    return this.httpService.get('movie/' + id + '/credits');
  }

  getMovieVideos(id: String): Observable<any>{
    return this.httpService.get('movie/' + id + '/videos');
  }

  getComingSoon(): Observable<any>{
    return this.httpService.get('/movie/upcoming', [{name: 'page', value: '1'}]);
  }
}
