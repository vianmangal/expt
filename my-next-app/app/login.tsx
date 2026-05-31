import React, { useState } from "react";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Login successful");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#131313] text-white p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4">
            <span className="text-black text-xl">💳</span>
          </div>

          <h1 className="text-2xl font-bold uppercase">Spendly</h1>
          <p className="text-xs tracking-widest text-gray-400 uppercase">
            Financial Clarity
          </p>
        </div>

        {/* Card */}
        <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-8 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-gray-400 mb-2"
              >
                Email Address
              </label>

              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 focus:outline-none focus:border-white"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm text-gray-400 mb-2"
              >
                Password
              </label>

              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPassword(e.target.value)
                  }
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 pr-12 focus:outline-none focus:border-white"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400"
                >
                  {showPassword ? "🙈" : "👁"}
                </button>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end">
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-white"
              >
                Forgot password?
              </a>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-white text-black font-semibold py-3 hover:bg-gray-200 transition"
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="flex-1 border-t border-zinc-700" />
              <span className="text-xs text-gray-500 uppercase">
                or continue with
              </span>
              <div className="flex-1 border-t border-zinc-700" />
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="border border-zinc-700 rounded-lg py-3 hover:bg-zinc-800"
              >
                Google
              </button>

              <button
                type="button"
                className="border border-zinc-700 rounded-lg py-3 hover:bg-zinc-800"
              >
                Apple
              </button>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-400">
            Dont have an account?
            <a href="#" className="ml-1 text-white font-semibold">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;