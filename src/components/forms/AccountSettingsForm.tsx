import Image from "next/image";
import React, { useEffect, useState } from "react";
import GeneralBtn from "../buttons/GeneralBtn";
import Modal from "../Modal";
import FilmSearchModal from "../film/FilmSearchModal";
import SmallFilmPoster from "../film/SmallFilmPoster";
import { fetchUserData, updateUser } from "@/utils/dataFetching/userData";
import Loading from "../loading";
import { FavouriteFilms, User } from "@/types/userTypes";
import { FilmType, TMDBFilmDetails } from "@/types/filmTypes";

const AccountSettingsForm = ({
  sessionData,
  demoRestricted,
}: {
  sessionData: User;
  demoRestricted: boolean;
}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [uploading, setUploading] = useState<boolean>(false);
  const [profileImage, setProfileImage] = useState<string>("");
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showFilmSearchModal, setFilmSearchModal] = useState<boolean>(false);
  const [favFilmSlots, setFavFilmSlots] = useState<(FilmType | null)[]>([
    null,
    null,
    null,
  ]);
  const [filmSlotIndex, setFilmSlotIndex] = useState<number>(0);
  const [favFilms, setFavFilms] = useState<FavouriteFilms[]>([]);
  const [usernameInput, setUsernameInput] = useState<string>("");
  const [bioInput, setBioInput] = useState<string>("");
  const [user, setUser] = useState<User | null>(null);

  // useEffect(() => {
  //   console.log("sessionData", sessionData);
  // }, [sessionData]);

  // useEffect(() => {
  //   console.log("user", user);
  // }, [user]);

  // useEffect(() => {
  //   console.log("demoRestricted", demoRestricted);
  // }, [demoRestricted]);

  // Fetch user from session
  useEffect(() => {
    if (!sessionData) return;
    (async () => {
      const data = await fetchUserData(sessionData.name as string);
      if (!data) {
        return;
      }
      setUser(data);
    })();
  }, [sessionData]);

  // Set user data to be displayed
  useEffect(() => {
    if (!user) return;
    setFavFilms(user.favouriteFilms || []);
    setUsernameInput(user.username || "");
    setBioInput(user.bio || "");
    setProfileImage(user.profileImage || "");
  }, [user]);

  // Check if user data has loaded
  useEffect(() => {
    if (!user) return;
    setLoading(false);
  }, [user]);

  // Submit updated user data
  const handleSubmit = async (e: React.FormEvent) => {
    if (!user) return;

    e.preventDefault();
    setUploading(true);

    try {
      // Upload profile image if it exists
      let profileImageUrl = user.profileImage;
      if (avatarFile) {
        const formData = new FormData();
        formData.append("file", avatarFile as File);
        formData.append("username", usernameInput);

        const response = await fetch("/api/s3-upload", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          throw new Error("Failed to upload image");
        }

        const data = await response.json();
        profileImageUrl = data.fileUrl;
      }

      // Create updated user object
      const updatedUser = {
        username: usernameInput,
        bio: bioInput,
        profileImage: profileImageUrl,
        favouriteFilms: favFilmSlots
          .map((film) => ({
            filmId: film?.filmId,
            title: film?.title,
            posterPath: film?.posterPath,
            backdropPath: film?.backdropPath,
          }))
          .filter((film) => film.filmId !== null), // Filter out null values
      };

      // Update user
      const updateResponse = await updateUser(
        updatedUser as User,
        sessionData.name as string
      );

      if (!updateResponse.success) {
        throw new Error("Failed to update user");
      }

      // Fetch updated user data
      const updatedUserData = await fetchUserData(sessionData.name as string);
      setUser(updatedUserData);

      setUploading(false);
      window.location.reload();
    } catch (error) {
      console.error("Error during profile update:", error);
      setUploading(false);
    }
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setAvatarFile(file);
    const url = URL.createObjectURL(file);
    setProfileImage(url);
  };

  // useEffect(() => {
  //   console.log("avatar file", avatarFile);
  //   console.log("profileImage", profileImage);
  // }, [profileImage, avatarFile]);

  const openModal = () => {
    setShowModal(true);
    setFilmSearchModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setFilmSearchModal(false);
  };

  const removeFavFilm = (filmSlotIndex: number) => {
    const updatedFavFilmSlots = [...favFilmSlots];
    updatedFavFilmSlots[filmSlotIndex] = null;
    setFavFilmSlots(updatedFavFilmSlots);
    closeModal();
  };

  const addNewFavFilm = (newFilm: TMDBFilmDetails) => {
    if (favFilmSlots.some((film) => film?.filmId === newFilm.id)) {
      closeModal();
      return;
    }

    if (!favFilmSlots.includes(null)) return;

    const updatedFavFilms = [...favFilmSlots];
    updatedFavFilms[filmSlotIndex] = {
      filmId: newFilm.id,
      title: newFilm.title,
      posterPath: newFilm.poster_path,
      backdropPath: newFilm.backdrop_path,
    };
    setFavFilmSlots(updatedFavFilms);
    closeModal();
  };

  const handleClick = (index: number) => {
    setFilmSlotIndex(index);
    openModal();
  };

  useEffect(() => {
    const updatedFavFilmSlots = [...favFilms];
    while (updatedFavFilmSlots.length < 3) {
      updatedFavFilmSlots.push(null as unknown as FavouriteFilms);
    }
    setFavFilmSlots(
      updatedFavFilmSlots as unknown as (TMDBFilmDetails | null)[]
    );
  }, [favFilms]);

  if (loading)
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <Loading />
      </div>
    );

  return (
    <div className="flex flex-col justify-center items-center mt-10 karla w-full">
      <Modal showModal={showModal}>
        {showFilmSearchModal && (
          <FilmSearchModal
            addNewFavFilm={addNewFavFilm}
            favFilms={favFilms}
            closeModal={closeModal}
          />
        )}
      </Modal>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col max-w-96 items-center"
      >
        <span className="text-lg">Edit your account</span>
        {demoRestricted && (
          <span className="text-sm font-extralight">
            Demo users can only change favourite films
          </span>
        )}
        <div className="m-4 flex flex-col gap-6">
          <label htmlFor="avatar" className="flex flex-col gap-4">
            Choose Avatar
            <label
              htmlFor="avatarfile"
              className="cursor-pointer flex justify-center"
            >
              <Image
                src={profileImage}
                alt="avatar"
                className="w-36 h-36 border border-[#FBF7F4] rounded-full flex justify-center items-center hover:bg-white/10 object-cover "
                width={100}
                height={100}
              />
            </label>
            <input
              disabled={demoRestricted}
              type="file"
              name="avatarfile"
              id="avatarfile"
              className="hidden"
              onChange={(e) => handleAvatarChange(e)}
            />
          </label>
          <label htmlFor="change-bio">
            Change Bio
            <textarea
              disabled={demoRestricted}
              name="change-bio"
              id="change-bio"
              cols={20}
              rows={10}
              className="border border-[#FBF7F4] bg-transparent rounded-lg px-4 py-2 outline-none hover:bg-white/10 focus:bg-white/20 w-full"
              placeholder="Bio"
              value={bioInput}
              onChange={(e) => setBioInput(e.target.value)}
            ></textarea>
          </label>
          <div>
            <span>Change Favourite Films</span>
            <div className="flex gap-4">
              {favFilmSlots.map((film, index) => (
                <button
                  key={index}
                  type="button"
                  className="w-full rounded-lg flex justify-center items-center border overflow-hidden relative"
                  onClick={() => handleClick(index)}
                >
                  {film ? (
                    <>
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          removeFavFilm(index);
                        }}
                        className="absolute top-0 right-0 px-2 bg-red-700 rounded-full z-10"
                      >
                        X
                      </div>
                      <SmallFilmPoster
                        posterPath={
                          film.posterPath || (film.poster_path as string)
                        }
                        title={film.title}
                      />
                    </>
                  ) : (
                    <span className="h-32 flex items-center">+</span>
                  )}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2 items-end">
            {uploading ? (
              <div className="flex justify-center">
                <Loading />
              </div>
            ) : (
              <GeneralBtn text="Save" />
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default AccountSettingsForm;
