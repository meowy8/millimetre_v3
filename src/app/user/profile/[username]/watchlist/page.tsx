"use client";
import MediumFilmPoster from "@/components/film/MediumFilmPoster";
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

  useEffect(() => {
    (async () => {
      const data = await fetchUserWatchlist(username);
      setWatchlist(data);
    })();
  }, [username]);

  useEffect(() => {
    console.log("watchlist", watchlist);
  }, [watchlist]);

  return (
    <div>
      <h1 className="text-3xl mb-8 karla underline-offset-2 underline">
        <span className="font-bold outfit">{username}&apos;s</span> watchlist
      </h1>
      <div className="flex flex-wrap gap-4">
        {watchlist.map((film) => (
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
