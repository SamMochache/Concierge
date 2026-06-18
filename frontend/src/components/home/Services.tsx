import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRightIcon, CheckIcon } from 'lucide-react';
import { SERVICES } from '../../data/content';
import { SectionHeading } from '../SectionHeading';
export function Services() {
  return (
    <section className="bg-sand-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          center
          eyebrow="Everything handled"
          title="One concierge, every detail of your Kenya trip"
          subtitle="From the runway to the savanna, we take care of the logistics so you can focus on the adventure." />
        

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) =>
          <motion.div
            key={service.id}
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
              delay: i % 3 * 0.08
            }}>
            
              <Link
              to={service.to}
              className="group flex h-full flex-col rounded-2xl border border-sand-200 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:border-clay-100 hover:shadow-soft">
              
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-clay-50 text-clay-500">
                    <service.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <ArrowUpRightIcon className="h-5 w-5 text-ink/30 transition group-hover:text-clay-500" />
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold text-ink">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-ink/70">{service.blurb}</p>
                <ul className="mt-4 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                  {service.points.map((p) =>
                <li
                  key={p}
                  className="flex items-center gap-1.5 text-xs text-ink/60">
                  
                      <CheckIcon className="h-3.5 w-3.5 shrink-0 text-savanna-500" />{' '}
                      {p}
                    </li>
                )}
                </ul>
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}