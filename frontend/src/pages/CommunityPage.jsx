import React, { useState } from "react";

export default function CommunityPage() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  const sendMessage = () => {
    if (!text) return;
    setMessages([...messages, { text, time: new Date().toLocaleTimeString() }]);
    setText("");
  };

  return (
    <div className="min-h-screen p-8 bg-gradient-to-b from-green-50 to-emerald-50">
      <h1 className="text-4xl font-bold mb-8 text-center text-green-700">
        Community Chat
      </h1>

      <div className="max-w-2xl mx-auto mb-6 flex gap-2">
        <input
          type="text"
          placeholder="Type your message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 p-3 rounded-l shadow border"
        />
        <button
          onClick={sendMessage}
          className="bg-green-600 text-white px-6 rounded-r hover:bg-green-700 transition"
        >
          Send
        </button>
      </div>

      <div className="max-w-2xl mx-auto flex flex-col gap-3">
        {messages.map((m, i) => (
          <div
            key={i}
            className="bg-white p-3 rounded-2xl shadow hover:shadow-md transition"
          >
            <span className="text-gray-500 text-sm mr-2">{m.time}</span>
            <span>{m.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}