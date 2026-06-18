import React, { useState } from 'react';
import {
  CheckIcon,
  MailIcon,
  MessageCircleIcon,
  PhoneIcon,
  AlertCircleIcon,
  SendIcon } from
'lucide-react';
import { Seo } from '../components/Seo';
import { PageHeader } from '../components/PageHeader';
import { SITE, whatsappLink } from '../data/site';
export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <Seo
        title="Contact Us | Kenya Welcome Concierge"
        description="Get in touch with Kenya Welcome Concierge — contact form, WhatsApp, email and 24/7 emergency support for travellers in Kenya."
        keywords="contact Kenya concierge, Kenya travel support, WhatsApp Kenya travel"
        path="/contact" />
      
      <PageHeader
        eyebrow="Contact"
        title="We’re here 24/7"
        subtitle="Questions before you book, or already in Kenya and need a hand? Reach us any time."
        image="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1920&q=80"
        imageAlt="Sunset over the Kenyan savanna" />
      

      <section className="bg-sand-50 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-5">
          <div className="lg:col-span-3 rounded-3xl border border-sand-200 bg-white p-6 shadow-card sm:p-8">
            <h2 className="font-serif text-2xl font-semibold text-ink">
              Send us a message
            </h2>
            {sent ?
            <p className="mt-6 flex items-center gap-2 rounded-lg bg-savanna-100 px-4 py-3 text-sm font-medium text-savanna-700">
                <CheckIcon className="h-4 w-4" /> Thank you! Our team will reply
                within 24 hours.
              </p> :

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="mt-6 grid gap-4 sm:grid-cols-2">
              
                <div>
                  <label
                  htmlFor="name"
                  className="text-sm font-medium text-ink">
                  
                    Full name
                  </label>
                  <input
                  id="name"
                  required
                  className="mt-1.5 w-full rounded-lg border border-sand-200 px-3 py-2.5 text-sm focus:border-clay-500 focus:outline-none" />
                
                </div>
                <div>
                  <label
                  htmlFor="email"
                  className="text-sm font-medium text-ink">
                  
                    Email
                  </label>
                  <input
                  id="email"
                  type="email"
                  required
                  className="mt-1.5 w-full rounded-lg border border-sand-200 px-3 py-2.5 text-sm focus:border-clay-500 focus:outline-none" />
                
                </div>
                <div className="sm:col-span-2">
                  <label
                  htmlFor="subject"
                  className="text-sm font-medium text-ink">
                  
                    Subject
                  </label>
                  <input
                  id="subject"
                  className="mt-1.5 w-full rounded-lg border border-sand-200 px-3 py-2.5 text-sm focus:border-clay-500 focus:outline-none" />
                
                </div>
                <div className="sm:col-span-2">
                  <label
                  htmlFor="message"
                  className="text-sm font-medium text-ink">
                  
                    Message
                  </label>
                  <textarea
                  id="message"
                  rows={5}
                  required
                  className="mt-1.5 w-full rounded-lg border border-sand-200 px-3 py-2.5 text-sm focus:border-clay-500 focus:outline-none" />
                
                </div>
                <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-clay-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-clay-600 sm:col-span-2 sm:w-fit">
                
                  <SendIcon className="h-4 w-4" /> Send message
                </button>
              </form>
            }
          </div>

          <div className="lg:col-span-2 space-y-4">
            <a
              href={whatsappLink(
                'Hi! I have a question about planning my Kenya trip.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl bg-[#25D366] p-6 text-white shadow-card transition hover:brightness-105">
              
              <MessageCircleIcon className="h-8 w-8" />
              <div>
                <p className="font-serif text-lg font-semibold">
                  Chat on WhatsApp
                </p>
                <p className="text-sm text-white/90">Fastest way to reach us</p>
              </div>
            </a>

            <div className="rounded-2xl border border-sand-200 bg-white p-6 shadow-card">
              <div className="flex items-center gap-3">
                <MailIcon className="h-6 w-6 text-clay-500" />
                <div>
                  <p className="text-sm font-semibold text-ink">Email</p>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-sm text-ink/70 hover:text-clay-500">
                    
                    {SITE.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-clay-100 bg-clay-50 p-6">
              <div className="flex items-center gap-3">
                <AlertCircleIcon className="h-6 w-6 text-clay-600" />
                <p className="font-serif text-lg font-semibold text-ink">
                  24/7 Emergency support
                </p>
              </div>
              <p className="mt-2 text-sm text-ink/70">
                If you’re a traveller currently in Kenya and need urgent help,
                call us any time.
              </p>
              <a
                href={`tel:${SITE.emergencyPhone.replace(/\s/g, '')}`}
                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-clay-600">
                
                <PhoneIcon className="h-4 w-4" /> {SITE.emergencyPhone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>);

}