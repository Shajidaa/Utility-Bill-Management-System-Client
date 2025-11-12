import React, { useState } from "react";
import { BsEyeFill, BsEyeSlash } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import useAuth from "../../Hooks/useAuth";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Login = () => {
  const { signInWithGoogle, setUser, logInFunc } = useAuth();
  const [show, setShow] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleSignIn = async () => {
    try {
      const res = await signInWithGoogle();
      await setUser(res.user);
      toast.success("Google login successful!");
      navigate(location.state ? location.state : "/");
    } catch (err) {
      let message = "Oops! Something went wrong. Please try again.";
      if (err.code === "auth/popup-closed-by-user") {
        message = "Login was cancelled. Please try again.";
      } else if (err.code === "auth/network-request-failed") {
        message =
          "Network issue detected. Check your internet connection and retry.";
      } else if (err.code === "auth/account-exists-with-different-credential") {
        message =
          "This email is already linked to another login method. Try signing in differently.";
      }
      toast.error(message);
    }
  };

  const logInSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value.trim();
    const password = form.password.value;
    setBtnLoading(true);
    try {
      const res = await logInFunc(email, password);
      await setUser(res.user);
      toast.success("Logged in successfully!");
      navigate(location.state ? location.state : "/");
    } catch (err) {
      let message =
        "Unable to log in. Please check your credentials and try again.";
      if (err.code === "auth/user-not-found")
        message = "No account found with this email.";
      else if (err.code === "auth/wrong-password")
        message = "Incorrect password. Please try again.";
      else if (err.code === "auth/too-many-requests")
        message = "Too many failed attempts. Please try again later.";
      toast.error(message);
    } finally {
      setBtnLoading(false);
    }
  };

  const handleShow = () => setShow(!show);

  return (
    <>
      <title>Login | PayUp</title>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-5 py-7 md:py-12 min-h-screen bg-sky-50 dark:bg-gray-900 transition-colors">
        {/* Lottie Animation */}
        <div className="lg:w-1/2 w-full">
          <DotLottieReact
            src="https://lottie.host/c841b012-8a9b-4202-bbe2-f77cd9d4f3ea/9SdIKxGnod.lottie"
            loop
            autoplay
            className="w-full h-full object-contain"
          />
        </div>

        {/* Login Card */}
        <div className="lg:w-1/2 w-full flex justify-center items-center">
          <div className="card w-full max-w-sm border border-sky-400 dark:border-sky-600 bg-white dark:bg-gray-800 shadow-2xl rounded-xl">
            <div className="card-body">
              <h1 className="text-2xl md:text-3xl font-bold text-center text-sky-600 dark:text-sky-400 mb-4">
                Login to your account
              </h1>

              <form onSubmit={logInSubmit}>
                <fieldset className="space-y-4">
                  <div>
                    <label className="label text-gray-700 dark:text-gray-200">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      className="input w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    />
                  </div>

                  <div className="relative">
                    <label className="label text-gray-700 dark:text-gray-200">
                      Password
                    </label>
                    <input
                      type={show ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                      required
                      className="input w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white pr-12"
                    />
                    <button
                      type="button"
                      onClick={handleShow}
                      className="absolute top-8 right-3 text-gray-500 dark:text-gray-300"
                    >
                      {show ? (
                        <BsEyeFill size={20} />
                      ) : (
                        <BsEyeSlash size={20} />
                      )}
                    </button>
                  </div>

                  <div className="text-right">
                    <a className="link link-hover text-sky-600 dark:text-sky-400">
                      Forgot password?
                    </a>
                  </div>

                  <button
                    type="submit"
                    className="btn w-full! hover:rounded-2xl! mt-2 primary-btn text-white"
                    disabled={btnLoading}
                  >
                    {btnLoading ? (
                      <span className="loading loading-spinner"></span>
                    ) : (
                      "Sign In"
                    )}
                  </button>
                </fieldset>
              </form>

              <p className="mt-4 text-center text-gray-700 dark:text-gray-300">
                Don't have an account?{" "}
                <Link to="/register" className="text-blue-500 font-semibold">
                  Sign Up
                </Link>
              </p>

              <button
                onClick={handleGoogleSignIn}
                className="btn w-full hover:rounded-2xl! mt-4 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-black dark:text-white flex items-center justify-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  {" "}
                  <g>
                    {" "}
                    <path d="m0 0H512V512H0" fill="#fff"></path>{" "}
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>{" "}
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>{" "}
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>{" "}
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>{" "}
                  </g>{" "}
                </svg>
                Login with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
