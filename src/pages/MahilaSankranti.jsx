// import PageHeader from "../components/PageHeader";
// const MahilaSankranti = () => {
//   return (
//     <>
//       <PageHeader
//         title="MahilaSankranti"
//         path="/our-program/mahila-sankranti"
//         name="MahilaSankranti"
//       />
//       <div className="py-16 bg-black text-center relative overflow-hidden min-h-screen flex items-center">
//         {/* Background Effects */}
//         <div className="absolute inset-0 bg-gradient-to-r from-customBlue1 to-customBlue2 opacity-40"></div>

//         {/* Content */}
//         <div className="relative z-10 w-full">
//           <h2 className="text-4xl lg:text-6xl font-extrabold text-[#E35A1E] mb-12 tracking-wider animate__animated animate__fadeIn">
//             Our Mahila Sasakti Program
//           </h2>

//           {/* Grid Layout */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 lg:px-12 my-20">
//             {/* (1,1) Rural Development Text */}

//             <div className="md:hidden flex justify-center">
//               <img
//                 src="https://images.pexels.com/photos/20356777/pexels-photo-20356777/free-photo-of-farmers-in-india.jpeg?auto=compress&cs=tinysrgb&w=600"
//                 alt="Rural Development"
//                 className="rounded-lg shadow-lg w-3/4 h-auto object-cover transform transition duration-500 scale-105 hover:shadow-2xl"
//               />
//             </div>

//             <div className="flex flex-col text-left justify-center text-white px-8 lg:px-16 py-8">
//               <h3 className="text-3xl font-bold mb-4  text-[#0084C2]  decoration-yellow-300">
//                 Women Empowerment
//               </h3>
//               <p className="text-lg leading-relaxed">
//                 We focus on transforming rural areas by building better
//                 infrastructure, enhancing agricultural practices, providing
//                 access to quality education, and ensuring health and sanitation
//                 improvements. Our goal is to empower rural communities with
//                 sustainable resources and opportunities.
//               </p>
//               <button className="bg-[#E35A1E] mt-5 text-white px-4 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-[#0084C2] transition transform hover:scale-105 duration-300">
//                 know More
//               </button>
//             </div>

//             {/* (1,2) Rural Development Image */}
//             <div className="hidden md:flex justify-center">
//               <img
//                 src="https://images.pexels.com/photos/20356777/pexels-photo-20356777/free-photo-of-farmers-in-india.jpeg?auto=compress&cs=tinysrgb&w=600"
//                 alt="Rural Development"
//                 className="rounded-lg shadow-lg w-3/4 h-auto object-cover transform transition duration-500 scale-105 hover:shadow-2xl"
//               />
//             </div>

//             {/* (2,1) Women Empowerment Image */}
//             <div className="flex justify-center">
//               <img
//                 src="https://images.pexels.com/photos/13270287/pexels-photo-13270287.jpeg?auto=compress&cs=tinysrgb&w=600"
//                 alt="Women Empowerment"
//                 className="rounded-lg shadow-lg w-3/4 h-auto object-cover transform transition duration-500 scale-105 hover:shadow-2xl"
//               />
//             </div>

//             {/* (2,2) Women Empowerment Text */}
//             <div className="flex flex-col text-left justify-center text-white px-8 lg:px-16 py-8">
//               <h3 className="text-3xl font-bold mb-4 text-[#E35A1E]  decoration-yellow-300">
//                 Rural Development
//               </h3>
//               <p className="text-lg leading-relaxed">
//                 Our programs empower women with skills, knowledge, and resources
//                 to become leaders and entrepreneurs. We aim to promote gender
//                 equality and create opportunities for women to drive meaningful
//                 change in their communities.
//               </p>
//               <button className="bg-[#0084C2] mt-5 text-white px-4 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-[#E35A1E] transition transform hover:scale-105">
//                 know More
//               </button>
//             </div>
//           </div>

//           {/* Action Button */}
//           {/* <div className="mt-12 space-x-6 flex justify-center animate__animated animate__fadeIn">
//             <button
//               onClick={handleKnowMore}
//               className="bg-[#E35A1E] text-white px-10 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-[#0084C2] transition transform hover:scale-105"
//             >
//               Read More
//             </button>
//           </div> */}
//         </div>
//       </div>
//     </>
//   );
// };

// export default MahilaSankranti;






import HeaderTitle from "../components/Common/HeaderTitle";
import PageHeader from "../components/PageHeader";

