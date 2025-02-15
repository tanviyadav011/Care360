"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const FitbitCallback = () => {
  const router = useRouter();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash.includes("access_token")) {
      const token = new URLSearchParams(hash.substring(1)).get("access_token");
      localStorage.setItem("fitbit_token", token);
      router.push("/"); // Redirect back to the home page
    } else {
      console.error("No access token found!");
      router.push("/"); // Redirect back even if auth fails
    }
  }, []);

  return <p>Authenticating... Please wait.</p>;
};

export default FitbitCallback;
