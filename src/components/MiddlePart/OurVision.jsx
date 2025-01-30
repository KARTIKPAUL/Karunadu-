import { useNavigate } from "react-router-dom";

const OurVision = () => {
  const navigate = useNavigate();

  const handleKnowMore = () => {
    navigate("/about");
  };
  return (
    <>
      <div className="py-16 bg-gradient-to-r from-customBlue1 to-customBlue2 text-center text-white relative px-6">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content  */}
        <div className="relative z-10 px-6 lg:px-12 py-4">
          <h2 className="text-4xl lg:text-6xl font-extrabold text-[#E35A1E] mb-12 text-center tracking-wider animate__animated animate__fadeIn">
            Our Vission
          </h2>

          <p className="text-lg lg:text-xl mx-auto max-w-4xl mb-8 text-gray-200 italic animate__animated animate__fadeIn animate__delay-2s px-6 text-left">
            To be the leading provider of agro-food products in India by
            promoting sustainable farming and leveraging technology for supply
            chain efficiency.
          </p>

          
        </div>
      </div>
    </>
  );
};

export default OurVision;
