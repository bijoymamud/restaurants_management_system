import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast, Toaster } from "sonner";
import { FaRegEye } from "react-icons/fa6";
import { FiEyeOff } from "react-icons/fi";

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    toast.success("Login successfully.");

    setTimeout(() => {
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Toaster position="top-right" richColors />

      <div className="hidden lg:flex items-center justify-center w-full basis-8/12">
        <div className="w-full h-screen">
          <img
            src="https://info.ehl.edu/hubfs/Blog-EHL-Insights/Blog-Header-EHL-Insights/restaurant%20manager.jpeg"
            alt="Logistics Illustration"
            className="w-full h-full object-cover shadow-2xl"
          />
        </div>
      </div>

      <div className="flex items-center justify-center w-full lg:basis-6/12 p-6">
        <div className="w-full max-w-lg p-10 bg-white rounded-xl shadow-xl shadow-gray-200">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Sign In</h1>
            <p className="text-gray-500 text-sm">
              Welcome to logistics supply chain platform.
              <br />
              Streamline your logistics — sign in to continue.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                E-mail
              </label>
              <input
                type="email"
                placeholder="yatingzang0215@gmail.com"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6E02] focus:border-transparent transition-all"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••••"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6E02] focus:border-transparent transition-all"
                  {...register("password", {
                    required: "Password is required",
                    minLength: { value: 6, message: "Min 6 characters" },
                    pattern: {
                      value:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                      message:
                        "Password must include uppercase, lowercase, number & special character",
                    },
                  })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#FF6E02]"
                >
                  {showPassword ? (
                    <FiEyeOff size={18} />
                  ) : (
                    <FaRegEye size={18} />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="flex justify-end">
              <Link
                to="/email_verification"
                className="text-sm text-[#FF6E02] hover:underline font-medium"
              >
                Forgot Password?
              </Link>
            </div>

            <div>
              <div className="flex items-center">
                <input
                  id="terms"
                  type="checkbox"
                  className="w-4 h-4 accent-[#FF6E02] checkbox-primary cursor-pointer"
                  {...register("terms", {
                    required: "Please accept the Terms & Conditions",
                  })}
                />
                <label
                  htmlFor="terms"
                  className="ml-2 text-sm text-gray-600 cursor-pointer"
                >
                  I agree to the{" "}
                  <span className="text-[#FF6E02] underline">
                    terms of service
                  </span>
                </label>
              </div>
              {errors.terms && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.terms.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              style={{ backgroundColor: "#FF6E02" }}
              className="w-full text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-orange-200 cursor-pointer"
            >
              Login Account
            </button>
          </form>

          {/* Sign up link */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Not a member?{" "}
              <Link
                to="/sign_up"
                className="text-[#FF6E02] hover:underline font-bold"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
