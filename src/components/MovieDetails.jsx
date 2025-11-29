import { useNavigate } from "react-router-dom";

function MovieDetails({ movieDetails, onShow }) {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen w-full bg-linear-to-br from-black via-gray-900 to-black flex justify-center items-center p-6">
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl w-full max-w-5xl p-8 flex flex-col md:flex-row gap-10">
        <img
          src={movieDetails.Poster}
          alt={movieDetails.Title}
          className="w-72 h-[430px] object-cover rounded-xl shadow-lg border border-white/20"
        />

        <div className="text-white flex flex-col gap-5">
          <h1 className="text-4xl font-extrabold text-yellow-400 drop-shadow-lg">
            {movieDetails.Title}
          </h1>

          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-1 bg-yellow-500/20 text-yellow-400 border border-yellow-400/30 rounded-full text-sm">
              ⭐ IMDb: {movieDetails.imdbRating}
            </span>
            <span className="px-4 py-1 bg-white/10 border border-white/20 rounded-full text-sm">
              ⏳ {movieDetails.Runtime}
            </span>
            <span className="px-4 py-1 bg-white/10 border border-white/20 rounded-full text-sm">
              📅 {movieDetails.Year}
            </span>
            {movieDetails.Rated !== "N/A" && (
              <span className="px-4 py-1 bg-white/10 border border-white/20 rounded-full text-sm">
                🔒 {movieDetails.Rated}
              </span>
            )}
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-300 mb-1">Plot</h2>
            <p className="text-gray-200 leading-relaxed text-sm">
              {movieDetails.Plot}
            </p>
          </div>

          <hr className="border-white/10" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <p>
              <span className="font-semibold text-gray-300">Director:</span>{" "}
              {movieDetails.Director}
            </p>
            <p>
              <span className="font-semibold text-gray-300">Writer:</span>{" "}
              {movieDetails.Writer}
            </p>
            <p>
              <span className="font-semibold text-gray-300">Actors:</span>{" "}
              {movieDetails.Actors}
            </p>
            <p>
              <span className="font-semibold text-gray-300">Genre:</span>{" "}
              {movieDetails.Genre}
            </p>
            <p>
              <span className="font-semibold text-gray-300">Language:</span>{" "}
              {movieDetails.Language}
            </p>
            <p>
              <span className="font-semibold text-gray-300">Country:</span>{" "}
              {movieDetails.Country}
            </p>
            <p>
              <span className="font-semibold text-gray-300">Awards:</span>{" "}
              {movieDetails.Awards}
            </p>
            <p>
              <span className="font-semibold text-gray-300">Released:</span>{" "}
              {movieDetails.Released}
            </p>
          </div>

          <hr className="border-white/10" />

          <div className="flex gap-4 mt-2">
            <button
              className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 font-semibold transition"
              onClick={() => {
                navigate("/");
                onShow(true);
              }}
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
