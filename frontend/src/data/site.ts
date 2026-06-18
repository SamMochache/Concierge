export const SITE = {
  name: 'Kenya Welcome Concierge',
  url: 'https://kenyawelcomeconcierge.com',
  whatsappNumber: '254740532120',
  email: 'hello@kenyawelcomeconcierge.com',
  emergencyPhone: '+254 740 532 120',
  ogImage:
  'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80'
};

export const whatsappLink = (message?: string) =>
`https://wa.me/${SITE.whatsappNumber}${
message ? `?text=${encodeURIComponent(message)}` : ''}`;


export const NAV_LINKS = [
{ label: 'Home', to: '/' },
{ label: 'Plan My Trip', to: '/plan-my-trip' },
{ label: 'Airport Services', to: '/airport-services' },
{ label: 'Accommodation', to: '/accommodation' },
{ label: 'Safaris & Experiences', to: '/safaris' },
{ label: 'Kenya Travel Guide', to: '/travel-guide' },
{ label: 'About Us', to: '/about' },
{ label: 'Contact', to: '/contact' }];
