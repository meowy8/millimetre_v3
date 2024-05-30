"use client";
import MediumUserAvatar from "@/components/user/MediumUserAvatar";
import FilmNote from "@/components/film/FilmNote";
import { fetchUserNoteData } from "@/utils/dataFetching/noteData";
import Link from "next/link";
import React, { useEffect } from "react";
import { FilmNotes } from "@/types/filmTypes";
import { useParams } from "next/navigation";

const UserNotes = () => {
  const [userNotes, setUserNotes] = React.useState([]);

  const params = useParams();
  const username = params.username;

  // fetch user notes
  useEffect(() => {
    (async () => {
      const data = await fetchUserNoteData(username, null, null, true);
      console.log("data", data);
      setUserNotes(data);
    })();
  }, []);

  return (
    <section>
      <div className="flex items-end gap-4">
        <Link href={`/user/profile/${username}`}>
          <MediumUserAvatar />
        </Link>
        <p className="karla text-xl">
          Notes by{" "}
          <Link href={`/user/profile/${username}`} className="outfit font-bold">
            {username}
          </Link>
        </p>
      </div>
      <hr className="my-4" />
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
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
