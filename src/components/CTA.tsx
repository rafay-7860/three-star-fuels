import Reveal from './Reveal';
import Button from './Button';
import { company } from '@/data/company';

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-royal py-20 lg:py-24">
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/10"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-24 left-10 h-56 w-56 rounded-full border border-white/10"
        aria-hidden
      />
      <div className="absolute inset-y-0 left-0 w-1.5 bg-energy" aria-hidden />

      <div className="section-pad relative z-10 mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
        <Reveal className="max-w-2xl">
          <h2 className="display text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[0.95] text-white">
            LET&apos;S BUILD THE NEXT
            <br />
            OPPORTUNITY TOGETHER.
          </h2>
          <p className="mt-5 text-lg text-white/85">
            Connect with Three Star Fuels to discuss your business requirements.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-wrap gap-4">
          <Button to="/contact" variant="red">
            CONTACT OUR TEAM
          </Button>
          <Button href={company.phoneHref} variant="outlineLight">
            CALL NOW
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
