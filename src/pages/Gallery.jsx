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
      <div className="bg-customBlue1 text-center text-white relative">
        <div className="relative z-10 px-6 lg:px-12 animate__animated animate__fadeIn animate__delay-1s">
          <HeaderTitle
            Heading={"Whole Spices"}
            SubHeading={
              "Our whole spices range brings the authentic flavors of India to your kitchen. These spices are carefully selected and preserved in their whole form, ensuring maximum flavor and potency."
            }
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-10 animate__animated animate__fadeIn animate__delay-2s">
            {/* Core Spices Card */}
            <div className="bg-customBlue2 bg-opacity-10 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-500">
              <div className="mb-4">
                <img
                  src={
                    "https://images.pexels.com/photos/678414/pexels-photo-678414.jpeg?auto=compress&cs=tinysrgb&w=600"
                  }
                  alt="Core Spices"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <table className="table-auto w-full border-collapse border border-gray-500 text-white">
                <thead>
                  <tr className="bg-gray-800">
                    <th className="border border-gray-500 px-4 py-2">Spice</th>
                    <th className="border border-gray-500 px-4 py-2">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-500 px-4 py-2">Turmeric</td>
                    <td className="border border-gray-500 px-4 py-2">Vibrant color and health benefits.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 px-4 py-2">Cumin Seeds</td>
                    <td className="border border-gray-500 px-4 py-2">Adds depth and earthiness to dishes.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 px-4 py-2">Cardamom</td>
                    <td className="border border-gray-500 px-4 py-2">Aromatic, ideal for desserts and chai.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Other Whole Spices Card */}
            <div className="bg-customBlue2 bg-opacity-10 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-500">
              <div className="mb-4">
                <img
                  src={
                    "https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg?auto=compress&cs=tinysrgb&w=600"
                  }
                  alt="Other Whole Spices"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <table className="table-auto w-full border-collapse border border-gray-500 text-white">
                <thead>
                  <tr className="bg-gray-800">
                    <th className="border border-gray-500 px-4 py-2">Spice</th>
                    <th className="border border-gray-500 px-4 py-2">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-500 px-4 py-2">Cloves</td>
                    <td className="border border-gray-500 px-4 py-2">Used in biryanis, curries, and chai.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 px-4 py-2">Cinnamon Sticks</td>
                    <td className="border border-gray-500 px-4 py-2">Perfect for sweet and savory dishes.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 px-4 py-2">Black Pepper</td>
                    <td className="border border-gray-500 px-4 py-2">Adds a sharp, spicy kick.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex justify-center mt-10 animate__animated animate__zoomIn animate__delay-3s">
            <button className="bg-[#ffcc00] text-white px-8 py-3 mb-5  rounded-full text-lg font-semibold shadow-lg hover:bg-[#ff9900] transition transform hover:scale-110 duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
