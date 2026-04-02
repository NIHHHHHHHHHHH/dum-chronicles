"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ambienceImages } from "@/data/restaurantData";
import { AnimatedSection, SectionBadge } from "@/components/ui";

export default function Ambience() {
  return (
    <section id="ambience" className="section-py bg-bg">
      <div className="container-xl">
        <AnimatedSection className="text-center mb-14">
          <SectionBadge>Experience</SectionBadge>
          <h2 className="font-display font-bold text-4xl lg:text-5xl mb-4">
            Experience the{" "}
            <span className="text-gold-gradient italic">Darbar</span>
          </h2>
          <div className="gold-divider" />
          <p className="text-text-muted mt-4 max-w-xl mx-auto font-body">Step into a world where every detail the light, the aromas, the music is curated for your pleasure.</p>
        </AnimatedSection>

        {/*  masonry Grid  */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[250px]">
          {ambienceImages.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative overflow-hidden rounded-xl group cursor-pointer ${
                img.span === "large" ? "row-span-2" : "row-span-1"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            
              <div className="absolute inset-0 bg-bg/30" />
              <div className="absolute inset-0 bg-linear-to-t from-accent/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 border border-transparent group-hover:border-border-bright rounded-xl transition-all duration-500" />
              <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                <p className="text-text text-sm lg:text-xl font-body font-bold tracking-wide">{img.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}