import { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/vajjiramLogo.jpg";
import {FaUserTie} from "react-icons/fa";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownTimeoutRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  const handleDropdownOpen = (dropdownName) => {
    clearTimeout(dropdownTimeoutRef.current);
    setOpenDropdown(dropdownName);
  };

  const handleDropdownClose = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
  };

  const handleDropdownClick = (e, dropdownName) => {
    //e.stopPropagation(); // Prevent event propagation
    if (openDropdown === dropdownName) {
      setOpenDropdown(null); // Close the dropdown if it's already open
    } else {
      setOpenDropdown(dropdownName); // Open the dropdown if it's closed
    }
    //setOpenDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".dropdown")) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpenPagesDesktop, setDropdownOpenPagesDesktop] = useState(false);
  const [dropdownOpenPagesMobile, setDropdownOpenPagesMobile] = useState(false);
  const desktopDropdownRef = useRef(null);
  const mobileDropdownRef = useRef(null);
  const timerRef = useRef(null);
  const [auth, setAuth] = useState("");

  const [dropdownState, setDropdownState] = useState({
    aboutUs: false,
    whatWeDo: false,
    howCanYouHelp: false,
    ourProgram: false,
  });

  const toggleDropdown = (dropdownName) => {
    setDropdownState((prevState) => ({
      ...prevState,
      [dropdownName]: !prevState[dropdownName],
    }));
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        !desktopDropdownRef.current ||
        !desktopDropdownRef.current.contains(event.target)
      ) {
        setDropdownState({
          aboutUs: false,
          whatWeDo: false,
          howCanYouHelp: false,
          ourProgram: false,
        });
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  useEffect(() => {
    const isAdmin = localStorage.getItem("ADMIN_NGO");
    const isUser = localStorage.getItem("NGO");
    if (isAdmin) {
      setAuth("ADMIN");
    } else if (isUser) {
      setAuth("USER");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });

    const topBar = document.querySelector(".top-bar");

    function toggleStickyNavbar() {
      if (window.scrollY > topBar.offsetHeight) {
      } else {
      }
    }

    window.addEventListener("scroll", toggleStickyNavbar);
    return () => window.removeEventListener("scroll", toggleStickyNavbar);
  }, []);

  return (
    <>
      {/* Top Bar For Nav  */}
      <div className="top-bar bg-opacity-50 bg-black text-white border-b border-gray-300 fixed w-full z-30 hidden sm:block">
        <div className="container mx-auto flex flex-wrap justify-between items-center px-4 py-2">
          {/* Left Section */}
          <div className="flex flex-wrap items-center space-x-4 text-sm sm:text-base">
            {/* <Link to="/admin" className="text-[#ffcc00] text-xl">
              <i className="fa fa-user-tie"></i>
            </Link> */}
            <div className="flex items-center space-x-2">
              <i className="fa fa-phone text-[#ffcc00]"></i>
              <a
                href="tel:+91-1234567890"
                className="text-white hover:text-[#2f2484]"
              >
                +91-1234567890
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fa fa-envelope text-[#ffcc00]"></i>
              <a
                href="mailto:vajjiram@gmail.com"
                className="text-white hover:text-[#2f2484]"
              >
                vajjiram@gmail.com
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-wrap items-center space-x-4 text-sm sm:text-base mt-2 sm:mt-0">
            {/* <a
              href="https://x.com/rsjrdfoundation"
              className="text-[#ffcc00]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a> */}
            <a
              href="https://www.facebook.com/rsjrdfoundation"
              className="text-[#ffcc00] "
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com/rsjrdfoundation/"
              className=" text-[#ffcc00]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            {/* <a
              href="https://www.youtube.com/@rsjrdfoundatio"
              className=" text-[#ffcc00]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube"></i>
            </a> */}
            <a
              href="https://www.linkedin.com/company/rsjrdfoundation/"
              className=" text-[#ffcc00]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>

            {/* <a
              href="/login"
              className="px-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-user-tie"></i>
            </a> */}

            {/* <Link
              to="/admin"
              className=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-user-tie"></i>
            </Link> */}


            {auth.length > 0 && (
              <button
                onClick={() => {
                  if (auth === "USER") localStorage.removeItem("NGO");
                  else localStorage.removeItem("ADMIN_NGO");
                  setAuth("");
                  navigate("/");
                }}
                className="btn btn-outline-danger border-red-500 text-white hover:bg-red-500 px-2 py-1 text-sm"
              >
                LOGOUT {auth}
              </button>
            )}
             
          </div>
        </div>
      </div>

      {/* NavBar For Desktop */}
      <div className="hidden lg:block navbar w-full sm:top-12  
                      lg:z-50 shadow-md py-3 px-6 sm:px-8 font-medium capitalize  items-center  
                      fixed top-6 right-1/2 translate-x-1/2 bg-black/80 backdrop-blur-sm z-50 transition-all ease 
                      duration-300">
        <div className="container mx-auto flex justify-between items-center px-4 py-2">

          {/* Logo */}
          <Link to="/" className="text-3xl font-bold uppercase text-white">
            <img
              src={logo}
              alt="Logo"
              width={100}
              className="rounded-full"
              height={100}
            />
          </Link>

          {/* Menu Items */}
          <div className="flex flex-row space-x-6">
            <Link
              to="/"
              className={`nav-item ${
                path === "/" ? "text-[#ffcc00]" : ""
              } px-3 py-2 hover:text-[#2f2484]`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`nav-item ${
                path === "/about" ? "text-[#ffcc00]" : "text-white"
              } px-3 py-2 hover:text-[#2f2484]`}
            >
              About Us
            </Link>

            {/* About Us Dropdown */}
            <div
              className="relative dropdown"
              onMouseEnter={() => handleDropdownOpen("aboutUs")}
              onMouseLeave={handleDropdownClose}
            >
              <button
                onClick={() => handleDropdownClick("aboutUs")}
                className="flex items-center px-3 py-2 text-white hover:text-[#2f2484]"
              >
                Our Products <i className="ml-2 fa fa-chevron-down"></i>
              </button>
              {openDropdown === "aboutUs" && (
                <div className="absolute bg-black text-white mt-2 py-2 w-48 rounded-md shadow-lg">
                  <Link
                    to="/our-products/staples"
                    className="block px-4 py-2 hover:bg-[#ffcc00]"
                  >
                    Staples
                  </Link>
                  <Link
                    to="/our-products/dry-fruites"
                    className="block px-4 py-2 hover:bg-[#ffcc00]"
                  >
                    Dry Fruits

                  </Link>
                  <Link
                    to="/our-products/whole-spices"
                    className="block px-4 py-2 hover:bg-[#ffcc00]"
                  >
                    Whole Spices
                  </Link>
                  <Link
                    to="/our-products/suger"
                    className="block px-4 py-2 hover:bg-[#ffcc00]"
                  >
                    Sugar
                  </Link>
                </div>
              )}
            </div>

            {/* What We Do */}
            {/* <div
              className="relative dropdown"
              onMouseEnter={() => handleDropdownOpen("whatWeDo")}
              onMouseLeave={handleDropdownClose}
            >
              <button
                onClick={() => handleDropdownClick("whatWeDo")}
                className="flex items-center px-3 py-2 text-white hover:text-[#2f2484]"
              >
                What We Do <i className="ml-2 fa fa-chevron-down"></i>
              </button>
              {openDropdown === "whatWeDo" && (
                <div className="absolute bg-black text-white mt-2 py-2 w-48 rounded-md shadow-lg">
                  <Link
                    to="/what-we-do/rural-development"
                    className="block px-4 py-2 hover:bg-[#ffcc00]"
                  >
                    Rural Development
                  </Link>
                  <Link
                    to="/what-we-do/women-empowerment"
                    className="block px-4 py-2 hover:bg-[#ffcc00]"
                  >
                    Women Empowerment
                  </Link>
                  <Link
                    to="/what-we-do/know-more"
                    className="block px-4 py-2 hover:bg-[#ffcc00]"
                  >
                    Know More
                  </Link>
                </div>
              )}
            </div> */}

            {/* How Can You Help */}
            {/* <div
              className="relative dropdown"
              onMouseEnter={() => handleDropdownOpen("howCanYouHelp")}
              onMouseLeave={handleDropdownClose}
            >
              <button
                onClick={() => handleDropdownClick("howCanYouHelp")}
                className="flex items-center px-3 py-2 text-white hover:text-[#2f2484]"
              >
                Become A Hero <i className="ml-2 fa fa-chevron-down"></i>
              </button>
              {openDropdown === "howCanYouHelp" && (
                <div className="absolute bg-black text-white mt-2 py-2 w-48 rounded-md shadow-lg">
                  <Link
                    to="/become-a-hero/connect-on-social-media"
                    className="block px-4 py-2 hover:bg-[#ffcc00]"
                  >
                    Connect on Social Media
                  </Link>
                  <Link
                    to="/become-a-hero/become-a-hero-member"
                    className="block px-4 py-2 hover:bg-[#ffcc00]"
                  >
                    Become a Hero Member
                  </Link>
                  <Link
                    to="/birthday-blessings"
                    className="block px-4 py-2 hover:bg-[#ffcc00]"
                  >
                    Birthday Blessings
                  </Link>
                  <Link
                    to="/become-a-hero/donate"
                    className="block px-4 py-2 hover:bg-[#ffcc00]"
                  >
                    Donate
                  </Link>
                </div>
              )}
            </div> */}

            {/* Our Program  */}
            <div
              className="relative dropdown"
              onMouseEnter={() => handleDropdownOpen("ourProgram")}
              onMouseLeave={handleDropdownClose}
            >
              <button
                onClick={() => handleDropdownClick("ourProgram")}
                className="flex items-center px-3 py-2 text-white hover:text-[#2f2484]"
              >
                Technology <i className="ml-2 fa fa-chevron-down"></i>
              </button>
              {openDropdown === "ourProgram" && (
                <div className="absolute bg-black text-white mt-2 py-2 w-48 rounded-md shadow-lg">
                  <Link
                    to="/technology/oltowns-b2b"
                    className="block px-4 py-2 hover:bg-[#ffcc00]"
                  >
                    Oltowns B2B App

                  </Link>
                  {/* <Link
                    to="/our-program/mahila-sankranti"
                    className="block px-4 py-2 hover:bg-[#ffcc00]"
                  >
                    Mahila Sasakti Karan
                  </Link>
                  <Link
                    to="/free"
                    className="block px-4 py-2 hover:bg-[#ffcc00]"
                  >
                    Free Service
                  </Link> */}
                </div>
              )}
            </div>

            <Link
              to="/business-model"
              className={`nav-item ${
                path ===
                "/business-model"
                  ? "text-[#ffcc00]"
                  : "text-white"
              } px-3 py-2 hover:text-[#2f2484]`}
            >
              Business Model
            </Link>

            <Link
              to="/contact"
              className={`nav-item ${
                path === "/contact" ? "text-[#ffcc00]" : "text-white"
              } px-3 py-2 hover:text-[#2f2484]`}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Nav Bar For Mobile */}
      <div
        className={`block lg:hidden navbar text-white fixed w-full sm:top-12 shadow-md py-3 px-6 sm:px-8 font-medium capitalize items-center right-1/2 translate-x-1/2 bg-black/80 backdrop-blur-sm z-50 transition-all ease duration-300 ${
          mobileMenuOpen ? "h-screen" : "h-auto"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center px-4 py-2">
          <Link to="/" className="text-3xl font-bold uppercase text-white">
            <img
              src={logo}
              alt="Logo"
              width={100}
              className="rounded-full"
              height={100}
            />
          </Link>
          <button
            className="navbar-toggler text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className={`fas ${mobileMenuOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>
          <div
            className={`fixed inset-0 ml-8 text-white flex flex-col transform transition-transform duration-300 ${
              mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            } mt-28 z-50`}
          >
            <div className="flex flex-col space-y-4 p-4">
              <Link
                to="/"
                className={`nav-item ${
                  path === "/" ? "text-[#ffcc00]" : "text-white"
                } px-3 py-2 hover:text-[#2f2484]`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>

              <Link
                to="about"
                className={`nav-item ${
                  path === "/about" ? "text-[#ffcc00]" : "text-white"
                } px-3 py-2 hover:text-[#2f2484]`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>

               {/* About Us */} 
              <div className="relative dropdown">
                <button
                  onClick={(e) => handleDropdownClick(e, "aboutUs")}
                  className="flex items-center px-3 py-2 text-white hover:text-[#2f2484]"
                >
                  Our Products <i className="ml-2 fa fa-chevron-down"></i>
                </button>

                {openDropdown === "aboutUs" && (
                  <div
                    className={`absolute bg-black text-white mt-2 py-2 w-48 rounded-md shadow-lg transition-all duration-300 z-10 ${
                      openDropdown === "aboutUs" ? "ml-40" : ""
                    }`}
                  >
                    <Link
                      to="/our-products/staples"
                      className={`nav-item ${
                        path === "/our-products/staples"
                          ? "text-[#ffcc00]"
                          : "text-white"
                      } block px-4 py-2 hover:bg-[#ffcc00] hover:text-[#2f2484]`}
                      onClick={() => {
                        setOpenDropdown(null);
                        setMobileMenuOpen(false);
                      }}
                    >
                      Steples
                    </Link>
                    <Link
                      to="/our-products/dry-fruites"
                      className={`nav-item ${
                        path === "/about-us/our-team"
                          ? "text-[#ffcc00]"
                          : "text-white"
                      } block px-4 py-2 hover:bg-[#ffcc00] hover:text-[#2f2484]`}
                      onClick={() => {
                        setOpenDropdown(null);
                        setMobileMenuOpen(false);
                      }}
                    >
                      Dry Fruits
                    </Link>
                    <Link
                      to="/our-products/whole-spices"
                      className={`nav-item ${
                        path === "/our-products/whole-spices"
                          ? "text-[#ffcc00]"
                          : "text-white"
                      } block px-4 py-2 hover:bg-[#ffcc00] hover:text-[#2f2484]`}
                      onClick={() => {
                        setOpenDropdown(null);
                        setMobileMenuOpen(false);
                      }}
                    >
                      Whole Spices
                    </Link>
                    <Link
                      to="/our-products/suger"
                      className={`nav-item ${
                        path === "/our-products/suger"
                          ? "text-[#ffcc00]"
                          : "text-white"
                      } block px-4 py-2 hover:bg-[#ffcc00] hover:text-[#2f2484]`}
                      onClick={() => {
                        setOpenDropdown(null);
                        setMobileMenuOpen(false);
                      }}
                    >
                      Suger
                    </Link>
                  </div>
                )}
              </div> 

              {/* What We Do */}
              {/* <div className="relative dropdown">
                <button
                  onClick={(e) => handleDropdownClick(e, "whatWeDo")}
                  className="flex items-center px-3 py-2 text-white hover:text-[#2f2484]"
                >
                  What We Do <i className="ml-2 fa fa-chevron-down"></i>
                </button>

                {openDropdown === "whatWeDo" && (
                  <div
                    className={`absolute bg-black text-white mt-2 py-2 w-48 rounded-md shadow-lg transition-all duration-300 z-10 ${
                      openDropdown === "whatWeDo" ? "ml-40" : ""
                    }`}
                  >
                    <Link
                      to="/what-we-do/rural-development"
                      className={`nav-item ${
                        path === "/what-we-do/rural-development"
                          ? "text-[#ffcc00]"
                          : "text-white"
                      } block px-4 py-2 hover:bg-[#ffcc00] hover:text-[#2f2484]`}
                      onClick={() => {
                        setOpenDropdown(null); // Close the dropdown after clicking an option
                        setMobileMenuOpen(false); // Close the mobile menu
                      }}
                    >
                      Rural Development
                    </Link>
                    <Link
                      to="/what-we-do/women-empowerment"
                      className={`nav-item ${
                        path === "/what-we-do/women-empowerment"
                          ? "text-[#ffcc00]"
                          : "text-white"
                      } block px-4 py-2 hover:bg-[#ffcc00] hover:text-[#2f2484]`}
                      onClick={() => {
                        setOpenDropdown(null);
                        setMobileMenuOpen(false);
                      }}
                    >
                      Women Empowerment
                    </Link>
                    <Link
                      to="/what-we-do/know-more"
                      className={`nav-item ${
                        path === "/what-we-do/know-more"
                          ? "text-[#ffcc00]"
                          : "text-white"
                      } block px-4 py-2 hover:bg-[#ffcc00] hover:text-[#2f2484]`}
                      onClick={() => {
                        setOpenDropdown(null);
                        setMobileMenuOpen(false);
                      }}
                    >
                      Know More
                    </Link>
                  </div>
                )}
              </div> */}

              {/* How Can You Help */}
              {/* <div className="relative dropdown">
                <button
                  onClick={(e) => handleDropdownClick(e, "aboutUs")}
                  className="flex items-center px-3 py-2 text-white hover:text-[#2f2484]"
                >
                  Our Products
                  <i className="ml-2 fa fa-chevron-down"></i>
                </button>

                {openDropdown === "aboutUs" && (
                  <div
                    className={`absolute bg-black text-white mt-2 py-2 w-48 rounded-md shadow-lg transition-all duration-300 ${
                      openDropdown === "aboutUs" ? "ml-40" : ""
                    }`}
                  >
                    <Link
                      to="/about-us/who-we-are"
                      className={`nav-item ${
                        path === "/about-us/who-we-are"
                          ? "text-[#ffcc00]"
                          : "text-white"
                      } block px-4 py-2 hover:bg-[#ffcc00] hover:text-[#2f2484]`}
                      onClick={() => {
                        setOpenDropdown(null); // Close the dropdown after clicking an option
                        setMobileMenuOpen(false); // Close the mobile menu
                      }}
                    >
                     Staples
                    </Link>
                    <Link
                      to="/become-a-hero/become-a-hero-member"
                      className={`nav-item ${
                        path === "/become-a-hero/become-a-hero-member"
                          ? "text-[#ffcc00]"
                          : "text-white"
                      } block px-4 py-2 hover:bg-[#ffcc00] hover:text-[#2f2484]`}
                      onClick={() => {
                        setOpenDropdown(null);
                        setMobileMenuOpen(false);
                      }}
                    >
                      Dry Fruits
                    </Link>
                    <Link
                      to="/birthday-blessings"
                      className={`nav-item ${
                        path === "/birthday-blessings"
                          ? "text-[#ffcc00]"
                          : "text-white"
                      } block px-4 py-2 hover:bg-[#ffcc00] hover:text-[#2f2484]`}
                      onClick={() => {
                        setOpenDropdown(null);
                        setMobileMenuOpen(false);
                      }}
                    >
                      Whole Spices
                    </Link>
                    <Link
                      to="/become-a-hero/donate"
                      className={`nav-item ${
                        path === "/become-a-hero/donate"
                          ? "text-[#ffcc00]"
                          : "text-white"
                      } block px-4 py-2 hover:bg-[#ffcc00] hover:text-[#2f2484]`}
                      onClick={() => {
                        setOpenDropdown(null);
                        setMobileMenuOpen(false);
                      }}
                    >
                      Sugar
                    </Link>
                  </div>
                )}
              </div> */}

              {/* Our Program  */}
              <div className="relative dropdown">
                <button
                  onClick={(e) => handleDropdownClick(e, "ourProgram")}
                  className="flex items-center px-3 py-2 text-white hover:text-[#2f2484]"
                >
                  Technology <i className="ml-2 fa fa-chevron-down"></i>
                </button>

                {openDropdown === "ourProgram" && (
                  <div
                    className={`absolute bg-black text-white mt-2 py-2 w-48 rounded-md shadow-lg transition-all duration-300 ${
                      openDropdown === "ourProgram" ? "ml-40" : ""
                    }`}
                  >
                    <Link
                      to="/technology/oltowns-b2b"
                      className={`nav-item ${
                        path === "/technology/oltowns-b2b"
                          ? "text-[#ffcc00]"
                          : "text-white"
                      } block px-4 py-2 hover:bg-[#ffcc00] hover:text-[#2f2484]`}
                      onClick={() => {
                        setOpenDropdown(null); // Close the dropdown after clicking an option
                        setMobileMenuOpen(false); // Close the mobile menu
                      }}
                    >
                      Oltowns B2B App

                    </Link>
                    {/* <Link
                      to="/our-program/mahila-sankranti"
                      className={`nav-item ${
                        path === "/our-program/mahila-sankranti"
                          ? "text-[#ffcc00]"
                          : "text-white"
                      } block px-4 py-2 hover:bg-[#ffcc00] hover:text-[#2f2484]`}
                      onClick={() => {
                        setOpenDropdown(null);
                        setMobileMenuOpen(false);
                      }}
                    >
                      Mahila Sasakti Karan
                    </Link> */}
                  </div>
                )}
              </div>

              <Link
                to="/business-model"
                className={`nav-item ${
                  path ===
                  "/business-model"
                    ? "text-[#ffcc00]"
                    : "text-white"
                } px-3 py-2 hover:text-[#2f2484]`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Business Model
              </Link>

              <Link
                to="contact"
                className={`nav-item ${
                  path === "/contact" ? "text-[#ffcc00]" : "text-white"
                } px-3 py-2 hover:text-[#2f2484]`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
