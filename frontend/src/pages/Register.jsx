const Register = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 mb-4 rounded-lg border dark:bg-gray-700"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded-lg border dark:bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 rounded-lg border dark:bg-gray-700"
        />

        <button className="w-full bg-secondary text-white p-3 rounded-lg">
          Create Account
        </button>
      </div>
    </div>
  );
};

export default Register;