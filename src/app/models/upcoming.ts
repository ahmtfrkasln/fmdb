export class Upcoming {
  constructor(
    public poster_path: string,
    public overview: string,
    public release_date: string,
    public backdrop_path: string,
    public id: string,
    public title: string
  ) {
    this.id = id;
    this.overview = overview;
    this.poster_path = poster_path;
    this.backdrop_path = backdrop_path;
    this.release_date = release_date;
    this.title = title;
  }
}
