"use client";
import MediumFilmPoster from "@/components/film/MediumFilmPoster";
import SmallFilmPoster from "@/components/film/SmallFilmPoster";
import Loading from "@/components/Loading";
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
  const [loading, setLoading] = React.useState(true);

  const params = useParams();
  const { username } = params;

  // fetch user watchlist
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const data = await fetchUserWatchlist(username);
        setWatchlist(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [username]);

  // useEffect(() => {
  //   console.log("watchlist", watchlist);
  // }, [watchlist]);

  return (
    <section className="mt-24 px-4 mx-auto w-full max-w-[1000px]">
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
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {loading && <Loading />}
        {watchlist.map((film: FilmType) => (
          <Link
            key={film.filmId}
            href={`/film/${film.filmId}`}
            className="border rounded-lg hover:opacity-90"
          >
            <SmallFilmPoster posterPath={film.posterPath} title={film.title} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Watchlist;
