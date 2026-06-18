import React, { lazy } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon, ClockIcon } from 'lucide-react';
import { Seo } from '../components/Seo';
import { PageHeader } from '../components/PageHeader';
import { POSTS } from '../data/posts';
export function TravelGuide() {
  const [featured, ...rest] = POSTS;
  return (
    <>
      <Seo
        title="Kenya Travel Guide & Tips for Tourists | Kenya Welcome Concierge"
        description="Expert Kenya travel guides — first-time visiting tips, SIM cards, M-PESA, airport arrival, safaris, costs, safety and the best time to visit."
        keywords="Kenya travel guide, Kenya travel tips, first time Kenya, Kenya safety, best time to visit Kenya"
        path="/travel-guide" />
      
      <PageHeader
        eyebrow="Kenya Travel Guide"
        title="Know before you go"
        subtitle="Honest, practical guides written by local experts for international travellers."
        image="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Open road leading into the Kenyan landscape" />
      

      <section className="bg-sand-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5">
          <Link
            to={`/travel-guide/${featured.slug}`}
            className="group grid overflow-hidden rounded-3xl border border-sand-200 bg-white shadow-card lg:grid-cols-2">
            
            <div className="aspect-[16/10] overflow-hidden lg:aspect-auto">
              <img
                src={featured.image}
                alt={featured.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-clay-500">
                {featured.category}
              </span>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-ink">
                {featured.title}
              </h2>
              <p className="mt-3 text-ink/70">{featured.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-clay-500">
                Read article <ArrowRightIcon className="h-4 w-4" />
              </span>
            </div>
          </Link>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) =>
            <motion.article
              key={post.slug}
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
                to={`/travel-guide/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-sand-200 bg-white shadow-card transition hover:-translate-y-1 hover:shadow-soft">
                
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-center justify-between text-xs text-ink/60">
                      <span className="font-semibold uppercase tracking-widest text-clay-500">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <ClockIcon className="h-3.5 w-3.5" /> {post.readTime}
                      </span>
                    </div>
                    <h3 className="mt-3 font-serif text-lg font-semibold text-ink">
                      {post.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm text-ink/70">
                      {post.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-clay-500">
                      Read more <ArrowRightIcon className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </motion.article>
            )}
          </div>
        </div>
      </section>
    </>);

}