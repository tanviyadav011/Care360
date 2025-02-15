"use client";

import { useState, useEffect } from "react";

const clientId = "23Q82Q"; // Replace with actual Client ID
const redirectUri = "http://localhost:3000/auth/callback";

const FitbitAuth = ({ onAuthSuccess }) => {
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    // Extract access token from URL hash (Implicit Grant Flow)
    const hash = window.location.hash;
    if (hash.includes("access_token")) {
      const token = new URLSearchParams(hash.substring(1)).get("access_token");
      setAccessToken(token);
      localStorage.setItem("fitbit_token", token);
      window.history.pushState({}, document.title, "/"); // Remove token from URL
      onAuthSuccess(token);
    }
  }, []);

  const handleLogin = () => {
    const authUrl = `https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=${clientId}&redirect_uri=${redirectUri}&scope=activity%20heartrate%20sleep`;
    window.location.href = authUrl;
  };

  return (
    <div>
      {accessToken ? (
        <p>Fitbit Connected ✅</p>
      ) : (
        <button onClick={handleLogin}>Connect Fitbit</button>
      )}
    </div>
  );
};

export default FitbitAuth;
