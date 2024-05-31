"use client";
import MediumFilmPoster from "@/components/film/MediumFilmPoster";
import SmallFilmPoster from "@/components/film/SmallFilmPoster";
import { FilmNotes } from "@/types/filmTypes";
import { fetchUserNoteData } from "@/utils/dataFetching/noteData";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

const RecentlyWatched = () => {
  const [recentlyWatched, setRecentlyWatched] = React.useState([]);

  const params = useParams();
  const username = params.username;

  const { data: session } = useSession();

  // fetch all recently watched
  useEffect(() => {
    (async () => {
      const data = await fetchUserNoteData(username, null, null, false);
      setRecentlyWatched(data);
    })();
  }, [username]);

  // useEffect(() => {
  //   console.log("recentlyWatched", recentlyWatched);
  // }, [recentlyWatched]);

  return (
    <div>
      <h1 className="text-xl karla flex flex-col">
        <span className="outfit text-2xl mr-2">{username}&apos;s</span> recently
        watched
      </h1>
      <hr className="mb-8" />
      <div className="flex flex-wrap gap-4 karla">
        {recentlyWatched?.length > 0 ? (
          recentlyWatched.map((film: FilmNotes) => (
            <div
              key={film._id}
              className="flex bg-[#001F24] w-full rounded-md "
            >
              <div className="w-full m-4">
                <div className="flex justify-between w-full">
                  <Link href={`/film/${film.filmId}`}>
                    <span className="outfit text-lg line-clamp-1">
                      {film.title}
                    </span>
                  </Link>
                  {film.content && (
                    <Link
                      href={`/user/notes/${username}/${film._id}`}
                      className="hover:opacity-80"
                    >
                      <p>Review</p>
                    </Link>
                  )}
                </div>
                <hr />
                <div className="flex mt-4 items-center">
                  <span className="italic font-light text-2xl line-clamp-1">
                    {new Date(film.createdAt as string).toDateString()}
                  </span>
                </div>
              </div>
              <Link
                href={`/film/${film.filmId}`}
                className="border rounded-lg hover:opacity-90"
              >
                <SmallFilmPoster
                  posterPath={film.posterPath}
                  title={film.title}
                />
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center">No films added yet</p>
        )}
      </div>
    </div>
  );
};

export default RecentlyWatched;
