import React, { useState } from "react";

const Chatbot: React.FC = () => {
  const [message, setMessage] = useState("");

  return (
    <div>
      <h2>AI Assistant</h2>
      <input
        type="text"
        placeholder="Ask about energy saving..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button>Send</button>
    </div>
  );
};

export default Chatbot;