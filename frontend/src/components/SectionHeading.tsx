import React from 'react';
import { motion } from 'framer-motion';
type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
};
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center,
  light
}: Props) {
  return (
    <motion.div
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
        margin: '-80px'
      }}
      transition={{
        duration: 0.5
      }}
      className={`${center ? 'mx-auto text-center' : ''} max-w-2xl`}>
      
      {eyebrow &&
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-clay-500">
          {eyebrow}
        </span>
      }
      <h2
        className={`mt-2 font-serif text-3xl font-semibold sm:text-4xl ${light ? 'text-white' : 'text-ink'}`}>
        
        {title}
      </h2>
      {subtitle &&
      <p
        className={`mt-3 text-base ${light ? 'text-sand-100/80' : 'text-ink/70'}`}>
        
          {subtitle}
        </p>
      }
    </motion.div>);

}