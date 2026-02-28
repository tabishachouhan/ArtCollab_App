
// Base URL from Vite environment variable
export const BASE_URL = import.meta.env.VITE_API_URL;

// ------------------- REGISTER -------------------
export const registerUser = async (name, email, password) => {
  try {
    const res = await fetch(`${BASE_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      // Backend can send error message in JSON
      throw new Error(data.message || "Registration failed");
    }

    return data;
  } catch (err) {
    console.error("Registration error:", err);
    throw err;
  }
};

// ------------------- LOGIN -------------------
export const loginUser = async (email, password) => {
  try {
    const res = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Login failed");
    }

    return data;
  } catch (err) {
    console.error("Login error:", err);
    throw err;
  }
};

// ------------------- AI CHAT -------------------
export const aiChat = async (prompt) => {
  try {
    const res = await fetch(`${BASE_URL}/ai-chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "AI chat failed");
    }

    return data;
  } catch (err) {
    console.error("AI chat error:", err);
    throw err;
  }
};

// ------------------- PROJECTS (example) -------------------
export const getProjects = async () => {
  try {
    const res = await fetch(`${BASE_URL}/projects`);
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Failed to fetch projects");
    return data;
  } catch (err) {
    console.error("Get projects error:", err);
    throw err;
  }
};