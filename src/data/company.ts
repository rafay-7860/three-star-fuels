export const company = {
  name: 'THREE STAR FUELS',
  shortName: 'Three Star Fuels',
  tagline: 'POWERING PROGRESS. CONNECTING OPPORTUNITIES.',
  phone: '+971 50 251 0499',
  phoneHref: 'tel:+971502510499',
  email: 'threestarfuels2016@gmail.com',
  emailHref: 'mailto:threestarfuels2016@gmail.com',
  address: {
    line1: 'Jabal Ali Industrial First',
    line2: 'Jebel Ali Industrial Area',
    city: 'Dubai',
    country: 'United Arab Emirates',
    full: 'Jabal Ali Industrial First - Jebel Ali Industrial Area - Dubai - United Arab Emirates.',
  },
  locationLabel: 'Jebel Ali, Dubai, United Arab Emirates',
  mapsUrl: 'https://maps.app.goo.gl/YQnvwUW4i8FbKgxBA',
  seo: {
    title: 'Three Star Fuels | Fuel & Energy Business in Dubai, UAE',
    description:
      'Discover Three Star Fuels in Jebel Ali, Dubai, United Arab Emirates. Explore company information and contact details.',
  },
} as const;

export const navLinks = [
  { label: 'HOME', path: '/' },
  { label: 'ABOUT US', path: '/about' },
  { label: 'SERVICES', path: '/services' },
  { label: 'INDUSTRY', path: '/#industry' },
  { label: 'CONTACT', path: '/contact' },
] as const;
