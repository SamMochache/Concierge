import React, { useMemo, useState, lazy } from 'react';
import { motion } from 'framer-motion';
import { StarIcon, MapPinIcon } from 'lucide-react';
import { Seo } from '../components/Seo';
import { PageHeader } from '../components/PageHeader';
import { LISTINGS, Listing } from '../data/listings';
import { whatsappLink } from '../data/site';
const FILTERS = [
'All',
'Hotels',
'Lodges',
'Airbnb-style',
'Luxury resorts'] as
const;
export function Accommodation() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('All');
  const filtered = useMemo<Listing[]>(
    () =>
    filter === 'All' ? LISTINGS : LISTINGS.filter((l) => l.type === filter),
    [filter]
  );
  return (
    <>
      <Seo
        title="Kenya Accommodation — Hotels, Lodges & Luxury Resorts | Kenya Welcome Concierge"
        description="Book hand-picked Kenya accommodation: hotels, safari lodges, Airbnb-style stays and luxury resorts, all vetted by local experts."
        keywords="Kenya accommodation, Kenya safari lodges, Nairobi hotels, Diani Beach villas, luxury Kenya resorts"
        path="/accommodation" />
      
      <PageHeader
        eyebrow="Accommodation Booking"
        title="Where you’ll stay"
        subtitle="From beachfront villas to luxury safari lodges — every stay vetted by our local team."
        image="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Luxury safari lodge overlooking the African plains" />
      

      <section className="bg-sand-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) =>
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${filter === f ? 'bg-clay-500 text-white' : 'bg-white text-ink hover:bg-sand-100'}`}>
              
                {f}
              </button>
            )}
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((l, i) =>
            <motion.article
              key={l.id}
              layout
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.4,
                delay: i % 3 * 0.06
              }}
              className="group overflow-hidden rounded-2xl border border-sand-200 bg-white shadow-card">
              
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                  src={l.image}
                  alt={l.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-ink">
                    {l.type}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-serif text-lg font-semibold text-ink">
                      {l.name}
                    </h3>
                    <span className="flex items-center gap-1 text-sm font-medium text-ink">
                      <StarIcon className="h-4 w-4 fill-gold-500 text-gold-500" />{' '}
                      {l.rating}
                    </span>
                  </div>
                  <p className="mt-1 flex items-center gap-1 text-sm text-ink/60">
                    <MapPinIcon className="h-4 w-4" /> {l.location}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-sm text-ink/70">
                      <span className="font-serif text-xl font-semibold text-ink">
                        ${l.price}
                      </span>{' '}
                      / night
                    </p>
                    <a
                    href={whatsappLink(
                      `Hi! I’m interested in booking ${l.name}.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-clay-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-clay-600">
                    
                      Inquire
                    </a>
                  </div>
                </div>
              </motion.article>
            )}
          </div>
        </div>
      </section>
    </>);

}