import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  CheckIcon,
  ChevronDownIcon,
  PlaneIcon,
  SmartphoneIcon,
  WalletIcon,
  CarIcon,
  UserCheckIcon } from
'lucide-react';
import { Seo } from '../components/Seo';
import { PageHeader } from '../components/PageHeader';
import { SectionHeading } from '../components/SectionHeading';
import { whatsappLink } from '../data/site';
const PACKAGES = [
{
  name: 'Welcome',
  price: 45,
  popular: false,
  features: [
  'Airport pickup',
  'Meet-and-greet board',
  'Hotel transfer (Nairobi)',
  'WhatsApp support']

},
{
  name: 'Arrival Plus',
  price: 79,
  popular: true,
  features: [
  'Everything in Welcome',
  'SIM card activation',
  'M-PESA onboarding',
  'Local orientation',
  'Bottled water & snacks']

},
{
  name: 'VIP Concierge',
  price: 149,
  popular: false,
  features: [
  'Everything in Arrival Plus',
  'Fast-track assistance',
  'Private premium vehicle',
  'Personal concierge for arrival day',
  'Currency exchange help']

}];

const EXTRAS = [
{
  icon: UserCheckIcon,
  title: 'Meet-and-greet service',
  text: 'A friendly local waits at arrivals with a name board and helps with your bags.'
},
{
  icon: SmartphoneIcon,
  title: 'SIM card activation',
  text: 'Safaricom or Airtel SIM activated and topped up before you leave the terminal.'
},
{
  icon: WalletIcon,
  title: 'M-PESA introduction',
  text: 'We set up and explain Kenya’s mobile money so you can pay like a local.'
},
{
  icon: CarIcon,
  title: 'Hotel transfers',
  text: 'Safe, verified drivers take you directly to your accommodation.'
}];

const FAQS = [
{
  q: 'Where will I meet my concierge at JKIA?',
  a: 'Your concierge waits just outside the arrivals hall with a name board displaying your name. We track your flight, so we’re there even if you’re delayed.'
},
{
  q: 'Do I need to book in advance?',
  a: 'Yes — we recommend booking at least 48 hours before arrival so we can confirm your driver, SIM and any extras.'
},
{
  q: 'Can you help if my flight is delayed?',
  a: 'Absolutely. We monitor your flight in real time and adjust the pickup automatically at no extra cost.'
},
{
  q: 'Which payment methods do you accept?',
  a: 'You can pay by card, bank transfer or M-PESA once it’s set up. Pricing is confirmed before arrival.'
}];

function Faq({ q, a }: {q: string;a: string;}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-sand-200 bg-white">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left">
        
        <span className="font-medium text-ink">{q}</span>
        <ChevronDownIcon
          className={`h-5 w-5 shrink-0 text-clay-500 transition-transform ${open ? 'rotate-180' : ''}`} />
        
      </button>
      {open && <p className="px-5 pb-5 text-sm text-ink/70">{a}</p>}
    </div>);

}
export function AirportServices() {
  return (
    <>
      <Seo
        title="Nairobi Airport Services & Transfers | Kenya Welcome Concierge"
        description="Airport pickup packages, meet-and-greet, SIM card activation, M-PESA onboarding and hotel transfers from Nairobi JKIA for international tourists."
        keywords="Nairobi airport transfer, JKIA pickup, Kenya airport concierge, Kenya SIM card tourist, M-PESA for tourists"
        path="/airport-services" />
      
      <PageHeader
        eyebrow="Airport Arrival Concierge"
        title="Airport Services"
        subtitle="A seamless welcome from the moment you land at Jomo Kenyatta International Airport."
        image="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Aircraft wing above the clouds" />
      

      <section className="bg-sand-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading
            center
            eyebrow="Pickup packages"
            title="Choose your welcome"
            subtitle="Transparent pricing, no airport stress." />
          
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {PACKAGES.map((p, i) =>
            <motion.div
              key={p.name}
              initial={{
                opacity: 0,
                y: 24
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.45,
                delay: i * 0.08
              }}
              className={`relative flex flex-col rounded-2xl border bg-white p-6 shadow-card ${p.popular ? 'border-clay-500 ring-1 ring-clay-500' : 'border-sand-200'}`}>
              
                {p.popular &&
              <span className="absolute -top-3 left-6 rounded-full bg-clay-500 px-3 py-1 text-xs font-semibold text-white">
                    Most popular
                  </span>
              }
                <h3 className="font-serif text-xl font-semibold text-ink">
                  {p.name}
                </h3>
                <p className="mt-2">
                  <span className="font-serif text-4xl font-semibold text-ink">
                    ${p.price}
                  </span>
                  <span className="text-sm text-ink/60"> / arrival</span>
                </p>
                <ul className="mt-5 flex-1 space-y-2.5">
                  {p.features.map((f) =>
                <li
                  key={f}
                  className="flex items-start gap-2 text-sm text-ink/75">
                  
                      <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-savanna-500" />{' '}
                      {f}
                    </li>
                )}
                </ul>
                <a
                href={whatsappLink(
                  `Hi! I’d like to book the ${p.name} airport package.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${p.popular ? 'bg-clay-500 text-white hover:bg-clay-600' : 'bg-sand-100 text-ink hover:bg-sand-200'}`}>
                
                  Book {p.name}
                </a>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading
            eyebrow="What’s included"
            title="Everything for a smooth arrival" />
          
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {EXTRAS.map((e) =>
            <div
              key={e.title}
              className="flex gap-4 rounded-2xl border border-sand-200 bg-sand-50 p-6">
              
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-clay-50 text-clay-500">
                  <e.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-ink">
                    {e.title}
                  </h3>
                  <p className="mt-1 text-sm text-ink/70">{e.text}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="bg-sand-50 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5">
          <SectionHeading center eyebrow="FAQ" title="Common questions" />
          <div className="mt-10 space-y-3">
            {FAQS.map((f) =>
            <Faq key={f.q} {...f} />
            )}
          </div>
        </div>
      </section>
    </>);

}