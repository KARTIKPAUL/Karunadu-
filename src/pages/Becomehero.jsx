import HeaderTitle from "../components/Common/HeaderTitle";
import PageHeader from "../components/PageHeader";
import TeamMain from "../components/Teammain";

const BecomeHero = () => {
  return (
    <>
      <PageHeader
        title="Become A Hero Member"
        path="/become-a-hero/become-a-hero-member"
        name="BecomeHero"
      />
      <div className="min-h-screen bg-customBlue1">
        <div className="max-w-7xl mx-auto px-6">
          <HeaderTitle
            Heading={"Become a Hero Member of RSJ Rural Foundation"}
            SubHeading={"At RSJ Rural Foundation, we believe in creating sustainable change that transforms the lives of people in rural communities. By becoming a Hero Member, you are stepping up to support meaningful initiatives in health, education, infrastructure, and women’s empowerment in some of the most underserved areas."}
          />

          {/* Why Become a Hero Member Section */}
          <div className="bg-customBlue2 rounded-lg shadow-lg p-8 my-10">
            <h2 className="text-2xl font-semibold text-center text-[#E35A1E] mb-6">
              Why Become a Hero Member?
            </h2>
            <ul className="space-y-4 text-gray-800">
              <li className="text-gray-100">
                <strong className="text-[#E35A1E]">Be a Catalyst for Change : </strong> As a Hero Member, your contribution directly impacts the lives of rural communities. Whether it's providing access to clean drinking water, supporting education for underprivileged children, or offering healthcare services to those in need, your membership will help create tangible, lasting improvements.
              </li>
              <li className="text-gray-100">
                <strong className="text-[#E35A1E]">Exclusive Updates: </strong> Stay connected with our projects through regular updates on how your support is making a difference. From success stories to new programs, you will always be in the know.
              </li>
              <li className="text-gray-100">
                <strong className="text-[#E35A1E]">Join a Community of Changemakers: </strong> You'll be part of a growing network of individuals committed to making the world a better place. Connect with other Hero Members, share ideas, and be inspired by the collective power of good.
              </li>
              <li className="text-gray-100">
                <strong className="text-[#E35A1E]">Tax Benefits: </strong> Contributions to RSJ Rural Foundation are eligible for tax deductions under Section 80G of the Income Tax Act, making your support both impactful and tax-efficient.
              </li>
            </ul>
          </div>

          {/* What Your Membership Supports Section */}
          {/* <div className="bg-[#E35A1E] text-white rounded-lg shadow-lg p-8 my-10">
            <h2 className="text-2xl font-semibold text-center mb-6">
              What Your Membership Supports
            </h2>
            <ul className="space-y-4">
              <li>
                <strong>Rural Healthcare:</strong> Access to essential medical care, including regular health camps, vaccination drives, and mental health programs.
              </li>
              <li>
                <strong>Quality Education:</strong> Scholarships for rural children, support for local schools, and initiatives aimed at reducing dropout rates.
              </li>
              <li>
                <strong>Women Empowerment:</strong> Training programs, self-help groups, and skill-building workshops that provide women with the tools to lead successful and independent lives.
              </li>
              <li>
                <strong>Sustainable Development:</strong> Initiatives focused on agriculture, clean water, and renewable energy, fostering self-reliance within rural communities.
              </li>
            </ul>
          </div> */}

          {/* Volunteer Sign-Up Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-center text-[#E35A1E] mb-6">
              Volunteer Sign-Up Form
            </h2>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#E35A1E] focus:ring-[#E35A1E] sm:text-sm py-2 px-2 text-gray-800"
                  placeholder="Enter your full name"
                  required
                />
              </div>

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
                  className="mt-1 block w-full rounded-md py-2 px-2 border-gray-300 shadow-sm focus:border-[#E35A1E] focus:ring-[#E35A1E] sm:text-sm text-gray-800"
                  placeholder="Enter your email"
                  required
                />
              </div>

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
                  className="mt-1 block w-full rounded-md py-2 px-2 border-gray-300 shadow-sm focus:border-[#E35A1E] focus:ring-[#E35A1E] sm:text-sm text-gray-800"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="skills"
                  className="block text-sm font-medium text-gray-700"
                >
                  Skills / Interests
                </label>
                <textarea
                  id="skills"
                  name="skills"
                  rows={4}
                  className="mt-1 block w-full rounded-md py-2 px-2 border-gray-300 shadow-sm focus:border-[#E35A1E] focus:ring-[#E35A1E] sm:text-sm text-gray-800"
                  placeholder="Tell us about your skills or areas of interest"
                ></textarea>
              </div>

              <div>
                <label
                  htmlFor="availability"
                  className="block text-sm font-medium text-gray-700"
                >
                  Availability (Days & Hours)
                </label>
                <input
                  type="text"
                  id="availability"
                  name="availability"
                  className="mt-1 block w-full rounded-md py-2 px-2 border-gray-300 shadow-sm focus:border-[#E35A1E] focus:ring-[#E35A1E] sm:text-sm text-gray-800"
                  placeholder="E.g., Weekends, 10am-5pm"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="w-full md:w-auto bg-[#E35A1E] hover:bg-[#c34f18] text-white font-medium py-2 px-6 rounded-lg shadow-md transition duration-300"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>

          {/* Contact Section */}
          <div className="text-center mt-10">
            <p className="text-gray-100 pb-5">
              Have questions? Contact us at{' '}
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

export default BecomeHero;
