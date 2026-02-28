
// Base URL points to the deployed backend
// frontend/src/api/api.js
export const BASE_URL = "https://artcollab-app-backend-4.onrender.com/api";
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

