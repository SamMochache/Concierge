export type Listing = {
  id: string;
  name: string;
  type: 'Hotels' | 'Lodges' | 'Airbnb-style' | 'Luxury resorts';
  location: string;
  price: number;
  rating: number;
  image: string;
};

export const LISTINGS: Listing[] = [
{
  id: 'mara-tented',
  name: 'Mara Plains Tented Camp',
  type: 'Lodges',
  location: 'Masai Mara',
  price: 480,
  rating: 4.9,
  image:
  'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80'
},
{
  id: 'diani-villa',
  name: 'Diani Beachfront Villa',
  type: 'Airbnb-style',
  location: 'Diani Beach',
  price: 210,
  rating: 4.8,
  image:
  'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80'
},
{
  id: 'nairobi-boutique',
  name: 'The Nairobi Boutique Hotel',
  type: 'Hotels',
  location: 'Nairobi',
  price: 160,
  rating: 4.7,
  image:
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'
},
{
  id: 'amboseli-resort',
  name: 'Amboseli Kilimanjaro Resort',
  type: 'Luxury resorts',
  location: 'Amboseli',
  price: 620,
  rating: 5.0,
  image:
  'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80'
},
{
  id: 'lamu-house',
  name: 'Lamu Old Town Stone House',
  type: 'Airbnb-style',
  location: 'Lamu',
  price: 140,
  rating: 4.6,
  image:
  'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80'
},
{
  id: 'tsavo-lodge',
  name: 'Tsavo Red Earth Lodge',
  type: 'Lodges',
  location: 'Tsavo',
  price: 390,
  rating: 4.8,
  image:
  'https://images.unsplash.com/photo-1535941339077-2dd1c7963098?auto=format&fit=crop&w=800&q=80'
},
{
  id: 'westlands-hotel',
  name: 'Westlands Skyline Hotel',
  type: 'Hotels',
  location: 'Nairobi',
  price: 130,
  rating: 4.5,
  image:
  'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80'
},
{
  id: 'samburu-resort',
  name: 'Samburu River Luxury Resort',
  type: 'Luxury resorts',
  location: 'Samburu',
  price: 560,
  rating: 4.9,
  image:
  'https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?auto=format&fit=crop&w=800&q=80'
}];


export const SAFARIS = [
{
  id: 'masai-mara',
  name: 'Masai Mara',
  tagline: 'The Great Migration & big cats',
  days: '3–5 days',
  image:
  'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=80'
},
{
  id: 'amboseli',
  name: 'Amboseli',
  tagline: 'Elephants beneath Kilimanjaro',
  days: '2–4 days',
  image:
  'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=800&q=80'
},
{
  id: 'tsavo',
  name: 'Tsavo',
  tagline: 'Red elephants & vast wilderness',
  days: '3–4 days',
  image:
  'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=800&q=80'
},
{
  id: 'samburu',
  name: 'Samburu',
  tagline: 'Rare northern wildlife',
  days: '2–3 days',
  image:
  'https://images.unsplash.com/photo-1503656142023-618e7d1f435a?auto=format&fit=crop&w=800&q=80'
},
{
  id: 'custom',
  name: 'Custom Safari',
  tagline: 'Designed entirely around you',
  days: 'Flexible',
  image:
  'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80'
}];


export const EXPERIENCES = [
{
  name: 'Cultural Tours',
  image:
  'https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=800&q=80'
},
{
  name: 'Food Tours',
  image:
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80'
},
{
  name: 'Coffee Farm Visits',
  image:
  'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80'
},
{
  name: 'Hiking Adventures',
  image:
  'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80'
},
{
  name: 'Photography Tours',
  image:
  'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80'
}];