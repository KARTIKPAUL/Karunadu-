import HeaderTitle from "../components/Common/HeaderTitle";
import PageHeader from "../components/PageHeader";

const WhoWeAre = () => {
  return (
    <>
      <PageHeader title="Staples" path="/products/staples" name="Staples" />
      <div className="bg-customBlue1 text-center text-white relative">
        <div className="relative z-10 px-6 lg:px-12 animate__animated animate__fadeIn animate__delay-1s">
          <HeaderTitle
            Heading={"Staples"}
            SubHeading={
              "Our staples category includes the finest grains and pulses that are essential for everyday use. All products are sourced from the best mills and farmers, guaranteeing top-notch quality and nutrition."
            }
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-10 animate__animated animate__fadeIn animate__delay-2s">
            {/** Table Card Component **/}
            {staplesData.map((item, index) => (
              <div
                key={index}
                className="bg-customBlue2 bg-opacity-10 p-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-500"
              >
                <div className="mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <table className="table-auto w-full border-collapse border border-gray-500 text-white">
                  <thead>
                    <tr className="bg-gray-800">
                      <th className="border border-gray-500 px-4 py-2">{item.column1}</th>
                      <th className="border border-gray-500 px-4 py-2">{item.column2}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {item.data.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        <td className="border border-gray-500 px-4 py-2">{row.type}</td>
                        <td className="border border-gray-500 px-4 py-2">{row.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
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

const staplesData = [
  {
    title: "Rice",
    image: "https://images.pexels.com/photos/2589457/pexels-photo-2589457.jpeg?auto=compress&cs=tinysrgb&w=600",
    column1: "Rice Type",
    column2: "Description",
    data: [
      { type: "Basmati Rice", description: "Premium long-grain rice with a delicate fragrance." },
      { type: "Non-Basmati Rice", description: "Cost-effective alternative with great taste." },
      { type: "Sona Masoori Rice", description: "Medium-grain rice, soft texture and aromatic." },
      { type: "Parboiled Rice", description: "Nutrient-rich and healthier option." },
    ],
  },
  
  {
    title: "Lentils & Pulses",
    image: "https://images.pexels.com/photos/1393382/pexels-photo-1393382.jpeg?auto=compress&cs=tinysrgb&w=600",
    column1: "Pulse Type",
    column2: "Description",
    data: [
      { type: "Red Lentils (Masoor Dal)", description: "Quick-cooking, protein-rich lentil." },
      { type: "Toor Dal", description: "Essential in Indian households." },
      { type: "Moong Dal", description: "Light and nutritious for various dishes." },
      { type: "Chickpeas", description: "Great for hummus, curries, and salads." },
    ],
  },
  {
    title: "Wheat",
    image: "https://images.pexels.com/photos/39015/wheat-field-wheat-cereals-grain-39015.jpeg?auto=compress&cs=tinysrgb&w=600",
    column1: "Wheat Type",
    column2: "Description",
    data: [
      { type: "Whole Wheat Flour (Atta)", description: "Perfect for rotis and parathas." },
      { type: "Wheat Grains", description: "High-quality grains for porridge and flour." },
      { type: "Semolina (Suji)", description: "Great for halwa, upma, and other dishes." },
    ],
  },
  {
    title: "Other Grains",
    image: "https://images.pexels.com/photos/54084/wheat-grain-agriculture-seed-54084.jpeg?auto=compress&cs=tinysrgb&w=600",
    column1: "Grain Type",
    column2: "Description",
    data: [
      { type: "Oats", description: "High-fiber, great for breakfast and baking." },
      { type: "Barley", description: "Vitamin-rich for soups and stews." },
      { type: "Millet (Ragi, Bajra)", description: "Nutrient-packed for baking and porridge." },
    ],
  },
];

export default WhoWeAre;
