export interface User {
  _id: string;
  accountName: string;
  username: string;
  email: string;
  password: string;
  bio: string;
  favouriteFilms: FavouriteFilms[];
  recentlyWatched: RecentlyWatched[];
  profileImage: string;
}

export interface FavouriteFilms {
  _id: string;
  filmId: number;
  title: string;
  posterPath: string;
  backdropPath: string;
}

export interface RecentlyWatched {
  _id: string;
  filmId: number;
  title: string;
  posterPath: string;
  backdropPath: string;
}

export interface CheckSignUp {
  email: string;
  password: string;
}
