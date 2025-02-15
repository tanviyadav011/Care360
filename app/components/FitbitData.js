"use client";

import { useState, useEffect } from "react";
import FitbitAuth from "./FitbitAuth";
import axios from "axios";

const FitbitData = () => {
  const [healthData, setHealthData] = useState(null);
  const [accessToken, setAccessToken] = useState(localStorage.getItem("fitbit_token") || null);

  useEffect(() => {
    if (accessToken) {
      fetchFitbitData(accessToken);
    }
  }, [accessToken]);

  const fetchFitbitData = async (token) => {
    try {
      const response = await axios.get("https://api.fitbit.com/1/user/-/activities/steps/date/today/1d.json", {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log("Fitbit Data:", response.data);
      setHealthData(response.data["activities-steps"][0].value);
    } catch (error) {
      console.error("Error fetching Fitbit data:", error);
    }
  };

  return (
    <div className="fitbit-container">
      <h2>Wearable Health Data</h2>
      <FitbitAuth onAuthSuccess={setAccessToken} />

      {healthData ? <p>👣 Steps Today: {healthData}</p> : <p>Connect Fitbit to see data</p>}
    </div>
  );
};

export default FitbitData;
