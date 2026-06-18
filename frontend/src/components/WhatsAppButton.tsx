import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircleIcon } from 'lucide-react';
import { whatsappLink } from '../data/site';
export function WhatsAppButton() {
  return (
    <motion.a
      href={whatsappLink('Hi! I’d like help planning my trip to Kenya.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{
        scale: 0,
        opacity: 0
      }}
      animate={{
        scale: 1,
        opacity: 1
      }}
      transition={{
        delay: 0.6,
        type: 'spring',
        stiffness: 220,
        damping: 18
      }}
      whileHover={{
        scale: 1.06
      }}
      whileTap={{
        scale: 0.95
      }}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3.5 text-sm font-semibold text-white shadow-soft">
      
      <MessageCircleIcon className="h-5 w-5" aria-hidden="true" />
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </motion.a>);

}