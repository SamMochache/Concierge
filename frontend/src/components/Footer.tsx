import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MailIcon, PhoneIcon, MapPinIcon, CheckIcon } from 'lucide-react';
import { NAV_LINKS, SITE } from '../data/site';
export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const onSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };
  return (
    <footer className="bg-ink text-sand-100">
      <div className="mx-auto max-w-7xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-clay-500 font-serif text-lg font-semibold text-white">
                K
              </span>
              <span className="font-serif text-lg font-semibold">
                Kenya Welcome Concierge
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-sand-100/70">
              Your personal travel concierge in Kenya — from the moment you land
              to your final sunset on safari.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-base font-semibold text-white">
              Explore
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV_LINKS.map((link) =>
              <li key={link.to}>
                  <Link
                  to={link.to}
                  className="text-sand-100/70 transition hover:text-gold-400">
                  
                    {link.label}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-base font-semibold text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-sand-100/70">
              <li className="flex items-center gap-2">
                <MailIcon className="h-4 w-4 text-gold-400" /> {SITE.email}
              </li>
              <li className="flex items-center gap-2">
                <PhoneIcon className="h-4 w-4 text-gold-400" />{' '}
                {SITE.emergencyPhone}
              </li>
              <li className="flex items-center gap-2">
                <MapPinIcon className="h-4 w-4 text-gold-400" /> Nairobi, Kenya
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-base font-semibold text-white">
              Newsletter
            </h3>
            <p className="mt-4 text-sm text-sand-100/70">
              Kenya travel tips, deals and safari news.
            </p>
            {subscribed ?
            <p className="mt-4 flex items-center gap-2 text-sm text-gold-400">
                <CheckIcon className="h-4 w-4" /> You’re subscribed. Karibu!
              </p> :

            <form onSubmit={onSubscribe} className="mt-4 flex gap-2">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="w-full rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-sand-100/50 focus:border-gold-400 focus:outline-none" />
              
                <button
                type="submit"
                className="rounded-lg bg-gold-500 px-4 py-2 text-sm font-semibold text-ink transition hover:bg-gold-400">
                
                  Join
                </button>
              </form>
            }
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-sand-100/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Kenya Welcome Concierge. All rights
            reserved.
          </p>
          <p>
            Local experts · 24/7 support · Verified partners · Secure bookings
          </p>
        </div>
      </div>
    </footer>);

}