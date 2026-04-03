"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { restaurantInfo, timeSlots } from "@/data/restaurantData";
import { SectionBadge, Button } from "@/components/ui";

const initialForm = { name: "", phone: "", date: "", time: "", guests: "", request: "" };

export default function Reservation() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [focused, setFocused] = useState(null);

  const validate = () => {
    const e = {};
    if (!form.name.trim() || form.name.trim().length < 2) e.name = "Required";
    if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\D/g, ""))) e.phone = "Valid 10-digit number required";
    if (!form.date) e.date = "Required";
    if (!form.time) e.time = "Required";
    if (!form.guests) e.guests = "Required";
    return e;
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length) { setErrors(formErrors); return; }
    const message = encodeURIComponent(
      `Reservation Request - ${restaurantInfo.name}\n\n` +
      `Name: ${form.name}\nPhone: ${form.phone}\nDate: ${form.date}\n` +
      `Time: ${form.time}\nGuests: ${form.guests}\n` +
      `Special Request: ${form.request || "None"}`
    );
    window.open(`${restaurantInfo.whatsapp}?text=${message}`, "_blank");
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <section id="reservation" className="relative min-h-screen flex overflow-hidden bg-bg">

      <div className="hidden lg:flex lg:w-1/2 relative flex-col justify-center items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage:"url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&auto=format&fit=crop&q=80')",}}/>
        <div className="absolute inset-0 bg-bg/75" />
        <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-bg to-transparent z-10" />

        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-accent"
            style={{
              width: `${2 + (i % 3)}px`,
              height: `${2 + (i % 3)}px`,
              left: `${10 + i * 11}%`,
              top: `${15 + (i % 5) * 16}%`,
            }}
            animate={{ y: [-12, 12, -12], opacity: [0.2, 0.7, 0.2] }}
            transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
          />
        ))}

        <div className="relative z-10 text-center px-12">
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="w-12 h-px bg-accent opacity-50" />
            <span className="w-2 h-2 rounded-full bg-accent opacity-70" />
            <span className="w-12 h-px bg-accent opacity-50" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span
              className="font-display font-bold text-gold-gradient block leading-tight" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
              {restaurantInfo.name}
            </span>
            <span className="text-text-muted text-[11px] tracking-[0.4em] uppercase font-body block mt-3 mb-10">
              Est. {restaurantInfo.established}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-display italic text-text-muted text-xl leading-relaxed max-w-sm mx-auto mb-10"
          >
            “ {restaurantInfo.tagline} ”
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="space-y-2"
          >
            <p className="text-text-muted text-xs font-body tracking-widest uppercase">Lunch · {restaurantInfo.timings.lunch}</p>
            <p className="text-text-muted text-xs font-body tracking-widest uppercase">Dinner · {restaurantInfo.timings.dinner}</p>
            <p className="text-accent text-xs font-body font-bold tracking-widest uppercase mt-3">{restaurantInfo.timings.days}</p>
          </motion.div>

          <div className="flex items-center justify-center gap-3 mt-8">
            <span className="w-12 h-px bg-accent opacity-50" />
            <span className="w-2 h-2 rounded-full bg-accent opacity-70" />
            <span className="w-12 h-px bg-accent opacity-50" />
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/2 flex flex-col justify-center bg-surface px-8 sm:px-12 lg:px-16 py-20"
      >
        <SectionBadge className="justify-start">Reserve Your Table</SectionBadge>

        <h2 className="font-display font-bold text-3xl lg:text-4xl text-text mb-2 leading-tight">Book Your Evening</h2>
        <p className="text-text-faint text-sm font-body mb-10">We will confirm via WhatsApp within minutes.</p>

        <form onSubmit={handleSubmit} noValidate className="space-y-8">

          <div className="relative">
            {/* floating label - animates up when focused or has value */}
            <motion.label
              htmlFor="res-name"
              animate={{ y: focused === "name" || form.name ? -22 : 0, scale: focused === "name" || form.name ? 0.8 : 1, color: focused === "name" ? "var(--color-accent)" : "var(--color-text-faint)" }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 top-3 text-sm font-body tracking-widest uppercase origin-left pointer-events-none"
            >
              Full Name
            </motion.label>
            <input
              id="res-name" name="name" type="text" value={form.name}
              onChange={handleChange}
              onFocus={() => setFocused("name")}
              onBlur={() => setFocused(null)}
              className={`w-full bg-transparent border-b pt-6 pb-2 text-text font-body text-base focus:outline-none transition-colors duration-300 ${errors.name ? "border-red-500" : focused === "name" ? "border-accent" : "border-border"}`}
            />
            {errors.name && <p className="text-red-400 text-xs mt-1 font-body">{errors.name}</p>}
          </div>

          <div className="relative">
            <motion.label
              htmlFor="res-phone"
              animate={{ y: focused === "phone" || form.phone ? -22 : 0, scale: focused === "phone" || form.phone ? 0.8 : 1, color: focused === "phone" ? "var(--color-accent)" : "var(--color-text-faint)" }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 top-3 text-sm font-body tracking-widest uppercase origin-left pointer-events-none"
            >
              Mobile Number
            </motion.label>
            <input
              id="res-phone" name="phone" type="tel" value={form.phone}
              onChange={handleChange}
              onFocus={() => setFocused("phone")}
              onBlur={() => setFocused(null)}
              className={`w-full bg-transparent border-b pt-6 pb-2 text-text font-body text-base focus:outline-none transition-colors duration-300 ${errors.phone ? "border-red-500" : focused === "phone" ? "border-accent" : "border-border"}`}
            />
            {errors.phone && <p className="text-red-400 text-xs mt-1 font-body">{errors.phone}</p>}
          </div>

          <div className="grid grid-colos-1 xs:grid-cols-2 gap-6">
            <div className="relative">
              <label className="block text-text-faint text-[10px] font-body tracking-[0.25em] uppercase mb-2">Date</label>
              <input
                name="date" type="date" value={form.date}
                onChange={handleChange} min={today}
                className={`w-full bg-transparent border-b pb-2 text-text font-body text-sm focus:outline-none transition-colors duration-300 cursor-pointer ${errors.date ? "border-red-500" : "border-border focus:border-accent"}`}
              />
              {errors.date && <p className="text-red-400 text-xs mt-1 font-body">{errors.date}</p>}
            </div>
            <div className="relative">
              <label className="block text-text-faint text-[10px] font-body tracking-[0.25em] uppercase mb-2">Time</label>
              <select
                name="time" value={form.time} onChange={handleChange}
                className={`w-full bg-transparent border-b pb-2 text-text font-body text-sm focus:outline-none appearance-none cursor-pointer transition-colors duration-300 ${errors.time ? "border-red-500" : "border-border focus:border-accent"}`}
              >
                <option value="" className="bg-surface">Select</option>
                {timeSlots.map((s) => <option key={s} value={s} className="bg-surface">{s}</option>)}
              </select>
              {errors.time && <p className="text-red-400 text-xs mt-1 font-body">{errors.time}</p>}
            </div>
          </div>

          <div>
            <label className="block text-text-faint text-[10px] font-body tracking-[0.25em] uppercase mb-2">Number of Guests</label>
            <select
              name="guests" value={form.guests} onChange={handleChange}
              className={`w-full bg-transparent border-b pb-2 text-text font-body text-sm focus:outline-none appearance-none cursor-pointer transition-colors duration-300 ${errors.guests ? "border-red-500" : "border-border focus:border-accent"}`}
            >
              <option value="" className="bg-surface">Select guests</option>
              {[1,2,3,4,5,6,7,8,"9+"].map((n) => (
                <option key={n} value={n} className="bg-surface">{n} {n === 1 ? "Guest" : "Guests"}</option>
              ))}
            </select>
            {errors.guests && <p className="text-red-400 text-xs mt-1 font-body">{errors.guests}</p>}
          </div>

          <div className="relative">
            <motion.label
              htmlFor="res-request"
              animate={{ y: focused === "request" || form.request ? -22 : 0, scale: focused === "request" || form.request ? 0.8 : 1, color: focused === "request" ? "var(--color-accent)" : "var(--color-text-faint)" }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 top-3 text-sm font-body tracking-widest uppercase origin-left pointer-events-none"
            >
              Special Request <span className="normal-case tracking-normal text-xs">(optional)</span>
            </motion.label>
            <input
              id="res-request" name="request" type="text" value={form.request}
              onChange={handleChange}
              onFocus={() => setFocused("request")}
              onBlur={() => setFocused(null)}
              className={`w-full bg-transparent border-b pt-6 pb-2 text-text font-body text-base focus:outline-none transition-colors duration-300 ${focused === "request" ? "border-accent" : "border-border"}`}
            />
          </div>

          <div className="pt-4">
            <Button type="submit" variant="primary" className="w-full justify-center py-2 xs:py-4 text-xs xs:text-sm tracking-[0.2em]">
              Confirm via WhatsApp
            </Button>
            <p className="text-text-faint text-xs text-center font-body mt-3 tracking-widest uppercase">
              Redirects to WhatsApp to confirm
            </p>
          </div>
        </form>
      </motion.div>
    </section>
  );
}