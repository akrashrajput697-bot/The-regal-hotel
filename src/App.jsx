import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { CartProvider } from './context/CartContext';

import Navbar from './component/Navbar';
import Preloader from './component/Preloader';
import Hero from './Pages/Hero';
import Home from './Pages/Home';
import About from './Pages/About';
import Rooms from './Pages/Rooms';
import Restaurant from './Pages/Restaurant';
import Gallery from './Pages/Gallery';
import Gym from './Pages/Gym';
import Contact from './Pages/Contact';
import Activities from './Pages/Activities';
import Availability from './Pages/Availability';
import Reservation from './Pages/Reservation';

import DeluxeDouble from './Pages/DeluxeDouble';
import DeluxeTwin from './Pages/DeluxeTwin';
import DeluxeFamily from './Pages/DeluxeFamily';
import ExecutiveKing from './Pages/ExecutiveKing';
import ExecutiveTwin from './Pages/ExecutiveTwin';
import PremierSuite from './Pages/PremierSuite';

// Auth pages
import Login from './Pages/Login';
import Signup from './Pages/Signup';

// Logged-in user pages
import Notifications from './Pages/Notifications';
import LoyaltyPoints from './Pages/LoyaltyPoints';
import Account from './Pages/Account';
import Activity from './Pages/Activity';

import Footer from './component/Footer';
import FloatingActions from './component/FloatingActions';

// Pages where the footer must not appear
const NO_FOOTER_PATHS = ['/notifications', '/loyalty-points', '/account', '/activity', '/login', '/signup'];

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => {
        const el = document.getElementById(hash.slice(1));
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 150);
      return () => clearTimeout(timer);
    } else {
      // Force instant scroll to top on page load
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function LayoutWrapper() {
  const { pathname } = useLocation();
  const hideFooter = NO_FOOTER_PATHS.includes(pathname);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Hero /><Home /></>} />
        <Route path="/home" element={<><Hero /><Home /></>} />
        <Route path="/about" element={<About />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/availability" element={<Availability />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gym" element={<Gym />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/deluxe-double" element={<DeluxeDouble />} />
        <Route path="/deluxe-twin" element={<DeluxeTwin />} />
        <Route path="/deluxe-family" element={<DeluxeFamily />} />
        <Route path="/executive-king" element={<ExecutiveKing />} />
        <Route path="/executive-twin" element={<ExecutiveTwin />} />
        <Route path="/premier-suite" element={<PremierSuite />} />

        {/* Auth routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Profile dropdown pages */}
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/loyalty-points" element={<LoyaltyPoints />} />
        <Route path="/account" element={<Account />} />
        <Route path="/activity" element={<Activity />} />
      </Routes>
      {!hideFooter && <Footer />}
      <FloatingActions />
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <CartProvider>
        <Router basename="/The-regal-hotel">
          <ScrollToTop />
          <Preloader />
          <Helmet>
            {/* Standard SEO Meta Tags */}
            <title>The Regal Hotel & Residences | Luxury Rooms & Suites</title>
            <meta name="description" content="Experience ultimate luxury and comfort at The Regal Hotel & Residences. Book premium rooms, enjoy gourmet dining, and explore exclusive amenities." />
            <meta name="keywords" content="The Regal Hotel, Luxury Hotel, Hotel Reservation, Suites, Islamabad Hotel, Room Booking" />
            <meta name="author" content="The Regal Hotel & Residences" />

            {/* Open Graph Meta Tags (For WhatsApp, Facebook, LinkedIn previews) */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://akrashrajput697-bot.github.io/The-regal-hotel/" />
            <meta property="og:title" content="The Regal Hotel & Residences | Luxury Rooms & Suites" />
            <meta property="og:description" content="Experience ultimate luxury and comfort at The Regal Hotel & Residences. Book your stay today." />
            <meta property="og:image" content="https://akrashrajput697-bot.github.io/The-regal-hotel/og-image.jpg" />

            {/* Twitter Card Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="The Regal Hotel & Residences" />
            <meta name="twitter:description" content="Experience ultimate luxury and comfort at The Regal Hotel & Residences." />
            <meta name="twitter:image" content="https://akrashrajput697-bot.github.io/The-regal-hotel/og-image.jpg" />
          </Helmet>
          <LayoutWrapper />
        </Router>
      </CartProvider>
    </HelmetProvider>
  );
}

export default App;