import Reveal from './Reveal';
import SectionLabel from './SectionLabel';
import { services, servicesPlaceholderNote } from '@/data/services';

export default function Services() {
  return (
    <section id="services" className="relative bg-sky py-24 lg:py-32">
      <div className="section-pad mx-auto max-w-[1440px]">
        <Reveal className="max-w-3xl">
          <SectionLabel>WHAT WE DO</SectionLabel>
          <h2 className="display text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[0.95] text-charcoal">
            ENERGY SOLUTIONS.
            <br />
            <span className="text-royal">PROFESSIONAL SERVICE.</span>
          </h2>
          <p className="mt-4 rounded-sm border border-energy/20 bg-white/70 px-4 py-3 text-sm text-muted">
            <span className="font-semibold text-energy">Note: </span>
            {servicesPlaceholderNote}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.id} delay={i * 0.06}>
                <article className="group relative flex h-full flex-col overflow-hidden bg-white transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(7,81,141,0.12)]">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep/70 to-transparent" />
                    <span className="display absolute bottom-4 left-5 text-4xl font-bold text-energy">
                      {service.number}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center bg-sky text-royal transition group-hover:bg-royal group-hover:text-white">
                      <Icon size={22} strokeWidth={1.75} />
                    </div>
                    <h3 className="display text-xl font-bold tracking-[0.06em] text-deep">
                      {service.title}
                    </h3>
                    <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">
                      {service.description}
                    </p>
                    <div className="mt-6 h-0.5 w-12 bg-energy transition-all duration-500 group-hover:w-20" />
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
