import { useNavigate } from "react-router-dom";

const EmpoweringComminity = () => {
    const navigate = useNavigate();
    
      const handleKnowMore = () => {
        navigate("/about");
      };
  return (
    <>
      <div className=" bg-gradient-to-r from-customBlue1 to-customBlue2 py-5 flex items-center justify-center text-center text-white relative px-10">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 bg-cover bg-center opacity-40"></div>

        {/* Content  */}
        <div className="relative z-10 bg-opacity-70 px-6 lg:px-12 py-10 rounded-lg">
          {/* Main Heading */}
          <h2 className="text-4xl lg:text-6xl font-extrabold text-[#E35A1E] mb-12 text-center tracking-wider animate__animated animate__fadeIn">
          Empowering Community
        </h2>

          {/* Subtitle */}
          <p className="text-lg lg:text-2xl italic mb-1 text-left">
            At{" "}
            <span className="text-[#E35A1E]">
              RSJ Rural Development Foundation
            </span>
            , we are dedicated to empowering rural communities and women by fostering sustainable development 
            and driving positive societal change. Our mission is to equip individuals with the tools, resources, 
            and support necessary to create opportunities for growth, education, and self-reliance.
            
          </p>

          {/* <div class="hidden md:flex flex-wrap gap-6 justify-center px-10 py-8"> */}

          <div class="hidden lg:grid lg:grid-cols-4 gap-6 px-10 py-8">
            <div class="bg-green-100 flex items-center justify-center w-72 h-32 rounded-3xl shadow-md px-6">
              <div class="w-16 h-16 flex items-center justify-center bg-[#0084C2] text-white rounded-full">
                <i class="fas fa-female text-3xl"></i>
              </div>
              <div class="ml-6">
                <div class="text-3xl font-bold text-[#E35A1E]">5.8M+</div>
                <div class="text-xl font-semibold text-[#0084C2] text-left">
                  Empowered
                </div>
              </div>
            </div>

            <div class="bg-green-100 flex items-center justify-center w-72 h-32 rounded-3xl shadow-md px-6">
              <div class="w-16 h-16 flex items-center justify-center bg-[#0084C2] text-white rounded-full">
                <i class="fas fa-home text-3xl"></i>
              </div>
              <div class="ml-6">
                <div class="text-3xl font-bold text-[#E35A1E]">4.6M+</div>
                <div class="text-xl font-semibold text-[#0084C2] text-left">
                  Villages
                </div>
              </div>
            </div>

            <div class="bg-green-100 flex items-center justify-center w-72 h-32 rounded-3xl shadow-md px-6">
              <div class="w-16 h-16 flex items-center justify-center bg-[#0084C2] text-white rounded-full">
                <i class="fas fa-child text-3xl"></i>
              </div>
              <div class="ml-6">
                <div class="text-3xl font-bold text-[#E35A1E]">142+</div>
                <div class="text-xl font-semibold text-[#0084C2] text-left">
                  Children
                </div>
              </div>
            </div>

            <div class="bg-green-100 flex items-center justify-center w-72 h-32 rounded-3xl shadow-md px-6">
              <div class="w-16 h-16 flex items-center justify-center bg-[#0084C2] text-white rounded-full">
                <i class="fas fa-users text-3xl"></i>
              </div>
              <div class="ml-6">
                <div class="text-3xl font-bold text-[#E35A1E]">50+</div>
                <div class="text-xl font-semibold text-[#0084C2] text-left">
                  Families
                </div>
              </div>
            </div>
          </div>

          <div class="hidden md:grid md:grid-cols-2 lg:hidden py-8 gap-6 px-10">
            <div class="ml-5 bg-green-100 flex items-center justify-center w-72 h-32 rounded-3xl shadow-md px-6">
              <div class="w-16 h-16 flex items-center justify-center bg-[#0084C2] text-white rounded-full">
                <i class="fas fa-female text-3xl"></i>
              </div>
              <div class="ml-6">
                <div class="text-3xl font-bold text-[#E35A1E]">5.8M+</div>
                <div class="text-xl font-semibold text-[#0084C2] text-left">
                  Empowered
                </div>
              </div>
            </div>

            <div class="bg-green-100 flex items-center justify-center w-72 h-32 rounded-3xl shadow-md px-6">
              <div class="w-16 h-16 flex items-center justify-center bg-[#0084C2] text-white rounded-full">
                <i class="fas fa-home text-3xl"></i>
              </div>
              <div class="ml-6">
                <div class="text-3xl font-bold text-[#E35A1E]">4.6M+</div>
                <div class="text-xl font-semibold text-[#0084C2] text-left">
                  Villages
                </div>
              </div>
            </div>

            <div class="ml-5 bg-green-100 flex items-center justify-center w-72 h-32 rounded-3xl shadow-md px-6">
              <div class="w-16 h-16 flex items-center justify-center bg-[#0084C2] text-white rounded-full">
                <i class="fas fa-child text-3xl"></i>
              </div>
              <div class="ml-6">
                <div class="text-3xl font-bold text-[#E35A1E]">142+</div>
                <div class="text-xl font-semibold text-[#0084C2] text-left">
                  Children
                </div>
              </div>
            </div>

            <div class="bg-green-100 flex items-center justify-center w-72 h-32 rounded-3xl shadow-md px-6">
              <div class="w-16 h-16 flex items-center justify-center bg-[#0084C2] text-white rounded-full">
                <i class="fas fa-users text-3xl"></i>
              </div>
              <div class="ml-6">
                <div class="text-3xl font-bold text-[#E35A1E]">50+</div>
                <div class="text-xl font-semibold text-[#0084C2] text-left">
                  Families
                </div>
              </div>
            </div>
          </div>

          {/* </div> */}

          {/* For Mobile */}

          <div className="md:hidden flex gap-4 mt-5">
            <div class="bg-green-100 flex flex-col items-center justify-center w-32 h-40 rounded-xl shadow-md">
              <div class="w-14 h-14 flex items-center justify-center bg-[#0084C2] text-white rounded-full my-3">
                <i class="fas fa-female text-2xl"></i>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-[#E35A1E]">5.8M+</div>
                <div class="text-base font-semibold text-[#0084C2]">
                  Empowered
                </div>
              </div>
            </div>

            <div class="bg-green-100 flex flex-col items-center justify-center w-32 h-40 rounded-xl shadow-md">
              <div class="w-14 h-14 flex items-center justify-center bg-[#0084C2] text-white rounded-full my-3">
                <i class="fas fa-home text-2xl"></i>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-[#E35A1E]">4.6M+</div>
                <div class="text-base font-semibold text-[#0084C2]">
                  Villages
                </div>
              </div>
            </div>
          </div>

          <div className="md:hidden flex gap-4 mt-5">
            <div class="bg-green-100 flex flex-col items-center justify-center w-32 h-40 rounded-xl shadow-md">
              <div class="w-14 h-14 flex items-center justify-center bg-[#0084C2] text-white rounded-full my-3">
                <i class="fas fa-child text-2xl"></i>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-[#E35A1E]">142+</div>
                <div class="text-base font-semibold text-[#0084C2]">
                  Children
                </div>
              </div>
            </div>

            <div class="bg-green-100 flex flex-col items-center justify-center w-32 h-40 rounded-xl shadow-md">
              <div class="w-14 h-14 flex items-center justify-center bg-[#0084C2] text-white rounded-full my-3">
                <i class="fas fa-users text-2xl"></i>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-[#E35A1E]">50+</div>
                <div class="text-base font-semibold text-[#0084C2]">
                  Families
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-12 space-x-6 flex justify-center animate__animated animate__fadeIn animate__delay-3s">
            {/* Know More Button */}
            <button
              onClick={handleKnowMore}
              className="bg-[#E35A1E] text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-[#0084C2] transition transform hover:scale-105 duration-300"
            >
              Know More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmpoweringComminity;
