import Seo from '@/components/Seo';
import Services from '@/components/Services';
import CTA from '@/components/CTA';
import Reveal from '@/components/Reveal';
import SectionLabel from '@/components/SectionLabel';
import { company } from '@/data/company';

export default function ServicesPage() {
  return (
    <>
      <Seo
        title={`Services | ${company.shortName}`}
        description="Explore proposed service categories from Three Star Fuels in Dubai. Categories pending business confirmation."
        path="/services"
      />
      <section className="bg-deep pb-16 pt-32">
        <div className="section-pad mx-auto max-w-[1440px]">
          <Reveal>
            <SectionLabel light>SERVICES</SectionLabel>
            <h1 className="display text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-[0.95] text-white">
              ENERGY SOLUTIONS.
              <br />
              <span className="text-energy">PROFESSIONAL SERVICE.</span>
            </h1>
          </Reveal>
        </div>
      </section>
      <Services />
      <CTA />
    </>
  );
}
