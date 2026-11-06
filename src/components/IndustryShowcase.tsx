import Reveal from './Reveal';
import SectionLabel from './SectionLabel';
import { industryImages } from '@/data/industry';

export default function IndustryShowcase() {
  return (
    <section id="industry" className="bg-light py-24 lg:py-32">
      <div className="section-pad mx-auto max-w-[1440px]">
        <Reveal className="max-w-3xl">
          <SectionLabel>OUR INDUSTRY</SectionLabel>
          <h2 className="display text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[0.95] text-charcoal">
            CONNECTING INDUSTRY.
            <br />
            <span className="text-royal">SUPPORTING PROGRESS.</span>
          </h2>
          <p className="mt-4 text-sm text-muted">
            Editorial sample photography for visual context only — not depicted as
            Three Star Fuels facilities or projects.
          </p>
        </Reveal>

        <div className="mt-14 grid auto-rows-[220px] gap-4 md:grid-cols-3 md:auto-rows-[260px]">
          {industryImages.map((img, i) => (
            <Reveal
              key={img.id}
              delay={i * 0.05}
              className={`group relative overflow-hidden ${img.className ?? ''}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/10 to-transparent opacity-90 transition group-hover:opacity-100" />
              <p className="display absolute bottom-4 left-4 right-4 text-sm tracking-[0.16em] text-white">
                {img.caption}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
