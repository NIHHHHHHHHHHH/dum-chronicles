"use client";

import { motion } from "framer-motion";

export default function Card({
  children,
  hover = true,
  className = "",
  gold = false,
}) {
  const base = `card-dark ${gold ? "border-border-bright shadow-accent/10" : ""} ${className}`;

  if (hover) {
    return (
      <motion.div
        whileHover={{ y: -6, transition: { duration: 0.25 } }}
        className={base}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={base}>{children}</div>;
}