import DestinationCard from "./DestinationCard";
import { popularDestinations } from "../data/mockData";

const PopularDestinations = () => {
  return (
    <section className="mt-10 px-4">
      <h2
        className="
          text-sm
          font-bold
          uppercase
          tracking-[4px]
          text-yellow-400
        "
      >
        Popular Destinations
      </h2>

      <div
        className="
          mt-5
          flex
          gap-4
          overflow-x-auto
          pb-2
        "
      >
        {popularDestinations.map((item) => (
          <DestinationCard
            key={item.id}
            city={item.city}
          />
        ))}
      </div>
    </section>
  );
};

export default PopularDestinations;