import HeaderTitle from "../components/Common/HeaderTitle";
import PageHeader from "../components/PageHeader";

const TeamMain = () => {
  return (
    <>
      <PageHeader title="Dry Fruits" path="/products/dry-fruits" name="Dry Fruits" />
      <div className="bg-customBlue1 text-center text-white relative">
        <div className="relative z-10 px-6 lg:px-12 animate__animated animate__fadeIn animate__delay-1s">
          <HeaderTitle
            Heading={"Dry Fruits"}
            SubHeading={
              "Our dry fruits collection offers a premium selection of nuts and dried fruits, available in various packaging options. These products are sourced to ensure freshness, flavor, and nutritional value."
            }
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-10 animate__animated animate__fadeIn animate__delay-2s">
            {/* Core Dry Fruits Card */}
            <div className="bg-customBlue2 bg-opacity-10 p-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-500">
              <div className="mb-4">
                <img
                  src={"https://images.pexels.com/photos/4110253/pexels-photo-4110253.jpeg?auto=compress&cs=tinysrgb&w=600"}
                  alt="Core Dry Fruits"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <table className="table-auto w-full border-collapse border border-gray-500 text-white">
                <thead>
                  <tr className="bg-gray-800">
                    <th className="border border-gray-500 px-4 py-2">Type</th>
                    <th className="border border-gray-500 px-4 py-2">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-500 px-4 py-2">Almonds</td>
                    <td className="border border-gray-500 px-4 py-2">Raw, roasted, and blanched almonds, packed with healthy fats and proteins.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 px-4 py-2">Cashews</td>
                    <td className="border border-gray-500 px-4 py-2">Available in raw or roasted forms, ideal for snacking or adding to recipes.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 px-4 py-2">Raisins</td>
                    <td className="border border-gray-500 px-4 py-2">Available in black, golden, and green varieties for different tastes and uses.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Other Dry Fruits Card */}
            <div className="bg-customBlue2 bg-opacity-10 p-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-500">
              <div className="mb-4">
                <img
                  src={"https://images.pexels.com/photos/4110254/pexels-photo-4110254.jpeg?auto=compress&cs=tinysrgb&w=600"}
                  alt="Other Dry Fruits"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <table className="table-auto w-full border-collapse border border-gray-500 text-white">
                <thead>
                  <tr className="bg-gray-800">
                    <th className="border border-gray-500 px-4 py-2">Type</th>
                    <th className="border border-gray-500 px-4 py-2">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-500 px-4 py-2">Walnuts</td>
                    <td className="border border-gray-500 px-4 py-2">Rich in omega-3 fatty acids and antioxidants, great for snacking or adding to dishes.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 px-4 py-2">Pistachios</td>
                    <td className="border border-gray-500 px-4 py-2">Crunchy texture and rich flavor, perfect for snacking or cooking.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 px-4 py-2">Dates</td>
                    <td className="border border-gray-500 px-4 py-2">Naturally sweet and packed with energy, ideal for snacking or desserts.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 px-4 py-2">Apricots</td>
                    <td className="border border-gray-500 px-4 py-2">Dried apricots full of vitamins and minerals, great for healthy snacking or baking.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10 animate__animated animate__zoomIn animate__delay-3s">
            <button className="bg-[#ffcc00] text-white px-8 py-3 mb-5  rounded-full text-lg font-semibold shadow-lg hover:bg-[#ff9900] transition transform hover:scale-110 duration-300">
              Learn More
            </button>
          </div>
      </div>
    </>
  );
};

export default TeamMain;