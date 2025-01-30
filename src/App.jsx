import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AuthContext, AuthProvider } from './context/AuthContext';

import React, { useContext } from 'react';

import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
// import SignUp from "./pages/SignUp";
import TermsAndCondition from "./pages/TermsAndCondition.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import Cookis from "./pages/Cookies.jsx";
import Help from "./pages/Help.jsx";
import Faqs from "./pages/Faqs.jsx";
import Volenture from "./pages/Volenture.jsx";
import Team from "./pages/OurTeam.jsx";
import WhatWeDo from "./pages/WhatWeDo.jsx";

import Navbar from "./components/Navbar.jsx";
import BackToTop from "./components/BackToTop.jsx";
import Footer from "./components/Footer.jsx";
import WhoWeAre from "./pages/WhoWeAre.jsx";
import Gallery from "./pages/Gallery.jsx";
import DonateUs from "./pages/DonateUs.jsx";
import RuralDevelopment from "./pages/RuralDevelopments.jsx";
import WomenEmpowerMent from "./pages/WomenEmpowerment.jsx";
import KnowMore from "./pages/KnowMore.jsx";
import MahilaSankranti from "./pages/MahilaSankranti.jsx";
import EducationAwerness from "./pages/EducationAwerness.jsx";
import BecomeHero from "./pages/Becomehero.jsx";
import Blessing from "./pages/Blessing.jsx";
import ConnectMedia from "./pages/ConnectMedia.jsx";
import Partner from "./pages/Partner.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";


import Frees from "./pages/FreeService.jsx";

import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Error from './components/Error';
import ForgotPassword from './components/ForgotPassword';
import UserDashboard from './components/Dashboards/UserDashboard';
import VolunteerDashboard from './components/Dashboards/VolunteerDashboard';
import AdminDashboard from './components/Dashboards/AdminDashboard';

import './App.css';
import BlogPage from "./pages/Blog.jsx";



const AppContent = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const isDashboardRoute = location.pathname.startsWith('/dashboard');

  return (
    <>
      {!isDashboardRoute && <Navbar />}
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/our-products/staples" element={<WhoWeAre />} />
        <Route exact path="/our-products/dry-fruites" element={<Team />} />
        <Route exact path="/our-products/whole-spices" element={<Gallery />} />
        <Route exact path="/our-products/suger" element={<DonateUs />} />
        <Route exact path="/what-we-do/rural-development" element={<RuralDevelopment />} />
        <Route exact path="/what-we-do/women-empowerment" element={<WomenEmpowerMent />} />
        <Route exact path="/what-we-do/know-more" element={<KnowMore />} />
        <Route exact path="/our-program/mahila-sankranti" element={<MahilaSankranti />} />
        <Route exact path="/technology/oltowns-b2b" element={<EducationAwerness />} />
        <Route exact path="/become-a-hero/connect-on-social-media" element={<ConnectMedia />} />
        <Route exact path="/become-a-hero/become-a-hero-member" element={<BecomeHero />} />
        <Route exact path="/birthday-blessings" element={<Blessing />} />
        <Route exact path="/business-model" element={<Partner />} />
        <Route exact path="/become-a-hero/donate" element={<DonateUs />} />
        <Route exact path="/event" element={<Events />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/terms-conditions" element={<TermsAndCondition />} />
        <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route exact path="/cookies" element={<Cookis />} />
        <Route exact path="/helps" element={<Help />} />
        <Route exact path="/faqs" element={<Faqs />} />
        <Route exact path="/volenture" element={<Volenture />} />
        <Route exact path="/what-we-do" element={<WhatWeDo />} />
        {/* <Route exact path="/freeservice" element={<FreeService />}/> */}
        <Route exact path="/free" element={<Frees />} />
        <Route exact path="/blog" element={<BlogPage />} />


        
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<Dashboard />}> 
            {user?.role === "user" && (
              <>
                <Route path="/dashboard" element={<UserDashboard />} />
              </>
            )}
            {user?.role === "volunteer" && (
              <>
                <Route path="/dashboard" element={<VolunteerDashboard />} />
              </>
            )}
            {user?.role === "admin" && (
              <>
                <Route path="/dashboard" element={<AdminDashboard />} />
              </>
            )}
            <Route path="*" element={<Error/>} />
        </Route>
      </Routes>
      {!isDashboardRoute && (
        <>
          <Footer />
          <BackToTop />
        </>
      )}
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

const RootApp = () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);

export default RootApp;