"use client";
import FilmBackdrop from "@/components/film/FilmBackdrop";
import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import Loading from "@/components/loading";
import { useRouter } from "next/navigation";
import { fetchUserData } from "@/utils/userData";
import { fetchUserNoteData } from "@/utils/noteData";
import ProfileDetailsContainer from "@/components/containers/ProfileDetailsContainer";

const Profile = () => {
  const [user, setUser] = React.useState({} as any);
  const [userBackdrop, setUserBackdrop] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const [isVisible, setIsVisible] = React.useState(false);
  const [userNotes, setUserNotes] = React.useState([]);

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
    })();
  }, [username, router]);

  // fetch user notes
  useEffect(() => {
    // check if user is null
    if (!user) return;

    // fetch user notes
    (async () => {
      const data = await fetchUserNoteData(username, null, 3);

      setUserNotes(data);
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
    if (user && userBackdrop) {
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
  if (loading) return <Loading />;

  return (
    <section
      className={`relative -top-24 overflow-x-hidden flex flex-col items-center w-full ${
        isVisible ? "opacity-100" : "opacity-0"
      } transition-opacity duration-500 ease-in-out`}
    >
      {userBackdrop && <FilmBackdrop backdropImage={userBackdrop} />}
      <ProfileDetailsContainer user={user} userNotes={userNotes} />
    </section>
  );
};

export default Profile;
