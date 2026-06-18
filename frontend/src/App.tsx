import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { PlanMyTrip } from './pages/PlanMyTrip';
import { AirportServices } from './pages/AirportServices';
import { Accommodation } from './pages/Accommodation';
import { Safaris } from './pages/Safaris';
import { TravelGuide } from './pages/TravelGuide';
import { Article } from './pages/Article';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
export function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex min-h-screen w-full flex-col bg-sand-50">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/plan-my-trip" element={<PlanMyTrip />} />
              <Route path="/airport-services" element={<AirportServices />} />
              <Route path="/accommodation" element={<Accommodation />} />
              <Route path="/safaris" element={<Safaris />} />
              <Route path="/travel-guide" element={<TravelGuide />} />
              <Route path="/travel-guide/:slug" element={<Article />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </BrowserRouter>
    </HelmetProvider>);

}