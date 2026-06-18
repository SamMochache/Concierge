import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { MenuIcon, XIcon, MessageCircleIcon } from 'lucide-react';
import { NAV_LINKS, whatsappLink } from '../data/site';
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);
  const solid = scrolled || !isHome;
  const textColor = solid ? 'text-ink' : 'text-white';
  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${solid ? 'bg-sand-50/95 shadow-card backdrop-blur' : 'bg-transparent'}`}>
      
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4"
        aria-label="Primary">
        
        <Link to="/" className={`flex items-center gap-2 ${textColor}`}>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-clay-500 font-serif text-lg font-semibold text-white">
            K
          </span>
          <span className="font-serif text-lg font-semibold leading-tight">
            Kenya Welcome
            <span className="block text-xs font-sans font-medium tracking-wide opacity-80">
              Concierge
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-6 xl:flex">
          {NAV_LINKS.map((link) =>
          <li key={link.to}>
              <NavLink
              to={link.to}
              className={({ isActive }) =>
              `text-sm font-medium transition-colors hover:text-clay-500 ${textColor} ${isActive ? 'text-clay-500' : ''}`
              }>
              
                {link.label}
              </NavLink>
            </li>
          )}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={whatsappLink('Hi! I’d like to plan a trip to Kenya.')}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-105 sm:flex">
            
            <MessageCircleIcon className="h-4 w-4" aria-hidden="true" />
            WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className={`xl:hidden ${textColor}`}>
            
            {open ?
            <XIcon className="h-7 w-7" /> :

            <MenuIcon className="h-7 w-7" />
            }
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open &&
        <motion.div
          initial={{
            height: 0,
            opacity: 0
          }}
          animate={{
            height: 'auto',
            opacity: 1
          }}
          exit={{
            height: 0,
            opacity: 0
          }}
          className="overflow-hidden bg-sand-50 xl:hidden">
          
            <ul className="space-y-1 px-5 pb-6 pt-2">
              {NAV_LINKS.map((link) =>
            <li key={link.to}>
                  <NavLink
                to={link.to}
                className={({ isActive }) =>
                `block rounded-lg px-3 py-2.5 text-base font-medium text-ink hover:bg-sand-100 ${isActive ? 'bg-sand-100 text-clay-500' : ''}`
                }>
                
                    {link.label}
                  </NavLink>
                </li>
            )}
            </ul>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}