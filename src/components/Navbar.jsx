import logo from "../assets/logo.png";

function Navbar({ searchInput, setSearchInput, setType, canShow }) {
  return (
    <div className="h-[10%] w-full bg-black/30 text-white flex items-center justify-between p-2">
      <div className="flex items-center">
        <i className="fa-solid fa-film text-3xl"></i>
        <img src={logo} className="w-[70px]" />
      </div>

      {canShow && (
        <>
          <input
            className="bg-transparent rounded-md text-gray-300 p-2 border border-gray-400 w-1/2 md:w-1/2"
            type="text"
            placeholder="Search Movies"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />

          <select
            className="w-[50px] p-1 md:w-[100px] border border-gray-400 rounded-lg text-white"
            onChange={(e) => setType(e.target.value)}
          >
            <option value="all" className="text-black">
              All
            </option>
            <option value="movie" className="text-black">
              Movies
            </option>
            <option value="series" className="text-black">
              Series
            </option>
          </select>
        </>
      )}
    </div>
  );
}

export default Navbar;
