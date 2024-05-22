"use client";
import FilmBackdrop from "@/components/film/FilmBackdrop";
import React, { useEffect } from "react";
import LargeUserAvatar from "@/components/user/LargeUserAvatar";
import { useParams } from "next/navigation";
import FavFilmsDisplay from "@/components/film/FavFilmsDisplay";
import RecentFilmsDisplay from "@/components/film/RecentFilmsDisplay";
import Loading from "@/components/loading";
import UserNotesList from "@/components/user/UserNotesList";
import { useRouter } from "next/navigation";

const Profile = () => {
  const [user, setUser] = React.useState({} as any);
  const [userBackdrop, setUserBackdrop] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const [isVisible, setIsVisible] = React.useState(false);
  const [userNotes, setUserNotes] = React.useState([]);

  const { username } = useParams();

  const router = useRouter();

  useEffect(() => {
    console.log("user", user);
  }, [user]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`/api/v1/users/user?username=${username}`);
        const data = await response.json();
        // console.log(data);

        if (data.message === "User not found") {
          router.push("/not-found");
        } else if (data.message === "Success") {
          setUser(data.result);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchUser();
  }, [username, router]);

  useEffect(() => {
    const fetchUserNotes = async () => {
      try {
        const response = await fetch(
          `/api/v1/notes/userNotes?username=${username}&limit=3`
        );
        const data = await response.json();
        // console.log(data);

        if (data.message === "Success") {
          setUserNotes(data.result);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserNotes();
  }, [username]);

  useEffect(() => {
    if (!user.backdropPath) return;
    setUserBackdrop(`https://image.tmdb.org/t/p/original${user.backdropPath}`);
  }, [user]);

  useEffect(() => {
    if (user && userBackdrop) {
      setLoading(false);
    }
  }, [user, userBackdrop]);

  useEffect(() => {
    if (!loading) {
      setIsVisible(true);
    }
  }, [loading]);

  if (loading) return <Loading />;

  return (
    <section
      className={`relative -top-24 overflow-x-hidden flex flex-col items-center w-full ${
        isVisible ? "opacity-100" : "opacity-0"
      } transition-opacity duration-500 ease-in-out`}
    >
      {userBackdrop && <FilmBackdrop backdropImage={userBackdrop} />}
      <div className="relative bottom-24 m-6 flex flex-col justify-between  gap-4 lg:bottom-44 lg:flex-row">
        <div className="bg-black/30 blur-lg w-full h-full absolute -z-10 mt-10"></div>
        <div className="flex flex-col items-center gap-4 lg:items-start w-full">
          <LargeUserAvatar />
          <span className="outfit text-xl font-bold">{user.username}</span>
          <p className="karla text-center px-6 mb-4 lg:text-left lg:p-0 max-w-96 ml-2">
            {user.bio}
          </p>
          <div className="my-4 flex flex-col gap-2">
            <span className="karla font-semibold ml-2">Favourite Films</span>
            <FavFilmsDisplay user={user} />
          </div>
          <div className="my-4 flex flex-col gap-2 lg:my-0">
            <span className="karla font-semibold ml-2">Recently Watched</span>
            <RecentFilmsDisplay user={user} />
          </div>
        </div>
        <div className="my-4 flex flex-col lg:items-end gap-2 mt-32 w-full">
          <span className="karla ml-2">
            Notes by{" "}
            <span className="outfit font-semibold">{user.username}</span>
          </span>
          <UserNotesList userNotes={userNotes} />
        </div>
      </div>
    </section>
  );
};

export default Profile;
