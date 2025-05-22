// const apiKey = "95884dd471437280cdf1fef09c273da2";
const apiReadToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTg4NGRkNDcxNDM3MjgwY2RmMWZlZjA5YzI3M2RhMiIsIm5iZiI6MTc0Nzc4NTU1Mi41NDQsInN1YiI6IjY4MmQxNzUwMDc2MDVjYjJhNjBiZTJlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Dq8WlhZRYZOXMoFIII-G9vbJkqysy3V2gSwav3b2q_4";

export async function loadGenres() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiReadToken}`,
    },
  };

  const response = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list?language=ko",
    options
  );

  const json = await response.json();
  return json;
}

export async function loadMovies(genreId = "") {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiReadToken}`,
    },
  };

  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=ko-KR&page=1&region=ko&sort_by=popularity.desc&with_genres=${genreId}`,
    options
  );
  const json = await response.json();
  return json;
}

export async function loadMovie(movieId) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiReadToken}`,
    },
  };

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=ko-KR`,
    options
  );
  const json = await response.json();
  return json;
}

export async function loadActors(movieId) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiReadToken}`,
    },
  };

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?language=ko-KR`,
    options
  );
  const json = await response.json();
  return json;
}

export async function loadActorsMovie(actorId) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiReadToken}`,
    },
  };

  const response = await fetch(
    `https://api.themoviedb.org/3/person/${actorId}/movie_credits?language=ko-KR`,
    options
  );

  const json = await response.json();
  return json;
}
export async function loadSimilarMovies(movieId) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiReadToken}`,
    },
  };

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/similar?language=ko-KR&page=1`,
    options
  );
  const json = await response.json();
  return json;
}

export async function searchMovie(searchKeyword) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiReadToken}`,
    },
  };

  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${searchKeyword}&include_adult=false&language=ko-KR&page=1`,
    options
  );
  const json = await response.json();
  return json.results;
}
