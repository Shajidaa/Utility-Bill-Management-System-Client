import MyContainer from "../Components/Shared/MyContainer/MyContainer";
import { FaCheckCircle, FaUsers, FaShieldAlt, FaClock, FaMobile, FaGlobe } from "react-icons/fa";

const AboutUs = () => {
  const features = [
    {
      icon: <FaShieldAlt className="text-3xl text-blue-600" />,
      title: "Secure Payments",
      description: "Bank-level security with end-to-end encryption for all transactions"
    },
    {
      icon: <FaClock className="text-3xl text-green-600" />,
      title: "24/7 Service",
      description: "Round-the-clock bill payment service with instant confirmations"
    },
    {
      icon: <FaMobile className="text-3xl text-purple-600" />,
      title: "Mobile First",
      description: "Optimized mobile experience for payments on the go"
    },
    {
      icon: <FaGlobe className="text-3xl text-orange-600" />,
      title: "Wide Coverage",
      description: "Support for all major utility companies and service providers"
    }
  ];

  const stats = [
    { number: "500K+", label: "Happy Customers" },
    { number: "2M+", label: "Bills Paid" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <MyContainer>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About PayUp
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Simplifying bill payments for millions of users across Bangladesh. 
                We make managing your monthly expenses effortless and secure.
              </p>
              <div className="flex items-center gap-4">
                <FaCheckCircle className="text-green-400 text-xl" />
                <span className="text-lg">Trusted by 500,000+ customers</span>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
                alt="PayUp Team"
                className="rounded-2xl shadow-2xl max-w-full h-auto"
              />
            </div>
          </div>
        </MyContainer>
      </div>

      {/* Mission Section */}
      <div className="py-16">
        <MyContainer>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop"
                alt="Our Mission"
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                At PayUp, we believe that paying bills should be simple, secure, and stress-free. 
                Our mission is to revolutionize how people manage their monthly expenses by providing 
                a unified platform for all bill payments.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                We're committed to building technology that saves time, reduces hassle, and gives 
                our users complete control over their financial obligations.
              </p>
            </div>
          </div>
        </MyContainer>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white dark:bg-gray-800">
        <MyContainer>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose PayUp?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We've built PayUp with features that matter most to our users - security, 
              convenience, and reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </MyContainer>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <MyContainer>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              PayUp by the Numbers
            </h2>
            <p className="text-blue-100 text-lg">
              Our growth reflects the trust our customers place in us
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </MyContainer>
      </div>

      {/* Team Section */}
      <div className="py-16">
        <MyContainer>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                PayUp was founded in 2020 with a simple vision: to eliminate the frustration 
                of managing multiple bill payments. Our team of experienced developers and 
                financial experts came together to create a solution that puts users first.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                Today, we're proud to serve over 500,000 customers across Bangladesh, 
                processing millions of transactions safely and efficiently every month.
              </p>
              <div className="flex items-center gap-2">
                <FaUsers className="text-blue-600 text-xl" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  Built by a team of 50+ professionals
                </span>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="Our Team"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </MyContainer>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gray-100 dark:bg-gray-800">
        <MyContainer>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Simplify Your Bills?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have made PayUp their trusted 
              bill payment partner.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Started Today
            </button>
          </div>
        </MyContainer>
      </div>
    </div>
  );
};

export default AboutUs;