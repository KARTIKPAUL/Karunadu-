import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div className="bg-black text-gray-300 py-12 px-4">
              {/* Footer Section */}
      <div className="py-8 bg-black text-white text-center relative overflow-hidden">
        {/* Background Effect */}
       

       
      </div>
            <div className="container mx-auto px-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                   

                    {/* Popular Links Section */}
                    <div className="space-y-4">
                        <h2 className="text-lg font-bold text-[#ffcc00]">Popular Links</h2>
                        <a href="/about" className="block text-white hover:text-yellow-300">About Us</a>
                        <a href="/contact" className="block text-white hover:text-yellow-300">Contact Us</a>
                        {/* <a href="/event" className="block text-white hover:text-yellow-300">Popular Causes</a>
                        <a href="/event" className="block text-white hover:text-yellow-300">Upcoming Events</a> */}
                        
                    </div>

                    {/* Useful Links Section */}
                    <div className="space-y-4">
                         <h2 className="text-lg font-bold text-[#ffcc00]">Useful Links</h2> 
                        {/*
                        <Link to="/terms-conditions" className="block text-white hover:text-yellow-300">Terms of Condition</Link>
                        <Link to="/privacy-policy" className="block text-white hover:text-yellow-300">Privacy Policy</Link>
                        <Link to="/cookies" className="block text-white hover:text-yellow-300">Cookies</Link>
                        <Link to="/helps" className="block text-white hover:text-yellow-300">Help</Link> */}
                        <a href="/blog" className="block text-white hover:text-yellow-300">Blog</a>
                        <Link to="/faqs" className="block text-white hover:text-yellow-300">FAQs</Link>
                    </div>

                     {/* Contact Us Section */}
                     <div className="space-y-4">
                        <h2 className="text-lg font-bold text-[#ffcc00]">Contact Us</h2>
                        <a href="" target="_blank" rel="noopener noreferrer" className="block text-white hover:text-yellow-300">
                            <p><i className="fas fa-map-marker-alt mr-2"></i>Bengalore, Karnataka, India</p>
                        </a>
                        <a href="tel:+918838781817" className="block text-white hover:text-yellow-300">
                            <p><i className="fas fa-phone mr-2"></i>+91 8838781817</p>
                        </a>
                        <a href="mailto:info@vajjiramagro.com" className="block text-white hover:text-yellow-300">
                            <p><i className="fas fa-envelope mr-2"></i>info@vajjiramagro.com</p>
                        </a>
                        <div className="flex space-x-4 mt-4">
                            {/* <a href="https://x.com/rsjrdfoundation" className="text-white hover:text-yellow-300">
                                <i className="fab fa-twitter"></i>
                            </a> */}
                            <a href="https://www.facebook.com" className="text-white hover:text-yellow-300">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://www.instagram.com" className="text-white hover:text-yellow-300">
                                <i className="fab fa-instagram"></i>
                            </a>
                            {/* <a href="https://www.youtube.com/@rsjrdfoundatio" className="text-white hover:text-yellow-300">
                                <i className="fab fa-youtube"></i>
                            </a> */}
                            <a href="https://www.linkedin.com" className="text-white hover:text-yellow-300">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>



                    {/* Newsletter Section */}
                    <div className="space-y-4">
                        <h2 className="text-lg font-bold text-[#ffcc00]">Newsletter</h2>
                        <form name="NewsLetter" className="flex flex-col space-y-2">
                            <input
                                name="subscribe"
                                type="email"
                                placeholder="Email goes here"
                                className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-[#ffcc00]"
                                required
                            />
                            <button
                                type="submit"
                                className="px-4 py-2 bg-[#ffcc00] text-blue-900 rounded hover:bg-yellow-500 transition"
                            >
                                Submit
                            </button>
                        </form>
                        <h6 className="text-sm text-white">Don't worry, we don't spam!</h6>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="border-t border-gray-600 mt-8 pt-4">
                    <div className="">
                        <div className="text-sm text-white text-center">
                            &copy; <a href="#" className="text-white hover:text-yellow-300"> Vajjiram Agro Foods India (OPC) Private Limited</a> | 2025, All Rights Reserved.
                        </div>
                        {/* <div className="text-sm text-white md:text-right">
                            Design & Developed by <a href="https://www.kodekalp.com" className="text-[#ffcc00] hover:text-[#ffcc00]">KodeKalp Global Technologies Private Limited</a>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
