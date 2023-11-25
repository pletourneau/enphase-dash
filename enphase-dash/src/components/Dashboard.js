// components/Dashboard.js

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchEnergyLifetimeData } from "../services/enphaseApi";

function Dashboard({ systemId }) {
  const location = useLocation();
  const [energyLifetimeData, setEnergyLifetimeData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Use the systemId prop passed to the Dashboard component
        const data = await fetchEnergyLifetimeData(
          systemId,
          "start-date",
          "end-date"
        );
        setEnergyLifetimeData(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, [location.search, systemId]);

  return (
    <div>
      <h1>Dashboard</h1>
      {energyLifetimeData && (
        <pre>{JSON.stringify(energyLifetimeData, null, 2)}</pre>
      )}
    </div>
  );
}

export default Dashboard;
