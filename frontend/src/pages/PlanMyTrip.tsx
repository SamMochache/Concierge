import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckIcon, SparklesIcon, MapPinIcon, SendIcon } from 'lucide-react';
import { Seo } from '../components/Seo';
import { PageHeader } from '../components/PageHeader';
import { SITE } from '../data/site';
const TRAVELER_TYPES = ['Solo', 'Couple', 'Family', 'Group'] as const;
const INTERESTS = [
'Safari & Wildlife',
'Beaches',
'Culture',
'Food',
'Adventure',
'Photography',
'Relaxation',
'City life'];

const STAYS = ['Budget', 'Mid-range', 'Luxury', 'Mix of styles'];
type Itinerary = {
  day: number;
  title: string;
  detail: string;
};
function buildItinerary(opts: {
  travelerType: string;
  interests: string[];
  stay: string;
}): Itinerary[] {
  const base: Itinerary[] = [
  {
    day: 1,
    title: 'Arrival in Nairobi',
    detail:
    'Airport meet-and-greet, SIM + M-PESA setup, and transfer to your hotel.'
  }];

  if (
  opts.interests.includes('Safari & Wildlife') ||
  opts.interests.length === 0)
  {
    base.push(
      {
        day: 2,
        title: 'Fly to the Masai Mara',
        detail:
        'Afternoon game drive in search of lions, elephants and the big five.'
      },
      {
        day: 3,
        title: 'Full-day Mara safari',
        detail: 'Sunrise and sunset game drives with a private guide.'
      }
    );
  }
  if (opts.interests.includes('Culture')) {
    base.push({
      day: base.length + 1,
      title: 'Cultural village visit',
      detail: 'Meet a Maasai community and learn local traditions.'
    });
  }
  if (
  opts.interests.includes('Beaches') ||
  opts.interests.includes('Relaxation'))
  {
    base.push({
      day: base.length + 1,
      title: 'Diani Beach escape',
      detail: 'Relax on white sand and turquoise water on the Kenyan coast.'
    });
  }
  if (opts.interests.includes('Food')) {
    base.push({
      day: base.length + 1,
      title: 'Nairobi food tour',
      detail: 'Taste Kenyan cuisine and visit a working coffee farm.'
    });
  }
  base.push({
    day: base.length + 1,
    title: 'Departure',
    detail: `Private transfer back to JKIA — tailored for a ${opts.travelerType.toLowerCase()} trip with ${opts.stay.toLowerCase()} stays.`
  });
  return base;
}
export function PlanMyTrip() {
  const [arrival, setArrival] = useState('');
  const [departure, setDeparture] = useState('');
  const [budget, setBudget] = useState(2500);
  const [travelerType, setTravelerType] = useState<string>('Couple');
  const [interests, setInterests] = useState<string[]>(['Safari & Wildlife']);
  const [stay, setStay] = useState('Mid-range');
  const [itinerary, setItinerary] = useState<Itinerary[] | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const toggleInterest = (i: string) =>
  setInterests((prev) =>
  prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
  );
  const generate = (e: React.FormEvent) => {
    e.preventDefault();
    setItinerary(
      buildItinerary({
        travelerType,
        interests,
        stay
      })
    );
    setSubmitted(false);
    setTimeout(() => {
      document.getElementById('itinerary-preview')?.scrollIntoView({
        behavior: 'smooth'
      });
    }, 100);
  };
  return (
    <>
      <Seo
        title="Plan My Trip | AI Kenya Travel Planner — Kenya Welcome Concierge"
        description="Use our AI Kenya trip planner to generate a personalized itinerary based on your dates, budget, travel style and interests."
        keywords="Kenya travel planner, Kenya itinerary, AI trip planner Kenya, plan Kenya safari"
        path="/plan-my-trip" />
      
      <PageHeader
        eyebrow="AI Trip Planner"
        title="Plan My Trip"
        subtitle="Tell us a little about your dream Kenya trip and we’ll craft a personalized itinerary in seconds."
        image="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Lion resting on the savanna in the Masai Mara" />
      

      <section className="bg-sand-50 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-5">
          <form
            onSubmit={generate}
            className="lg:col-span-3 rounded-3xl border border-sand-200 bg-white p-6 shadow-card sm:p-8">
            
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="arrival"
                  className="text-sm font-medium text-ink">
                  
                  Arrival date
                </label>
                <input
                  id="arrival"
                  type="date"
                  required
                  value={arrival}
                  onChange={(e) => setArrival(e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-sand-200 px-3 py-2.5 text-sm focus:border-clay-500 focus:outline-none" />
                
              </div>
              <div>
                <label
                  htmlFor="departure"
                  className="text-sm font-medium text-ink">
                  
                  Departure date
                </label>
                <input
                  id="departure"
                  type="date"
                  required
                  value={departure}
                  onChange={(e) => setDeparture(e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-sand-200 px-3 py-2.5 text-sm focus:border-clay-500 focus:outline-none" />
                
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="budget"
                className="flex items-center justify-between text-sm font-medium text-ink">
                
                <span>Budget per person</span>
                <span className="font-serif text-lg text-clay-500">
                  ${budget.toLocaleString()}
                </span>
              </label>
              <input
                id="budget"
                type="range"
                min={500}
                max={10000}
                step={250}
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="mt-2 w-full accent-clay-500" />
              
            </div>

            <fieldset className="mt-6">
              <legend className="text-sm font-medium text-ink">
                Traveler type
              </legend>
              <div className="mt-2 flex flex-wrap gap-2">
                {TRAVELER_TYPES.map((t) =>
                <button
                  key={t}
                  type="button"
                  onClick={() => setTravelerType(t)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${travelerType === t ? 'bg-clay-500 text-white' : 'bg-sand-100 text-ink hover:bg-sand-200'}`}>
                  
                    {t}
                  </button>
                )}
              </div>
            </fieldset>

            <fieldset className="mt-6">
              <legend className="text-sm font-medium text-ink">
                Interests
              </legend>
              <div className="mt-2 flex flex-wrap gap-2">
                {INTERESTS.map((i) => {
                  const active = interests.includes(i);
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => toggleInterest(i)}
                      className={`flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-medium transition ${active ? 'bg-savanna-500 text-white' : 'bg-sand-100 text-ink hover:bg-sand-200'}`}>
                      
                      {active && <CheckIcon className="h-3.5 w-3.5" />} {i}
                    </button>);

                })}
              </div>
            </fieldset>

            <fieldset className="mt-6">
              <legend className="text-sm font-medium text-ink">
                Accommodation preference
              </legend>
              <div className="mt-2 flex flex-wrap gap-2">
                {STAYS.map((s) =>
                <button
                  key={s}
                  type="button"
                  onClick={() => setStay(s)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${stay === s ? 'bg-gold-500 text-ink' : 'bg-sand-100 text-ink hover:bg-sand-200'}`}>
                  
                    {s}
                  </button>
                )}
              </div>
            </fieldset>

            <button
              type="submit"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-clay-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-clay-600 sm:w-auto">
              
              <SparklesIcon className="h-4 w-4" /> Generate my itinerary
            </button>
          </form>

          <aside className="lg:col-span-2">
            <div className="sticky top-24 rounded-3xl bg-savanna-700 p-6 text-sand-100 sm:p-8">
              <h2 className="font-serif text-2xl font-semibold text-white">
                How it works
              </h2>
              <ol className="mt-5 space-y-4 text-sm">
                {[
                'Share your dates, budget and interests',
                'We generate a personalized itinerary preview',
                'Send a booking inquiry and our team finalises everything'].
                map((step, i) =>
                <li key={step} className="flex gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold-500 text-xs font-semibold text-ink">
                      {i + 1}
                    </span>
                    <span className="text-sand-100/90">{step}</span>
                  </li>
                )}
              </ol>
            </div>
          </aside>
        </div>

        <AnimatePresence>
          {itinerary &&
          <motion.div
            id="itinerary-preview"
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            className="mx-auto mt-12 max-w-7xl px-5">
            
              <div className="rounded-3xl border border-sand-200 bg-white p-6 shadow-soft sm:p-10">
                <div className="flex items-center gap-2 text-clay-500">
                  <SparklesIcon className="h-5 w-5" />
                  <span className="text-xs font-semibold uppercase tracking-widest">
                    Your personalized preview
                  </span>
                </div>
                <h2 className="mt-2 font-serif text-3xl font-semibold text-ink">
                  A {itinerary.length}-day Kenya journey
                </h2>

                <ol className="mt-8 space-y-5 border-l border-sand-200 pl-6">
                  {itinerary.map((d) =>
                <li key={d.day} className="relative">
                      <span className="absolute -left-[31px] flex h-6 w-6 items-center justify-center rounded-full bg-clay-500 text-xs font-semibold text-white">
                        {d.day}
                      </span>
                      <h3 className="flex items-center gap-2 font-serif text-lg font-semibold text-ink">
                        <MapPinIcon className="h-4 w-4 text-savanna-500" />{' '}
                        {d.title}
                      </h3>
                      <p className="mt-1 text-sm text-ink/70">{d.detail}</p>
                    </li>
                )}
                </ol>

                <div className="mt-10 rounded-2xl bg-sand-100 p-6">
                  <h3 className="font-serif text-xl font-semibold text-ink">
                    Send a booking inquiry
                  </h3>
                  <p className="mt-1 text-sm text-ink/70">
                    Our concierge team will refine this itinerary and send you a
                    quote.
                  </p>
                  {submitted ?
                <p className="mt-4 flex items-center gap-2 rounded-lg bg-savanna-100 px-4 py-3 text-sm font-medium text-savanna-700">
                      <CheckIcon className="h-4 w-4" /> Thanks! We’ll be in
                      touch within 24 hours.
                    </p> :

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="mt-4 grid gap-3 sm:grid-cols-2">
                  
                      <input
                    required
                    placeholder="Full name"
                    className="rounded-lg border border-sand-200 px-3 py-2.5 text-sm focus:border-clay-500 focus:outline-none" />
                  
                      <input
                    required
                    type="email"
                    placeholder="Email address"
                    className="rounded-lg border border-sand-200 px-3 py-2.5 text-sm focus:border-clay-500 focus:outline-none" />
                  
                      <textarea
                    placeholder="Anything else we should know?"
                    rows={3}
                    className="sm:col-span-2 rounded-lg border border-sand-200 px-3 py-2.5 text-sm focus:border-clay-500 focus:outline-none" />
                  
                      <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-clay-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-clay-600 sm:col-span-2 sm:w-fit">
                    
                        <SendIcon className="h-4 w-4" /> Send inquiry
                      </button>
                    </form>
                }
                </div>
              </div>
            </motion.div>
          }
        </AnimatePresence>
      </section>
    </>);

}