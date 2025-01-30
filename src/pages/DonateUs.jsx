import HeaderTitle from "../components/Common/HeaderTitle";
import PageHeader from "../components/PageHeader";

const DonateUs = () => {
  return (
    <>
      <PageHeader
        title="Sugar"
        path="/products/sugar"
        name="Sugar"
      />
      {/* Sugar Section */}
      <div className="bg-gradient-to-r from-customBlue1 to-customBlue2 text-center text-white relative">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 px-6 lg:px-12 animate__animated animate__fadeInUp animate__delay-1s">
          <HeaderTitle
            Heading={"Sugar"}
            SubHeading={
              "Our sugar offerings are sourced from the finest producers, ensuring a sweet experience for every dish. Perfect for both home kitchens and commercial use."
            }
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 animate__animated animate__fadeIn animate__delay-2s">
            <div className="bg-customBlue1 bg-opacity-10 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              <h2 className="text-xl font-bold text-[#ffcc00] mb-4">White Sugar</h2>
              <p className="text-gray-200">Pure, refined sugar ideal for baking, beverages, and a variety of culinary uses.</p>
            </div>
            <div className="bg-customBlue1 bg-opacity-10 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              <h2 className="text-xl font-bold text-[#ffcc00] mb-4">Brown Sugar</h2>
              <p className="text-gray-200">Naturally rich in molasses, this sugar adds a deeper flavor to baked goods, sauces, and marinades.</p>
            </div>
            <div className="bg-customBlue1 bg-opacity-10 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              <h2 className="text-xl font-bold text-[#ffcc00] mb-4">Organic Sugar</h2>
              <p className="text-gray-200">A natural, chemical-free option for those seeking a more sustainable sweetener.</p>
            </div>
          </div>
          <div className="flex justify-center mt-10 animate__animated animate__zoomIn animate__delay-3s">
            <button className="bg-[#ffcc00] text-white mb-4  px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-[#ff9900] transition transform hover:scale-110 duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DonateUs;
