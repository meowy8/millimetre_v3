export interface FilmDetails {
  backdrop_path: string;
  runtime: number;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
}

export interface FilmCredits {
  id: number;
  cast: String[];
  crew: String[];
}

export interface FilmImages {
  id: number;
  backdrops: String[];
}

export interface FilmSearchDetails {
  id: number;
  title: string;
  poster_path: string;
}

export interface FilmSearchResults {
  page: number;
  results: FilmSearchDetails[];
  total_pages: number;
  total_results: number;
}

export interface FilmNotes {
  title: string;
  content: string;
  filmId: number;
  _id: string;
  username: string;
  posterPath: string;
  backdropPath: string;
}
