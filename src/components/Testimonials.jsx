"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { testimonials } from "@/data/restaurantData";
import { SectionBadge } from "@/components/ui";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  // wraps around using modulo so it loops infinitely
  const go = useCallback((dir) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => go(1), 6000);
    return () => clearInterval(timer);
  }, [go]);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-bg">
      <AnimatePresence mode="wait">
        <motion.span
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none font-display font-bold text-center"
          style={{
            fontSize: "clamp(5rem, 18vw, 16rem)",
            color: "rgba(252,211,77,0.04)",
            lineHeight: 1,
            letterSpacing: "-0.04em",
          }}
        >
          {t.name.split(" ")[0]}
        </motion.span>
      </AnimatePresence>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-125 h-75 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 container-xl py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <SectionBadge>What Guests Say</SectionBadge>
          <h2 className="font-display font-bold text-3xl xs:text-4xl lg:text-5xl">
            Voices of the{" "}
            <span className="text-gold-gradient italic">Darbar</span>
          </h2>
          <div className="gold-divider" />
        </motion.div>

        <div className="relative max-w-4xl mx-auto flex flex-col items-center">
          <div className="flex gap-2 mb-16">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                aria-label={`Review ${i + 1}`}
                className="transition-all duration-500 rounded-full"
                style={{
                  width: i === current ? "2.5rem" : "0.5rem",
                  height: "0.5rem",
                  backgroundColor: i === current ? "var(--color-accent)" : "rgba(252,211,77,0.2)",
                }}
              />
            ))}
          </div>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -80 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center flex flex-col items-center"
            >
              <div className="flex gap-2 mb-10">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <FaStar key={i} className="text-accent text-xl" />
                ))}
              </div>

              <blockquote className="font-display font-bold text-text text-center leading-tight text-[clamp(1rem,3vw,3rem)] xs:text-[clamp(1.8rem,4vw,3rem)] mb-12 ">
                <span className="text-accent/40 text-6xl font-display leading-none align-top mr-2">"</span>
                {t.quote}
                <span className="text-accent/40 text-6xl font-display leading-none align-bottom ml-2">"</span>
              </blockquote>

              <div className="flex items-center gap-4 mb-6">
                <span className="w-16 h-px bg-linear-to-r from-transparent to-accent" />
                <span className="w-2 h-2 rounded-full bg-accent" />
                <span className="w-16 h-px bg-linear-to-l from-transparent to-accent" />
              </div>

              <p className="font-display font-bold text-accent text-xl">{t.name}</p>
              <p className="text-text-faint text-xs font-body tracking-[0.3em] uppercase mt-1">{t.city}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center gap-6 mt-16">
            <button
              onClick={() => go(-1)}
              aria-label="Previous review"
              className="w-12 h-12 rounded-full border border-border hover:border-accent text-text-faint hover:text-accent flex items-center justify-center transition-all duration-300"
            >
              <FaChevronLeft size={14} />
            </button>
            <span className="text-text-faint text-xs font-body tracking-widest uppercase">
              {String(current + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
            </span>
            <button
              onClick={() => go(1)}
              aria-label="Next review"
              className="w-12 h-12 rounded-full border border-border hover:border-accent text-text-faint hover:text-accent flex items-center justify-center transition-all duration-300"
            >
              <FaChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}