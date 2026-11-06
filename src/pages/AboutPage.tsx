import Seo from '@/components/Seo';
import About from '@/components/About';
import WhyChooseUs from '@/components/WhyChooseUs';
import GlobalConnectivity from '@/components/GlobalConnectivity';
import CTA from '@/components/CTA';
import Reveal from '@/components/Reveal';
import SectionLabel from '@/components/SectionLabel';
import { company } from '@/data/company';

export default function AboutPage() {
  return (
    <>
      <Seo
        title={`About Us | ${company.shortName}`}
        description="Learn about Three Star Fuels, a fuel and energy business based in Jebel Ali, Dubai, UAE."
        path="/about"
      />
      <section className="bg-deep pb-16 pt-32">
        <div className="section-pad mx-auto max-w-[1440px]">
          <Reveal>
            <SectionLabel light>ABOUT US</SectionLabel>
            <h1 className="display text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-[0.95] text-white">
              THREE STAR FUELS
              <br />
              <span className="text-energy">JEBEL ALI, DUBAI.</span>
            </h1>
          </Reveal>
        </div>
      </section>
      <About />
      <WhyChooseUs />
      <GlobalConnectivity />
      <CTA />
    </>
  );
}
