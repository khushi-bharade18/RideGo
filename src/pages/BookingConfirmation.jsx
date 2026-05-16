import { useLocation, useNavigate } from "react-router";

import {
  HiOutlineLocationMarker,
  HiOutlineClock,
} from "react-icons/hi";

import { toast } from "react-toastify";

const BookingConfirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const bookingData = location.state;

  if (!bookingData) {
    navigate("/dashboard");

    return null;
  }

  const { ride, destination } = bookingData;

  const bookingId = `RD-${Math.floor(
    Math.random() * 999999
  )}`;

  const handleConfirmRide = () => {
    // Success Toast
    toast.success(
      `${ride.type} ride confirmed successfully 🚖`
    );

    // Navigate after short delay
    setTimeout(() => {
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-black px-4 py-8">
      <div className="mx-auto max-w-2xl">
        <div
          className="
            rounded-[32px]
            border
            border-yellow-400/10
            bg-[#171717]
            p-8
            shadow-2xl
          "
        >
          {/* Top */}
          <div className="text-center">
            <div
              className="
                mx-auto
                flex
                h-24
                w-24
                items-center
                justify-center
                rounded-full
                bg-yellow-400/10
                text-6xl
              "
            >
              {ride.icon}
            </div>

            <h1 className="mt-6 text-4xl font-extrabold text-white">
              Booking Confirmation
            </h1>

            <p className="mt-3 text-gray-400">
              Please confirm your ride details
            </p>
          </div>

          {/* Details */}
          <div className="mt-10 space-y-5">
            {/* Booking ID */}
            <div
              className="
                flex
                items-center
                justify-between
                rounded-2xl
                border
                border-yellow-400/10
                bg-black/40
                p-5
              "
            >
              <div>
                <p className="text-sm text-gray-500">
                  Booking ID
                </p>

                <h2 className="mt-1 text-xl font-bold text-white">
                  {bookingId}
                </h2>
              </div>

              <div className="text-5xl">
                {ride.icon}
              </div>
            </div>

            {/* Destination */}
            <div
              className="
                rounded-2xl
                border
                border-yellow-400/10
                bg-black/40
                p-5
              "
            >
              <div className="flex items-center gap-3">
                <HiOutlineLocationMarker className="text-2xl text-yellow-400" />

                <div>
                  <p className="text-sm text-gray-500">
                    Destination
                  </p>

                  <h2 className="text-xl font-bold text-white">
                    {destination.name}
                  </h2>
                </div>
              </div>
            </div>

            {/* Ride Details */}
            <div
              className="
                grid
                gap-4
                sm:grid-cols-2
              "
            >
              <div
                className="
                  rounded-2xl
                  border
                  border-yellow-400/10
                  bg-black/40
                  p-5
                "
              >
                <p className="text-sm text-gray-500">
                  Ride Type
                </p>

                <h2 className="mt-2 text-2xl font-bold text-white">
                  {ride.type}
                </h2>
              </div>

              <div
                className="
                  rounded-2xl
                  border
                  border-yellow-400/10
                  bg-black/40
                  p-5
                "
              >
                <p className="text-sm text-gray-500">
                  Estimated Fare
                </p>

                <h2 className="mt-2 text-2xl font-bold text-yellow-400">
                  ₹{ride.price}
                </h2>
              </div>
            </div>

            {/* Arrival Time */}
            <div
              className="
                flex
                items-center
                gap-3
                rounded-2xl
                border
                border-yellow-400/10
                bg-black/40
                p-5
              "
            >
              <HiOutlineClock className="text-2xl text-yellow-400" />

              <div>
                <p className="text-sm text-gray-500">
                  Driver Arrival Time
                </p>

                <h2 className="text-xl font-bold text-white">
                  {ride.time}
                </h2>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div
            className="
              mt-10
              flex
              flex-col
              gap-4
              sm:flex-row
            "
          >
            <button
              onClick={() => navigate("/dashboard")}
              className="
                flex-1
                rounded-2xl
                border
                border-yellow-400/20
                bg-transparent
                py-4
                text-base
                font-semibold
                text-yellow-400
                transition-all
                duration-300
                hover:bg-yellow-400/10
              "
            >
              Cancel
            </button>

            <button
              onClick={handleConfirmRide}
              className="
                flex-1
                rounded-2xl
                bg-yellow-400
                py-4
                text-base
                font-bold
                text-black
                transition-all
                duration-300
                hover:bg-yellow-300
              "
            >
              Confirm Ride
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;