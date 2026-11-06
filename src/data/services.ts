import type { LucideIcon } from 'lucide-react';
import {
  Droplets,
  Truck,
  Factory,
  Route,
  Building2,
  Handshake,
} from 'lucide-react';

export type ServiceItem = {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
};

/**
 * Suggested service categories — subject to business confirmation before publishing.
 * Not verified offerings.
 */
export const servicesPlaceholderNote =
  'Service categories below are proposed placeholders pending business confirmation.';

export const services: ServiceItem[] = [
  {
    id: 'fuel-supply',
    number: '01',
    title: 'FUEL SUPPLY',
    description:
      'Professional fuel supply discussions tailored to commercial and industrial requirements.',
    icon: Droplets,
    image:
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Industrial fuel storage tanks at dusk — editorial stock imagery',
  },
  {
    id: 'fuel-distribution',
    number: '02',
    title: 'FUEL DISTRIBUTION',
    description:
      'Support for fuel distribution conversations across operational and logistics needs.',
    icon: Truck,
    image:
      'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Fuel tanker truck on industrial route — editorial stock imagery',
  },
  {
    id: 'industrial-fuel',
    number: '03',
    title: 'INDUSTRIAL FUEL SERVICES',
    description:
      'Engagement focused on industrial fuel service requirements and business coordination.',
    icon: Factory,
    image:
      'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Industrial energy facility infrastructure — editorial stock imagery',
  },
  {
    id: 'energy-logistics',
    number: '04',
    title: 'ENERGY LOGISTICS',
    description:
      'Logistics-oriented discussions connecting energy movement with operational planning.',
    icon: Route,
    image:
      'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Port logistics and cargo operations — editorial stock imagery',
  },
  {
    id: 'commercial-fuel',
    number: '05',
    title: 'COMMERCIAL FUEL SOLUTIONS',
    description:
      'Commercial fuel solution conversations aligned with business partner expectations.',
    icon: Building2,
    image:
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Modern industrial pipeline infrastructure — editorial stock imagery',
  },
  {
    id: 'procurement',
    number: '06',
    title: 'FUEL PROCUREMENT SUPPORT',
    description:
      'Procurement support dialogue to help clarify requirements and next steps.',
    icon: Handshake,
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Professional business discussion setting — editorial stock imagery',
  },
];
