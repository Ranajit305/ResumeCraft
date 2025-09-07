import { Mail, Lock, User, X, Loader2 } from "lucide-react";
import { useState } from "react";
import useAuthStore from "../../stores/useAuthStore";

const Signup = ({ setType }) => {
  const { register, loading } = useAuthStore();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    const result = await register(name, email, password);
    if (result) {
      setType("");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
      <form
        onSubmit={handleSignup}
        className="relative max-w-96 w-full text-center border border-gray-300/60 rounded-2xl px-8 bg-white shadow-xl"
      >
        {/* Close Button */}
        <button
          type="button"
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={() => setType(null)}
        >
          <X className="w-5 h-5" />
        </button>

        <h1 className="text-gray-900 text-3xl mt-10 font-medium">
          Create Account
        </h1>
        <p className="text-gray-500 text-sm mt-2">
          Please register to continue
        </p>

        <div className="flex items-center w-full mt-10 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <User className="w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-transparent text-gray-500 placeholder-gray-500 outline-none text-sm w-full h-full"
            required
          />
        </div>

        <div className="flex items-center w-full mt-4 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <Mail className="w-5 h-5 text-gray-500" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-transparent text-gray-500 placeholder-gray-500 outline-none text-sm w-full h-full"
            required
          />
        </div>

        <div className="flex items-center mt-4 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <Lock className="w-5 h-5 text-gray-500" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-transparent text-gray-500 placeholder-gray-500 outline-none text-sm w-full h-full"
            required
          />
        </div>

        <button
          type="submit"
          className="mt-4 w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity cursor-pointer"
        >
          {!loading ? (
            "Create Account"
          ) : (
            <div className="flex items-center justify-center gap-1">
              <p>Creating Account</p>
              <Loader2 className="animate-spin w-5 h-5" />
            </div>
          )}
        </button>

        <p className="text-gray-500 text-sm mt-3 mb-11">
          Already have an account?{" "}
          <span
            onClick={() => setType("login")}
            className="text-indigo-500 hover:underline cursor-pointer"
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default Signup;
