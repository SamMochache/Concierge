import React from 'react';
import { motion } from 'framer-motion';
type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: string;
  imageAlt: string;
};
export function PageHeader({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt
}: Props) {
  return (
    <section className="relative flex min-h-[52vh] items-end overflow-hidden">
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover" />
      
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/40 to-ink/30" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-12 pt-28">
        <motion.div
          initial={{
            opacity: 0,
            y: 24
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.6
          }}
          className="max-w-2xl">
          
          {eyebrow &&
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
              {eyebrow}
            </span>
          }
          <h1 className="mt-2 font-serif text-4xl font-semibold text-white sm:text-5xl">
            {title}
          </h1>
          {subtitle &&
          <p className="mt-3 max-w-xl text-lg text-sand-100/90">{subtitle}</p>
          }
        </motion.div>
      </div>
    </section>);

}