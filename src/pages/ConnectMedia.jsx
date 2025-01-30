import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaWhatsapp } from "react-icons/fa";
import HeaderTitle from "../components/Common/HeaderTitle";
import PageHeader from "../components/PageHeader";

const ConnectMedia = () => {
  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/rsjrdfoundation",
      icon: <FaFacebook size={30} />,
      color: "text-blue-600", // Facebook blue
    },
    {
      name: "Twitter",
      url: "https://x.com/rsjrdfoundation",
      icon: <FaTwitter size={30} />,
      color: "text-sky-500", // Twitter blue
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/rsjrdfoundation/",
      icon: <FaInstagram size={30} />,
      color: "text-pink-600", // Instagram pink
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/rsjrdfoundation/",
      icon: <FaLinkedin size={30} />,
      color: "text-blue-800", // LinkedIn blue
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@rsjrdfoundation",
      icon: <FaYoutube size={30} />,
      color: "text-red-600", // YouTube red
    },
    {
      name: "WA Channel",
      url: "https://whatsapp.com/channel/0029Vay4DYoBvvsjHONVc13h",  // Replace with your WhatsApp Channel link
      icon: <FaWhatsapp size={30} />,
      color: "text-green-500", // WhatsApp green
    },
    {
      name: "WA_Community",
      url: "https://whatsapp.com/channel/0029Vay4DYoBvvsjHONVc13h",  // Replace with your WhatsApp Community link
      icon: <FaWhatsapp size={30} className="text-gray-100" />,
      color: "text-green-600", // Slightly darker green for WhatsApp Community
    },
  ];

  return (
    <>
      <PageHeader
        title="Connect On Social Media"
        path="/become-a-hero/connect-on-social-media"
        name="ConnectMedia"
      />
      <div className="min-h-screen bg-customBlue1">
        <div className="max-w-7xl mx-auto px-6">
          <HeaderTitle
            Heading={"Connect With Us on Social Media"}
            SubHeading={
              "Stay updated and be a part of our journey by following us on social media. Witness the stories of transformation, get updates on our initiatives, and join hands to create lasting change."
            }
          />
          <h2 className="text-[#E35A1E] text-center text-2xl">📲 Follow us now and make a difference!
          </h2>
          {/* Grid for Desktop and Mobile */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 mt-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col items-center justify-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                  index === 6 ? "col-span-full lg:col-span-1 lg:col-start-7" : "" // Center WA Community on desktop
                }`} 
              >
                <div className={`flex items-center justify-center p-3 rounded-full shadow-md ${link.color} transition-all duration-300`}>
                  {link.icon}
                </div>
                <span className="text-lg font-medium text-white mt-2">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ConnectMedia;
