import React from 'react';
import { motion } from 'framer-motion';
import { PARTNER_CATEGORIES } from '../../data/content';
import { SectionHeading } from '../SectionHeading';
export function Partners() {
  return (
    <section className="bg-savanna-700 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          center
          light
          eyebrow="Trusted network"
          title="Backed by Kenya’s most reliable partners"
          subtitle="Every lodge, operator, driver and guide is personally vetted by our local team." />
        
        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {PARTNER_CATEGORIES.map((p, i) =>
          <motion.div
            key={p.label}
            initial={{
              opacity: 0,
              scale: 0.95
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
              delay: i * 0.08
            }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur">
            
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/20 text-gold-400">
                <p.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <p className="mt-4 font-serif text-3xl font-semibold text-white">
                {p.count}
              </p>
              <p className="mt-1 text-sm text-sand-100/80">{p.label}</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}