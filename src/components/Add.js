import { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

const Add = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  async function fetchMovies(query) {
    if (!query) {
      setResults([]);
      return;
    }
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&query=${query}`
      );

      const movies = response.data.results;
      setResults(movies);
      console.log("Movies:", movies);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  }

  useEffect(() => {
    fetchMovies(query);
  }, [query]);

  return (
    <div className="bg-slate-500 flex-1">
      <div className="flex flex-col items-center mt-3">
        <input
          onChange={handleChange}
          className="bg-primary text-white font-bold outline-none rounded-md border p-2 w-[660px]"
        />
        {results.length > 0 ? (
          <ul className="mt-5 mr-52">
            {results.map((result) => {
              return <MovieCard key={result.id} result={result} />;
            })}
          </ul>
        ) : (
          <p className="font-bold text-l m-5 text-white">
            "There are no movies yet"
          </p>
        )}
      </div>
    </div>
  );
};

export default Add;
