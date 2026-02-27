import React, { useState, useRef, useEffect } from "react";

export default function CommunityPage() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [aiTyping, setAiTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Scroll to bottom when messages or typing changes
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, aiTyping]);

  // Send user message and call AI
  const sendMessage = async () => {
    if (!text.trim()) return;

    const userMessage = text.trim();
    setText("");

    // Add user message to chat
    setMessages((prev) => [
      ...prev,
      { text: userMessage, time: new Date().toLocaleTimeString(), user: "You" },
    ]);

    // Show AI typing indicator
    setAiTyping(true);

    try {
      const res = await fetch("http://localhost:5678/api/ai-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: userMessage }),
      });

      const data = await res.json();

      // Add AI response
      setMessages((prev) => [
        ...prev,
        { text: data.answer, time: new Date().toLocaleTimeString(), user: "AI" },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          text: "🤖 AI couldn't respond right now.",
          time: new Date().toLocaleTimeString(),
          user: "AI",
        },
      ]);
    } finally {
      setAiTyping(false);
    }
  };

  // Handle Enter key (Shift+Enter for new line)
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen p-8 bg-gradient-to-b from-green-50 to-emerald-50 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6 text-center text-green-700">
        Community + AI Chat
      </h1>

      {/* Chat Box */}
      <div className="w-full max-w-2xl flex flex-col border rounded-2xl shadow-lg bg-white overflow-hidden">
        {/* Messages container */}
        <div className="flex-1 p-4 space-y-3 overflow-y-auto h-[400px]">
          {messages.length === 0 && !aiTyping && (
            <p className="text-gray-400 text-center mt-10">
              No messages yet. Start the conversation!
            </p>
          )}

          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex ${m.user === "You" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[70%] p-3 rounded-2xl shadow ${
                  m.user === "You"
                    ? "bg-green-500 text-white rounded-br-none"
                    : "bg-gray-100 text-gray-800 rounded-bl-none"
                }`}
              >
                <div className="flex justify-between items-end gap-2">
                  <span>{m.text}</span>
                  <span className="text-xs text-gray-400 ml-2">{m.time}</span>
                </div>
              </div>
            </div>
          ))}

          {aiTyping && (
            <div className="flex justify-start">
              <div className="max-w-[70%] p-3 rounded-2xl shadow bg-gray-100 text-gray-800 rounded-bl-none italic animate-pulse">
                🤖 AI is typing...
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input area */}
        <div className="flex border-t p-3 gap-2">
          <textarea
            rows={1}
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            className="flex-1 p-3 rounded-2xl border shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            onClick={sendMessage}
            className="bg-green-600 text-white px-6 rounded-2xl hover:bg-green-700 transition font-semibold"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}