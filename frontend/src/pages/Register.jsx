import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api/api";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await registerUser(name, email, password);
      setMessage("User registered successfully! Redirecting to login...");
      setTimeout(() => navigate("/login"), 2000); // redirect after 2 sec
    } catch (err) {
      setMessage(err.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 mb-4 rounded-lg border dark:bg-gray-700"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 rounded-lg border dark:bg-gray-700"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-4 rounded-lg border dark:bg-gray-700"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-secondary text-white p-3 rounded-lg"
            disabled={loading}
          >
            {loading ? "Registering..." : "Create Account"}
          </button>
        </form>
        {message && (
          <p className="mt-4 text-center text-sm text-green-500">{message}</p>
        )}
      </div>
    </div>
  );
};

export default Register;