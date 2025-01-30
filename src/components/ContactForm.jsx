import React from "react";
import HeaderTitle from "./Common/HeaderTitle";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const ContactForm = () => {
  return (
    <>
      <div className="flex flex-col items-center px-4 bg-customBlue1">
        <HeaderTitle
          Heading={"Get in Touch with Oltowns"}
          SubHeading={
            "Our team is here to help you with any inquiries, bulk orders, or partnership opportunities. Reach out to us using the following contact information"
          }
        />
        {/* Contact Details */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center w-full gap-8 px-4 lg:px-6">
          {/* Contact Information */}

          <div className="w-full lg:w-1/3 flex flex-col lg:items-start my-5">
            <h2 className="text-[#ffcc00] text-2xl lg:text-3xl font-bold">
              Get in Touch With Us
            </h2>
            <h3 className="text-lg lg:text-xl font-semibold mt-2 text-gray-100">
              Contact Us For Any Questions ! 
            </h3>
            <div className="mt-4 text-gray-100 space-y-4">
              {/* Phone */}
              <div className="flex items-start">
                <FaPhoneAlt className="text-[#ffcc00] text-2xl w-8" />
                <div>
                  <p className="text-[#ffcc00] font-bold text-lg">
                    <a href="tel:+918838781817">+91 8838781817</a>
                  </p>
                  <p className="text-gray-400">
                    Call us: Mon - Fri 9:00 AM - 6:00 PM
                  </p>
                  </div>
              </div>

              {/* Address */}
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-[#ffcc00] text-2xl w-8" />
                <div>
                  <p className="text-lg font-bold">
                    <a href=""></a>
                    Karunadu Products India Pvt Ltd.
                  </p>
                  <p className="text-gray-400">
                  Floor, 51, 2nd Cross Rd, 2nd Stage, P&T Colony, RT Nagar, Bengaluru, Karnataka 560032
                  </p>
                  </div>
                
              </div>

              {/* Email */}
              <div className="flex items-start">
                <FaEnvelope className="text-[#ffcc00] text-2xl w-8" />
                <div>
                  <p className="text-lg font-bold">
                    <a href="mailto: info@vajjiramagro.com" className="">
                       info@vajjiramagro.com
                    </a>
                  </p>
                  <p className="text-gray-400">Drop us a line anytime!</p>
                  </div>
              </div>

              <div className="flex justify-center lg:justify-start space-x-4 mt-4">
                <a href="#" className="text-gray-100 text-2xl hover:text-[#2f2484]">
                  <FaInstagram />
                </a>
                <a href="#" className="text-gray-100 text-2xl hover:text-[#2f2484]">
                  <FaLinkedin />
                </a>
                <a href="#" className="text-gray-100 text-2xl hover:text-[#2f2484]">
                  <FaWhatsapp />
                </a>
                <a href="#" className="text-gray-100 text-2xl hover:text-[#2f2484]">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-1/2">
            <form className="bg-white shadow-lg p-6 rounded-lg space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 text-gray-800"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 text-gray-800"
                required
              />
              <input
                type="text"
                placeholder="Contact"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 text-gray-800"
                required
              />
              <textarea
                placeholder="Message"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 text-gray-800"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#ffcc00] text-white rounded-lg py-3 hover:bg-[#2f2484] transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="bg-customBlue1 flex flex-col items-center justify-center px-4">
        <HeaderTitle
          Heading={"Our Location"}
          SubHeading={"You Can Easily Find Us Here"}
        />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d485.8973955368937!2d77.593423!3d13.02426!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17b08b230dab%3A0x704529a15b017e72!2sKarunadu%20Products%20India%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1738225990188!5m2!1sen!2sin"
          className="w-full h-[40vh] lg:h-[60vh] rounded-xl"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="none"
        ></iframe>
      </div>
    </>
  );
};

export default ContactForm;
