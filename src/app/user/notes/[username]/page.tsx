"use client";
import MediumUserAvatar from "@/components/user/MediumUserAvatar";
import FilmNote from "@/components/film/FilmNote";
import { fetchUserNoteData } from "@/utils/dataFetching/noteData";
import Link from "next/link";
import React, { useEffect } from "react";
import { FilmNotes } from "@/types/filmTypes";
import { useParams } from "next/navigation";
import { fetchUserData } from "@/utils/dataFetching/userData";

const UserNotes = () => {
  const [userNotes, setUserNotes] = React.useState([]);
  const [profileImage, setProfileImage] = React.useState("");

  const params = useParams();
  const username = params.username;

  // fetch user notes
  useEffect(() => {
    (async () => {
      const data = await fetchUserNoteData(username, null, null, true);
      // console.log("data", data);
      setUserNotes(data);
    })();
  }, [username]);

  useEffect(() => {
    (async () => {
      const data = await fetchUserData(username);
      setProfileImage(data.profileImage);
    })();
  }, [username]);

  return (
    <section className="mt-24 px-4 mx-auto w-full max-w-[1000px]">
      <div className="flex items-end gap-4">
        <Link href={`/user/profile/${username}`}>
          <MediumUserAvatar profileImage={profileImage} />
        </Link>
        <p className="karla text-xl">
          Notes by{" "}
          <Link href={`/user/profile/${username}`} className="outfit font-bold">
            {username}
          </Link>
        </p>
      </div>
      <hr className="my-4" />
      <section className="flex flex-col gap-4">
        {userNotes && userNotes.length > 0 ? (
          userNotes.map((note: FilmNotes) => {
            return <FilmNote key={note._id} note={note} />;
          })
        ) : (
          <p className="karla">No notes yet.</p>
        )}
      </section>
    </section>
  );
};

export default UserNotes;
