import { useNavigate } from "react-router";

const RideCard = ({ ride, destination }) => {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate("/booking-confirmation", {
      state: {
        ride,
        destination,
      },
    });
  };

  return (
    <div
      className="
        rounded-3xl
        border
        border-yellow-400/10
        bg-[#171717]
        p-5
        shadow-xl
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-yellow-400/40
      "
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div
            className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              bg-yellow-400/10
              text-4xl
            "
          >
            {ride.icon}
          </div>

          <div>
            <h2 className="text-xl font-bold text-white">{ride.type}</h2>

            <p className="text-gray-400">
              {ride.capacity} · {ride.time}
            </p>
          </div>
        </div>

        <div className="text-right">
          <p className="text-sm text-gray-500">Estimated Fare</p>

          <h1 className="text-3xl font-bold text-yellow-400">₹{ride.price}</h1>
        </div>
      </div>

      <div className="mt-5 flex justify-end">
        <button
          onClick={handleBooking}
          className="
      rounded-xl
      bg-yellow-400
      px-5
      py-2
      text-sm
      cursor-pointer
      font-semibold
      text-black
      transition-all
      duration-300
      hover:bg-yellow-300
      hover:scale-[1.02]
      active:scale-[0.98]
      sm:px-6
      sm:py-2.5
    "
        >
          Book Ride
        </button>
      </div>
    </div>
  );
};

export default RideCard;
