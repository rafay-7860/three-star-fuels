import { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import gsap from 'gsap';
import Reveal from './Reveal';
import logo from '@/assets/logo/three-star-fuels-logo.png';

export default function GlobalConnectivity() {
  const orbitRef = useRef<SVGGElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !orbitRef.current) return;
    const tween = gsap.to(orbitRef.current, {
      rotation: 360,
      transformOrigin: '50% 50%',
      duration: 48,
      ease: 'none',
      repeat: -1,
    });
    return () => {
      tween.kill();
    };
  }, [reduced]);

  return (
    <section className="relative overflow-hidden bg-[#041526] py-24 lg:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(ellipse at 30% 40%, rgba(8,123,196,0.35), transparent 55%), radial-gradient(ellipse at 80% 20%, rgba(215,25,32,0.18), transparent 45%)',
        }}
        aria-hidden
      />

      <div className="section-pad relative z-10 mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <h2 className="display text-[clamp(2.4rem,5.5vw,4.5rem)] font-bold leading-[0.95] text-white">
            ONE WORLD.
            <br />
            <span className="text-energy">ENDLESS OPPORTUNITIES.</span>
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/75">
            Inspired by the globe in our identity — an abstract view of connectivity,
            energy, and opportunity. This graphic is brand-inspired and does not imply
            confirmed international operations.
          </p>
          <div className="mt-8 flex gap-3" aria-hidden>
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="inline-block text-energy"
                animate={reduced ? undefined : { scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2.4, delay: i * 0.35, repeat: Infinity }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l2.4 7.2H22l-6 4.4 2.3 7.2L12 16.8 5.7 20.8 8 13.6 2 9.2h7.6z" />
                </svg>
              </motion.span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="relative mx-auto w-full max-w-md">
          <div className="relative aspect-square">
            <svg
              viewBox="0 0 400 400"
              className="absolute inset-0 h-full w-full"
              aria-hidden
            >
              <circle
                cx="200"
                cy="200"
                r="150"
                fill="none"
                stroke="#087BC4"
                strokeWidth="1"
                opacity="0.35"
              />
              <circle
                cx="200"
                cy="200"
                r="110"
                fill="none"
                stroke="#1598D2"
                strokeWidth="1"
                opacity="0.25"
              />
              <g ref={orbitRef}>
                <ellipse
                  cx="200"
                  cy="200"
                  rx="170"
                  ry="70"
                  fill="none"
                  stroke="#D71920"
                  strokeWidth="1.5"
                  opacity="0.55"
                  className="connection-line"
                />
                <ellipse
                  cx="200"
                  cy="200"
                  rx="70"
                  ry="170"
                  fill="none"
                  stroke="#087BC4"
                  strokeWidth="1"
                  opacity="0.4"
                  className="connection-line"
                />
                {[
                  [200, 30],
                  [370, 200],
                  [200, 370],
                  [30, 200],
                  [320, 80],
                  [80, 320],
                ].map(([x, y], i) => (
                  <g key={i}>
                    <line
                      x1="200"
                      y1="200"
                      x2={x}
                      y2={y}
                      stroke="#1598D2"
                      strokeWidth="0.8"
                      opacity="0.35"
                      className="connection-line"
                    />
                    <circle cx={x} cy={y} r="3.5" fill="#D71920" opacity="0.9" />
                  </g>
                ))}
              </g>
            </svg>

            <div className="absolute inset-[18%] flex items-center justify-center p-2">
              <img
                src={logo}
                alt="Three Star Fuels emblem"
                className="h-full w-full object-contain logo-effect drop-shadow-[0_0_28px_rgba(8,123,196,0.45)]"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
