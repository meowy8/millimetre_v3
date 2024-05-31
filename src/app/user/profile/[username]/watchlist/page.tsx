"use client";
import MediumFilmPoster from "@/components/film/MediumFilmPoster";
import { FilmType } from "@/types/filmTypes";
import { User } from "@/types/userTypes";
import {
  fetchUserData,
  fetchUserWatchlist,
} from "@/utils/dataFetching/userData";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

const Watchlist = () => {
  const [watchlist, setWatchlist] = React.useState([]);
  const params = useParams();
  const { username } = params;

  // fetch user watchlist
  useEffect(() => {
    (async () => {
      const data = await fetchUserWatchlist(username);
      setWatchlist(data);
    })();
  }, [username]);

  // useEffect(() => {
  //   console.log("watchlist", watchlist);
  // }, [watchlist]);

  return (
    <div>
      <h1 className="text-xl karla flex flex-col">
        Watchlist for{" "}
        <Link
          href={`/user/profile/${username}`}
          className="outfit font-bold text-2xl"
        >
          {username}
        </Link>
      </h1>
      <hr />
      <div className="flex flex-wrap gap-4 mt-6">
        {watchlist.map((film: FilmType) => (
          <Link
            key={film.filmId}
            href={`/film/${film.filmId}`}
            className="border rounded-lg hover:opacity-90"
          >
            <MediumFilmPoster posterPath={film.posterPath} title={film.title} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Watchlist;
