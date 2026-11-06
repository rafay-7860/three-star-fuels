import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Logo from './Logo';
import Button from './Button';
import { navLinks } from '@/data/company';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `display relative text-[13px] font-semibold tracking-[0.16em] transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-energy after:transition-all after:duration-300 hover:text-energy hover:after:w-full ${
      isActive ? 'text-energy after:w-full' : 'text-deep'
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-sky/80 bg-white/95 shadow-[0_8px_30px_rgba(21,28,37,0.06)] backdrop-blur-md'
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="section-pad mx-auto flex h-[72px] max-w-[1440px] items-center justify-between lg:h-20">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((link) =>
            link.path.includes('#') ? (
              <a
                key={link.label}
                href={link.path}
                className="display relative text-[13px] font-semibold tracking-[0.16em] text-deep transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-energy after:transition-all after:duration-300 hover:text-energy hover:after:w-full"
              >
                {link.label}
              </a>
            ) : (
              <NavLink key={link.label} to={link.path} className={linkClass} end={link.path === '/'}>
                {link.label}
              </NavLink>
            ),
          )}
          <Button to="/contact" variant="red" className="!px-5 !py-2.5 text-xs">
            GET IN TOUCH
          </Button>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-sky text-deep lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 top-[72px] z-40 bg-white lg:hidden"
            initial={reduced ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <nav className="section-pad flex flex-col gap-2 py-8" aria-label="Mobile">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className="display border-b border-sky py-4 text-2xl font-semibold tracking-[0.12em] text-deep"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-6">
                <Button to="/contact" variant="red" className="w-full">
                  GET IN TOUCH
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
