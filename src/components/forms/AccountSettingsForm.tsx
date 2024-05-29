import Image from "next/image";
import React, { useEffect, useState } from "react";
import GeneralBtn from "../buttons/GeneralBtn";
import GeneralInput from "../GeneralInput";
import Modal from "../Modal";
import FilmSearchModal from "../film/FilmSearchModal";
import SmallFilmPoster from "../film/SmallFilmPoster";
import { fetchUserData } from "@/utils/dataFetching/userData";
import Loading from "../loading";
import { FavouriteFilms, User } from "@/types/userTypes";
import { TMDBFilmDetails } from "@/types/filmTypes";

const AccountSettingsForm = (sessionData: any) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [avatarImage, setAvatarImage] = useState<string>(
    "/images/profilePicture.jpg"
  );
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showFilmSearchModal, setFilmSearchModal] = useState<boolean>(false);
  const [favFilmSlots, setFavFilmSlots] = useState<(TMDBFilmDetails | null)[]>([
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
  //   console.log("favFilmSlots", favFilmSlots);
  //   console.log("user", user);
  //   console.log("favFilms", favFilms);
  // }, [favFilmSlots, user, favFilms]);

  useEffect(() => {
    if (!sessionData.sessionData) return;
    // console.log("sessionData", sessionData);
    (async () => {
      const data = await fetchUserData(sessionData.sessionData.username);

      if (!data) {
        return;
      }

      setUser(data);
    })();
  }, [sessionData]);

  useEffect(() => {
    if (!user) return;
    setFavFilms(user.favouriteFilms || []);
    setUsernameInput(user.username || "");
    setBioInput(user.bio || "");
  }, [user]);

  useEffect(() => {
    if (!user) return;
    setLoading(false);
  }, [user]);

  const handleSubmit = async (e: React.FormEvent) => {
    if (!user) return;

    e.preventDefault();

    const updatedUser = {
      username: usernameInput,
      bio: bioInput,
      favouriteFilms: favFilmSlots
        .map((film) => ({
          filmId: film?.filmId,
          title: film?.title,
          posterPath: film?.posterPath,
          backdropPath: film?.backdropPath,
        }))
        .filter((film) => film.filmId !== null), // Filter out null values
    };

    console.log("updatedUser", updatedUser);

    // check if this is a security issue //
    const response = await fetch(
      `/api/users/user?userId=${sessionData.sessionData.id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedUser),
      }
    );

    if (response.ok) {
      const data = await response.json();
      // setUser(data.result);
      console.log("data", data);
    }

    window.location.reload();
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setAvatarImage(URL.createObjectURL(file));
  };

  const openModal = () => {
    setShowModal(true);
    setFilmSearchModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setFilmSearchModal(false);
  };

  const addNewFavFilm = (newFilm: TMDBFilmDetails) => {
    if (favFilmSlots.some((film) => film?.id === newFilm.id)) {
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

  if (loading) return <Loading />;

  return (
    <div className="flex flex-col justify-center items-center mt-10 karla">
      <Modal showModal={showModal}>
        {showFilmSearchModal && (
          <FilmSearchModal
            addNewFavFilm={addNewFavFilm}
            favFilms={favFilms}
            closeModal={closeModal}
          />
        )}
      </Modal>
      <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col w-96">
        <span className="text-lg">Edit your account</span>
        <div className="m-4 flex flex-col gap-6">
          <label htmlFor="avatar" className="flex flex-col gap-4">
            Choose Avatar
            <label
              htmlFor="avatarfile"
              className="cursor-pointer flex justify-center"
            >
              <Image
                src={avatarImage}
                alt="avatar"
                className="w-36 h-36 border border-[#FBF7F4] rounded-full flex justify-center items-center hover:bg-white/10 object-cover "
                width={100}
                height={100}
              />
            </label>
            <input
              type="file"
              name="avatarfile"
              id="avatarfile"
              className="hidden"
              onChange={handleAvatarChange}
            />
          </label>
          <label
            htmlFor="change-profile-backdrop"
            className="flex flex-col gap-2"
          >
            Change Profile Backdrop
            <input
              type="text"
              name="change-profile-backdrop"
              id="change-profile-backdrop"
              placeholder="Film backdrop"
              className="border border-[#FBF7F4] bg-transparent rounded-lg px-4 py-2 outline-none hover:bg-white/10 focus:bg-white/20 w-full"
            />
          </label>
          <label htmlFor="change-username" className="flex flex-col gap-2">
            Change Username
            <input
              type="text"
              name="change-username"
              id="change-username"
              placeholder="Username"
              className="border border-[#FBF7F4] bg-transparent rounded-lg px-4 py-2 outline-none hover:bg-white/10 focus:bg-white/20 w-full"
              value={usernameInput}
              onChange={(e) => setUsernameInput(e.target.value)}
            />
          </label>
          <label htmlFor="change-bio">
            Change Bio
            <textarea
              name="change-bio"
              id="change-bio"
              cols={30}
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
                  className="w-full rounded-lg flex justify-center items-center border overflow-hidden"
                  onClick={() => handleClick(index)}
                >
                  {film ? (
                    <SmallFilmPoster
                      posterPath={film.posterPath || film.poster_path}
                      title={film.title}
                    />
                  ) : (
                    <span>+</span>
                  )}
                </button>
              ))}
            </div>
          </div>
          <div>
            <GeneralBtn text="Save" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AccountSettingsForm;
