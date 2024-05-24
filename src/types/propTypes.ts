import { Credits, FilmNotes } from "./filmTypes";

export interface AddFilmNoteProps {
  toggleModal: () => void;
  toggleNotesModal: () => void;
  title: string;
  posterPath: string;
  backdropPath: string;
  filmId: number;
}

export interface CreditsListProps {
  showDetails: boolean;
  credits: Credits[];
}

export interface FilmImageProps {
  toggleModal: () => void;
  toggleImageModal: () => void;
  setModalImageData: (data: {
    src: string;
    height: number;
    width: number;
  }) => void;
  image: {
    file_path: string;
    height: number;
    width: number;
  };
}

export interface FilmImagesDisplayProps {
  images: {
    file_path: string;
    height: number;
    width: number;
  }[];
  toggleModal: () => void;
  toggleImageModal: () => void;
  setModalImageData: (data: {
    src: string;
    height: number;
    width: number;
  }) => void;
}

export interface FilmNotesListProps {
  filmNotes: FilmNotes[];
  toggleModal: () => void;
  toggleNotesModal: () => void;
}

export interface FilmCardProps {
  posterPath: string;
  title: string;
  releaseDate: string;
  filmId: number;
}
