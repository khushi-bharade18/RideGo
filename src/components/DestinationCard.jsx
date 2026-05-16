import { HiOutlineLocationMarker } from "react-icons/hi";

const DestinationCard = ({ city }) => {
  return (
    <div
      className="
        flex
        min-w-[160px]
        items-center
        gap-3
        rounded-2xl
        border
        border-yellow-400/10
        bg-[#171717]
        px-4
        py-4
        shadow-lg
        transition-all
        duration-300
        hover:border-yellow-400/40
        hover:bg-[#1f1f1f]
      "
    >
      <div
        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          bg-yellow-400/10
        "
      >
        <HiOutlineLocationMarker className="text-yellow-400" />
      </div>

      <span className="font-medium text-white">
        {city}
      </span>
    </div>
  );
};

export default DestinationCard;