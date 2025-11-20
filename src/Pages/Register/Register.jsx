import React, { useState } from "react";
import { BsEyeFill, BsEyeSlash } from "react-icons/bs";
import { Link, useNavigate } from "react-router";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Register = () => {
  const { signInWithGoogle, user, setUser, createUserFunc, updateProfileUser } =
    useAuth();
  const [show, setShow] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);
  const navigate = useNavigate();

  const handleGoogleRegister = async () => {
    try {
      const res = await signInWithGoogle();
      await setUser(res.user);
      toast.success("Google login successful!");
      navigate("/");
    } catch (err) {
      let message = "Oops! Something went wrong. Please try again.";
      if (err.code === "auth/popup-closed-by-user")
        message = "Login was cancelled. Please try again.";
      else if (err.code === "auth/network-request-failed")
        message = "Network issue detected. Check your connection.";
      else if (err.code === "auth/account-exists-with-different-credential")
        message = "This email is already linked to another login method.";
      toast.error(message);
    }
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();
    const form = e.target;
    const displayName = form.name.value.trim();
    const photoURL = form.photo.value.trim();
    const email = form.email.value.trim().toLowerCase();
    const password = form.password.value;

    const passCondition = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!passCondition.test(password)) {
      toast.error(
        "Password must include uppercase, lowercase, and be at least 6 characters."
      );
      return;
    }

    setBtnLoading(true);
    try {
      const res = await createUserFunc(email, password);
      const user = res.user;
      await updateProfileUser({ displayName, photoURL });
      setUser({ ...user, displayName, photoURL });
      toast.success("Account created successfully!");
      navigate("/");
    } catch (err) {
      let message = "We encountered an issue. Please try again.";
      if (err.code === "auth/email-already-in-use")
        message = "This email is already registered.";
      else if (err.code === "auth/network-request-failed")
        message = "Connection issue. Try again.";
      toast.error(message);
      return;
    } finally {
      setBtnLoading(false);
    }
  };

  const handleShow = () => setShow(!show);
  // console.log(user);

  return (
    <>
      <title>Register | PayUp</title>
      <div
        className="flex flex-col-reverse lg:flex-row justify-center items-center
       gap-5 py-7 md:py-12 min-h-screen bg-sky-50 dark:bg-gray-900 transition-colors"
      >
        <div className="flex lg:w-1/2 w-full justify-center items-center">
          <div
            className="card w-full max-w-sm border
           border-sky-400 dark:border-sky-600 bg-white dark:bg-gray-800 shadow-2xl rounded-xl"
          >
            <div className="card-body">
              <h1 className="text-2xl md:text-3xl font-bold text-center text-sky-600 dark:text-sky-400 mb-4">
                Create your account
              </h1>

              <form onSubmit={handleCreateUser} className="space-y-4">
                <div>
                  <label className="label text-gray-700 dark:text-gray-200">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    className="input w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  />
                </div>

                <div>
                  <label className="label text-gray-700 dark:text-gray-200">
                    Photo URL
                  </label>
                  <input
                    type="text"
                    name="photo"
                    placeholder="https://i.ibb.co/3mMny9SF/hero.png"
                    required
                    className="input w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  />
                </div>

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
                    placeholder="******"
                    required
                    className="input w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white pr-12"
                  />
                  <button
                    type="button"
                    onClick={handleShow}
                    className="absolute top-8 z-10 right-3 text-gray-500 dark:text-gray-300"
                  >
                    {show ? <BsEyeFill size={20} /> : <BsEyeSlash size={20} />}
                  </button>
                </div>

                <button
                  type="submit"
                  className="btn w-full!  mt-2 primary-btn text-white"
                  disabled={btnLoading}
                >
                  {btnLoading ? (
                    <span className="loading loading-spinner"></span>
                  ) : (
                    "Register"
                  )}
                </button>
              </form>

              <p className="mt-4 text-center text-gray-700 dark:text-gray-300">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-500 font-semibold">
                  Login
                </Link>
              </p>

              <button
                onClick={handleGoogleRegister}
                className="btn w-full  mt-4 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-black dark:text-white flex items-center justify-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
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
                Register with Google
              </button>
            </div>
          </div>
        </div>

        {/* Lottie Animation */}
        <div className="lg:w-1/2 w-full py-5 lg:py-0">
          <DotLottieReact
            src="https://lottie.host/c841b012-8a9b-4202-bbe2-f77cd9d4f3ea/9SdIKxGnod.lottie"
            loop
            autoplay
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default Register;
