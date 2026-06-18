export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  image: string;
  body: string[];
};

export const POSTS: Post[] = [
{
  slug: 'first-time-visiting-kenya',
  title: 'First Time Visiting Kenya: The Complete Beginner’s Guide',
  excerpt:
  'Everything a first-time visitor needs — visas, money, safety, and what to expect from your arrival.',
  category: 'Getting Started',
  readTime: '8 min read',
  image:
  'https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=800&q=80',
  body: [
  'Kenya is one of Africa’s most welcoming and rewarding destinations for first-time visitors. From the wildlife of the Masai Mara to the white sands of Diani Beach, your trip can be as adventurous or relaxed as you like.',
  'Most travellers from the UK, USA, Canada, Australia and the EU need an eTA (electronic travel authorisation) before arrival — apply online a few days ahead. Bring a passport valid for at least six months.',
  'Our concierge team meets you at the airport, sorts your SIM card and M-PESA, and gets you safely to your hotel so your first hours in Kenya are stress-free.']

},
{
  slug: 'kenya-sim-card-guide',
  title: 'Kenya SIM Card Guide for Tourists (Safaricom vs Airtel)',
  excerpt:
  'Which network to choose, where to buy, and the best data packages for travellers.',
  category: 'Connectivity',
  readTime: '6 min read',
  image:
  'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
  body: [
  'Staying connected in Kenya is cheap and easy. Safaricom has the widest coverage including remote safari areas, while Airtel is often slightly cheaper for data.',
  'You can buy a SIM at the airport with your passport. A typical tourist data bundle costs a few dollars for several gigabytes.',
  'Our team activates and tops up your SIM for you on arrival, so you’re online before you leave the terminal.']

},
{
  slug: 'how-mpesa-works-for-tourists',
  title: 'How M-PESA Works for Tourists',
  excerpt:
  'Kenya runs on mobile money. Here’s how to set up and use M-PESA as a visitor.',
  category: 'Money',
  readTime: '7 min read',
  image:
  'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
  body: [
  'M-PESA is Kenya’s mobile money system, used for everything from taxis to restaurants and tips. It links to your Safaricom number.',
  'Tourists can load cash onto M-PESA at agents found on nearly every street corner, then pay by entering a till number.',
  'We provide a step-by-step onboarding so you can pay like a local safely and confidently.']

},
{
  slug: 'nairobi-airport-arrival-guide',
  title: 'Nairobi (JKIA) Airport Arrival Guide',
  excerpt:
  'Step-by-step through immigration, baggage, and your concierge meet-and-greet.',
  category: 'Arrival',
  readTime: '5 min read',
  image:
  'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
  body: [
  'Jomo Kenyatta International Airport (JKIA) is Kenya’s main gateway. After landing, you’ll clear immigration with your eTA, collect bags, and pass customs.',
  'Our concierge waits just outside arrivals with a name board, helps with your SIM and money, and drives you directly to your accommodation.',
  'Avoid unlicensed taxis — always pre-book a verified transfer.']

},
{
  slug: 'best-kenya-safaris',
  title: 'The Best Kenya Safaris for Every Traveller',
  excerpt:
  'Masai Mara, Amboseli, Tsavo and Samburu compared — find your perfect park.',
  category: 'Safari',
  readTime: '9 min read',
  image:
  'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=800&q=80',
  body: [
  'The Masai Mara is the crown jewel, famous for the Great Migration between July and October.',
  'Amboseli offers iconic elephant herds framed by Mount Kilimanjaro, while Tsavo and Samburu reward those seeking quieter, wilder landscapes.',
  'We build custom safari routes that match your time, budget and bucket list.']

},
{
  slug: 'kenya-travel-costs',
  title: 'Kenya Travel Costs: A Realistic Budget Breakdown',
  excerpt:
  'What you’ll actually spend on safaris, stays, food and transport.',
  category: 'Money',
  readTime: '7 min read',
  image:
  'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
  body: [
  'Kenya suits a wide range of budgets. Mid-range travellers typically spend $150–$300 per day including stays, park fees and meals.',
  'Safari lodges and park fees are the biggest costs; beach stays and city hotels are far more affordable.',
  'We tailor itineraries to your budget and show transparent pricing before you book.']

},
{
  slug: 'kenya-safety-guide',
  title: 'Kenya Safety Guide for International Visitors',
  excerpt:
  'Practical, honest advice on staying safe and travelling smart in Kenya.',
  category: 'Safety',
  readTime: '6 min read',
  image:
  'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80',
  body: [
  'Kenya is welcoming and most visits are trouble-free. Use common sense: avoid displaying valuables and use verified transport.',
  'Stick to licensed drivers and guides, and keep our 24/7 WhatsApp line handy for any situation.',
  'Our local team monitors conditions and advises you in real time throughout your trip.']

},
{
  slug: 'kenya-vs-tanzania-safari',
  title: 'Kenya vs Tanzania Safari: Which Should You Choose?',
  excerpt: 'A clear comparison of cost, wildlife, crowds and experience.',
  category: 'Safari',
  readTime: '8 min read',
  image:
  'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=800&q=80',
  body: [
  'Both countries share the Serengeti–Mara ecosystem, so wildlife is spectacular in each.',
  'Kenya tends to be more affordable and easier to combine with beaches; Tanzania offers the vast Serengeti and Ngorongoro Crater.',
  'For first-timers and shorter trips, Kenya is often the more flexible and budget-friendly choice.']

},
{
  slug: 'best-time-to-visit-kenya',
  title: 'The Best Time to Visit Kenya',
  excerpt:
  'Seasons, weather and the migration calendar to plan the perfect trip.',
  category: 'Planning',
  readTime: '6 min read',
  image:
  'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80',
  body: [
  'The dry seasons (June–October and January–February) offer the best wildlife viewing and beach weather.',
  'The Great Migration peaks in the Mara between July and October — book well ahead.',
  'Green seasons bring lower prices, lush scenery and fewer crowds.']

}];


export const getPost = (slug: string) => POSTS.find((p) => p.slug === slug);