export type IndustryImage = {
  id: string;
  src: string;
  caption: string;
  alt: string;
  className?: string;
};

/** Editorial sample photographs only — not Three Star Fuels facilities or projects. */
export const industryImages: IndustryImage[] = [
  {
    id: 'storage',
    src: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1400&q=80',
    caption: 'Fuel storage infrastructure',
    alt: 'Editorial stock: petroleum storage tanks against sky',
    className: 'md:col-span-2 md:row-span-2',
  },
  {
    id: 'facility',
    src: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=80',
    caption: 'Industrial facilities',
    alt: 'Editorial stock: industrial energy facility',
  },
  {
    id: 'logistics',
    src: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=900&q=80',
    caption: 'Logistics and transportation',
    alt: 'Editorial stock: fuel tanker transportation',
  },
  {
    id: 'port',
    src: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80',
    caption: 'Port environments',
    alt: 'Editorial stock: port and shipping logistics',
    className: 'md:col-span-2',
  },
  {
    id: 'pipelines',
    src: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=900&q=80',
    caption: 'Industrial pipelines',
    alt: 'Editorial stock: industrial pipeline systems',
  },
  {
    id: 'energy',
    src: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=80',
    caption: 'Energy-sector infrastructure',
    alt: 'Editorial stock: power and energy infrastructure at dusk',
  },
];

export const brandValues = [
  {
    number: '01',
    title: 'RELIABILITY',
    description: 'A focus on dependable business relationships.',
  },
  {
    number: '02',
    title: 'PROFESSIONALISM',
    description: 'A professional approach to business requirements.',
  },
  {
    number: '03',
    title: 'INDUSTRY FOCUS',
    description: 'A business presence within the energy and fuel sector.',
  },
  {
    number: '04',
    title: 'CUSTOMER COMMITMENT',
    description: 'A focus on professional communication and customer requirements.',
  },
] as const;

export const enquiryTypes = [
  'General Enquiry',
  'Fuel Supply',
  'Distribution',
  'Industrial Services',
  'Partnership',
  'Other',
] as const;
