import { Component, Input } from '@angular/core';
import { MovieMini } from 'src/app/models/movie-mini';
import { WatchlistService } from 'src/app/services/watchlist.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent {

  constructor(private watchlist: WatchlistService) { }

  @Input() movie: MovieMini;
  @Input() resize: number;
  @Input() posterSize: string = 'm';

  private baseImagePath = 'https://image.tmdb.org/t/p/';

  getPoster(path: string, size: string = 'w185') {
    switch (this.posterSize) {
      case 'l':
        size = 'w342';
        break;
      case 'xl':
        size = 'w780';
        break;
      default:
        break;
    }
    return this.baseImagePath + size + path;
  }

  get size(): number {
    return 24 * (1 + ((!this.resize ? 0 : this.resize) / 10));
  }

  get isListed(): boolean {
    return !!this.movie && this.watchlist.isListed(this.movie.id);
  }

  addToList() {
    if (this.movie)
      this.watchlist.add(this.movie.id);
  }

  removeFromList() {
    if (this.movie)
      this.watchlist.remove(this.movie.id);
  }

}
