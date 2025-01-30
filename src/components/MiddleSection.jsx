import React from "react";
import "animate.css";
import OurMission from "./MiddlePart/OurMission";
import OurStory from "./MiddlePart/OurStory";
import FounderDetails from "./MiddlePart/FounderDetails";
import WhyChooseOltowns from "./MiddlePart/DifferenrWithUs";

const MiddleSection = () => {
  return (
    <>
      {/* Our Story Part */}
      <OurStory />

      {/* Our Mission & Vision Section */}
      <OurMission />

      {/* Founder Detailes */}
      <FounderDetails />

      
    </>
  );
};

export default MiddleSection;
