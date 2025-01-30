import React, { useState, useEffect } from "react";
import sudhaar from "../assets/Initiatives/Sudhaar.png";
import gyaan from "../assets/Initiatives/Gyaan.png";
import nirmaan from "../assets/Initiatives/Nirmaan.png";
import gogreen from "../assets/Initiatives/Go-Green.png";
import muskaan from "../assets/Initiatives/Muskaan.png";
import DonationForm from "./DonationForm";
import BannerOne from "../assets/Initiatives/BannerOne.jpg"
import BannerTwo from "../assets/Initiatives/BannerTwo.jpg"
import BannerThree from "../assets/Initiatives/BannerThree.jpg"

const Initiatives = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { id: 1, image: "https://images.pexels.com/photos/14035818/pexels-photo-14035818.jpeg?auto=compress&cs=tinysrgb&w=600", link: "https://youtube.com" },
    { id: 2, image: "https://images.pexels.com/photos/12256804/pexels-photo-12256804.jpeg?auto=compress&cs=tinysrgb&w=600", link: "https://youtube.com" },
    { id: 3, image: "https://images.pexels.com/photos/1153655/pexels-photo-1153655.jpeg?auto=compress&cs=tinysrgb&w=600", link: "https://youtube.com" },
    // { id: 4, image: gogreen, link: "https://youtube.com" },
    // { id: 5, image: muskaan, link: "https://youtube.com" },
  ];

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  // Automatically change slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 2000); // 5000ms = 5 seconds
    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);

  return (
    <>
      <div className="bg-gradient-to-r from-customBlue1 to-customBlue2 text-center py-5">
        <h1 className="text-[#ffcc00] text-4xl md:text-5xl font-bold mb-6">
          OUR <span className="text-white">INITIATIVES</span>
        </h1>

        {/* Carousel */}
        <div className="relative w-full max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={slide.id} className="min-w-full flex justify-center">
                  <img
                    src={slide.image}
                    alt={`Slide ${index + 1}`}
                    className="cursor-pointer hover:scale-100 transition-transform rounded-lg"
                    onClick={() => window.open(slide.link, "_blank")}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots for navigation */}
        <div className="mt-2 flex justify-center space-x-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-[#ffcc00]" : "bg-gray-400"
              } cursor-pointer`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Initiatives;
