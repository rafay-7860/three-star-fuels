import Reveal from './Reveal';
import SectionLabel from './SectionLabel';
import Button from './Button';
import { company } from '@/data/company';

const ABOUT_IMAGE =
  'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1400&q=80';

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="section-pad mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <div className="relative overflow-hidden">
            <div className="absolute -left-4 -top-4 h-24 w-24 border-l-2 border-t-2 border-energy" aria-hidden />
            <div className="absolute -bottom-4 -right-4 h-24 w-24 border-b-2 border-r-2 border-royal" aria-hidden />
            <img
              src={ABOUT_IMAGE}
              alt="Modern energy infrastructure — editorial industrial photography"
              className="aspect-[4/5] w-full object-cover sm:aspect-[5/6]"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-deep/90 to-transparent p-6">
              <p className="display text-sm tracking-[0.2em] text-white">
                {company.locationLabel}
              </p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <SectionLabel>WHO WE ARE</SectionLabel>
            <h2 className="display text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[0.95] text-charcoal">
              BUILT ON RELIABILITY.
              <br />
              <span className="text-royal">DRIVEN BY ENERGY.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
              Three Star Fuels is a business based in Jebel Ali, Dubai, United Arab
              Emirates. The company maintains a presence in the energy and fuel
              sector. This website introduces the business, presents its verified
              activities, and provides a direct communication channel for customers
              and business partners.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 grid gap-6 border-l-2 border-energy pl-6 sm:grid-cols-2">
              <div>
                <p className="display text-xs tracking-[0.2em] text-royal">LOCATION</p>
                <p className="mt-2 font-medium text-charcoal">{company.locationLabel}</p>
              </div>
              <div>
                <p className="display text-xs tracking-[0.2em] text-royal">CONTACT</p>
                <a
                  href={company.phoneHref}
                  className="mt-2 block font-medium text-charcoal transition hover:text-energy"
                >
                  {company.phone}
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3} className="mt-10">
            <Button to="/contact" variant="primary">
              SPEAK WITH OUR TEAM
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
