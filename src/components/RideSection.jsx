import RideCard from "./RideCard";

const RideSection = ({
  selectedDestination,
  filteredRides,
}) => {
  return (
    <section className="px-4 pb-14 pt-10">
      <div>
        <h2
          className="
            text-sm
            font-bold
            uppercase
            tracking-[4px]
            text-yellow-400
          "
        >
          Available Rides
        </h2>

        {selectedDestination && (
          <p className="mt-3 text-gray-400">
            Destination:
            <span className="ml-2 text-white">
              {selectedDestination.name}
            </span>
          </p>
        )}
      </div>

      <div className="mt-6 space-y-5">
        {filteredRides.length > 0 ? (
          filteredRides.map((ride) => (
            <RideCard
              key={ride.id}
              ride={ride}
              destination={selectedDestination}
            />
          ))
        ) : (
          <div
            className="
              rounded-3xl
              border
              border-dashed
              border-yellow-400/20
              bg-[#171717]
              p-10
              text-center
            "
          >
            <h2 className="text-2xl font-bold text-white">
              Search a destination
            </h2>

            <p className="mt-3 text-gray-400">
              Ride options will appear here
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default RideSection;