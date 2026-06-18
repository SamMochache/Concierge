import React, { lazy } from 'react';
import { motion } from 'framer-motion';
import { StarIcon } from 'lucide-react';
import { TESTIMONIALS } from '../../data/content';
import { SectionHeading } from '../SectionHeading';
export function Testimonials() {
  return (
    <section className="bg-sand-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          center
          eyebrow="Loved by travellers"
          title="Stories from visitors who trusted us"
          subtitle="Tourists from the UK, USA, Europe and Australia share their Kenya journeys." />
        
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((t, i) =>
          <motion.figure
            key={t.name}
            initial={{
              opacity: 0,
              y: 24
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true,
              margin: '-60px'
            }}
            transition={{
              duration: 0.45,
              delay: i % 4 * 0.08
            }}
            className="flex h-full flex-col rounded-2xl border border-sand-200 bg-white p-6 shadow-card">
            
              <div
              className="flex gap-0.5 text-gold-500"
              aria-label={`${t.rating} out of 5 stars`}>
              
                {Array.from({
                length: t.rating
              }).map((_, idx) =>
              <StarIcon
                key={idx}
                className="h-4 w-4 fill-current"
                aria-hidden="true" />

              )}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink/80">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <img
                src={t.avatar}
                alt={t.name}
                className="h-10 w-10 rounded-full object-cover"
                loading="lazy" />
              
                <div>
                  <p className="text-sm font-semibold text-ink">{t.name}</p>
                  <p className="text-xs text-ink/60">{t.origin}</p>
                </div>
              </figcaption>
            </motion.figure>
          )}
        </div>
      </div>
    </section>);

}