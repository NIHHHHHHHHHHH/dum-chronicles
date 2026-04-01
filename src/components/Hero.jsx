"use client";

import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { restaurantInfo } from "@/data/restaurantData";
import { Button } from "@/components/ui";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
};
const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.9, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage:"url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1800&auto=format&fit=crop&q=80')",}}
        />
        <div className="absolute inset-0 bg-linear-to-b from-bg/80 via-bg/60 to-bg" />
        <div className="absolute inset-0 bg-linear-to-r from-bg/50 via-transparent to-bg/50" />
      </motion.div>

      {/* Floating Spice Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-accent/60"
          style={{ left: `${15 + i * 14}%`, top: `${20 + (i % 3) * 25}%`,}}
          animate={{ y: [-10, 10, -10], opacity: [0.3, 0.8, 0.3], }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        />
      ))}

      <div className="relative z-10 container-xl text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 mb-8">
            <span className="flex items-center gap-1.5 bg-surface/80 backdrop-blur-sm border border-border px-4 py-2 rounded-full text-accent text-xs font-body font-bold tracking-widest uppercase">
              <FaStar className="text-accent text-[10px]" />
              Est. {restaurantInfo.established}
            </span>
            <span className="flex items-center gap-1.5 bg-surface/80 backdrop-blur-sm border border-border px-4 py-2 rounded-full text-text-muted text-xs font-body tracking-widest uppercase">
              {restaurantInfo.cuisine.split(",")[0]}
            </span>
            <span className="hidden sm:flex items-center gap-1.5 bg-surface/80 backdrop-blur-sm border border-border px-4 py-2 rounded-full text-text-muted text-xs font-body tracking-widest uppercase">
              {restaurantInfo.awards[0]}
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-display font-bold leading-[1.1] mb-6"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
          >
            Where Every Bite
            <br />
            <span className="text-gold-gradient italic">Tells a Story </span>
            <br />
            of Royal Heritage
          </motion.h1>

          <motion.div variants={itemVariants} className="gold-divider mx-auto mb-6" />

          <motion.p variants={itemVariants} className="text-text-muted text-lg leading-relaxed mb-10 max-w-xl mx-auto font-body">
            {restaurantInfo.cuisine} - slow cooked with passion, served with the grandeur
            of India's finest royal kitchen tradition.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4">
            <Button href="#menu" variant="secondary">
              Explore Menu
            </Button>
            <Button href="#reservation" variant="outline">
              Reserve a Table
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}