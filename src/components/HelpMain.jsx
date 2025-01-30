import React from "react";
import HeaderTitle from "./Common/HeaderTitle";

const HelpMain = () => {
  return (
    <div className="bg-customBlue1 pb-8">
      <div className="max-w-6xl mx-auto  rounded-lg shadow-md pb-8 pl-8">
        {/* Header */}
       <HeaderTitle Heading={"Help & Support"} SubHeading={"We're here to assist you with any inquiries, issues, or information you need about RSJRD Foundation."}/>

        
        {/* Sections */}
        <Section
          title="How Can We Assist You?"
          content="At RSJRD Foundation, we are committed to providing the best support for our community. Whether you're looking for
          information on our programs, volunteering, donations, or need assistance with any issues, we're here to help."
        />
        <Section
          title="Common Help Topics"
          content={
            <div className="space-y-6 mt-4">
              <HelpTopic
                title="I need help with donating."
                content={
                  <>
                    If you are facing any issues while donating or would like
                    more information about donation options, please visit our{" "}
                    <a href="/donate" className="text-[#E35A1E] underline">
                      Donate Page
                    </a>
                    . You can also contact us at{" "}
                    <strong>contact@rsjrd.org</strong>.
                  </>
                }
              />
              <HelpTopic
                title="How can I volunteer with RSJRD Foundation?"
                content={
                  <>
                    To become a volunteer, please visit our{" "}
                    <a href="/volunteer" className="text-[#E35A1E] underline">
                      Volunteer Page
                    </a>
                    . If you have any specific questions, feel free to reach out
                    via email at <strong>contact@rsjrd.org</strong>.
                  </>
                }
              />
              <HelpTopic
                title="I have a technical issue on the website."
                content={
                  <>
                    If you're experiencing any issues navigating our website or
                    accessing certain features, please contact us at{" "}
                    <strong>techsupport@rsjrd.org</strong>, and our technical
                    team will assist you as soon as possible.
                  </>
                }
              />
              <HelpTopic
                title="I need information on upcoming events."
                content={
                  <>
                    For information on upcoming events, check our{" "}
                    <a href="/events" className="text-[#E35A1E] underline">
                      Events Page
                    </a>
                    . You can also subscribe to our newsletter to stay updated
                    on the latest news and events.
                  </>
                }
              />
              <HelpTopic
                title="How can I contact RSJRD Foundation?"
                content={
                  <>
                    You can contact us directly through email at{" "}
                    <strong className="text-[#E35A1E]">contact@rsjrd.org</strong> or reach us by phone at{" "}
                    <strong className="text-[#E35A1E]">+1 (123) 456-7890</strong>.
                  </>
                }
              />
            </div>
          }
        />
        <Section
          title="Need Further Assistance?"
          content={
            <>
              If you cannot find the answer to your question or need further
              assistance, please don't hesitate to reach out. Our team is here
              to help you with any inquiries or concerns.
              <div className="mt-4 space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-white">
                    Email Us:
                  </h3>
                  <p className="text-gray-100 mt-1">
                    For general inquiries:{" "}
                    <strong className="text-[#E35A1E]">connect@rsjrdfoundation.org</strong>
                  </p>
                  {/* <p className="text-gray-700 mt-1">
                    For technical support:{" "}
                    <strong>techsupport@rsjrd.org</strong>
                  </p> */}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">
                    Call Us:
                  </h3>
                  <p className="text-gray-100 mt-1">
                    Our helpline is available Monday to Friday, 9 AM to 6 PM at{" "}
                    <strong className="text-[#E35A1E]">+1 (123) 456-7890</strong>.
                  </p>
                </div>
              </div>
            </>
          }
        />
        <Section
          title="Follow Us"
          content={
            <>
              Stay connected and follow us on social media for the latest
              updates, events, and news about RSJRD Foundation.
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Facebook
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline"
                >
                  Twitter
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 underline"
                >
                  Instagram
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 underline"
                >
                  LinkedIn
                </a>
              </div>
            </>
          }
        />
      </div>
    </div>
  );
};

const Section = ({ title, content }) => (
  <section className="mb-6">
    <h2 className="text-2xl font-bold text-gray-100  mt-4 mb-1">{title}</h2>
    <div className="text-gray-100 leading-relaxed">{content}</div>
  </section>
);

const HelpTopic = ({ title, content }) => (
  <div>
    <h3 className="text-xl font-semibold text-gray-100">{title}</h3>
    <p className="text-while mt-2">{content}</p>
  </div>
);

export default HelpMain;
