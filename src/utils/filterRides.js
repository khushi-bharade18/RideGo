export const filterRides = (rides, destination) => {
  if (!destination) return [];

  return rides
    .filter((ride) => {
      if (destination.distance <= 4) {
        return ride.type === "Bike" || ride.type === "Mini";
      }

      if (destination.distance <= 8) {
        return ride.type !== "SUV";
      }

      return true;
    })
    .map((ride) => {
      let trafficMultiplier = 1;

      if (destination.traffic === "high") {
        trafficMultiplier = 1.5;
      }

      if (destination.traffic === "medium") {
        trafficMultiplier = 1.2;
      }

      const calculatedPrice = Math.round(
        destination.distance * ride.rate * trafficMultiplier
      );

      const estimatedTime =
        destination.distance <= 5
          ? "5 mins"
          : destination.distance <= 10
          ? "12 mins"
          : "20 mins";

      return {
        ...ride,
        price: calculatedPrice,
        time: estimatedTime,
      };
    });
};