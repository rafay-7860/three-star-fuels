import Reveal from './Reveal';
import { brandValues } from '@/data/industry';

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="section-pad mx-auto max-w-[1440px]">
        <Reveal className="max-w-3xl">
          <h2 className="display text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[0.95] text-charcoal">
            RELIABILITY THAT MOVES
            <br />
            <span className="text-royal">BUSINESS FORWARD.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-x-10 gap-y-14 md:grid-cols-2">
          {brandValues.map((item, i) => (
            <Reveal key={item.number} delay={i * 0.08}>
              <div className="relative pl-2">
                <span className="display text-6xl font-extrabold leading-none text-royal/15 sm:text-7xl">
                  {item.number}
                </span>
                <div className="mt-[-1.5rem] border-l-2 border-energy pl-6">
                  <h3 className="display text-2xl font-bold tracking-[0.08em] text-charcoal">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-md text-muted">{item.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
