import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import BackToTop from '../components/BackToTop';
import PageHeader from "../components/PageHeader";
import HeaderTitle from "../components/Common/HeaderTitle";

export default function Contact() {
    return (
        <>
            <PageHeader title="Contact Us" path="contact" name="Contact" />
            
            <ContactForm />
            
        </>
    );
}