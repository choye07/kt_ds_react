import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchMovie } from "../../http/movieHttp";
import { MovieItem } from "../main/MovieList";

export default function Search() {
  const { search } = useParams();
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setSearchResult([]);
    (async () => {
      const result = await searchMovie(search);
      setSearchResult(result);
    })();
  }, [search]);

  return (
    <div>
      <h1>'{search}' 검색결과</h1>
      <div>
        {searchResult.map((movie) => (
          <MovieItem key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
}
