import React, { useState } from "react";

const SignupPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    termsAccepted: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    if (!formData.termsAccepted) {
      alert("Please accept the Terms & Conditions");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      console.log(formData);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#131313] flex items-center justify-center px-4 py-10 text-white">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-3xl">💰</span>
            <h1 className="text-4xl font-bold">Spendly</h1>
          </div>

          <p className="text-sm text-gray-400">
            Elevate your financial clarity with modern precision.
          </p>
        </div>

        {/* Signup Card */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 shadow-2xl">
          {/* Progress */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500">
                Step 1 of 1
              </p>

              <h2 className="text-2xl font-semibold mt-1">
                Create Account
              </h2>
            </div>

            <div className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center">
              1/1
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm mb-2 text-gray-400"
              >
                Full Name
              </label>

              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your legal name"
                required
                className="w-full rounded-lg bg-zinc-950 border border-zinc-700 px-4 py-3 focus:border-white focus:outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm mb-2 text-gray-400"
              >
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@company.com"
                required
                className="w-full rounded-lg bg-zinc-950 border border-zinc-700 px-4 py-3 focus:border-white focus:outline-none"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm mb-2 text-gray-400"
              >
                Password
              </label>

              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  className="w-full rounded-lg bg-zinc-950 border border-zinc-700 px-4 py-3 pr-12 focus:border-white focus:outline-none"
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

            {/* Terms */}
            <div className="flex items-start gap-3">
              <input
                id="terms"
                name="termsAccepted"
                type="checkbox"
                checked={formData.termsAccepted}
                onChange={handleChange}
                className="mt-1"
              />

              <label
                htmlFor="terms"
                className="text-sm text-gray-400"
              >
                I agree to the{" "}
                <a href="#" className="text-white underline">
                  Terms
                </a>{" "}
                and{" "}
                <a href="#" className="text-white underline">
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-gray-200 transition"
            >
              {loading ? "Creating Account..." : "CREATE ACCOUNT"}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 border-t border-zinc-700" />
            <span className="text-xs text-gray-500 uppercase">
              Continue With
            </span>
            <div className="flex-1 border-t border-zinc-700" />
          </div>

          {/* Social Buttons */}
          <div className="grid grid-cols-2 gap-4">
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

          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-400">
              Already have an account?
              <a href="#" className="ml-1 text-white font-semibold">
                Log In
              </a>
            </p>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex justify-center gap-8 mt-8 text-xs text-gray-500 uppercase">
          <span>🔒 Secure</span>
          <span>✓ Compliant</span>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;