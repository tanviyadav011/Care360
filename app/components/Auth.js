"use client"; // Required for Next.js

import { useState, useEffect } from "react";
import { auth, provider, signInWithPopup, signOut } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

const Auth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Login Error:", error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout Error:", error.message);
    }
  };

  return (
    <div className="auth-container" style={{ textAlign: "center", margin: "20px 0" }}>
      {user ? (
        <div>
          <p>Welcome, {user.displayName}!</p>
          <button onClick={handleLogout} className="logout-button">Logout</button>
        </div>
      ) : (
        <button onClick={handleLogin} className="login-button">Login with Google</button>
      )}
    </div>
  );
};

export default Auth;
