import Navbar from "../components/Navbar";
import space from '../assets/Space.mp4';
import '../css/home.css';
import Initiatives from "../components/Initiatives";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import Landing from "../components/Landing";
import Funds from "../components/Funds";
import BackToTop from "../components/BackToTop";
import MiddleSection from "../components/MiddleSection";
import Testimonials from "./Testimonials";
import WhyChooseOltowns from "../components/MiddlePart/DifferenrWithUs";

export default function Home() {
    return (
        <>
            <div className="video-container " >
                <video src={space} type="video/mp4" autoPlay loop muted>
                    Sorry, your browser doesn't support videos.
                </video>
                <div className="typewriter">
                    <h2>Welcome to, Karunadu Products & Service</h2>
                </div>
            </div>
            <Landing />
            <Initiatives />
            <MiddleSection/>
            <WhyChooseOltowns />
            <Testimonials />
            
            {/* <Funds /> */}
            
            {/* <ContactForm /> */}
           
        </>
    );
}