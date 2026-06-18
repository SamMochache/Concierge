import {
  SparklesIcon,
  PlaneIcon,
  SmartphoneIcon,
  WalletIcon,
  BedDoubleIcon,
  BinocularsIcon,
  CompassIcon } from
'lucide-react';

export const TRUST_INDICATORS = [
{ label: 'Local experts', detail: 'Born-and-raised guides' },
{ label: '24/7 support', detail: 'We never sleep on your trip' },
{ label: 'Verified partners', detail: 'Vetted lodges & drivers' },
{ label: 'Secure bookings', detail: 'Protected payments' }];


export const SERVICES = [
{
  id: 'ai-trip-planner',
  icon: SparklesIcon,
  title: 'AI Trip Planner',
  blurb:
  'A personalized Kenya itinerary built around your budget, dates and interests.',
  points: [
  'Budget input',
  'Travel dates',
  'Number of travelers',
  'Interests',
  'Personalized itinerary'],

  to: '/plan-my-trip'
},
{
  id: 'airport-concierge',
  icon: PlaneIcon,
  title: 'Airport Arrival Concierge',
  blurb: 'A friendly face waiting the moment you land at JKIA.',
  points: [
  'Airport pickup',
  'Hotel transfer',
  'Local orientation',
  'Welcome assistance'],

  to: '/airport-services'
},
{
  id: 'sim-card',
  icon: SmartphoneIcon,
  title: 'SIM Card Assistance',
  blurb: 'Get connected within minutes of arrival.',
  points: ['Safaricom setup', 'Airtel setup', 'Data package recommendations'],
  to: '/airport-services'
},
{
  id: 'mpesa',
  icon: WalletIcon,
  title: 'M-PESA Onboarding',
  blurb: 'Pay like a local with Kenya’s famous mobile money.',
  points: [
  'Step-by-step tutorial',
  'Payment guidance',
  'Tourist-friendly explanation'],

  to: '/airport-services'
},
{
  id: 'accommodation',
  icon: BedDoubleIcon,
  title: 'Accommodation Booking',
  blurb: 'Hand-picked stays for every style and budget.',
  points: ['Hotels', 'Lodges', 'Airbnb-style stays', 'Luxury resorts'],
  to: '/accommodation'
},
{
  id: 'safari',
  icon: BinocularsIcon,
  title: 'Safari Booking',
  blurb: 'Iconic parks and tailor-made safari journeys.',
  points: ['Masai Mara', 'Amboseli', 'Tsavo', 'Samburu', 'Custom safaris'],
  to: '/safaris'
},
{
  id: 'experiences',
  icon: CompassIcon,
  title: 'Local Experiences',
  blurb: 'Go beyond the guidebook with authentic encounters.',
  points: [
  'Cultural tours',
  'Food tours',
  'Coffee farm visits',
  'Hiking adventures',
  'Photography tours'],

  to: '/safaris'
}];


export const TESTIMONIALS = [
{
  name: 'Emma & James',
  origin: 'London, United Kingdom',
  text: 'From the airport pickup to our Masai Mara lodge, everything was seamless. It felt like having a local best friend organising our trip.',
  rating: 5,
  avatar:
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
},
{
  name: 'Michael Carter',
  origin: 'Denver, USA',
  text: 'The SIM and M-PESA setup saved us so much stress. We were paying for everything like locals within an hour of landing.',
  rating: 5,
  avatar:
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
},
{
  name: 'Sophie Laurent',
  origin: 'Lyon, France',
  text: 'The AI trip planner gave us an itinerary we never would have built ourselves. Diani Beach then Amboseli — perfection.',
  rating: 5,
  avatar:
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80'
},
{
  name: 'Liam O’Connor',
  origin: 'Sydney, Australia',
  text: 'Verified drivers, honest pricing, and 24/7 WhatsApp support. As a solo traveler I felt safe the entire trip.',
  rating: 5,
  avatar:
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
}];


export const PARTNER_CATEGORIES = [
{ label: 'Hotels & Lodges', count: '120+', icon: BedDoubleIcon },
{ label: 'Safari Operators', count: '40+', icon: BinocularsIcon },
{ label: 'Trusted Drivers', count: '90+', icon: PlaneIcon },
{ label: 'Tour Guides', count: '60+', icon: CompassIcon }];