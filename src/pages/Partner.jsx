import HeaderTitle from "../components/Common/HeaderTitle";
import PageHeader from "../components/PageHeader";
import { FaSeedling, FaShippingFast, FaTags, FaMobileAlt } from "react-icons/fa";

const Partner = () => {
  const sections = [
    {
      title: "Direct Sourcing",
      icon: <FaSeedling className="text-4xl text-[#ffcc00]" />, 
      description:
        "We eliminate middlemen to provide cost-effective, superior quality products. Our direct relationships with farmers and mills ensure fair pricing and quality control.",
      points: [
        "Ensuring quality control through direct partnerships.",
        "Providing fair pricing to support sustainable farming.",
        "Building transparency and traceability for retailers.",
      ],
    },
    {
      title: "Efficient Logistics",
      icon: <FaShippingFast className="text-4xl text-[#ffcc00]" />, 
      description:
        "Our logistics system ensures timely and reliable delivery through real-time tracking, strategic warehousing, and optimized delivery routes.",
      points: [
        "Real-time tracking for transparency.",
        "Strategic warehousing for faster fulfillment.",
        "Optimized routes to enhance efficiency.",
      ],
    },
    {
      title: "Private Label Branding – Oltowns",
      icon: <FaTags className="text-4xl text-[#ffcc00]" />, 
      description:
        "Our product portfolio is branded under Oltowns, ensuring brand consistency, exclusivity, and cost-effectiveness.",
      points: [
        "Consistent branding for customer trust.",
        "Exclusive product range.",
        "Competitive pricing through direct sourcing.",
      ],
    },
    {
      title: "Technology Integration",
      icon: <FaMobileAlt className="text-4xl text-[#ffcc00]" />, 
      description:
        "We leverage technology to streamline sourcing, ordering, and logistics through the Oltowns B2B App.",
      points: [
        "Automated inventory management.",
        "Data-driven insights for smarter procurement.",
        "Flexible order customization.",
      ],
    },
  ];

  return (
    <>
      <PageHeader title="Business Model" path="/business-model" name="Business Model" />
      <HeaderTitle
        Heading={"Business Model - Sourcing & Distribution with Oltowns"}
        SubHeading={
          "Our business model creates a seamless, efficient, and transparent supply chain benefiting both retail partners and farmers. We focus on delivering high-quality agro-products—staples, dry fruits, and whole spices—leveraging technology for streamlined operations."
        }
      />

      <div className="min-h-screen bg-customBlue1 py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 animate-fade-in-up"
              >
                <div className="flex items-center mb-4 justify-center">{section.icon}</div>
                <h2 className="text-2xl font-semibold text-[#2f2484] mb-4 text-center">
                  {section.title}
                </h2>
                <p className="text-gray-700 mb-4">{section.description}</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  {section.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 animate-slide-up">
            <img
              src="https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Business Model Image"
              className="w-full rounded-2xl h-96 shadow-lg hover:shadow-2xl transition duration-300"
            />
            <blockquote className="text-xl italic font-semibold text-[#ffcc00] mt-6">
              "Empowering farmers and retailers through trust, transparency, and efficiency."
            </blockquote>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partner;
