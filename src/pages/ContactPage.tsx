import Seo from '@/components/Seo';
import Contact from '@/components/Contact';
import Location from '@/components/Location';
import Reveal from '@/components/Reveal';
import SectionLabel from '@/components/SectionLabel';
import { company } from '@/data/company';

export default function ContactPage() {
  return (
    <>
      <Seo
        title={`Contact | ${company.shortName}`}
        description="Contact Three Star Fuels in Jebel Ali, Dubai. Phone, email, and Google Maps directions."
        path="/contact"
      />
      <section className="bg-deep pb-16 pt-32">
        <div className="section-pad mx-auto max-w-[1440px]">
          <Reveal>
            <SectionLabel light>CONTACT</SectionLabel>
            <h1 className="display text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-[0.95] text-white">
              GET IN TOUCH
              <br />
              <span className="text-energy">WITH OUR TEAM.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/75">
              Reach Three Star Fuels by phone, email, or the enquiry form below.
            </p>
          </Reveal>
        </div>
      </section>
      <Contact />
      <Location />
    </>
  );
}
