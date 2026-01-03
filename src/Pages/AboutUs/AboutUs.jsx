import { Link } from "react-router";
import MyContainer from "../../Components/Shared/MyContainer/MyContainer";
import FQA from "../../Components/FQA";

const AboutUs = () => {
  return (
    <div className=" min-h-screen bg-white dark:bg-slate-900">
      <title>About Us | PayUp</title>

      {/* Hero Section */}
      <div className="text-center space-y-6 py-20 px-8 relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-black dark:text-white mb-6">
            About PayUp
          </h1>
          <p className=" text-black/90 dark:text-white text-lg md:text-xl max-w-3xl mx-auto">
            Revolutionizing digital payments with secure, fast, and reliable
            financial solutions for everyone.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <MyContainer className="py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Our Mission
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">
              At PayUp, we believe that financial services should be accessible,
              transparent, and empowering for everyone. Our mission is to
              simplify digital payments and banking, making it easier for
              individuals and businesses to manage their finances with
              confidence.
            </p>
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
              We're committed to building innovative solutions that put our
              users first, ensuring security, convenience, and exceptional
              service in every interaction.
            </p>
          </div>
          <div className="bg-gradient-to-br from-primary/10 to-blue-500/10 dark:from-primary/20 dark:to-blue-500/20 rounded-2xl p-8">
            <div className="text-center">
              <div className="bg-primary/10 dark:bg-primary/20 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Innovation First</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Cutting-edge technology meets user-friendly design to create the
                future of digital banking.
              </p>
            </div>
          </div>
        </div>
      </MyContainer>

      {/* Values Section */}
      <div className="bg-slate-50 dark:bg-slate-800/50 py-20">
        <MyContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Core Values
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">
              These principles guide everything we do and shape the way we serve
              our customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Security */}
            <div className="bg-white dark:bg-card-dark rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-green-600 dark:text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Security First</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Bank-grade encryption and multi-layer security protocols protect
                your financial data and transactions.
              </p>
            </div>

            {/* Transparency */}
            <div className="bg-white dark:bg-card-dark rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-blue-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Transparency</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Clear pricing, no hidden fees, and straightforward terms. You
                always know exactly what you're paying for.
              </p>
            </div>

            {/* Innovation */}
            <div className="bg-white dark:bg-card-dark rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-purple-600 dark:text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Constantly evolving our platform with the latest technology to
                provide you with the best user experience.
              </p>
            </div>
          </div>
        </MyContainer>
      </div>

      {/* Team Section */}
      <MyContainer className="py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Team</h2>
          <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">
            Passionate professionals dedicated to revolutionizing your financial
            experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="bg-white dark:bg-card-dark rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-primary to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">JS</span>
            </div>
            <h3 className="text-xl font-bold mb-2">John Smith</h3>
            <p className="text-primary font-semibold mb-3">CEO & Founder</p>
            <p className="text-slate-600 dark:text-slate-300 text-sm">
              15+ years in fintech, passionate about making financial services
              accessible to everyone.
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white dark:bg-card-dark rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">SD</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Sarah Davis</h3>
            <p className="text-primary font-semibold mb-3">CTO</p>
            <p className="text-slate-600 dark:text-slate-300 text-sm">
              Expert in cybersecurity and blockchain technology, ensuring our
              platform stays secure and innovative.
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white dark:bg-card-dark rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">MJ</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Michael Johnson</h3>
            <p className="text-primary font-semibold mb-3">Head of Product</p>
            <p className="text-slate-600 dark:text-slate-300 text-sm">
              UX specialist focused on creating intuitive and user-friendly
              financial experiences.
            </p>
          </div>
        </div>
      </MyContainer>
      <FQA></FQA>
      {/* Stats Section */}
      <div className="bg-primary text-white py-20">
        <MyContainer>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500K+</div>
              <p className="text-blue-100">Active Users</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">$2B+</div>
              <p className="text-blue-100">Transactions Processed</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">99.9%</div>
              <p className="text-blue-100">Uptime</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <p className="text-blue-100">Customer Support</p>
            </div>
          </div>
        </MyContainer>
      </div>

      {/* CTA Section */}
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
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300"
            >
              Get Started Today
            </Link>
            <Link
              to="/help"
              className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default AboutUs;
