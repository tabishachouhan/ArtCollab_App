import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/api";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const data = await loginUser(email, password);
      localStorage.setItem("user", JSON.stringify(data)); // save user info
      setMessage("Login successful! Redirecting to dashboard...");
      setTimeout(() => navigate("/Upload"), 1000);
    } catch (err) {
      setMessage(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 rounded-lg border dark:bg-gray-700"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="off"
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
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          Don’t have an account?{" "}
          <span
            className="text-secondary cursor-pointer"
            onClick={() => navigate("/register")}
          >
            Create Account
          </span>
        </p>
        {message && (
          <p className="mt-4 text-center text-sm text-green-500">{message}</p>
        )}
      </div>
    </div>
  );
};

export default Login;