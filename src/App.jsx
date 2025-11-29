import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./components/MovieCard";
import Navbar from "./components/Navbar";
import { Routes, Route, useNavigate } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";

const API = "https://www.omdbapi.com/?apikey=deada577";

function App() {
  const navigate = useNavigate();

  const [searchInput, setSearchInput] = useState("");
  const [movies, setMovies] = useState([]);
  const [movieDetails, setMovieDetails] = useState({});
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);
  const [type, setType] = useState("all");
  const [canShow, setCanshow] = useState(true);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchMovies(query, pageNum, typeValue) {
    if (!query) {
      setMovies([]);
      setError("");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const url = `${API}&s=${query}${
        typeValue !== "all" ? `&type=${typeValue}` : ""
      }&page=${pageNum}`;

      const res = await fetch(url);

      if (!res.ok) {
        throw new Error("Network error while fetching movies");
      }

      const data = await res.json();

      if (data.Response === "False") {
        setMovies([]);
        setError(data.Error || "No movies found.");
      } else {
        setMovies(data.Search || []);
        setTotalResults(Number(data.totalResults) || 0);
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong while fetching movies.");
    }

    setLoading(false);
  }

  useEffect(() => {
    const delay = setTimeout(() => {
      fetchMovies(searchInput, page, type);
    }, 500);

    return () => clearTimeout(delay);
  }, [searchInput, page, type]);

  function handleDetails(id) {
    setCanshow(false);
    fetch(`${API}&i=${id}`)
      .then((res) => res.json())
      .then((result) => {
        setMovieDetails(result);
        navigate("/details");
      })
      .catch(() => {
        alert("Failed to load movie details.");
      });
  }

  function handleNextPagination() {
    setPage((prev) => prev + 1);
  }

  function handlePreviousPagination() {
    if (page > 1) setPage((prev) => prev - 1);
  }

  return (
    <div className="bg-black/85 min-h-screen w-full flex flex-col">
      <Navbar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        setType={setType}
        canShow={canShow}
      />

      <Routes>
        <Route
          path="/"
          element={
            <div className="p-4">
              {!searchInput && movies.length === 0 && !error && (
                <div className="flex justify-center mt-32">
                  <p className="text-gray-500 text-xl">Search for a movie...</p>
                </div>
              )}

              {loading && (
                <div className="flex justify-center mt-16">
                  <div className="animate-spin w-12 h-12 border-4 border-gray-300 border-t-transparent rounded-full"></div>
                </div>
              )}

              {error && (
                <div className="flex justify-center mt-12">
                  <p className="text-red-500 font-semibold text-xl">{error}</p>
                </div>
              )}

              {!loading && movies.length > 0 && !error && (
                <MovieCard
                  movies={movies}
                  handleDetails={handleDetails}
                  handleNext={handleNextPagination}
                  handlePrevious={handlePreviousPagination}
                  totalResults={totalResults}
                  page={page}
                />
              )}
            </div>
          }
        />

        <Route
          path="/details"
          element={
            <MovieDetails movieDetails={movieDetails} onShow={setCanshow} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
