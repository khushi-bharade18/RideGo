import { useState } from "react";

import { FiSearch } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";

const SearchForm = ({
  search,
  setSearch,
  suggestions,
  onSelectDestination,
}) => {
  const [showSuggestions, setShowSuggestions] =
    useState(false);

  const [error, setError] = useState("");

  const handleSearch = () => {
    // Empty validation
    if (!search.trim()) {
      setError("Please enter a destination");
      return;
    }

    // Location validation
    const locationExists = suggestions.find(
      (item) =>
        item.name.toLowerCase() ===
        search.toLowerCase()
    );

    if (!locationExists) {
      setError(
        `"${search}" location is not available currently`
      );

      return;
    }

    // Clear error
    setError("");

    // Select location
    onSelectDestination(locationExists);

    setShowSuggestions(false);
  };

  return (
    <div className="relative mt-8">
      {/* Search Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();

          handleSearch();
        }}
        className="
          flex
          flex-col
          gap-4
          rounded-3xl
          border
          border-yellow-400/20
          bg-[#171717]
          p-4
          shadow-xl
          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >
        {/* Input */}
        <div className="flex flex-1 items-center gap-3">
          <FiSearch className="text-2xl text-yellow-400" />

          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);

              setShowSuggestions(true);

              // Remove error while typing
              setError("");
            }}
            placeholder="Search destination in Indore"
            className="
              w-full
              bg-transparent
              text-white
              outline-none
              placeholder:text-gray-500
            "
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="
            rounded-2xl
            bg-yellow-400
            px-5
            py-3
            font-semibold
            text-black
            transition-all
            duration-300
            hover:bg-yellow-300
          "
        >
          Search Ride
        </button>
      </form>

      {/* Error Message */}
      {error && (
        <div
          className="
            mt-4
            rounded-2xl
            border
            border-red-500/20
            bg-red-500/10
            px-4
            py-3
          "
        >
          <p className="text-sm font-medium text-red-400">
            {error}
          </p>
        </div>
      )}

      {/* Suggestions */}
      {showSuggestions &&
        suggestions.length > 0 &&
        search && (
          <div
            className="
              absolute
              z-50
              mt-3
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-yellow-400/10
              bg-[#171717]
              shadow-2xl
            "
          >
            {suggestions.map((item) => (
              <button
                type="button"
                key={item.id}
                onClick={() => {
                  onSelectDestination(item);

                  setSearch(item.name);

                  setShowSuggestions(false);

                  setError("");
                }}
                className="
                  flex
                  w-full
                  items-center
                  gap-3
                  border-b
                  border-yellow-400/5
                  px-5
                  py-4
                  text-left
                  transition-all
                  duration-300
                  hover:bg-[#222222]
                "
              >
                <HiOutlineLocationMarker className="text-yellow-400" />

                <div>
                  <h3 className="font-medium text-white">
                    {item.name}
                  </h3>

                  <p className="text-sm text-gray-400">
                    {item.distance} km away
                  </p>
                </div>
              </button>
            ))}
          </div>
        )}
    </div>
  );
};

export default SearchForm;