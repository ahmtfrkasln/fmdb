import { Component } from '@angular/core';
import { WatchlistService } from 'src/app/services/watchlist.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private watchlist: WatchlistService){
  }

  getWatchlistSize(): number{
    return this.watchlist.getCount();
  }

  // setWatchlist(){
  //   this.watchlist.add('120');
  //   this.watchlist.add('121');
  //   this.watchlist.add('122');
  // }

}
