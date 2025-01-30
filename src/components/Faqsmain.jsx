import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import HeaderTitle from "./Common/HeaderTitle";

const FaqsMain = () => {
  // FAQs data
  const faqData = [
    {
      question: "How can I access wholesale prices?",
      answer:
        "By using the Oltowns B2B App, you can access special wholesale pricing based on your order volume.",
    },
    {
      question: "What are your delivery timelines?",
      answer:
        "Delivery timelines vary by location, but we strive for quick fulfillment and real-time order tracking through the app.",
    },
    {
      question: "Do you offer organic products?",
      answer:
        "Yes, select products in our range are certified organic.",
    },
    {
      question: "How can I place a bulk order?",
      answer:
        "You can place bulk orders through the Oltowns App or by contacting our sales team.",
    },
    // {
    //   question: "What are some success stories of RSJ Rural Development Foundation?",
    //   answer:
    //     "We have transformed several villages by building schools, providing microfinance for women entrepreneurs, and introducing modern farming techniques for better yields.",
    // },
    // {
    //   question: "Are RSJ programs only limited to rural areas?",
    //   answer:
    //     "While our focus is on rural areas, some of our programs, especially related to women empowerment and education, extend to semi-urban and urban areas as well.",
    // },
    // {
    //   question: "Does RSJ provide funding for small businesses in rural areas?",
    //   answer:
    //     "Yes, we offer microfinance opportunities and guidance for setting up small businesses in rural communities.",
    // },
    // {
    //   question: "How does RSJ ensure sustainability in its development projects?",
    //   answer:
    //     "We prioritize long-term solutions by involving the local community, using sustainable resources, and providing training for maintenance and growth.",
    // },
    // {
    //   question: "Can individuals from urban areas participate in RSJ programs?",
    //   answer:
    //     "Absolutely! We welcome individuals from all backgrounds to contribute, volunteer, or learn through our programs.",
    // },
    // {
    //   question: "How can I stay updated with RSJ's latest activities?",
    //   answer:
    //     "You can subscribe to our newsletter, follow us on social media, or visit our website regularly for updates and success stories.",
    // },
  ];

  // State to handle active dropdown
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle the dropdown
  const toggleDropdown = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="pb-8 bg-customBlue1 min-h-screen">
      <HeaderTitle
        Heading={"Frequently Asked Questions"}
        SubHeading={
          "We're here to assist you with any inquiries, issues, or information you need about RSJRD Foundation."
        }
      />

      <div className="max-w-6xl mx-auto space-y-6 px-4 lg:px-8 bg-white py-8 rounded-xl">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300"
          >
            <div
              onClick={() => toggleDropdown(index)}
              className="cursor-pointer p-6 flex justify-between items-center group"
            >
              <h3 className="text-lg lg:text-xl font-bold text-gray-800 group-hover:text-[#ffcc00] transition duration-300">
                {faq.question}
              </h3>
              <span className="text-blue-600">
                {activeIndex === index ? (
                  <FaChevronUp className="text-lg transform group-hover:scale-125 transition duration-300" />
                ) : (
                  <FaChevronDown className="text-lg transform group-hover:scale-125 transition duration-300" />
                )}
              </span>
            </div>
            <div
              className={`overflow-hidden transition-all duration-700 ${
                activeIndex === index
                  ? "max-h-[500px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-6 text-gray-800 border-t border-gray-200 bg-blue-50 animate-fadeIn">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqsMain;
