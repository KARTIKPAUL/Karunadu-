import HeaderTitle from "../components/Common/HeaderTitle";
import PageHeader from "../components/PageHeader";

const DonateUs = () => {
  return (
    <>
      <PageHeader title="Sugar" path="/products/sugar" name="Sugar" />
      {/* Sugar Section */}
      <div className="bg-customBlue1 text-center text-white relative">
        <div className="relative z-10 px-6 lg:px-12 animate__animated animate__fadeIn animate__delay-1s">
          <HeaderTitle
            Heading={"Sugar"}
            SubHeading={
              "Our sugar offerings are sourced from the finest producers, ensuring a sweet experience for every dish. Perfect for both home kitchens and commercial use."
            }
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-10 animate__animated animate__fadeIn animate__delay-2s">
            {/* Core Sugar Varieties Card */}
            <div className="bg-customBlue2 bg-opacity-10 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-500">
              <div className="mb-4">
                <img
                  src={"https://images.pexels.com/photos/29326311/pexels-photo-29326311/free-photo-of-macro-shot-of-a-black-ant-on-green-plant.jpeg?auto=compress&cs=tinysrgb&w=600"}
                  alt="Core Sugar Varieties"
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
                    <td className="border border-gray-500 px-4 py-2">White Sugar</td>
                    <td className="border border-gray-500 px-4 py-2">Refined sugar ideal for baking, beverages, and a variety of culinary uses.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 px-4 py-2">Brown Sugar</td>
                    <td className="border border-gray-500 px-4 py-2">Rich in molasses, adding deeper flavor to baked goods, sauces, and marinades.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 px-4 py-2">Organic Sugar</td>
                    <td className="border border-gray-500 px-4 py-2">A chemical-free option for those seeking a sustainable sweetener.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Specialty Sugars Card */}
            <div className="bg-customBlue2 bg-opacity-10 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-500">
              <div className="mb-4">
                <img
                  src={"https://images.pexels.com/photos/4110005/pexels-photo-4110005.jpeg?auto=compress&cs=tinysrgb&w=600"}
                  alt="Specialty Sugars"
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
                    <td className="border border-gray-500 px-4 py-2">Coconut Sugar</td>
                    <td className="border border-gray-500 px-4 py-2">A natural alternative with a caramel-like taste, great for desserts and beverages.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 px-4 py-2">Raw Sugar</td>
                    <td className="border border-gray-500 px-4 py-2">Less processed sugar with a rich, natural flavor.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-500 px-4 py-2">Powdered Sugar</td>
                    <td className="border border-gray-500 px-4 py-2">Finely ground sugar, essential for icings, frostings, and confectionery.</td>
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

export default DonateUs;