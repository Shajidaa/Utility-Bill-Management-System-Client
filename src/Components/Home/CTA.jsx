import React from "react";
import MyContainer from "../Shared/MyContainer/MyContainer";
import { Link } from "react-router";

const CTA = () => {
  return (
    <MyContainer className="py-20 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Join the PayUp Family?
        </h2>
        <p className="text-slate-600 dark:text-slate-300 text-lg mb-8">
          Experience the future of digital banking with secure, fast, and
          reliable financial services.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/register"
            className="primary-btn text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300"
          >
            Get Started Today
          </Link>
          <Link
            to="/help"
            className="border secondary-btn border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>
    </MyContainer>
  );
};

export default CTA;
