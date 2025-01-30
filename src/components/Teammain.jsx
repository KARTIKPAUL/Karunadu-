import HeaderTitle from "../components/Common/HeaderTitle";
import PageHeader from "../components/PageHeader";

const TeamMain = () => {
  return (
    <>
      {/* <PageHeader
        title="Dry Fruits"
        path="/products/dry-fruits"
        name="Dry Fruits"
      /> */}
      {/* Dry Fruits Section */}
      <div className="bg-gradient-to-r from-customBlue1 to-customBlue2 text-center text-white relative">
       
        <div className="relative z-10 px-6 lg:px-12 animate__animated animate__fadeInUp animate__delay-1s">
          <HeaderTitle
            Heading={"Dry Fruits"}
            SubHeading={
              "Our dry fruits collection offers a premium selection of nuts and dried fruits, available in various packaging options. These products are sourced to ensure freshness, flavor, and nutritional value."
            }
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-10 animate__animated animate__fadeIn animate__delay-2s">
            <div className="bg-customBlue2 bg-opacity-10 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              <h2 className="text-xl font-bold text-[#ffcc00] mb-4">Core Dry Fruits</h2>
              <ul className="space-y-2 text-gray-200">
                <li><strong>Almonds:</strong> Raw, roasted, and blanched almonds, packed with healthy fats and proteins.</li>
                <li><strong>Cashews:</strong> Available in raw or roasted forms, ideal for snacking or adding to recipes.</li>
                <li><strong>Raisins:</strong> Available in black, golden, and green varieties for different tastes and uses.</li>
              </ul>
            </div>
            <div className="bg-customBlue2 bg-opacity-10 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              <h2 className="text-xl font-bold text-[#ffcc00] mb-4">Other Dry Fruits</h2>
              <ul className="space-y-2 text-gray-200">
                <li><strong>Walnuts:</strong> Rich in omega-3 fatty acids and antioxidants, great for snacking or adding to dishes.</li>
                <li><strong>Pistachios:</strong> Crunchy texture and rich flavor, perfect for snacking or cooking.</li>
                <li><strong>Dates:</strong> Naturally sweet and packed with energy, ideal for snacking or desserts.</li>
                <li><strong>Apricots:</strong> Dried apricots full of vitamins and minerals, great for healthy snacking or baking.</li>
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

export default TeamMain;
