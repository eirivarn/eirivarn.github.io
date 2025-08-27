import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ReactiveField from "./bg/ReactiveField";

export default function Hero() {
  // Respect reduced motion (hide canvas using CSS hook)
  useEffect(() => {
    document.documentElement.classList.toggle(
      "reduce-motion",
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  return (
    <section className="hero-r3f">
      <div className="r3f-bg" aria-hidden="true">
        <ReactiveField />
      </div>

      <div className="hero-inner">
        <motion.h1 initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, ease: "easeOut" }}>
          Eirik Varnes
        </motion.h1>

        <motion.p className="tagline" initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}>
          Robotics • Control • ML — reliable autonomy, end-to-end.
        </motion.p>

        <motion.div className="cta-row" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <Link className="btn primary" to="/resume">View Resume</Link>
          <a className="btn" href="#projects">See Projects</a>
        </motion.div>
      </div>
    </section>
  );
}
