import React from "react";
import MyContainer from "../Shared/MyContainer/MyContainer";
import { FaFacebook, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="px-4 divide-y bg-slate-50 text-gray-700 dark:bg-gray-950 dark:text-gray-300">
      <MyContainer>
        <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          {/* Brand */}
          <div className="lg:w-1/3">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex justify-center space-x-3 lg:justify-start"
            >
              <span className="self-center text-2xl font-semibold text-sky-600 dark:text-white">
                PayUp
              </span>
            </a>
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
                  <a
                    href="#"
                    className="hover:text-sky-600 dark:hover:text-sky-300"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-sky-600 dark:hover:text-sky-300"
                  >
                    Integrations
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-sky-600 dark:hover:text-sky-300"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-sky-600 dark:hover:text-sky-300"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="tracking-wide uppercase text-sky-600 dark:text-sky-400">
                Company
              </h3>
              <ul className="space-y-1">
                <li>
                  <a
                    href="#"
                    className="hover:text-sky-600 dark:hover:text-sky-300"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-sky-600 dark:hover:text-sky-300"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-sky-600 dark:hover:text-sky-300"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="uppercase text-sky-600 dark:text-sky-400">
                Developers
              </h3>
              <ul className="space-y-1">
                <li>
                  <a
                    href="#"
                    className="hover:text-sky-600 dark:hover:text-sky-300"
                  >
                    Public API
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-sky-600 dark:hover:text-sky-300"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-sky-600 dark:hover:text-sky-300"
                  >
                    Guides
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="uppercase text-sky-600 dark:text-sky-400">
                Follow Us
              </div>
              <div className="flex justify-start space-x-3">
                <a
                  href="#"
                  title="Facebook"
                  className="hover:text-sky-600 dark:hover:text-sky-400"
                >
                  <FaFacebook />
                </a>
                <a
                  href="#"
                  title="Twitter"
                  className="hover:text-sky-600 dark:hover:text-sky-400"
                >
                  <FaXTwitter />
                </a>
                <a
                  href="#"
                  title="Instagram"
                  className="hover:text-sky-600 dark:hover:text-sky-400"
                >
                  <FaGithub />
                </a>
                <a
                  href="#"
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
