function Pagination({ handleNext, handlePrevious, totalResults, page }) {
  const start = (page - 1) * 10 + 1;
  const end = Math.min(page * 10, totalResults);

  return (
    <div className="w-full h-20 flex items-center justify-between bg-black/30 p-3">
      <h3 className="text-white text-xs md:text-lg ">
        Showing {start} – {end} of {totalResults} results
      </h3>

      <div className="flex gap-x-3">
        <button
          onClick={handlePrevious}
          className="md:w-[75px] md:h-[30px] p-1 bg-blue-800 border border-white  flex items-center justify-center rounded-md text-white"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="md:w-[75px] md:h-[30px] p-1 bg-red-800 border border-white  flex items-center justify-center rounded-md text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;
