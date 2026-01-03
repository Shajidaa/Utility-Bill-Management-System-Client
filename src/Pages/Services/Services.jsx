import { Link } from "react-router";
import MyContainer from "../../Components/Shared/MyContainer/MyContainer";

const Services = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display transition-colors duration-300">
      <title>Services | PayUp</title>

      {/* Hero Section */}
      <div className="text-center space-y-6 py-20 px-8 relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-black dark:text-white mb-6">
            Our Services
          </h1>
          <p className="dark:text-white/90 text-black text-lg md:text-xl max-w-3xl mx-auto">
            Comprehensive financial solutions designed to meet all your banking
            and payment needs.
          </p>
        </div>
      </div>

      {/* Main Services Section */}
      <MyContainer className="py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Image */}
          <div className="flex justify-center">
            <img
              src="https://i.ibb.co.com/m5XYJ6LF/undraw-online-banking-l9sn.jpg"
              alt="Online Banking Illustration"
              className="w-full max-w-md h-auto rounded-lg"
            />
          </div>

          {/* Right Side - Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Digital Payments */}
            <div className="bg-white dark:bg-slate-700 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold mb-3">Digital Payments</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Send and receive money instantly with secure digital payments.
              </p>
              <Link
                to="/register"
                className="text-primary font-semibold hover:underline"
              >
                Get Started →
              </Link>
            </div>

            {/* Business Banking */}
            <div className="bg-white dark:bg-slate-700 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold mb-3">Business Banking</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Complete banking solutions for businesses of all sizes.
              </p>
              <Link
                to="/register"
                className="text-primary font-semibold hover:underline"
              >
                Open Account →
              </Link>
            </div>

            {/* Mobile Banking */}
            <div className="bg-white dark:bg-slate-700 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold mb-3">Mobile Banking</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Full-featured mobile app for banking on the go.
              </p>
              <Link
                to="/register"
                className="text-primary font-semibold hover:underline"
              >
                Download App →
              </Link>
            </div>

            {/* Investment Services */}
            <div className="bg-white dark:bg-slate-700 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold mb-3">Investment Services</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Grow your wealth with our investment platform.
              </p>
              <Link
                to="/register"
                className="text-primary font-semibold hover:underline"
              >
                Start Investing →
              </Link>
            </div>
          </div>
        </div>
      </MyContainer>

      {/* Personalized Solution Section */}
      <MyContainer className="mx-auto bg-background-light dark:bg-background-dark transition-colors relative overflow-hidden">
        <div className=" mx-auto px-6  flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              Need a Personalized <br /> Solution?
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-md">
              All your needs covered with a full range of credit and debit
              cards. Whether you're planning a trip or starting a business, we
              have the personalized financial tools for you.
            </p>
            <div className="pt-4">
              <Link
                to="/register"
                className="primary-btn text-white font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              >
                Apply for a loan
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-start relative">
            <div className="relative w-full max-w-sm">
              <img
                alt="Financial growth and personal solution concept"
                className="rounded-2xl shadow-2xl relative z-10 dark:opacity-90"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkfBoKXdlJ25cYG5GIjYVRdlugTLbhEZlI8VvIvaRFI23NYgwq7tA7MWor3onRcLHB2XsCezIGVW5xWTU38-nZroSGjojhNImJwJHeo-nH0Eq5PNNq084WIbgTdwJD333wNgDSTUIwwC8aVzOw4u0wdalTJmiCP9UvfwV_zLGxK4-0yInbW4H5CsfyeZPtmSl6eP1QmRdqCVNw3CPVxgP6A-naOxoqaT9pSHdT4f8faeqMo1_OAzKFyQPqe7geK9MfRuNEM-a1qlpk"
              />
            </div>
          </div>
        </div>
      </MyContainer>

      {/* CTA Section */}
      <MyContainer className="py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience PayUp Services?
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-lg mb-8">
            Join thousands of satisfied customers who trust PayUp for their
            financial needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="primary-btn text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300"
            >
              Get Started Today
            </Link>
            <Link
              to="/about"
              className="secondary-btn border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors duration-300"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Services;
