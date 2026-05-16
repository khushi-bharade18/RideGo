import SearchForm from "./SearchForm";
import { HiOutlineLocationMarker } from "react-icons/hi";

const HeroSection = ({
  search,
  setSearch,
  suggestions,
  onSelectDestination,
}) => {
  return (
    <section
      className="
        rounded-b-[40px]
        border-b
        border-yellow-400/10
        bg-gradient-to-br
        from-black
        via-[#111827]
        to-[#1f1f1f]
        px-4
        pb-10
        pt-8
      "
    >
      <div className="flex items-center gap-2">
        <HiOutlineLocationMarker className="text-yellow-400" />

        <span className="text-sm text-gray-300">
          Indore, Madhya Pradesh
        </span>
      </div>

      <div className="mt-10 text-center">
        <p className="text-lg font-medium text-yellow-400">
          Book Your Ride ✨
        </p>

        <h1
          className="
            mt-3
            text-4xl
            font-extrabold
            leading-tight
            text-white
            sm:text-5xl
          "
        >
          Find comfortable rides across Indore
        </h1>
      </div>

      <SearchForm
        search={search}
        setSearch={setSearch}
        suggestions={suggestions}
        onSelectDestination={onSelectDestination}
      />
    </section>
  );
};

export default HeroSection;