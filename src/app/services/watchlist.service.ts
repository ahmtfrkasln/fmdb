import { Injectable } from '@angular/core';
import { MovieService } from './movie.service';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {

  constructor(private movieService: MovieService) { }

  getIds(): Array<String>{
    let watchlistStr = localStorage.getItem('watchlist');
    if(!watchlistStr || !Array.isArray(JSON.parse(watchlistStr))){
      return [];
    }else{
      return JSON.parse(watchlistStr);
    }
  }

  getCount(): number{
    return this.getIds().length;
  }

  add(id: string){
    if(this.isListed(id)){
      return;
    }
    let watchlist = this.getIds();
    watchlist.push(id);
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
  }

  remove(id: string){
    if(!this.isListed(id)){
      return;
    }
    let watchlist = this.getIds();
    watchlist.splice(watchlist.indexOf(id), 1);
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
  }

  isListed(id: string): boolean{
    return this.getIds().includes(id);
  }
}
