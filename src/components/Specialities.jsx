"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { specialities } from "@/data/restaurantData";
import { AnimatedSection, SectionBadge, Button } from "@/components/ui";

export default function Specialities() {
  return (
    <section id="specialities" className="relative bg-surface clip-diagonal-both overflow-hidden py-32 lg:py-48">
      {/* background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="container-xl relative z-10">
        <AnimatedSection className="text-center mb-16">
          <SectionBadge>Signatures</SectionBadge>
          <h2 className="font-display font-bold text-4xl lg:text-5xl mb-4">
            Our{" "}
            <span className="text-gold-gradient italic">Crown Jewels</span>
          </h2>
          <div className="gold-divider" />
          <p className="text-text-muted mt-4 max-w-xl mx-auto font-body"> Dishes that define us. Experiences that outlast the meal.</p>
        </AnimatedSection>

        <div className="flex flex-col gap-8">
          {specialities.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 0.99, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.15 }}
              className={`flex flex-col ${
                i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-0 rounded-2xl overflow-hidden border border-border hover:border-border-bright transition-all duration-500 group`}
            >

              <div className="relative lg:w-1/2 h-64 lg:h-auto overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-linear-to-r from-surface/80 via-transparent to-transparent lg:block hidden" />
                
                <span className="absolute top-5 left-5 bg-accent text-bg text-[10px] font-body font-bold px-3 py-1.5 rounded-full tracking-widest uppercase shadow-lg">
                  {item.badge}
                </span>
              </div>

              
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center bg-surface">
                <p className="text-accent text-xs tracking-[0.3em] uppercase font-body font-bold mb-3">Signature Dish</p>
                <h3 className="font-display font-bold text-2xl lg:text-3xl text-text mb-4">{item.name}</h3>
                <p className="text-text-muted leading-relaxed mb-8 font-body">{item.description}</p>
                <div className="flex items-end gap-2 mb-8">
                  <span className="font-display font-bold text-4xl text-accent">{item.price}</span>
                  <span className="text-text-faint text-sm font-body mb-1">{item.priceNote}</span>
                </div>
                <Button href="#reservation" variant="primary">Reserve & Order</Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}