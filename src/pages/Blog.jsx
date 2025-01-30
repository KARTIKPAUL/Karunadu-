import HeaderTitle from "../components/Common/HeaderTitle";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";

const BlogPage = () => {
  return (
    <>
      <PageHeader title="Blog" path="/blog" name="Sugar" />

      {/* Blog Section */}
      <div className="bg-gradient-to-r from-gray-700 to-gray-900 text-center text-white relative py-16">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 px-6 lg:px-12 animate__animated animate__fadeInUp animate__delay-1s">
          <HeaderTitle
            Heading={"Industry Insights & Updates"}
            SubHeading={
              "Stay up-to-date with the latest trends in agro-foods, technology in retail, and how Oltowns is transforming the industry. Our blog will keep you informed about:"
            }
          />
          
          <div className="flex justify-center mt-10 animate__animated animate__zoomIn animate__delay-3s">
            <button className="bg-[#ffcc00] text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-[#ff9900] transition transform hover:scale-110 duration-300">
              Read More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
