import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How does the AI detect bone cancer?",
    answer:
      "Our AI model uses deep learning (CNNs) to analyze MRI , identifying patterns associated with bone cancer at various stages.",
    category: "Technology",
    icon: "🧠",
  },
  {
    question: "Is my medical data secure?",
    answer:
      "Yes! We use end-to-end encryption to ensure your scans and results remain private and confidential.",
    category: "Privacy",
    icon: "🔒",
  },
  {
    question: "How accurate is the AI diagnosis?",
    answer:
      "Our AI has been trained on thousands of medical images and achieves high accuracy. However, it should always be used as a second opinion alongside professional diagnosis.",
    category: "Accuracy",
    icon: "📊",
  },
  {
    question: "What file formats can I upload?",
    answer: "You can upload images in JPEG formats.",
    category: "Usage",
    icon: "📤",
  },
  {
    question: "Do I need a doctor's prescription to use this?",
    answer:
      "No, you can upload your MRI anytime for analysis. However, we recommend consulting a doctor for final confirmation.",
    category: "Access",
    icon: "👨‍⚕️",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState(null);

  const categories = [...new Set(faqs.map((faq) => faq.category))];

  const filteredFAQs = categoryFilter
    ? faqs.filter((faq) => faq.category === categoryFilter)
    : faqs;

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      className="py-16 px-6 bg-gradient-to-br from-gray-50 to-gray-100"
      id="faq"
    >
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-2 sm:space-x-4 mb-8">
          <button
            onClick={() => setCategoryFilter(null)}
            className={`px-4 py-2 rounded-full transition-all duration-300 
      ${
        !categoryFilter
          ? "bg-blue-500 text-white"
          : "bg-gray-200 text-gray-700 hover:bg-blue-100"
      }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setCategoryFilter(category)}
              className={`px-4 py-2 rounded-full transition-all duration-300 
        ${
          categoryFilter === category
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-700 hover:bg-blue-100"
        }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          <AnimatePresence>
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className={`
                    border-l-4 bg-white p-6 shadow-md rounded-md 
                    transition-all duration-300 
                    ${
                      activeIndex === index
                        ? "border-red-400 scale-105"
                        : "border-gray-200 hover:border-red-300"
                    }
                  `}
                >
                  <div
                    onClick={() => toggleFAQ(index)}
                    className="flex cursor-pointer items-center justify-between"
                  >
                    <div className="flex items-center space-x-4">
                      <span className="text-2xl">{faq.icon}</span>
                      <h3 className="text-lg font-medium text-gray-900">
                        {faq.question}
                      </h3>
                    </div>
                    <motion.span
                      animate={{
                        rotate: activeIndex === index ? 45 : 0,
                      }}
                      className="shrink-0 rounded-full bg-gray-100 p-2"
                    >
                      ➕
                    </motion.span>
                  </div>

                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity: 1,
                          height: "auto",
                          transition: { duration: 0.3 },
                        }}
                        exit={{
                          opacity: 0,
                          height: 0,
                          transition: { duration: 0.2 },
                        }}
                        className="mt-4 text-gray-700 overflow-hidden"
                      >
                        {faq.answer}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
