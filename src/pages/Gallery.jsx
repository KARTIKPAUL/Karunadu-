import HeaderTitle from "../components/Common/HeaderTitle";
import PageHeader from "../components/PageHeader";

const Gallery = () => {
  return (
    <>
      <PageHeader
        title="Whole Spices"
        path="/products/whole-spices"
        name="Whole Spices"
      />
      {/* Whole Spices Section */}
      <div className="bg-gradient-to-r from-customBlue1 to-customBlue2 text-center text-white relative">
        
        <div className="relative z-10 px-6 lg:px-12 animate__animated animate__fadeInUp animate__delay-1s">
          <HeaderTitle
            Heading={"Whole Spices"}
            SubHeading={
              "Our whole spices range brings the authentic flavors of India to your kitchen. These spices are carefully selected and preserved in their whole form, ensuring maximum flavor and potency."
            }
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-10 animate__animated animate__fadeIn animate__delay-2s">
            <div className="bg-customBlue1 bg-opacity-10 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              <h2 className="text-xl font-bold text-[#ffcc00] mb-4">Core Spices</h2>
              <ul className="space-y-2 text-gray-200">
                <li><strong>Turmeric:</strong> Known for its vibrant color and health benefits, used in curries, rice, and soups.</li>
                <li><strong>Cumin Seeds (Jeera):</strong> Adds depth and earthiness to dishes like curries, rice, and stews.</li>
                <li><strong>Cardamom:</strong> Sweet and aromatic, ideal for desserts, chai, and savory dishes.</li>
              </ul>
            </div>
            <div className="bg-customBlue1 bg-opacity-10 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              <h2 className="text-xl font-bold text-[#ffcc00] mb-4">Other Whole Spices</h2>
              <ul className="space-y-2 text-gray-200">
                <li><strong>Cloves:</strong> Strong, aromatic spice used in biryanis, curries, and chai.</li>
                <li><strong>Cinnamon Sticks:</strong> Warming and sweet, perfect for both sweet and savory dishes.</li>
                <li><strong>Black Pepper:</strong> Freshly ground or whole, adding a sharp, spicy kick.</li>
                <li><strong>Fennel Seeds:</strong> Sweet, licorice-like flavor, used in spice blends and as a digestive aid.</li>
                <li><strong>Mustard Seeds:</strong> Essential in pickles, curries, and tempering dishes.</li>
                <li><strong>Fenugreek Seeds (Methi):</strong> Used in dals, curries, and spice blends.</li>
                <li><strong>Bay Leaves:</strong> Infuses rich flavor into soups, stews, and rice dishes.</li>
                <li><strong>Asafoetida (Hing):</strong> Adds depth and umami to vegetarian dishes.</li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center mt-10 animate__animated animate__zoomIn animate__delay-3s">
            <button className="bg-[#ffcc00] text-white px-8 mb-4 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-[#ff9900] transition transform hover:scale-110 duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;