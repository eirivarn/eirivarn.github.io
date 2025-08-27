import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";
// @ts-ignore - vanta has no types
import NET from "vanta/dist/vanta.net.min";

export default function Hero() {
  const vantaRef = useRef<HTMLDivElement | null>(null);
  const vantaInstance = useRef<any>(null);

  useEffect(() => {
    // Respect reduced motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || !vantaRef.current) return;

    vantaInstance.current = NET({
      el: vantaRef.current,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 400.0,
      minWidth: 400.0,
      scale: 1.0,
      scaleMobile: 1.0,
      points: 12.0,
      maxDistance: 18.0,
      spacing: 16.0,
      color: 0x8ad5ff,
      backgroundColor: 0x0b1020
    });

    return () => {
      try { vantaInstance.current?.destroy?.(); } catch { /* noop */ }
      vantaInstance.current = null;
    };
  }, []);

  return (
    <section className="hero-vanta">
      <div ref={vantaRef} className="vanta-layer" aria-hidden="true" />

      <div className="hero-inner">
        <motion.h1 initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, ease: "easeOut" }}>
          Eirik Varnes
        </motion.h1>

        <motion.p className="tagline" initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}>
          Robotics • Control • ML — reliable autonomy, end-to-end.
        </motion.p>

        <motion.div className="cta-row" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <a className="btn primary" href="/resume">View Resume</a>
          <a className="btn" href="#projects">See Projects</a>
        </motion.div>
      </div>
    </section>
  );
}
