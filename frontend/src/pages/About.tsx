
import { motion } from 'framer-motion';
import {
  HeartIcon,
  ShieldCheckIcon,
  UsersIcon,
  GlobeIcon,
  MessageCircleIcon } from
'lucide-react';
import { Seo } from '../components/Seo';
import { PageHeader } from '../components/PageHeader';
import { SectionHeading } from '../components/SectionHeading';
import { whatsappLink } from '../data/site';
const founderPortrait = new URL('../public/Sam Mochache.png', import.meta.url).href;

const VALUES = [
{
  icon: UsersIcon,
  title: 'Local experts',
  text: 'Our team is born and raised in Kenya — we know the hidden gems and the honest prices.'
},
{
  icon: ShieldCheckIcon,
  title: 'Trust & safety',
  text: 'Every driver, guide and lodge is personally vetted. Your safety is our priority.'
},
{
  icon: HeartIcon,
  title: 'Genuine hospitality',
  text: 'Karibu means welcome. We treat every traveller like a guest in our own home.'
},
{
  icon: GlobeIcon,
  title: 'Built for visitors',
  text: 'Designed for travellers from the UK, USA, Europe, Canada and Australia.'
}];

export function About() {
  return (
    <>
      <Seo
        title="About Us | Kenya Welcome Concierge"
        description="Meet the founder behind Kenya Welcome Concierge — personal, trusted support for international tourists visiting Kenya."
        keywords="about Kenya Welcome Concierge, Kenya travel founder, trusted Kenya concierge"
        path="/about" />
      
      <PageHeader
        eyebrow="About Us"
        title="A personal welcome to Kenya"
        subtitle="Kenya Welcome Concierge was founded to give every visitor calm, trusted, one-to-one support from the first message to the final goodbye."
        image="https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Local Kenyan guides welcoming visitors" />
      

      <section className="bg-sand-50 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{
              opacity: 0,
              x: -24
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5
            }}>
            
            <SectionHeading
              eyebrow="Meet the founder"
              title="You are looked after by a real person, not a booking desk" />
            
            <div className="mt-5 space-y-4 text-ink/70">
              <p>
                I founded Kenya Welcome Concierge because I wanted travellers to
                feel the warmth of Kenya before they even land. Visiting a new
                country should feel exciting, not confusing, and I believe good
                hospitality starts with listening carefully to what each guest
                needs.
              </p>
              <p>
                When you message us, you are not being passed around a faceless
                service. You are speaking with someone who cares about the
                details: safe airport pickup, honest local guidance, comfortable
                stays, smooth safari planning, and the small questions that make
                a trip feel easy.
              </p>
              <p>
                My goal is simple: to be your trusted local contact in Kenya,
                ready to help with patience, clarity, and a personal touch every
                step of the way.
              </p>
              <a
                href={whatsappLink(
                  'Hi, I saw your About page and would like personal help planning my Kenya trip.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-card transition hover:brightness-105">
                
                <MessageCircleIcon className="h-5 w-5" aria-hidden="true" />
                WhatsApp
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5
            }}
            className="overflow-hidden rounded-3xl bg-white shadow-soft">
            
            <img
              src={founderPortrait}
              alt="Portrait of Sam Mochache, founder of Kenya Welcome Concierge"
              className="aspect-square w-full object-cover object-center" />
            <div className="border-t border-sand-200 p-5">
              <p className="font-serif text-xl font-semibold text-ink">
                Sam Mochache, Founder
              </p>
              <p className="mt-2 text-sm text-ink/70">
                Your direct local contact for a safer, smoother, more personal
                Kenya experience.
              </p>
            </div>
          </motion.div>
          
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading
            center
            eyebrow="Why travellers trust us"
            title="What we stand for" />
          
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) =>
            <motion.div
              key={v.title}
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
                duration: 0.4,
                delay: i * 0.08
              }}
              className="rounded-2xl border border-sand-200 bg-sand-50 p-6">
              
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-clay-50 text-clay-500">
                  <v.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-serif text-lg font-semibold text-ink">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm text-ink/70">{v.text}</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </>);

}
