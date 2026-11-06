import { Link } from 'react-router-dom';
import Logo from './Logo';
import { company, navLinks } from '@/data/company';
import { services } from '@/data/services';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-deep text-white">
      <div className="h-1 w-full bg-gradient-to-r from-royal via-energy to-burgundy" />
      <div className="section-pad mx-auto grid max-w-[1440px] gap-12 py-16 lg:grid-cols-4 lg:gap-10 lg:py-20">
        <div className="lg:col-span-1">
          <Logo withEffect imgClassName="h-14 sm:h-16" />
          <p className="mt-5 display text-sm tracking-[0.16em] text-sky">
            {company.name}
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
            A fuel and energy business based in Jebel Ali, Dubai, United Arab Emirates.
            Professional service and direct communication for customers and partners.
          </p>
        </div>

        <div>
          <p className="display text-sm tracking-[0.2em] text-energy">NAVIGATION</p>
          <ul className="mt-5 space-y-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.path}
                  className="text-sm text-white/75 transition hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="display text-sm tracking-[0.2em] text-energy">SERVICES</p>
          <p className="mt-2 text-xs text-white/50">Placeholders pending confirmation</p>
          <ul className="mt-4 space-y-3">
            {services.map((s) => (
              <li key={s.id}>
                <Link
                  to="/services"
                  className="text-sm text-white/75 transition hover:text-white"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="display text-sm tracking-[0.2em] text-energy">CONTACT</p>
          <ul className="mt-5 space-y-4 text-sm text-white/75">
            <li>
              <a href={company.phoneHref} className="transition hover:text-white">
                {company.phone}
              </a>
            </li>
            <li>
              <a href={company.emailHref} className="break-all transition hover:text-white">
                {company.email}
              </a>
            </li>
            <li>{company.address.full}</li>
            <li>
              <a
                href={company.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-sky transition hover:text-white"
              >
                Google Maps Directions →
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="section-pad mx-auto flex max-w-[1440px] flex-col gap-2 py-6 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {company.shortName}. All rights reserved.
          </p>
          <p className="display tracking-[0.14em] text-white/40">
            {company.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
