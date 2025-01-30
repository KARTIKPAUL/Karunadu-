import React from "react";
import HeaderTitle from "./Common/HeaderTitle";

const CookiesMain = () => {
  return (
    <div className="bg-customBlue1 pb-8">
      <div className="max-w-6xl mx-auto  rounded-lg shadow-md pb-8 pl-8">
        {/* Header */}
        <HeaderTitle Heading={"Cookies Policy"} SubHeading={"This Cookies Policy explains how RSJRD Foundation uses cookies and similar technologies to recognize you  when you visit our website or use our services."}/>

       

        {/* Sections */}
        <Section
          title="Introduction"
          content="This Cookies Policy explains how RSJRD Foundation uses cookies and similar technologies to recognize you
            when you visit our website or use our services. This policy describes what cookies are, how we use them,
            and how you can manage them."
        />
        <Section
          title="What Are Cookies?"
          content="Cookies are small files that are stored on your device when you visit a website. They help improve the
            functionality of the website by remembering your preferences, login information, and other activities."
        />
        <Section
          title="How We Use Cookies"
          content={
            <>
              RSJRD Foundation uses cookies for the following purposes:
              <ul className="list-disc pl-6 mt-2">
                <li>
                  To personalize your experience and respond to your preferences
                </li>
                <li>
                  To analyze website traffic and usage to improve our services
                </li>
                <li>
                  To remember your login details and preferences for future
                  visits
                </li>
                <li>To provide targeted advertising based on your interests</li>
              </ul>
            </>
          }
        />
        <Section
          title="Types of Cookies We Use"
          content={
            <>
              We use the following types of cookies on our website:
              <ul className="list-disc pl-6 mt-2">
                <li>
                  <strong>Essential Cookies</strong>: These cookies are
                  necessary for the website to function properly, such as
                  remembering your session or authentication status.
                </li>
                <li>
                  <strong>Performance Cookies</strong>: These cookies collect
                  information about how visitors use our website, such as which
                  pages are visited most often or if error messages appear.
                </li>
                <li>
                  <strong>Functionality Cookies</strong>: These cookies allow
                  the website to remember your preferences (such as language or
                  region) and provide enhanced, personalized features.
                </li>
                <li>
                  <strong>Targeting/Advertising Cookies</strong>: These cookies
                  are used to deliver advertisements relevant to you based on
                  your online activity.
                </li>
              </ul>
            </>
          }
        />
        <Section
          title="Managing Cookies"
          content={
            <>
              You have the ability to control cookies through your browser
              settings. Most browsers allow you to block or delete cookies, or
              to alert you when a cookie is being set. However, please note that
              blocking or deleting cookies may affect the functionality of
              certain parts of the website.
              <p className="mt-2">
                For more information on how to manage cookies, you can visit the
                help section of your browser. Below are links for managing
                cookies in popular browsers:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>
                  <a
                    href="https://www.aboutcookies.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E35A1E] underline"
                  >
                    Learn how to manage cookies in your browser
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.google.com/chrome/answer/95647?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E35A1E] underline"
                  >
                    Google Chrome
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E35A1E] underline"
                  >
                    Mozilla Firefox
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.apple.com/en-us/HT201265"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E35A1E] underline"
                  >
                    Safari
                  </a>
                </li>
              </ul>
            </>
          }
        />
        <Section
          title="Changes to This Cookies Policy"
          content="We may update this Cookies Policy from time to time to reflect changes in our practices or for other operational,
            legal, or regulatory reasons. We will post the updated policy on this page, and the 'Last Updated' date at the
            top will be revised."
        />
        <Section
          title="Contact Us"
          content={
            <>
              If you have any questions or concerns about our use of cookies,
              please contact us at <strong className="text-[#E35A1E]">connect@rsjrdfoundation.org</strong>.
            </>
          }
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

export default CookiesMain;
