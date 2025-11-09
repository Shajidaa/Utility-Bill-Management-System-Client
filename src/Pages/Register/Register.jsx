import React, { useState } from "react";
import { BsEyeFill, BsEyeSlash } from "react-icons/bs";
import { Link, useNavigate } from "react-router";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";

const Register = () => {
  const { signInWithGoogle, setUser, createUserFunc, updateProfileUser } =
    useAuth();
  const [show, setShow] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);

  const navigate = useNavigate();
  //google register
  const handleGoogleRegister = async () => {
    try {
      const res = await signInWithGoogle();

      await setUser(res.user);
      toast.success("Google login successful!");
      navigate("/");
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
  //create user function
  const handleCreateUser = async (e) => {
    e.preventDefault();
    const from = e.target;
    const displayName = from.name.value.trim();
    const photoURL = from.photo.value.trim();
    const email = from.email.value.trim().toLowerCase();
    const password = from.password.value;

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
      toast.success("Account create successfully");

      navigate("/");
    } catch (err) {
      let message = "We encountered an issue. Please give it another try.";

      if (err.code === "auth/popup-closed-by-user") {
        message = "Login was cancelled. Please try again!";
      } else if (err.code === "auth/email-already-in-use") {
        message = "This email is already registered.";
      } else if (err.code === "auth/network-request-failed") {
        message =
          "Connection issue detected. Please check your internet and try again.";
      } else if (err.code === "auth/account-exists-with-different-credential") {
        message =
          "This email is already registered.. Please try a different way to sign in.";
      }
      toast.error(message);
    } finally {
      setBtnLoading(false);
    }
  };
  //password show hide
  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-dvh">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-2xl font-bold text-center">
            Create your account{" "}
          </h1>
          <form onSubmit={handleCreateUser}>
            <fieldset className="fieldset">
              {/* name */}
              <label className="label">Name</label>
              <input
                type="text"
                className="input"
                name="name"
                placeholder="Name"
                required
              />

              <label className="label">Photo</label>
              <input
                type="text"
                className="input"
                name="photo"
                placeholder="https://i.ibb.co.com/3mMny9SF/hero.png"
                required
              />
              {/* email  */}
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                name="email"
                placeholder="Email"
                required
              />
              <div className="relative">
                <label className="label">Password</label>
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  className="input"
                  placeholder="******"
                  required
                />
                <button
                  type="button"
                  onClick={handleShow}
                  className="cursor-pointer absolute top-8 right-8 z-10"
                >
                  {show ? <BsEyeFill /> : <BsEyeSlash />}
                </button>
              </div>
              {btnLoading ? (
                <button type="submit" className="btn  mt-4">
                  <span className="loading loading-spinner"></span> Register
                </button>
              ) : (
                <button type="submit" className="btn  mt-4">
                  Register
                </button>
              )}
            </fieldset>
          </form>
          <p>
            have an account ? <Link to={"/login"}>Login</Link>
          </p>
          {/* Google */}
          <button
            onClick={handleGoogleRegister}
            className="btn bg-white text-black border-[#e5e5e5]"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
        </div>
        <br />
      </div>
    </div>
  );
};

export default Register;
