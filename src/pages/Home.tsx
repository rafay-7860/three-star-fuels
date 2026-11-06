import { useEffect } from 'react';
import Seo from '@/components/Seo';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import IndustryShowcase from '@/components/IndustryShowcase';
import GlobalConnectivity from '@/components/GlobalConnectivity';
import BrandStatement from '@/components/BrandStatement';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Location from '@/components/Location';
import { company } from '@/data/company';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: company.shortName,
  telephone: company.phone,
  email: company.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${company.address.line1}, ${company.address.line2}`,
    addressLocality: company.address.city,
    addressCountry: 'AE',
  },
};

export default function Home() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'local-business-jsonld';
    script.text = JSON.stringify(jsonLd);
    const existing = document.getElementById('local-business-jsonld');
    if (existing) existing.remove();
    document.head.appendChild(script);
    return () => {
      document.getElementById('local-business-jsonld')?.remove();
    };
  }, []);

  return (
    <>
      <Seo path="/" />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <IndustryShowcase />
      <GlobalConnectivity />
      <BrandStatement />
      <CTA />
      <Contact />
      <Location />
    </>
  );
}
