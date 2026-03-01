// frontend/src/api/api.js

export const BASE_URL = import.meta.env.VITE_API_URL;

// ------------------- REGISTER -------------------
export const registerUser = async (name, email, password) => {
  const res = await fetch(`${BASE_URL}/api/auth/register`, {  
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Registration failed");
  return data;
};

// ------------------- LOGIN -------------------
export const loginUser = async (email, password) => {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Login failed");
  return data;
};

// ------------------- AI CHAT -------------------
export const aiChat = async (prompt) => {
  const res = await fetch(`https://artcollab-app-backend-4.onrender.com/api/ai-chat`, {  // ✅ NO extra /api here
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "AI chat failed");
  return data;
};