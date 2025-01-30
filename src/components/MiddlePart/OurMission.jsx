import { useNavigate } from "react-router-dom";
import "animate.css";
import { motion } from "framer-motion";
import { FaBullseye, FaEye } from "react-icons/fa";

const OurMission = () => {
  const navigate = useNavigate();

  const handleKnowMore = () => {
    navigate("/about");
  };
  return (
    <>
      <div className="py-16 bg-customBlue2 text-center px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center space-y-4"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <FaBullseye className="text-6xl text-[#ffcc00]" />
            <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
            <p className="text-lg text-gray-600">
              To create a seamless supply chain that connects farmers with
              retailers, ensuring the best quality products at competitive prices.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center space-y-4"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <FaEye className="text-6xl text-[#ffcc00]" />
            <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
            <p className="text-lg text-gray-600">
              To be the leading provider of agro-food products in India by
              promoting sustainable farming and leveraging technology for supply
              chain efficiency.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default OurMission;
