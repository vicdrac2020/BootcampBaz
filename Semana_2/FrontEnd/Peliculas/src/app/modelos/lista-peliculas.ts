export interface ListaPeliculas {
    page: Number,
    results: Array<Peliculas>,
    total_pages: Number,
    total_results: Number
}

interface Peliculas {
    adult: Boolean,
    backdrop_path: String,
    genre_ids: Array<Number>,
    id: Number,
    original_language: String,
    original_title: String,
    overview: String,
    popularity: String,
    poster_path: String,
    release_date: String,
    title: String,
    video: Boolean,
    vote_average: String,
    vote_count: Number
}
