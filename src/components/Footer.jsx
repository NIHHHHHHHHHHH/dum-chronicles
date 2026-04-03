"use client";

import { motion } from "framer-motion";
import { FaInstagram, FaFacebook, FaTwitter, FaHeart, FaMapMarkerAlt, FaPhone, FaClock } from "react-icons/fa";
import { restaurantInfo, navLinks, menuCategories } from "@/data/restaurantData";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-surface border-t border-border overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, rgba(252,211,77,0.8) 1px, transparent 1px)", backgroundSize: "40px 40px",}}/>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-50 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="relative z-10">

        <div className="container-xl pt-16 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">

            <div className="lg:col-span-4">
              <span className="font-display font-bold text-3xl text-gold-gradient tracking-wide block mb-1">{restaurantInfo.name}</span>
              <span className="text-text-faint text-[10px] tracking-[0.35em] uppercase font-body block mb-5">{restaurantInfo.cuisine}</span>
              <div className="w-12 h-px bg-accent opacity-50 mb-5" />
              <p className="text-text-faint text-sm font-body leading-relaxed mb-8 max-w-xs">{restaurantInfo.tagline}</p>
              
              <div className="flex gap-3">
                {[
                  { icon: FaInstagram, href: restaurantInfo.social.instagram, label: "Instagram" },
                  { icon: FaFacebook, href: restaurantInfo.social.facebook, label: "Facebook"  },
                  { icon: FaTwitter, href: restaurantInfo.social.twitter, label: "Twitter"   },
                ].map(({ icon: Icon, href, label }) => (
                  <a key={label} href={href} aria-label={label}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-faint hover:text-accent hover:border-accent transition-all duration-300">
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </div>
       
            <div className="lg:col-span-2">
              <h4 className="font-display font-bold text-text text-sm mb-6 tracking-widest uppercase">Navigate</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href}
                      className="text-text-faint text-sm font-body hover:text-accent transition-colors duration-300 flex items-center gap-2 group">
                      <span className="w-0 h-px bg-accent group-hover:w-4 transition-all duration-300" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className="font-display font-bold text-text text-sm mb-6 tracking-widest uppercase">Menu</h4>
              <ul className="space-y-3">
                {menuCategories.map((cat) => (
                  <li key={cat.id}>
                    <a href="#menu"
                      className="text-text-faint text-sm font-body hover:text-accent transition-colors duration-300 flex items-center gap-2 group">
                      <span className="w-0 h-px bg-accent group-hover:w-4 transition-all duration-300" />
                      {cat.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-4">
              <h4 className="font-display font-bold text-text text-sm mb-6 tracking-widest uppercase">Visit Us</h4>
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-accent mt-0.5 shrink-0 text-sm" />
                  <span className="text-text-faint text-sm font-body leading-relaxed">{restaurantInfo.address}</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaPhone className="text-accent shrink-0 text-sm" />
                  <a href={restaurantInfo.phoneHref} className="text-text-faint text-sm font-body hover:text-accent transition-colors">
                    {restaurantInfo.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <FaClock className="text-accent mt-0.5 shrink-0 text-sm" />
                  <div>
                    <p className="text-text-faint text-sm font-body"> Lunch: {restaurantInfo.timings.lunch}</p>
                    <p className="text-text-faint text-sm font-body"> Dinner: {restaurantInfo.timings.dinner}</p>
                    <p className="text-accent text-xs font-body font-bold tracking-widest uppercase mt-1">{restaurantInfo.timings.days}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-border">
          <div className="container-xl py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-text-faint text-xs font-body tracking-widest uppercase">Reservations Open — {restaurantInfo.timings.days}</p>
            <a href="#reservation" className="text-accent border border-accent text-xs font-body font-bold tracking-[0.25em] uppercase px-8 py-2.5 rounded-full hover:bg-accent hover:text-bg transition-all duration-300">
              Reserve a Table
            </a>
          </div>
        </div>

        <div className="border-t border-border/50">
          <div className="container-xl py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-text-faint font-body">
            <p>
              &copy; {year}{" "}
              <span className="text-text-muted font-bold">{restaurantInfo.name}</span>.
              {" "}All rights reserved.
            </p>
            <p className="flex items-center gap-1.5">
              Crafted with <FaHeart className="text-primary" size={10} /> by{" "}
              <span className="text-accent font-bold">Nihal</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}