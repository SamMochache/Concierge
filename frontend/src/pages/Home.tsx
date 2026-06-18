import React from 'react';
import { Seo, travelAgencySchema } from '../components/Seo';
import { Hero } from '../components/home/Hero';
import { Services } from '../components/home/Services';
import { Partners } from '../components/home/Partners';
import { Testimonials } from '../components/home/Testimonials';
import { CtaBanner } from '../components/home/CtaBanner';
export function Home() {
  return (
    <>
      <Seo
        title="Kenya Welcome Concierge | Airport Transfers, Safaris & Travel Planning"
        description="Plan your perfect Kenya trip. Airport pickups, safari bookings, accommodation, SIM card assistance, M-PESA onboarding, and personalized travel concierge services."
        keywords="Kenya travel concierge, Kenya safari booking, Nairobi airport transfer, Kenya travel planner, Kenya SIM card tourist, M-PESA for tourists, Kenya vacation planning, luxury Kenya travel"
        path="/"
        jsonLd={travelAgencySchema} />
      
      <Hero />
      <Services />
      <Partners />
      <Testimonials />
      <CtaBanner />
    </>);

}