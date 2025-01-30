import HeaderTitle from "../components/Common/HeaderTitle";
import PageHeader from "../components/PageHeader";

const WhoWeAre = () => {
  return (
    <>
      <PageHeader
        title="Staples"
        path="/products/staples"
        name="Staples"
      />
      {/* Staples Section */}
      <div className="bg-gradient-to-r from-customBlue1 to-customBlue2 text-center text-white relative">
        <div className="relative z-10 px-6 lg:px-12 animate__animated animate__fadeInUp animate__delay-1s">
          <HeaderTitle
            Heading={"Staples"}
            SubHeading={
              "Our staples category includes the finest grains and pulses that are essential for everyday use. All products are sourced from the best mills and farmers, guaranteeing top-notch quality and nutrition."
            }
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-10 animate__animated animate__fadeIn animate__delay-2s">
            <div className="bg-customBlue2 bg-opacity-10 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              <h2 className="text-xl font-bold text-[#ffcc00] mb-4">Rice</h2>
              <ul className="space-y-2 text-gray-200">
                <li><strong>Basmati Rice:</strong> Premium long-grain rice with a delicate fragrance.</li>
                <li><strong>Non-Basmati Rice:</strong> Cost-effective alternative with great taste.</li>
                <li><strong>Sona Masoori Rice:</strong> Medium-grain rice, soft texture and aromatic.</li>
                <li><strong>Parboiled Rice:</strong> Nutrient-rich and healthier option.</li>
              </ul>
            </div>
            <div className="bg-customBlue2 bg-opacity-10 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              <h2 className="text-xl font-bold text-[#ffcc00] mb-4">Wheat</h2>
              <ul className="space-y-2 text-gray-200">
                <li><strong>Whole Wheat Flour (Atta):</strong> Perfect for rotis and parathas.</li>
                <li><strong>Wheat Grains:</strong> High-quality grains for porridge and flour.</li>
                <li><strong>Semolina (Suji):</strong> Great for halwa, upma, and other dishes.</li>
              </ul>
            </div>
            <div className="bg-customBlue2 bg-opacity-10 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              <h2 className="text-xl font-bold text-[#ffcc00] mb-4">Lentils & Pulses</h2>
              <ul className="space-y-2 text-gray-200">
                <li><strong>Red Lentils (Masoor Dal):</strong> Quick-cooking, protein-rich lentil.</li>
                <li><strong>Toor Dal:</strong> Essential in Indian households.</li>
                <li><strong>Moong Dal:</strong> Light and nutritious for various dishes.</li>
                <li><strong>Chickpeas:</strong> Great for hummus, curries, and salads.</li>
              </ul>
            </div>
            <div className="bg-customBlue2 bg-opacity-10 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              <h2 className="text-xl font-bold text-[#ffcc00] mb-4">Other Grains</h2>
              <ul className="space-y-2 text-gray-200">
                <li><strong>Oats:</strong> High-fiber, great for breakfast and baking.</li>
                <li><strong>Barley:</strong> Vitamin-rich for soups and stews.</li>
                <li><strong>Millet (Ragi, Bajra):</strong> Nutrient-packed for baking and porridge.</li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center mt-10 animate__animated animate__zoomIn animate__delay-3s">
            <button className="bg-[#ffcc00] text-white px-8 py-3 mb-4 rounded-full text-lg font-semibold shadow-lg hover:bg-[#ff9900] transition transform hover:scale-110 duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;
