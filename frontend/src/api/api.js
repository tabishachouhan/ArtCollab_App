// frontend/src/api/api.js

// Base URL points to the deployed backend
export const BASE_URL = `${import.meta.env.VITE_API_URL}/api`;

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

// ------------------- OPTIONAL: FETCH USER DATA -------------------
export const fetchUserProfile = async (token) => {
  try {
    const res = await fetch(`${BASE_URL}/auth/profile`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    });

    const data = await res.json();

    if (!res.ok) throw new Error(data.message || "Failed to fetch profile");
    return data;

  } catch (err) {
    console.error("Profile fetch error:", err);
    throw err;
  }
};