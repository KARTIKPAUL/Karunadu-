import { useNavigate } from "react-router-dom";
import "animate.css";
import { motion } from "framer-motion";
import { FaUserTie, FaBusinessTime, FaSeedling } from "react-icons/fa";
import founderImage from "../../assets/founderImage.png"

const FounderDetails = () => {
  const navigate = useNavigate();

  const handleKnowMore = () => {
    navigate("/about");
  };

  return (
    <motion.div
      className="py-16 bg-gradient-to-b from-customBlue1 to-customBlue2 text-center px-6"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl lg:text-5xl font-extrabold text-[#ffcc00] mb-8 tracking-wider animate__animated animate__fadeInUp">
        Meet the Driving Force: <span className="text-gray-100">Praveen K (Director)</span>
      </h2>

      <motion.div
        className="w-full lg:w-1/2 mx-auto mt-12 flex justify-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={founderImage}
          alt="Praveen K"
          className="rounded text-center shadow-xl border-4 border-[#ffcc00] h-50 w-500"
        />
      </motion.div>

      {/* Founder Quote */}
      <motion.div
        className="mt-8 text-lg font-semibold text-gray-100 italic mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        "Empowering farmers and delivering quality to consumers—one step at a time."
      </motion.div>

      <div className="w-full lg:w-2/3 mx-auto text-left space-y-12">
        {/* Personal Life */}
        <motion.div
          className="p-6 bg-white shadow-lg rounded-xl border-l-8 border-[#ffcc00]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 flex items-center">
            <FaUserTie className="text-[#ffcc00] mr-3" /> Personal Life
          </h3>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Praveen K. serves as the Director of <span className="font-semibold">Vajjiram Agro Foods India (OPC) Private Limited</span>, bringing a visionary approach to the business.
            An accomplished entrepreneur with an MBA in Business Analytics from the prestigious
            <span className="font-semibold"> M.S. Ramaiah College of Arts, Science & Commerce</span>, he combines data-driven insights with strategic thinking to ensure the
            company meets the evolving demands of its customers while upholding its core values of quality and trust.
          </p>
        </motion.div>

        {/* Professional Journey */}
        <motion.div
          className="p-6 bg-white shadow-lg rounded-xl border-l-8 border-[#F59E0B]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 flex items-center">
            <FaBusinessTime className="text-[#F59E0B] mr-3" /> Professional Journey
          </h3>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Praveen’s professional journey reflects his passion for continuous learning and innovation. With expertise in
            <span className="font-semibold"> business analytics, supply chain optimization, and strategic planning</span>, he has led transformative initiatives that create meaningful impacts in the agri-business sector.
            Under his leadership, <span className="font-semibold">Vajjiram Agro Foods</span> is committed to revolutionizing the industry by establishing a seamless supply chain that connects
            farmers directly to consumers, ensuring fair prices for producers and premium quality for customers.
          </p>
        </motion.div>

        {/* Current Work */}
        <motion.div
          className="p-6 bg-white shadow-lg rounded-xl border-l-8 border-[#10B981]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 flex items-center">
            <FaSeedling className="text-[#10B981] mr-3" /> Current Work
          </h3>
          <p className="mt-4 text-gray-700 leading-relaxed">
            At the heart of this venture is Praveen’s personal commitment to <span className="font-semibold">enhancing the lives of farmers and consumers alike</span>.
            By offering a diverse range of products, from everyday staples to premium dry fruits, the company caters to the varied needs of its customers while promoting sustainable agricultural practices.
          </p>
        </motion.div>
      </div>
      
      {/* Founder Image */}
      

      {/* Call to Action */}
      <motion.button
        className="mt-10 px-6 py-3 bg-[#ffcc00] text-gray-800 font-semibold rounded-full shadow-lg hover:bg-[#c94d16] transition duration-300 text-lg"
        onClick={handleKnowMore}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Know More About Us
      </motion.button>
    </motion.div>
  );
};

export default FounderDetails;