const MahilaSankranti = () => {
  return (
    <>
      <PageHeader
        title="Mahila Sasaktikaran"
        path="/our-program/mahila-sankranti"
        name="Mahila Sankranti"
      />
      <div className="bg-customBlue1 text-center relative overflow-hidden min-h-screen flex items-center">
        
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-customBlue1 to-customBlue2 opacity-40"></div>
        

        {/* Content */}
        <div className="relative z-10 w-full">
        <HeaderTitle Heading={"Our Mahila Sasakti Program"} SubHeading={"At RSJ Rural Foundation, we are committed to empowering women in rural communities through our Mahila Sasakti Karan program. By providing skills training, financial literacy, and leadership opportunities, we help women gain independence, build confidence, and become active contributors to their families and communities."}/>
          

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 lg:px-12 my-20">
            {/* Rural Development */}
            <div className="md:hidden flex justify-center">
              <img
                src="https://images.pexels.com/photos/20356777/pexels-photo-20356777/free-photo-of-farmers-in-india.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Rural Development"
                className="rounded-lg shadow-lg w-3/4 h-auto object-cover transform transition duration-500 scale-105 hover:shadow-2xl"
              />
            </div>

            <div className="flex flex-col text-left justify-center text-white px-8 lg:px-16 py-8">
              <h3 className="text-3xl font-bold mb-4 text-[#0084C2] decoration-yellow-300">
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

            <div className="hidden md:flex justify-center">
              <img
                src="https://images.pexels.com/photos/20356777/pexels-photo-20356777/free-photo-of-farmers-in-india.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Rural Development"
                className="rounded-lg shadow-lg w-3/4 h-auto object-cover transform transition duration-500 scale-105 hover:shadow-2xl"
              />
            </div>

            {/* Women Empowerment */}
            <div className="flex justify-center">
              <img
                src="https://images.pexels.com/photos/13270287/pexels-photo-13270287.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Women Empowerment"
                className="rounded-lg shadow-lg w-3/4 h-auto object-cover transform transition duration-500 scale-105 hover:shadow-2xl"
              />
            </div>

            <div className="flex flex-col text-left justify-center text-white px-8 lg:px-16 py-8">
              <h3 className="text-3xl font-bold mb-4 text-[#0084C2] decoration-yellow-300">
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

          {/* Additional Content */}
          <div className="bg-customBlue1 text-gray-800 py-16 px-8 lg:px-24">
            {/* <h3 className="text-3xl font-bold text-center mb-10 text-[#0084C2]">
              Key Focus Areas of Women Empowerment
            </h3> */}

          <HeaderTitle Heading={"Key Focus Areas of Women Empowerment"} SubHeading={"Our Key focus to development a sustanable growth for sociaty and empower the rural Comminity and also women empowemwnt also."}/>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Economic Empowerment */}
              <div className="text-center">
                <img
                  src="https://images.pexels.com/photos/27722046/pexels-photo-27722046/free-photo-of-farmers-in-india.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Economic Empowerment"
                  className="rounded-lg mb-6 h-40 w-full object-cover"
                />
                <h4 className="text-xl font-semibold text-[#E35A1E] mb-4">
                  Economic Empowerment
                </h4>
                <p className="text-gray-100">
                  Providing financial literacy training, facilitating access to
                  micro-loans, and supporting women-led entrepreneurial
                  initiatives to foster independence and self-reliance.
                </p>
              </div>

              {/* Health & Well-Being */}
              <div className="text-center">
                <img
                  src="https://images.pexels.com/photos/12583291/pexels-photo-12583291.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Health & Well-Being"
                  className="rounded-lg mb-6 h-40 w-full object-cover"
                />
                <h4 className="text-xl font-semibold text-[#E35A1E] mb-4">
                  Health & Well-Being
                </h4>
                <p className="text-gray-100">
                  Initiatives to improve women's health, including workshops on
                  nutrition, sanitation, maternal care, and access to essential
                  healthcare services.
                </p>
              </div>

              {/* Education & Skills */}
              <div className="text-center">
                <img
                  src="https://images.pexels.com/photos/5776658/pexels-photo-5776658.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Education & Skills"
                  className="rounded-lg mb-6 h-40 w-full object-cover"
                />
                <h4 className="text-xl font-semibold text-[#E35A1E] mb-4">
                  Education & Skills
                </h4>
                <p className="text-gray-100">
                  Programs focused on vocational training, digital literacy,
                  and providing access to education for young girls and women.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-white text-center mt-12">
            <h4 className="text-3xl font-bold mb-6 text-[#0084C2]">
              Join Us in Empowering Women Across Rural India
            </h4>
            <button className="bg-[#E35A1E] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#0084C2] transition transform hover:scale-105">
              Get Involved
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MahilaSankranti;

