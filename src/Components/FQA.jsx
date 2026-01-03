import React, { useState } from "react";

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
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-3xl w-full space-y-10">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-slate-900">
            Frequently asked questions
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Get answers to common questions and manage your finances smarter.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-slate-200 shadow-sm"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left"
              >
                <span className="font-semibold text-lg text-slate-800">
                  {faq.question}
                </span>
                <span
                  className={`text-blue-600 text-2xl transition-transform ${
                    activeIndex === index ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              {activeIndex === index && (
                <div className="px-6 pb-5 text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center pt-6">
          <p className="text-slate-400 text-sm">
            Still have questions?{" "}
            <a href="#" className="text-blue-600 font-medium hover:underline">
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FQA;
