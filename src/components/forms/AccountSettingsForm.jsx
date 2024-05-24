import Image from "next/image";
import React, { useEffect, useState } from "react";
import GeneralBtn from "../buttons/GeneralBtn";
import GeneralInput from "../GeneralInput";
import Modal from "../Modal";
import FilmSearchModal from "../film/FilmSearchModal";
import SmallFilmPoster from "../film/SmallFilmPoster";
import { fetchUserData } from "@/utils/userData";
import Loading from "../loading";

const AccountSettingsForm = () => {
  const [loading, setLoading] = useState(true);
  const [avatarImage, setAvatarImage] = useState("/images/profilePicture.jpg");
  const [showModal, setShowModal] = useState(false);
  const [showFilmSearchModal, setFilmSearchModal] = useState(false);
  const [favFilmSlots, setFavFilmSlots] = useState([null, null, null]);
  const [filmSlotIndex, setFilmSlotIndex] = useState(0);
  const [user, setUser] = useState({});
  const [favFilms, setFavFilms] = useState([]);
  const [usernameInput, setUsernameInput] = useState("");
  const [bioInput, setBioInput] = useState("");

  useEffect(() => {
    console.log("favFilmSlots", favFilmSlots);
    console.log("user", user);
    console.log("favFilms", favFilms);
  }, [favFilmSlots, user, favFilms]);

  useEffect(() => {
    (async () => {
      const data = await fetchUserData("cadaverinbloom");
      setUser(data);
      setFavFilms(data.favouriteFilms);
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    if (!user) return;
    setFavFilms(user.favouriteFilms || []);
    setUsernameInput(user.username || "");
    setBioInput(user.bio || "");
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log(favFilmSlots);

    const updatedUser = {
      username: usernameInput,
      bio: bioInput,
      favouriteFilms: [
        {
          filmId: favFilmSlots[0]?.id || favFilmSlots[0]?.filmId,
          title: favFilmSlots[0]?.title,
          posterPath:
            favFilmSlots[0]?.poster_path || favFilmSlots[0]?.posterPath,
        },
        {
          filmId: favFilmSlots[1]?.id || favFilmSlots[1]?.filmId,
          title: favFilmSlots[1]?.title,
          posterPath:
            favFilmSlots[1]?.poster_path || favFilmSlots[1]?.posterPath,
        },
        {
          filmId: favFilmSlots[2]?.id || favFilmSlots[2]?.filmId,
          title: favFilmSlots[2]?.title,
          posterPath:
            favFilmSlots[2]?.poster_path || favFilmSlots[2]?.posterPath,
        },
      ],
    };

    console.log("updatedUser", updatedUser);

    const response = await fetch("/api/v1/users/user?username=cadaverinbloom", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedUser),
    });

    if (response.ok) {
      const data = await response.json();
      setUser(data.result);
    }

    window.location.reload();
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
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

  const addNewFavFilm = (newFilm) => {
    if (favFilmSlots.some((film) => film?.filmId === newFilm?.id)) {
      closeModal();
      return;
    }

    if (!favFilmSlots.includes(null)) return;

    const updatedFavFilms = [...favFilmSlots];
    updatedFavFilms[filmSlotIndex] = newFilm;
    setFavFilmSlots(updatedFavFilms);
    closeModal();
  };

  const handleClick = (index) => {
    setFilmSlotIndex(index);
    openModal();
  };

  useEffect(() => {
    const updatedFavFilmSlots = [...favFilms];
    console.log("updatedFavFilmSlots", updatedFavFilmSlots);
    while (updatedFavFilmSlots.length < 3) {
      updatedFavFilmSlots.push(null);
    }
    setFavFilmSlots(updatedFavFilmSlots);
  }, [favFilms]);

  if (loading) return <Loading />;

  return (
    <div className="flex flex-col justify-center items-center mt-10 karla">
      <Modal showModal={showModal}>
        {showFilmSearchModal && (
          <FilmSearchModal
            openModal={openModal}
            addNewFavFilm={addNewFavFilm}
            favFilms={favFilms}
            closeModal={closeModal}
          />
        )}
      </Modal>
      <form onSubmit={handleSubmit} className="flex flex-col w-96">
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
              cols="30"
              rows="5"
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
                  {film?.posterPath || film?.poster_path ? (
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
