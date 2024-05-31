"use client";
import FilmBackdrop from "@/components/film/FilmBackdrop";
import EmptyBackdrop from "@/components/film/EmptyBackdrop";
import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import Loading from "@/components/loading";
import { useRouter } from "next/navigation";
import { fetchUserData } from "@/utils/dataFetching/userData";
import { fetchUserNoteData } from "@/utils/dataFetching/noteData";
import ProfileDetailsContainer from "@/components/containers/ProfileDetailsContainer";

const Profile = () => {
  const [user, setUser] = React.useState({} as any);
  const [userBackdrop, setUserBackdrop] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const [isVisible, setIsVisible] = React.useState(false);
  const [userNotes, setUserNotes] = React.useState([]);
  const [recentlyWatched, setRecentylWatched] = React.useState([]);

  const { username } = useParams();

  const router = useRouter();

  // useEffect(() => {
  //   console.log("user", user);
  // }, [user]);

  // fetch user
  useEffect(() => {
    (async () => {
      const data = await fetchUserData(username);

      console.log(data);

      // check if user data is null
      if (!data) {
        return router.push("/not-found");
      }

      // set user data
      setUser(data);
      if (data.favouriteFilms[0]) {
        setUserBackdrop(
          `https://image.tmdb.org/t/p/original${data.favouriteFilms[0].backdropPath}`
        );
      }
    })();
  }, [username, router]);

  // fetch user notes
  useEffect(() => {
    // check if user is null
    if (!user) return;

    // fetch user notes
    (async () => {
      const data = await fetchUserNoteData(username, null, 3, true);

      setUserNotes(data);
    })();
  }, [user, username]);

  // fetch recently watched
  useEffect(() => {
    if (!user) return;

    (async () => {
      const data = await fetchUserNoteData(username, null, 3, false);

      setRecentylWatched(data);
    })();
  }, [user, username]);

  // set user backdrop
  useEffect(() => {
    // check if user is null
    if (!user.backdropPath) return;

    // set user backdrop
    setUserBackdrop(`https://image.tmdb.org/t/p/original${user.backdropPath}`);
  }, [user]);

  // set loading state
  useEffect(() => {
    // check if user and backdrop are not null
    if (user) {
      setLoading(false);
    }
  }, [user, userBackdrop]);

  // set isVisible state
  useEffect(() => {
    if (!loading) {
      setIsVisible(true);
    }
  }, [loading]);

  // wait for data to load before displaying page
  if (loading)
    return (
      <div className="flex justify-center items-center w-full h-screen">
        <Loading />
      </div>
    );

  return (
    <section
      className={`relative overflow-x-hidden flex flex-col items-center w-full ${
        isVisible ? "opacity-100" : "opacity-0"
      } transition-opacity duration-500 ease-in-out`}
    >
      {userBackdrop ? (
        <FilmBackdrop backdropImage={userBackdrop} />
      ) : (
        <EmptyBackdrop />
      )}
      <ProfileDetailsContainer
        user={user}
        userNotes={userNotes}
        recentlyWatched={recentlyWatched}
      />
    </section>
  );
};

export default Profile;
