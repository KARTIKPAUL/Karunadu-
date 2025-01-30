import HeaderTitle from "../components/Common/HeaderTitle";
import { motion } from "framer-motion";
import PageHeader from "../components/PageHeader";

const OltownsB2B = () => {
  return (
    <>
      <PageHeader
        title="Oltowns B2B App"
        path="/technology/oltowns-b2b"
        name="OltownsB2B"
      />
      <div className="min-h-screen bg-customBlue1">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <HeaderTitle
            Heading={"Technology"}
            SubHeading={
              "Introducing the Oltowns B2B App: The Future of Retail Sourcing. A powerful, technology-driven solution that streamlines procurement, bulk orders, and deliveries with ease."
            }
          />

          <section className="rounded-lg shadow-lg lg:p-8 mb-12">
            <div className="bg-customBlue1 py-10 mx-auto lg:px-16">
              <div className="text-center mb-6">
                <h1 className="text-4xl font-bold text-[#ffcc00]">
                  Oltowns B2B App: The Future of Retail Sourcing
                </h1>
                <p className="mt-3 text-gray-100 text-lg max-w-3xl text-center mx-auto">
                  Designed for retailers, the Oltowns B2B App offers wholesale pricing, bulk ordering, and real-time tracking. Whether you run a small kirana store or a supermarket, this app enhances procurement efficiency.
                </p>
              </div>
            </div>
            
            <img
              src="https://images.pexels.com/photos/768943/pexels-photo-768943.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="B2B Retail Sourcing"
              className="w-full h-48 object-cover rounded-t-lg mb-6"
            />
            
            <h2 className="text-2xl font-semibold text-[#ffcc00] mb-4 text-center">
              Key Features of the Oltowns B2B App
            </h2>
            
            <ul className="list-none ml-0 text-gray-100 space-y-4">
              <li className="flex items-start gap-4">
                <span className="text-[#ffcc00]">✔</span>
                <p>Access wholesale pricing with exclusive bulk discounts.</p>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#ffcc00]">✔</span>
                <p>Seamless ordering with a comprehensive product catalog.</p>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#ffcc00]">✔</span>
                <p>Real-time order tracking and scheduled deliveries.</p>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#ffcc00]">✔</span>
                <p>Secure payment options including UPI, credit/debit cards, and net banking.</p>
              </li>
            </ul>
          </section>

          <section className="bg-customBlue1 text-white rounded-lg shadow-lg p-8 mb-12">
            <HeaderTitle
              Heading={"Why Choose Oltowns B2B?"}
              SubHeading={"Experience efficiency, cost savings, and technology-driven procurement all in one app."}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-customBlue2 text-gray-100 p-6 rounded-lg shadow-md hover:scale-105 transition-transform">
                <img
                  src="https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Wholesale Pricing"
                  className="w-full h-40 object-cover rounded-t-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-[#ffcc00] mb-2 text-center">
                  Wholesale Pricing
                </h3>
                <p className="text-center">Get the best rates with volume-based discounts on bulk purchases.</p>
              </div>
              
              <div className="bg-customBlue2 text-gray-100 p-6 rounded-lg shadow-md hover:scale-105 transition-transform">
                <img
                  src="https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Seamless Transactions"
                  className="w-full h-40 object-cover rounded-t-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-[#ffcc00] mb-2 text-center">
                  Seamless Transactions
                </h3>
                <p className="text-center">Place bulk orders effortlessly and manage them with ease.</p>
              </div>
              
              <div className="bg-customBlue2 text-gray-100 p-6 rounded-lg shadow-md hover:scale-105 transition-transform">
                <img
                  src="https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Real-Time Tracking"
                  className="w-full h-40 object-cover rounded-t-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-[#ffcc00] mb-2 text-center">
                  Real-Time Tracking
                </h3>
                <p className="text-center">Stay updated on your order’s progress from placement to delivery.</p>
              </div>
              
              <div className="bg-customBlue2 text-gray-100 p-6 rounded-lg shadow-md hover:scale-105 transition-transform">
                <img
                  src="https://images.pexels.com/photos/8938734/pexels-photo-8938734.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Secure Payments"
                  className="w-full h-40 object-cover rounded-t-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-[#ffcc00] mb-2 text-center">
                  Secure Payments
                </h3>
                <p className="text-center">Enjoy fast and secure transactions with multiple payment options.</p>
              </div>
            </div>
          </section>

          <section className="text-center bg-[#ffcc00] text-white rounded-lg py-8">
            <h2 className="text-2xl font-semibold mb-4">Join the Oltowns Digital Revolution</h2>
            <p className="text-white mb-6">Optimize your procurement process and scale your business with ease.</p>
            <button className="bg-white text-[#ffcc00] font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition duration-300">
              Get Started Now
            </button>
          </section>
        </div>
      </div>
    </>
  );
};

export default OltownsB2B;
