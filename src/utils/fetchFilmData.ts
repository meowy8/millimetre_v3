export const fetchFilmDetails = async (filmId: string) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`,
    },
  };

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${filmId}?language=en-US`,
      options
    );
    const filmDetailsData = await response.json();

    console.log(filmDetailsData);
    return filmDetailsData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchFilmCredits = async (filmId: string) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`,
    },
  };

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${filmId}/credits?language=en-US`,
      options
    );
    const filmCreditsData = await response.json();
    console.log(filmCreditsData);
    return filmCreditsData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchFilmImages = async (filmId: string) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`,
    },
  };

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${filmId}/images`,
      options
    );
    const filmImagesData = await response.json();
    console.log(filmImagesData);
    return filmImagesData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchFilmSearch = async (query: string) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`,
    },
  };

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&language=en-US&page=1`,
      options
    );
    const filmSearchData = await response.json();
    console.log(filmSearchData);
    return filmSearchData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchFilmsByPopularityRange = async (
  minPopularity: number,
  maxPopularity: number
) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`,
    },
  };

  try {
    const initialResponse = await fetch(
      `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&vote_count.gte=${minPopularity}&vote_count.lte=${maxPopularity}&page=1&release_date.lte=${
        new Date().getFullYear() - 10
      }-01-01&vote_average.gte=7&sort_by=vote_average.desc&without_genres=comedy`,
      options
    );
    const filmsData = await initialResponse.json();

    const randomPage = Math.floor(Math.random() * filmsData.total_pages) + 1;

    console.log("Random page:", randomPage);

    const randomResponse = await fetch(
      `https://api.themoviedb.org/3/discover/movie?page=${randomPage}&sort_by=popularity.desc&vote_count.gte=${minPopularity}&vote_count.lte=${maxPopularity}&release_date.lte=${
        new Date().getFullYear() - 10
      }-01-01&vote_average.gte=7&sort_by=vote_average.desc&without_genres=comedy`,
      options
    );
    const randomFilmsData = await randomResponse.json();

    console.log(randomFilmsData.results);
    return randomFilmsData.results.slice(0, 4); // Return the first 4 films
  } catch (error) {
    console.error("Error fetching films by popularity range:", error);
  }
};
