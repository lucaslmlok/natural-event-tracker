import { useState, useEffect } from "react";

import Map from "./components/Map";
import Loader from "./components/Loader";
import Header from "./components/Header";

const nasaApi = "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events";

const excludedCategories = Object.values({
  volcanoes: 12,
  sea_and_lake_ice: 15,
});

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch(nasaApi);
      const { events } = await res.json();
      const filteredEvents = events.filter((ev) => {
        return !excludedCategories.includes(ev.categories[0].id);
      });

      setEventData(filteredEvents);
      setLoading(false);
    };
    fetchEvents();
  }, []);

  return (
    <div>
      <Header />
      {!loading ? <Map eventData={eventData} /> : <Loader />}
    </div>
  );
}

export default App;
