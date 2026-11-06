import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Reveal from './Reveal';
import { useReducedMotion } from '@/hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

const IMAGE =
  'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=2400&q=80';

export default function BrandStatement() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !sectionRef.current || !imgRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgRef.current,
        { scale: 1 },
        {
          scale: 1.15,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[70vh] items-center overflow-hidden py-24"
    >
      <div ref={imgRef} className="absolute inset-0 will-change-transform">
        <img
          src={IMAGE}
          alt="Energy infrastructure silhouette at dusk — editorial photography"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-[#07518D]/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#041526]/85 via-transparent to-[#780D16]/35" />

      <div className="section-pad relative z-10 mx-auto max-w-[1440px]">
        <Reveal>
          <div className="mb-6 h-1 w-16 bg-energy" aria-hidden />
          <h2 className="display max-w-3xl text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-[0.95] text-white">
            ENERGY IN MOTION.
            <br />
            <span className="text-energy">PROGRESS IN ACTION.</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg text-white/85">
            Discover Three Star Fuels and connect with our team in Dubai.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
