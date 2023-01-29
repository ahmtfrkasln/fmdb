export class Movie {
    constructor(
        public id: string, 
        public title: string, 
        public original_title: string,
        public poster_path: string,
        public backdrop_path: string,
        public overview: string,
        public genres: {id: string, name: string} [],
        public imdb_id: string,
        public release_date: string,
        public runtime: number,
        public vote_average: number,
        public vote_count: number
        ) {
        this.id = id;
        this.title = title;
        this.original_title = original_title;
        this.poster_path = poster_path;
        this.backdrop_path = backdrop_path;
        this.genres = genres;
        this.imdb_id = imdb_id;
        this.overview = overview;
        this.release_date = release_date;
        this.runtime = runtime;
        this.vote_average = vote_average;
        this.vote_count = vote_count;
    }
}

/*
{"adult":false,"backdrop_path":"/tqj7NKj11keFuLzPsBDMUq2dOUO.jpg",
"belongs_to_collection":{"id":119,"name":"Yüzüklerin Efendisi [Seri]",
"poster_path":"/nSNle6UJNNuEbglNvXt67m1a1Yn.jpg","backdrop_path":"/bccR2CGTWVVSZAG0yqmy3DIvhTX.jpg"},
"budget":93000000,"genres":[{"id":12,"name":"Macera"},{"id":14,"name":"Fantastik"},{"id":28,"name":"Aksiyon"}],
"homepage":"","id":120,"imdb_id":"tt0120737","original_language":"en",
"original_title":"The Lord of the Rings: The Fellowship of the Ring",
"overview":"İyiyle kötü arasındaki mücadelenin epik bi...",
"popularity":106.228,"poster_path":"/e2QqbLA7BnuYKdYkmFeuVKZlurP.jpg",
"production_companies":[{"id":11,"logo_path":"/6FAuASQHybRkZUk08p9PzSs9ezM.png",
"name":"WingNut Films","origin_country":"NZ"},{"id":12,"logo_path":"/iaYpEp3LQmb8AfAtmTvpqd4149c.png",
"name":"New Line Cinema","origin_country":"US"},{"id":5237,"logo_path":null,"name":"The Saul Zaentz Company",
"origin_country":"US"}],"production_countries":[{"iso_3166_1":"NZ","name":"New Zealand"},{"iso_3166_1":"US",
"name":"United States of America"}],"release_date":"2001-12-18","revenue":871368364,"runtime":178,
"spoken_languages":[{"english_name":"English","iso_639_1":"en","name":"English"}],"status":"Released",
"tagline":"","title":"Yüzüklerin Efendisi: Yüzük Kardeşliği","video":false,"vote_average":8.391,"vote_count":22066}
*/