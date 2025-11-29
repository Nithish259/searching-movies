import Pagination from "./Pagination";
import noImage from "../assets/noImage.png";

function MovieCard({
  movies,
  handleDetails,
  handlePrevious,
  handleNext,
  page,
  totalResults,
}) {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full h-full p-2  text-white">
        {movies.map((movie) => (
          <div
            className="bg-white/10 w-full md:w-[200px] h-full p-2 rounded shadow flex flex-col gap-y-1"
            key={movie.imdbID}
          >
            <div className="w-full h-[300px] overflow-hidden rounded-lg bg-gray-200">
              <img
                src={movie.Poster !== "N/A" ? movie.Poster : noImage}
                onError={(e) => {
                  e.currentTarget.src = noImage;
                }}
                alt={movie.Title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-bold mt-2 text-sm truncate">{movie.Title}</h3>
            <p className="text-xs">{movie.Year}</p>

            <button
              className="bg-linear-to-r from-red-600/80 to-blue-900/80 rounded-md border border-white/40 w-1/2 h-[35px]"
              onClick={() => handleDetails(movie.imdbID)}
            >
              Details
            </button>
          </div>
        ))}
      </div>
      {movies.length > 0 ? (
        <Pagination
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          totalResults={totalResults}
          page={page}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default MovieCard;
