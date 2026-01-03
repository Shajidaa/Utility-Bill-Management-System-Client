import { useState } from "react";

const faqs = [
  {
    question: "How do I locate the nearest branch or ATM?",
    answer:
      "You can easily locate the nearest branch or ATM using our mobile app's locator feature or by visiting the Locations page on our website.",
  },
  {
    question: "What do I do if I lose my card or it gets stolen?",
    answer:
      "Immediately lock your card through the mobile app and contact our 24/7 support line. We will issue a replacement within 3–5 business days.",
  },
  {
    question: "What is your customer service number?",
    answer: "Our customer service team is available at 1-800-555-0199, 24/7.",
  },
  {
    question: "How do I reset my PIN?",
    answer:
      "You can reset your PIN at any of our ATMs or through the mobile banking app under Card Settings.",
  },
  {
    question: "What is required to use Digital Banking?",
    answer:
      "You need an active account, a valid email address, and internet access. Registration takes less than 5 minutes.",
  },
  {
    question: "Is digital banking secure?",
    answer:
      "Yes. We use industry-leading encryption, multi-factor authentication, and fraud monitoring.",
  },
];

const FQA = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 transition-colors duration-300">
      <div className="max-w-3xl w-full space-y-10">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
            Frequently asked questions
          </h1>
          <p className="text-slate-500 dark:text-gray-400 max-w-2xl mx-auto">
            Get answers to common questions and manage your finances smarter.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl border border-slate-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left hover:bg-slate-50 dark:hover:bg-gray-700 rounded-xl transition-colors duration-200"
              >
                <span className="font-semibold text-lg text-slate-800 dark:text-gray-200">
                  {faq.question}
                </span>
                <span
                  className={`text-blue-600 dark:text-blue-400 text-2xl transition-transform duration-200 ${
                    activeIndex === index ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              {activeIndex === index && (
                <div className="px-6 pb-5 text-slate-600 dark:text-gray-300 leading-relaxed animate-fadeIn">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center pt-6">
          <p className="text-slate-400 dark:text-gray-500 text-sm">
            Still have questions?{" "}
            <a
              href="#"
              className="text-blue-600 dark:text-blue-400 font-medium hover:underline transition-colors duration-200"
            >
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FQA;
