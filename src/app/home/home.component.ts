import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { Upcoming } from '../models/upcoming';
import { MovieService } from '../services/movie.service';
import { WatchlistService } from '../services/watchlist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private watchlistService: WatchlistService, private movieService: MovieService){
  }

  private baseImagePath = 'https://image.tmdb.org/t/p/';
  watchlist: Array<Movie> = [];
  comingSoon: Array<Upcoming> = [];
  comingSoonVertical: Array<Array<Upcoming>> = [];
  verticalCount: number = 3;

  ngOnInit(): void {
    this.watchlist = [];
    this.watchlistService.getIds().forEach(id => this.movieService.getMovieDetails(id).subscribe(m => this.watchlist.push(m)))  

    this.comingSoon = [];
    this.movieService.getComingSoon().subscribe((res : {results: Upcoming[]}) => {
      this.comingSoon = res.results.slice(0,5);

      for (let i = 0; i < this.comingSoon.length; i++) {
        let tmp: Array<Upcoming> = [];
        for (let j = 0; j < this.verticalCount; j++) {
          tmp.push(this.comingSoon[(i + j) % 5]);
        }
        this.comingSoonVertical.push(tmp);
      }
    } );
  }

  getPoster(path: string, size: string = 'w185'){
    return this.baseImagePath + size + path;
  }

  getPosterL(path: string){
    return this.getPoster(path, 'w342');
  }

  getPosterXL(path: string){
    return this.getPoster(path, 'w780');
  }

  getBackdrop(path: string, size: string = 'w300'){
    return this.baseImagePath + size + path;
  }

  getBackdropL(path: string){
    return this.getBackdrop(path, 'w1280');
  }
}
