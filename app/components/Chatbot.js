"use client";

import { useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([{ text: "Hi! How can I help?", sender: "bot" }]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");
  };

  return (
    <div className="chatbot-container">
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask something..." />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default Chatbot;
