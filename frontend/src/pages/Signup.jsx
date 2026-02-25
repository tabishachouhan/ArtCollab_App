import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSignup = (e) => {
        e.preventDefault();
        setError("");

        if (!formData.name || !formData.email || !formData.password) {
            return setError("All fields are required");
        }

        // 🔥 Fake authentication (frontend only)
        localStorage.setItem("user", JSON.stringify(formData));
        localStorage.setItem("isLoggedIn", "true");

        navigate("/upload");
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-pink-500 to-purple-600">
            <div className="bg-white p-8 rounded-2xl shadow-2xl w-96">
                <h2 className="text-3xl font-bold text-center mb-6 text-pink-600">
                    Sign Up
                </h2>

                {error && (
                    <p className="text-red-500 text-sm mb-3 text-center">{error}</p>
                )}

                <form onSubmit={handleSignup}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full mb-4 p-3 border rounded-lg"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full mb-4 p-3 border rounded-lg"
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full mb-4 p-3 border rounded-lg"
                    />

                    <button
                        type="submit"
                        className="w-full bg-pink-600 text-white p-3 rounded-lg hover:bg-pink-700 transition"
                    >
                        Create Account
                    </button>
                </form>

                <p className="text-center mt-4 text-sm">
                    Already have an account?{" "}
                    <Link to="/login" className="text-pink-600 font-semibold">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;