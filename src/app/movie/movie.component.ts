import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Cast, Credits, Crew } from '../models/credits';
import { Movie } from '../models/movie';
import { Video } from '../models/video';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(private route: ActivatedRoute, private movieService: MovieService, private sanitizer: DomSanitizer) { }

  id: string;
  movie: Movie;
  cast: Cast[];
  directors: Crew[];
  writers: Crew[];
  videos: Video[];
  videoIndex = 0;
  videoUrl: SafeResourceUrl | null;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.loadMovieDetails();
    });
  }

  loadMovieDetails() {
    this.movieService.getMovieDetails(this.id).subscribe((res: Movie) => this.movie = res);
    this.movieService.getMovieVideos(this.id).subscribe((res: { results: Video[] }) => {
      this.videos = res.results.filter(video => video.site === 'YouTube');
      this.setVideoLink();
    });
    this.movieService.getMovieCredits(this.id).subscribe((res: Credits) => {
      this.cast = res.cast.splice(0,3);
      this.directors = res.crew.filter(c => c.job === 'Producer').splice(0,3);
      this.writers = res.crew.filter(c => c.department === 'Writing').splice(0,3);
    });
  }

  getRuntime() {
    return Math.floor(this.movie.runtime / 60) + 'h ' + (this.movie.runtime % 60) + 'm';
  }
  getVote() {
    return this.movie.vote_average.toFixed(1);
  }
  getVoteCount() {
    if (this.movie.vote_count > 1000) {
      return (this.movie.vote_count / 1000).toFixed(1) + 'K';
    }
    return this.movie.vote_count;
  }
  videoIndexIncrease() {
    this.videoIndex = (this.videoIndex + 1) % this.videos.length;
    this.setVideoLink();
  }
  videoIndexDecrease() {
    this.videoIndex = (this.videoIndex - 1 + this.videos.length) % this.videos.length;
    this.setVideoLink();
  }
  setVideoLink() {
    if (this.videos.length > 0) {
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://www.youtube.com/embed/' + this.videos[this.videoIndex].key + '?controls=0&autoplay=1'
      );    
    }
    else this.videoUrl = null;
  }

}
