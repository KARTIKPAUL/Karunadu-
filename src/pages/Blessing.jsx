import HeaderTitle from "../components/Common/HeaderTitle";
import PageHeader from "../components/PageHeader";
import TeamMain from "../components/Teammain";

const Blessing = () => {
  return (
    <>
      <PageHeader title="BirthDay Blessing" path="/birthday-blessings" name="Blessing" />
      <div className="min-h-screen bg-customBlue1 py-12">
        <div className="max-w-7xl mx-auto px-6 ">
          {/* Header Section */}
          {/* <h1 className="text-4xl font-bold text-center text-[#E35A1E] mb-6">
            Birthday Blessings
          </h1>
          <p className="text-center text-gray-100 max-w-3xl mx-auto mb-10">
            Celebrate your special day by sharing blessings with those in need.
            Dedicate your birthday to supporting our mission of empowering rural
            communities. Make your day even more meaningful by giving back.
          </p> */}

              <HeaderTitle Heading={"Birthday Blessing Give the Gift of Hope"} SubHeading={"This birthday, I’m choosing to celebrate with a meaningful gesture. Instead of receiving gifts, I’m donating to the RSJ Rural Foundation to support vital causes that uplift rural communities. Your contribution can help provide healthcare, education, and empowerment to those in need."}/>

          {/* Image Section */}
          {/* <div className="text-center mb-12">
            {/* <img
              src="https://images.pexels.com/photos/2072165/pexels-photo-2072165.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Birthday Blessings"
              height={150}
              width={150}
              className="mx-auto rounded-4xl shadow-md w-full sm:w-3/4 md:w-2/3"

            /> 
          </div> */}

          {/* Dedication Form */}
          <div className="bg-gray-100 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-center text-[#E35A1E] mb-6">
              Dedicate Your Birthday
            </h2>
            <form className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 "
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-md px-3 py-2 border-gray-300 shadow-sm focus:border-[#E35A1E] focus:ring-[#E35A1E] sm:text-sm text-gray-800"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              {/* Date of Birth */}
              <div>
                <label
                  htmlFor="dob"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Birthday
                </label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  className="mt-1 block w-full rounded-md px-3 py-2 border-gray-300 shadow-sm focus:border-[#E35A1E] focus:ring-[#E35A1E] sm:text-sm text-gray-800"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md px-3 py-2 border-gray-300 shadow-sm focus:border-[#E35A1E] focus:ring-[#E35A1E] sm:text-sm text-gray-800"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Phone Field */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-1 block w-full rounded-md px-3 py-2 border-gray-300 shadow-sm focus:border-[#E35A1E] focus:ring-[#E35A1E] sm:text-sm text-gray-800"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Birthday Wish / Dedication
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md px-3 py-2 border-gray-300 shadow-sm focus:border-[#E35A1E] focus:ring-[#E35A1E] sm:text-sm text-gray-800"
                  placeholder="Share a message for the foundation or communities."
                ></textarea>
              </div>

              {/* Donation Option */}
              <div className="text-center">
                <p className="text-gray-600 mb-4">
                  Would you like to make a donation?
                </p>
                <div className="flex justify-center space-x-4">
                  <button
                    type="button"
                    className="px-6 py-2 bg-[#E35A1E] text-white rounded-lg shadow-md hover:bg-[#c34f18] transition duration-300"
                  >
                    Donate ₹500
                  </button>
                  <button
                    type="button"
                    className="px-6 py-2 bg-[#E35A1E] text-white rounded-lg shadow-md hover:bg-[#c34f18] transition duration-300"
                  >
                    Donate ₹1000
                  </button>
                  <button
                    type="button"
                    className="px-6 py-2 bg-[#E35A1E] text-white rounded-lg shadow-md hover:bg-[#c34f18] transition duration-300"
                  >
                    Donate ₹2000
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center mt-6">
                <button
                  type="submit"
                  className="w-full md:w-auto bg-[#E35A1E] hover:bg-[#c34f18] text-white font-medium py-2 px-6 rounded-lg shadow-md transition duration-300"
                >
                  Submit Dedication
                </button>
              </div>
            </form>
          </div>

          <div className="text-center mt-10">
            <p className="text-gray-100">
              Need assistance? Reach out to us at{" "}
              <a
                href="mailto:connect@rsjrdfoundation.org"
                className="text-[#E35A1E] underline hover:text-[#c34f18]"
              >
                connect@rsjrdfoundation.org
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blessing;
