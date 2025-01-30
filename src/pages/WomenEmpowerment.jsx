import HeaderTitle from "../components/Common/HeaderTitle";
import PageHeader from "../components/PageHeader";
import { FcDonate } from "react-icons/fc";
const WomenEmpowerMent = () => {
  return (
    <>
      <PageHeader
        title="Women EmpowerMent"
        path="/what-we-do/women-empowerment"
        name="WomenEmpowerMent"
      />
      <div className=" bg-customBlue1 text-center relative overflow-hidden min-h-screen flex items-center">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-customBlue1 to-customBlue2 opacity-40"></div>

        {/* Content */}
        <div className="relative z-10 w-full">
          {/* <h2 className="text-4xl lg:text-6xl font-extrabold text-[#E35A1E] mb-12 tracking-wider animate__animated animate__fadeIn">
            Our Key Initiatives
          </h2> */}

          <HeaderTitle
            Heading={"Women Empowerment Inspiring Change and Building Leaders"}
            SubHeading={
              "Empowering women is at the heart of our mission. At RSJ Rural Development Foundation, we strive to create opportunities for women to lead, earn, and inspire. Through skill development programs, entrepreneurial training, and awareness campaigns, we help women in rural areas realize their potential and take charge of their futures. By supporting women, we uplift families, strengthen communities, and pave the way for a more inclusive society."
            }
          />
          <h2 className="text-[#E35A1E] text-center text-2xl font-semibold leading-relaxed">
            <span className="flex justify-center items-center gap-2">
              <FcDonate className="text-3xl" />
              <span>Donate Us</span>
            </span>
            <span className="block mt-2 text-lg text-gray-100">
              Champion the cause of{" "}
              <span className="font-bold text-[#E35A1E]">
                women empowerment
              </span>{" "}
              <span className="text-gray-100">and become a vital part of creating lasting, meaningful change.</span>
            </span>
          </h2>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 lg:px-12 my-20">
            {/* (1,1) Rural Development Text */}

            <div className="md:hidden flex justify-center">
              <img
                src="https://images.pexels.com/photos/20356777/pexels-photo-20356777/free-photo-of-farmers-in-india.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Rural Development"
                className="rounded-lg shadow-lg w-3/4 h-auto object-cover transform transition duration-500 scale-105 hover:shadow-2xl"
              />
            </div>

            <div className="flex flex-col text-left justify-center text-white px-8 lg:px-16 py-8">
              <h3 className="text-3xl font-bold mb-4  text-[#0084C2]  decoration-yellow-300">
                Women Empowerment
              </h3>
              <p className="text-lg leading-relaxed">
                We focus on transforming rural areas by building better
                infrastructure, enhancing agricultural practices, providing
                access to quality education, and ensuring health and sanitation
                improvements. Our goal is to empower rural communities with
                sustainable resources and opportunities.
              </p>
              <div className="">
                <button className="mt-4 bg-[#E35A1E] text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-[#0084C2] transition transform hover:scale-105 animate__animated animate__fadeIn animate__delay-3s duration-300">
                  Learn More
                </button>
              </div>
            </div>

            {/* (1,2) Rural Development Image */}
            <div className="hidden md:flex justify-center">
              <img
                src="https://images.pexels.com/photos/20356777/pexels-photo-20356777/free-photo-of-farmers-in-india.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Rural Development"
                className="rounded-lg shadow-lg w-3/4 h-auto object-cover transform transition duration-500 scale-105 hover:shadow-2xl"
              />
            </div>

            {/* (2,1) Women Empowerment Image */}
            <div className="flex justify-center">
              <img
                src="https://images.pexels.com/photos/13270287/pexels-photo-13270287.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Women Empowerment"
                className="rounded-lg shadow-lg w-3/4 h-auto object-cover transform transition duration-500 scale-105 hover:shadow-2xl"
              />
            </div>

            {/* (2,2) Women Empowerment Text */}
            <div className="flex flex-col text-left justify-center text-white px-8 lg:px-16 py-8">
              <h3 className="text-3xl font-bold mb-4 text-[#0084C2]  decoration-yellow-300">
                Rural Development
              </h3>
              <p className="text-lg leading-relaxed">
                Our programs empower women with skills, knowledge, and resources
                to become leaders and entrepreneurs. We aim to promote gender
                equality and create opportunities for women to drive meaningful
                change in their communities.
              </p>
              <div className="">
                <button className="mt-4 bg-[#E35A1E] text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-[#0084C2] transition transform hover:scale-105 animate__animated animate__fadeIn animate__delay-3s duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Action Button */}
          {/* <div className="mt-12 space-x-6 flex justify-center animate__animated animate__fadeIn">
            <button
              onClick={handleKnowMore}
              className="bg-[#E35A1E] text-white px-10 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-[#0084C2] transition transform hover:scale-105"
            >
              Read More
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default WomenEmpowerMent;
