import { useMemo, useState } from "react";

import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import RideSection from "../components/RideSection";

import { destinations, rides } from "../data/mockData";
import { filterRides } from "../utils/filterRides";

const Dashboard = () => {
  const [search, setSearch] = useState("");
  const [selectedDestination, setSelectedDestination] =
    useState(null);

  const suggestions = useMemo(() => {
    return destinations.filter((item) =>
      item.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search]);

  const filteredRides = useMemo(() => {
    return filterRides(rides, selectedDestination);
  }, [selectedDestination]);

  const handleSelectDestination = (destination) => {
    setSelectedDestination(destination);
    setSearch(destination.name);

    localStorage.setItem(
      "recentDestination",
      JSON.stringify(destination)
    );
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <HeroSection
        search={search}
        setSearch={setSearch}
        suggestions={suggestions}
        onSelectDestination={handleSelectDestination}
      />

      <RideSection
        selectedDestination={selectedDestination}
        filteredRides={filteredRides}
      />
    </div>
  );
};

export default Dashboard;