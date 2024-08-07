import { Credits, FilmNotes } from "./filmTypes";
import { SignUp } from "./formTypes";

export interface AddFilmNoteProps {
  toggleModal: () => void;
  toggleNotesModal: () => void;
  setWatchedButton: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  posterPath: string;
  backdropPath: string;
  filmId: number;
}

export interface CreditsListProps {
  credits: Credits[];
  // showDetails: boolean;
  // setShowDetails: React.Dispatch<React.SetStateAction<boolean>>;
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
  backdropPath: string;
  title: string;
  releaseDate: string;
  filmId: number;
}

export interface SignInFormProps extends SignUp {
  setSignedUp: (value: boolean) => void;
  setEmail: (value: SignUp["email"]) => void;
  setPassword: (value: SignUp["password"]) => void;
  setConfirmPassword: (value: SignUp["confirmPassword"]) => void;
}

export interface SignInFormPropsMobile extends SignInFormProps {
  section: string;
}

export interface ImageModalType {
  toggleModal: () => void;
  toggleImageModal: () => void;
  modalImageData: ModalImageDataType;
}

export interface ModalImageDataType {
  src: string;
  height: number;
  width: number;
}
