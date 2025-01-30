

import React from "react";
import HeaderTitle from "./Common/HeaderTitle";

const TermsConditionMain = () => {
  return (
    <div className="bg-customBlue1 pb-8">
      <div className="max-w-6xl mx-auto   rounded-lg shadow-md pl-8 pb-8">
        <HeaderTitle 
        Heading={"Terms and Conditions"} 
        SubHeading={"Welcome to RSJRD Foundation! These terms and conditions outline the rules and regulations for the use of our website. By accessing or using the website, you agree to comply with these terms. If you disagree with any part of the terms, please do not use our website."} 
        className="bg-white"
      />

        

        <Section
          title="1. Use of Website"
          content="You agree to use this website only for lawful purposes and in a manner that does not infringe on the rights of others or restrict their use of the website. You shall not use the website to distribute harmful content or engage in illegal activities."
        />
        <Section
          title="2. Intellectual Property"
          content="All content provided on the website, including but not limited to text, images, videos, logos, and trademarks, is the property of RSJRD Foundation or its licensors and is protected by copyright and other intellectual property laws."
        />
        <Section
          title="3. User Contributions"
          content="By submitting content to the website, you grant RSJRD Foundation a non-exclusive, worldwide, royalty-free license to use, modify, and display the content as part of our services and promotional activities."
        />
        <Section
          title="4. Privacy Policy"
          content="RSJRD Foundation is committed to protecting your privacy. Our Privacy Policy outlines how we collect, use, and protect your personal information. By using this website, you agree to our Privacy Policy."
        />
        <Section
          title="5. Limitation of Liability"
          content="RSJRD Foundation shall not be liable for any damages arising from the use or inability to use the website, including but not limited to loss of data, income, or business interruptions. We make no guarantees or warranties regarding the accuracy, reliability, or availability of the website."
        />
        <Section
          title="6. Changes to Terms"
          content="RSJRD Foundation reserves the right to update or modify these terms at any time. We encourage you to review these terms periodically to stay informed about any changes. Your continued use of the website after changes have been made constitutes acceptance of the updated terms."
        />
        <Section
          title="7. Contact Us"
          content="If you have any questions about these Terms and Conditions, please contact us at connect@rsjrdfoundation.org."
        />
      </div>
    </div>
  );
};

const Section = ({ title, content }) => (
  <section className="">
    <h2 className="text-xl font-bold text-gray-100 mt-4 mb-1">{title}</h2>
    <p className="text-white leading-relaxed">{content}</p>
  </section>
);

export default TermsConditionMain;
