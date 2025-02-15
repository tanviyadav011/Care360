"use client"; // Required for state management in Next.js App Router

import { useState } from "react";
import Jitsi from "react-jitsi";

const Telemedicine = () => {
  const [inCall, setInCall] = useState(false);
  const [roomName, setRoomName] = useState("");

  const startCall = () => {
    const generatedRoom = "care360-" + Math.random().toString(36).substring(7);
    setRoomName(generatedRoom);
    setInCall(true);
  };

  return (
    <div className="telemedicine-container">
      <h2>Telemedicine Video Call</h2>

      {!inCall ? (
        <button onClick={startCall} className="start-call-button">
          Start Video Call
        </button>
      ) : (
        <div className="jitsi-container">
          <Jitsi roomName={roomName} displayName="Care360 User" />
          <button onClick={() => setInCall(false)} className="end-call-button">
            End Call
          </button>
        </div>
      )}
    </div>
  );
};

export default Telemedicine;
