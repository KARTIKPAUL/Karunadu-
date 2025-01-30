import HeaderTitle from "../components/Common/HeaderTitle";
import PageHeader from "../components/PageHeader";

const RuralDevelopment = () => {
  return (
    <>
      <PageHeader
        title="Rural Development"
        path="/what-we-do/rural-development"
        name="RuralDevelopment"
      />
      {/* Key Initiatives Section */}
      <div className=" bg-customBlue1 text-center relative overflow-hidden min-h-screen flex items-center">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-customBlue1 to-customBlue2 opacity-40"></div>

        {/* Content */}
        <div className="relative z-10 w-full">
          {/* <h2 className="text-4xl lg:text-6xl font-extrabold text-[#E35A1E] mb-12 tracking-wider animate__animated animate__fadeIn">
            Our Key Initiatives
          </h2> */}

          
          <HeaderTitle Heading={"Rural Development: A Path to Transformation"} SubHeading={"At RSJ Rural Development Foundation, we believe that rural development is the cornerstone of a thriving society. By addressing the unique challenges faced by rural communities, we empower individuals to break the cycle of poverty and build a brighter future. Our initiatives in education, livelihood enhancement, and sustainable practices aim to unlock the true potential of rural areas. With your support, we can continue to transform lives, one village at a time. Donate Us to be a part of this impactful journey."}/>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 lg:px-12 my-20">
            {/* (1,1) Rural Development Text */}

            <div className="md:hidden flex justify-center">
              <img
                src="https://images.pexels.com/photos/95687/pexels-photo-95687.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Rural Development"
                className="rounded-lg shadow-lg w-3/4 h-auto object-cover transform transition duration-500 scale-105 hover:shadow-2xl"
              />
            </div>

            <div className="flex flex-col text-left justify-center text-white px-8 lg:px-16 py-8">
              <h3 className="text-3xl font-bold mb-4  text-[#0084C2]  decoration-yellow-300">
                Rural Development
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
                src="https://images.pexels.com/photos/95687/pexels-photo-95687.jpeg?auto=compress&cs=tinysrgb&w=600"
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
                Women Empowerment
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

export default RuralDevelopment;
