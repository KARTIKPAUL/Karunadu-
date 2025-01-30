import { useNavigate } from "react-router-dom";
import "animate.css";
import { motion } from "framer-motion";


const OurStory = () => {
  const navigate = useNavigate();

  const handleKnowMore = () => {
    navigate("/about");
  };
  return (
    <>
      <motion.div
        className="py-16 bg-gradient-to-r from-customBlue1 to-customBlue2 text-center text-white relative px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 px-6 lg:px-12 py-4">
          <motion.h2
            className="text-4xl lg:text-6xl font-extrabold text-[#ffcc00] mb-12 text-center tracking-wider"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Our Story
          </motion.h2>
          <p className="text-lg lg:text-xl mx-auto max-w-4xl mb-8 text-gray-200 italic animate__animated animate__fadeIn animate__delay-2s px-6 text-left">
            Vajjiram Agro Foods India (OPC) Private Limited, under the Oltowns
            brand, brings you premium quality staples, dry fruits, and whole
            spices. We aim to revolutionize the agro-foods industry by
            integrating technology into the supply chain, making it efficient,
            transparent, and sustainable. From sourcing directly from farmers
            and mills to doorstep delivery, we are committed to serving both the
            farmers and retailers across India.
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default OurStory;
