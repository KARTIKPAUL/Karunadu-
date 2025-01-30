import React from 'react';
import HeaderTitle from './Common/HeaderTitle';

const PrivacyMain = () => {
  return (
    <div className="bg-customBlue1 pb-8">
      <div className="max-w-6xl mx-auto  rounded-lg shadow-md pl-8 pb-8">
        {/* Header */}
        <HeaderTitle Heading={"Privacy Policy"} SubHeading={"This Privacy Policy explains how RSJRD Foundation collects, uses, and protects your personal information  when you interact with our website or services."}/>

        

        {/* Sections */}
        <Section
          title="1. Introduction"
          content="At RSJRD Foundation, we are committed to protecting your privacy. This Privacy Policy explains how we collect,
            use, and share your personal information when you visit our website, use our services, or engage with us."
        />
        <Section
          title="2. Information We Collect"
          content={
            <>
              We may collect the following types of information when you use our website:
              <ul className="list-disc pl-6 mt-2">
                <li>Personal identification information (name, email address, etc.)</li>
                <li>Non-personal information (browser type, IP address, etc.)</li>
                <li>Usage data (how you interact with the website, pages visited, etc.)</li>
              </ul>
            </>
          }
        />
        <Section
          title="3. How We Use Your Information"
          content={
            <>
              The information we collect is used for the following purposes:
              <ul className="list-disc pl-6 mt-2">
                <li>To personalize and improve user experience</li>
                <li>To send periodic emails regarding updates, events, or newsletters</li>
                <li>To respond to inquiries and customer service requests</li>
                <li>To monitor website usage and improve our services</li>
              </ul>
            </>
          }
        />
        <Section
          title="4. How We Protect Your Information"
          content="We implement a variety of security measures to maintain the safety of your personal information, including
            password-protected directories, encryption, and SSL (Secure Socket Layer) technology."
        />
        <Section
          title="Sharing Your Information"
          content="We do not sell, trade, or rent your personal information to others. However, we may share generic aggregated
            demographic information with partners for the purposes mentioned above. No personally identifiable information
            will be shared without your consent, except as required by law."
        />
        <Section
          title="5. Cookies"
          content="Our website may use cookies to enhance user experience. Cookies are small files stored on your device that
            help us understand your preferences. You may disable cookies in your browser settings, but doing so may
            affect some website features."
        />
        <Section
          title="Third-Party Links"
          content="Occasionally, our website may include links to third-party websites. These websites have their own privacy
            policies, and we are not responsible for their content or practices."
        />
        <Section
          title="6. Your Consent"
          content="By using our website, you consent to our privacy policy and agree to its terms. Changes to this policy will
            be updated on this page, and continued use of the website constitutes your acceptance of these changes."
        />
        <Section
          title="8. Contact Us"
          content="If you have any questions or concerns regarding this Privacy Policy, please contact us at
            connect@rsjrdfoundation.org."
        />
      </div>
    </div>
  );
};

const Section = ({ title, content }) => (
  <section className="">
    <h2 className="text-2xl font-bold text-gray-100  mt-4 mb-1">{title}</h2>
    <div className="text-white leading-relaxed">{content}</div>
  </section>
);

export default PrivacyMain;
