export interface User {
  _id: string;
  username: string;
  email: string;
  password: string;
  favouriteFilms: FavouriteFilms[];
}

export interface FavouriteFilms {
  _id: string;
  filmId: number;
  title: string;
  posterPath: string;
  backdropPath: string;
}
