import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, MessageCircleIcon } from 'lucide-react';
import { whatsappLink } from '../../data/site';
export function CtaBanner() {
  return (
    <section className="relative overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1920&q=80"
        alt="Diani Beach white sand and turquoise water in Kenya"
        className="h-full w-full object-cover absolute inset-0" />
      
      <div className="absolute inset-0 bg-ink/70" />
      <div className="relative mx-auto max-w-4xl px-5 py-24 text-center">
        <h2 className="font-serif text-3xl font-semibold text-white sm:text-4xl">
          Ready to experience Kenya the easy way?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sand-100/90">
          Tell us your dates and dreams — we’ll handle the rest, from arrival to
          your final sunset.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/plan-my-trip"
            className="inline-flex items-center gap-2 rounded-full bg-clay-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-clay-600">
            
            Plan My Trip <ArrowRightIcon className="h-4 w-4" />
          </Link>
          <a
            href={whatsappLink('Hi! I’m ready to plan my Kenya trip.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white transition hover:brightness-105">
            
            <MessageCircleIcon className="h-4 w-4" /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>);

}