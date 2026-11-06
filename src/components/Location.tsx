import { ExternalLink, MapPin } from 'lucide-react';
import Reveal from './Reveal';
import Button from './Button';
import { company } from '@/data/company';

export default function Location() {
  return (
    <section className="bg-sky py-24 lg:py-28">
      <div className="section-pad mx-auto max-w-[1440px]">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="display text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[0.95] text-charcoal">
              FIND US IN
              <br />
              <span className="text-royal">JEBEL ALI, DUBAI.</span>
            </h2>
            <div className="mt-8 border-l-2 border-energy bg-white p-6 sm:p-8">
              <p className="display text-xl font-bold tracking-[0.12em] text-deep">
                {company.name}
              </p>
              <address className="mt-4 not-italic leading-relaxed text-muted">
                {company.address.line1},
                <br />
                {company.address.line2},
                <br />
                {company.address.city}, {company.address.country}.
              </address>
              <Button
                href={company.mapsUrl}
                external
                variant="primary"
                className="mt-8"
              >
                OPEN IN GOOGLE MAPS
                <ExternalLink size={16} />
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <a
              href={company.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex min-h-[320px] items-center justify-center overflow-hidden bg-deep"
              aria-label="Open Three Star Fuels location in Google Maps"
            >
              <div
                className="absolute inset-0 opacity-30 transition duration-700 group-hover:scale-105"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 40% 45%, #1598D2 0%, transparent 45%), radial-gradient(circle at 70% 60%, #D71920 0%, transparent 35%), linear-gradient(135deg, #07518D, #041526)',
                }}
              />
              <div className="relative z-10 flex flex-col items-center gap-4 px-6 text-center text-white">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-energy shadow-[0_0_40px_rgba(215,25,32,0.45)]">
                  <MapPin size={28} />
                </span>
                <p className="display text-2xl font-bold tracking-[0.1em]">
                  JEBEL ALI INDUSTRIAL AREA
                </p>
                <p className="max-w-sm text-white/75">
                  Tap to open verified Google Maps directions for Three Star Fuels.
                </p>
              </div>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
