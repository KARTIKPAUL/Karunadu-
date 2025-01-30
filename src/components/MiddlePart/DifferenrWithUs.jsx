import { useNavigate } from "react-router-dom";

const WhyChooseOltowns = () => {
  const navigate = useNavigate();

  const handleKnowMore = () => {
    navigate("/about");
  };

  return (
    <>
      <div className="bg-customBlue1 py-16 px-6 lg:px-12">
        <h2 className="text-4xl lg:text-6xl font-extrabold text-[#ffcc00] mb-12 text-center tracking-wider animate__animated animate__fadeIn">
          Why Choose Oltowns?
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold mb-4 text-[#2f2484] decoration-yellow-300 px-6 lg:px-0">
              Empowering Retailers & Wholesalers with Seamless Sourcing
            </h2>
            <div className="w-20 h-1 bg-green-400 rounded-full px-6 lg:px-0 mx-6 lg:mx-0"></div>
            <ul className="text-lg leading-relaxed px-6 lg:px-0 list-disc list-inside">
              <li><strong>High-Quality Products:</strong> We source staples, dry fruits, and whole spices directly from trusted suppliers and farmers.</li>
              <li><strong>Transparent & Fair Sourcing:</strong> Our direct relationships with farmers ensure quality, fair pricing, and sustainable practices.</li>
              <li><strong>Efficient Delivery System:</strong> Leveraging technology, we offer fast, reliable, and cost-effective deliveries.</li>
              <li><strong>Private Label Branding:</strong> Exclusive Oltowns-branded products provide retailers with high-quality, competitively priced goods.</li>
              <li><strong>Technology-Driven Solutions:</strong> Our B2B app streamlines sourcing, ordering, payment, and delivery management for easy procurement.</li>
            </ul>
            <div>
              <button 
                onClick={handleKnowMore}
                className="mx-6 lg:mx-0 mt-4 bg-[#ffcc00] text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-[#0084C2] transition transform hover:scale-105 animate__animated animate__fadeIn animate__delay-3s duration-300"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Images */}
          <div className="grid grid-cols-2 gap-4 mx-6">
            <img
              src="https://images.pexels.com/photos/365840/pexels-photo-365840.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Wholesale warehouse"
              className="rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            />
            <img
              src="https://images.pexels.com/photos/5231085/pexels-photo-5231085.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Retail store owner"
              className="rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            />
            <img
              src="https://images.pexels.com/photos/4939558/pexels-photo-4939558.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Logistics and delivery"
              className="col-span-2 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseOltowns;
