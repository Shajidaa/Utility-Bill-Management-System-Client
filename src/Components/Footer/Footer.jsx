import React from "react";
import MyContainer from "../Shared/MyContainer/MyContainer";
import { FaFacebook, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="px-4 divide-y pt-5 bg-[#ddf5fc] text-gray-700 dark:bg-gray-950 dark:text-gray-300">
      <MyContainer>
        <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          {/* Brand */}
          <div className="lg:w-1/3">
            <Link
              to={"/"}
              className="flex justify-center space-x-3 lg:justify-start"
            >
              <p className="text-2xl text-gray-500  dark:text-blue-900 font-bold">
                Pay
                <span className="text-blue-800  dark:text-white ">Up</span>
              </p>
            </Link>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 lg:text-left text-center">
              Simplify your bills. Pay securely. Save time.
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase text-sky-600 dark:text-sky-400">
                Product
              </h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    to="/bills"
                    className="hover:text-sky-600 dark:hover:text-sky-300"
                  >
                    Bills
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-sky-600 dark:hover:text-sky-300"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about-us"
                    className="hover:text-sky-600 dark:hover:text-sky-300"
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="tracking-wide uppercase text-sky-600 dark:text-sky-400">
                Company
              </h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    to={"/help"}
                    className="hover:text-sky-600 dark:hover:text-sky-300"
                  >
                    Help Center
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="uppercase text-sky-600 dark:text-sky-400">
                Developers
              </h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    to="/about-us"
                    className="hover:text-sky-600 dark:hover:text-sky-300"
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="uppercase text-sky-600 dark:text-sky-400">
                Follow Us
              </div>
              <div className="flex justify-start space-x-3">
                <a
                  href="https://www.facebook.com/profile.php?id=61564677698432"
                  title="Facebook"
                  target="blank"
                  className="hover:text-sky-600 dark:hover:text-sky-400"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://x.com/Shajidadev"
                  title="Twitter"
                  className="hover:text-sky-600 dark:hover:text-sky-400"
                >
                  <FaXTwitter />
                </a>
                <a
                  href="https://github.com/Shajidaa"
                  title="github"
                  target="blank"
                  className="hover:text-sky-600 dark:hover:text-sky-400"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://linkedin.com/in/shajida-akter-lopa-42660b325"
                  target="blank"
                  title="LinkedIn"
                  className="hover:text-sky-600 dark:hover:text-sky-400"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="py-6 text-sm text-center text-gray-500 dark:text-gray-500 border-t border-gray-200 dark:border-gray-800">
          © {new Date().getFullYear()}{" "}
          <i className="text-sky-600 dark:text-sky-400">PayUp</i>.{" "}
          <i>All rights reserved. </i>
        </div>
      </MyContainer>
    </footer>
  );
};

export default Footer;
