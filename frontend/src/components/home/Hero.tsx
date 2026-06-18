import React, { Children } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRightIcon,
  MessageCircleIcon,
  ShieldCheckIcon,
  ClockIcon,
  UsersIcon,
  BadgeCheckIcon } from
'lucide-react';
import { whatsappLink } from '../../data/site';
const indicators = [
{
  icon: UsersIcon,
  label: 'Local experts'
},
{
  icon: ClockIcon,
  label: '24/7 support'
},
{
  icon: BadgeCheckIcon,
  label: 'Verified partners'
},
{
  icon: ShieldCheckIcon,
  label: 'Secure bookings'
}];

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 160]);
  const scale = useTransform(scrollY, [0, 600], [1, 1.12]);
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      <motion.div
        style={{
          y,
          scale
        }}
        className="absolute inset-0">
        
        <img
          src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1920&q=80"
          alt="Acacia trees on the Masai Mara savanna at golden hour"
          className="h-full w-full object-cover" />
        
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/40 to-ink/50" />
      </motion.div>

      <div className="relative mx-auto w-full max-w-7xl px-5 pt-28 pb-16">
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.7
          }}
          className="max-w-2xl">
          
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white backdrop-blur">
            Karibu Kenya · Personal travel concierge
          </span>
          <h1 className="mt-6 font-serif text-4xl font-semibold leading-tight text-white sm:text-6xl">
            Your Personal Kenya Travel Concierge
          </h1>
          <p className="mt-5 max-w-xl text-lg text-sand-100/90">
            From airport pickup to safari adventures, we handle everything from
            the moment you land in Kenya.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/plan-my-trip"
              className="inline-flex items-center gap-2 rounded-full bg-clay-500 px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:bg-clay-600">
              
              Plan My Trip <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <a
              href={whatsappLink('Hi! I’d like to plan a trip to Kenya.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:brightness-105">
              
              <MessageCircleIcon className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </div>

          <motion.ul
            initial="hidden"
            animate="show"
            variants={{
              show: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.4
                }
              }
            }}
            className="mt-10 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
            
            {indicators.map((it) =>
            <motion.li
              key={it.label}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 10
                },
                show: {
                  opacity: 1,
                  y: 0
                }
              }}
              className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-3 py-2.5 text-sm text-white backdrop-blur">
              
                <it.icon
                className="h-4 w-4 shrink-0 text-gold-400"
                aria-hidden="true" />
              
                {it.label}
              </motion.li>
            )}
          </motion.ul>
        </motion.div>
      </div>
    </section>);

}