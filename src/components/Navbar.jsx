"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { restaurantInfo, navLinks } from "@/data/restaurantData";
import { Button } from "@/components/ui";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bg/95 backdrop-blur-md border-b border-border shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <nav className="container-xl">
        <div className="flex items-center justify-between h-20">

          {/*  Logo  */}
          <a href="#home" className="flex flex-col leading-none group">
            <span className="font-display font-bold text-2xl text-gold-gradient tracking-wide">
              {restaurantInfo.name}
            </span>
            <span className="text-text-faint text-[12px] tracking-[0.3em] uppercase font-body mt-0.5">
              {restaurantInfo.cuisine.split(",")[0].trim()}
            </span>
          </a>

          {/*  Desktop Links  */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-text-muted hover:text-accent text-sm font-body tracking-widest uppercase transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>

          {/*  CTA  */}
          <div className="hidden lg:block">
            <Button href="#reservation" variant="primary">
              Reserve Table
            </Button>
          </div>

          {/*  Mobile Hamburger  */}
          <button
            className="lg:hidden p-2 text-text-muted hover:text-accent transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </nav>

      {/*  Mobile Menu  */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35 }}
            className="lg:hidden bg-surface border-t border-border overflow-hidden"
          >
            <div className="container-xl py-6 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.06 }}
                  className="px-4 py-3 text-sm font-body tracking-widest uppercase text-text-muted hover:text-accent transition-colors rounded-lg hover:bg-surface-2"
                >
                  {link.label}
                </motion.a>
              ))}
              <Button href="#reservation" variant="primary" className="mt-2 justify-center" onClick={() => setIsOpen(false)}>
                Reserve Table
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}