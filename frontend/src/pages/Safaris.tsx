import React, { lazy } from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, ClockIcon } from 'lucide-react';
import { Seo } from '../components/Seo';
import { PageHeader } from '../components/PageHeader';
import { SectionHeading } from '../components/SectionHeading';
import { SAFARIS, EXPERIENCES } from '../data/listings';
import { whatsappLink } from '../data/site';
export function Safaris() {
  return (
    <>
      <Seo
        title="Kenya Safaris & Local Experiences | Kenya Welcome Concierge"
        description="Book Masai Mara, Amboseli, Tsavo and Samburu safaris plus cultural tours, food tours, coffee farm visits, hiking and photography experiences."
        keywords="Kenya safari booking, Masai Mara safari, Amboseli safari, Kenya experiences, custom Kenya safari"
        path="/safaris" />
      
      <PageHeader
        eyebrow="Safaris & Experiences"
        title="Into the wild"
        subtitle="Iconic national parks and authentic local experiences, tailored entirely to you."
        image="https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Herd of elephants in front of Mount Kilimanjaro in Amboseli" />
      

      <section className="bg-sand-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading
            eyebrow="Safari destinations"
            title="Choose your park"
            subtitle="Or let us design a custom multi-park journey." />
          
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SAFARIS.map((s, i) =>
            <motion.article
              key={s.id}
              initial={{
                opacity: 0,
                y: 24
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.45,
                delay: i % 3 * 0.08
              }}
              className="group relative overflow-hidden rounded-2xl shadow-card">
              
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                  src={s.image}
                  alt={`${s.name} safari landscape`}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <span className="inline-flex items-center gap-1 text-xs text-gold-400">
                    <ClockIcon className="h-3.5 w-3.5" /> {s.days}
                  </span>
                  <h3 className="mt-1 font-serif text-2xl font-semibold">
                    {s.name}
                  </h3>
                  <p className="mt-1 text-sm text-sand-100/90">{s.tagline}</p>
                  <a
                  href={whatsappLink(
                    `Hi! I’d like to book a ${s.name} safari.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                  
                    Enquire now <ArrowRightIcon className="h-4 w-4" />
                  </a>
                </div>
              </motion.article>
            )}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading
            eyebrow="Local experiences"
            title="Go beyond the guidebook"
            subtitle="Authentic encounters that make your trip unforgettable." />
          
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {EXPERIENCES.map((e, i) =>
            <motion.div
              key={e.name}
              initial={{
                opacity: 0,
                scale: 0.96
              }}
              whileInView={{
                opacity: 1,
                scale: 1
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.4,
                delay: i * 0.06
              }}
              className="group overflow-hidden rounded-2xl">
              
                <div className="relative aspect-square overflow-hidden">
                  <img
                  src={e.image}
                  alt={e.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                
                  <div className="absolute inset-0 bg-ink/35" />
                  <h3 className="absolute inset-x-0 bottom-0 p-4 font-serif text-lg font-semibold text-white">
                    {e.name}
                  </h3>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </>);

}