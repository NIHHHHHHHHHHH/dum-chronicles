"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { menuCategories } from "@/data/restaurantData";
import { AnimatedSection, SectionBadge, Card } from "@/components/ui";

export default function Menu() {
  const [activeTab, setActiveTab] = useState("starters");

  const activeCategory = menuCategories.find((c) => c.id === activeTab);

  return (
    <section id="menu" className="section-py bg-bg">
      <div className="container-xl">
        <AnimatedSection className="text-center mb-14">
          <SectionBadge>Our Menu</SectionBadge>
          <h2 className="font-display font-bold text-4xl lg:text-5xl mb-4">
            A Feast Fit for{" "}
            <span className="text-gold-gradient italic">Royalty</span>
          </h2>
          <div className="gold-divider" />
        </AnimatedSection>

        {/*  tab navigation  */}
        <AnimatedSection delay={0.1} className="flex flex-wrap justify-center gap-2 mb-12">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-body font-bold tracking-widest uppercase transition-all duration-300 ${
                activeTab === cat.id
                  ? "bg-primary text-text shadow-lg shadow-primary/30"
                  : "bg-surface border border-border text-text-muted hover:border-border-bright hover:text-text"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </AnimatedSection>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          >
            {activeCategory?.items.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Card className=" overflow-hidden h-full flex flex-col">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-surface via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 bg-accent text-bg text-[10px] font-body font-bold px-3 py-1 rounded-full tracking-widest uppercase">{item.tag}</span>
                    <span className="absolute bottom-3 right-3 font-display font-bold text-accent text-lg">{item.price}</span>
                  </div>

                  {/* content */}
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="font-display font-bold text-xl text-text mb-2">{item.name}</h3>
                    <p className="text-text-muted text-sm leading-relaxed font-body flex-1"> {item.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}