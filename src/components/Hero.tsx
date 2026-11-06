import { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import gsap from 'gsap';
import { ChevronDown } from 'lucide-react';
import Button from './Button';
import { company } from '@/data/company';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=2400&q=80';

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !bgRef.current) return;
    const tween = gsap.to(bgRef.current, {
      scale: 1.12,
      duration: 18,
      ease: 'none',
      repeat: -1,
      yoyo: true,
    });
    return () => {
      tween.kill();
    };
  }, [reduced]);

  const line = (text: string, delay: number, accent = false) => (
    <motion.span
      className={`block overflow-hidden ${accent ? 'text-energy' : 'text-white'}`}
      initial={reduced ? false : { y: '110%' }}
      animate={{ y: 0 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {text}
    </motion.span>
  );

  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden pb-20 pt-28 sm:items-center sm:pb-0 sm:pt-24">
      <div className="absolute inset-0">
        <div ref={bgRef} className="absolute inset-0 scale-105 will-change-transform">
          <img
            src={HERO_IMAGE}
            alt="Industrial fuel storage infrastructure at dusk"
            className="h-full w-full object-cover"
            fetchPriority="high"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#041526]/92 via-[#07518D]/78 to-[#087BC4]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-charcoal/20" />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
          aria-hidden
        />
      </div>

      <div className="section-pad relative z-10 mx-auto w-full max-w-[1440px]">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mb-6 flex flex-wrap items-center gap-3"
        >
          <span className="display text-xs font-semibold tracking-[0.28em] text-sky sm:text-sm">
            {company.name}
          </span>
          <span className="h-3 w-px bg-energy" aria-hidden />
          <span className="display text-xs font-medium tracking-[0.18em] text-white/80 sm:text-sm">
            JEBEL ALI, DUBAI, UAE
          </span>
        </motion.div>

        <h1 className="display max-w-4xl text-[clamp(3rem,10vw,7.5rem)] font-extrabold leading-[0.9] tracking-[-0.02em]">
          <span className="block overflow-hidden">{line('POWERING', 0.25)}</span>
          <span className="block overflow-hidden">{line('PROGRESS.', 0.38, true)}</span>
          <span className="block overflow-hidden">{line('DELIVERING', 0.5)}</span>
          <span className="block overflow-hidden">{line('POSSIBILITIES.', 0.62)}</span>
        </h1>

        <motion.p
          className="mt-8 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg"
          initial={reduced ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
        >
          Connecting energy, operations, and opportunities through a commitment to
          professional service and reliability.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap gap-4"
          initial={reduced ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
        >
          <Button href="#about" variant="red">
            EXPLORE OUR COMPANY
          </Button>
          <Button to="/contact" variant="secondary">
            CONTACT OUR TEAM
          </Button>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/70 transition hover:text-white"
        aria-label="Scroll to about section"
      >
        <span className="display text-[10px] tracking-[0.3em]">SCROLL</span>
        <motion.span
          animate={reduced ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} />
        </motion.span>
      </a>
    </section>
  );
}
