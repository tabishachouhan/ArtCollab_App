import React, { useState, useRef, useEffect } from "react";

export default function CommunityPage() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [aiTyping, setAiTyping] = useState(false);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);

  // Scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, aiTyping]);

  // Auto resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [text]);

  const sendMessage = async () => {
    if (!text.trim() || loading) return;

    const userMessage = text.trim();
    setText("");
    setLoading(true);

    setMessages((prev) => [
      ...prev,
      { text: userMessage, time: new Date().toLocaleTimeString(), user: "You" },
    ]);

    setAiTyping(true);

    try {
      const res = await fetch(
        `https://artcollab-app-backend-4.onrender.com/api/ai-chat`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt: userMessage }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.answer || "AI error");
      }

      const aiResponse =
        data?.answer?.trim() || "🤖 AI returned an empty response.";

      setMessages((prev) => [
        ...prev,
        {
          text: aiResponse,
          time: new Date().toLocaleTimeString(),
          user: "AI",
        },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          text: "⚠️ AI couldn't respond. Please try again.",
          time: new Date().toLocaleTimeString(),
          user: "AI",
        },
      ]);
    } finally {
      setAiTyping(false);
      setLoading(false);
    }
  };

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

      <div className="w-full max-w-2xl flex flex-col border rounded-2xl shadow-xl bg-white overflow-hidden">
        <div className="flex-1 p-4 space-y-3 overflow-y-auto h-[450px]">
          {messages.length === 0 && !aiTyping && (
            <p className="text-gray-400 text-center mt-10">
              Start chatting with AI 🚀
            </p>
          )}

          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex ${
                m.user === "You" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[75%] p-3 rounded-2xl shadow-md ${
                  m.user === "You"
                    ? "bg-green-600 text-white rounded-br-none"
                    : "bg-gray-100 text-gray-800 rounded-bl-none"
                }`}
              >
                <div className="whitespace-pre-wrap">{m.text}</div>
                <div className="text-xs text-gray-400 text-right mt-1">
                  {m.time}
                </div>
              </div>
            </div>
          ))}

          {aiTyping && (
            <div className="flex justify-start">
              <div className="max-w-[70%] p-3 rounded-2xl shadow bg-gray-100 italic animate-pulse">
                🤖 AI is typing...
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        <div className="flex border-t p-3 gap-2 items-end">
          <textarea
            ref={textareaRef}
            rows={1}
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            className="flex-1 p-3 rounded-2xl border shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-green-400 max-h-40 overflow-y-auto"
          />

          <button
            onClick={sendMessage}
            disabled={loading}
            className={`px-6 py-2 rounded-2xl font-semibold transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700 text-white"
            }`}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </div>
      </div>
    </div>
  );
}