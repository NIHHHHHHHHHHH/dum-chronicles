"use client";

import Image from "next/image";
import { FaAward, FaUtensils, FaUsers } from "react-icons/fa";
import { restaurantInfo } from "@/data/restaurantData";
import { AnimatedSection, SectionBadge } from "@/components/ui";

const achievements = [
  { icon: FaAward, value: restaurantInfo.awards[0], label: "Awarded" },
  { icon: FaUtensils, value: restaurantInfo.chefExperience, label: "Culinary Mastery" },
  { icon: FaUsers, value: `${restaurantInfo.covers}+`, label: "Happy Covers Daily" },
];

export default function About() {
  return (
    <section  id="about" className="relative bg-surface clip-diagonal-both overflow-hidden py-32 lg:py-48">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(252,211,77,0.6) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container-xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          <AnimatedSection variant="slideLeft">
            <SectionBadge>Our Story</SectionBadge>
            <h2 className="font-display font-bold text-3xl xs:text-4xl lg:text-5xl leading-tight mb-6">
              A Legacy of{" "}
              <span className="text-gold-gradient italic">Royal Flavours</span>
            </h2>
            <div className="gold-divider mx-0! mb-8" />
            <p className="text-text-muted text-sm xs:text-lg leading-relaxed mb-6 font-body">
              Dum Chronicles was born in {restaurantInfo.established} from a singular obsession,to revive the lost art of slow cooking and bring it to the streets
              of Pune. Every dish we serve carries the weight of centuries of culinary tradition.
            </p>
            <p className="text-text-muted text-sm xs:text-base leading-relaxed mb-10 font-body">
              Our kitchen is led by <strong className="text-accent">{restaurantInfo.chef}</strong>,
              whose {restaurantInfo.chefExperience.toLowerCase()} has been dedicated to mastering the ancient art of slow cooking right here in Pune. He brings
              with him the secrets of dum cooking, royal spice blending, and a philosophy that great food needs no shortcuts.
            </p>

            <div className="grid grid-cols-1 xs:grid-cols-3 gap-4">
              {achievements.map(({ icon: Icon, value, label }) => (
                <div key={label} className="bg-bg border border-border rounded-xl p-4 text-center group hover:border-border-bright transition-all duration-300">
                  <Icon className="text-accent text-xl mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <p className="font-display font-semibold text-sm text-text leading-tight">{value}</p>
                  <p className="text-text-faint text-[10px] tracking-widest uppercase mt-1 font-body">{label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          
          <AnimatedSection variant="slideRight" delay={0.2}>
            <div className="relative">
              {/* Gold frame */}
              <div className="absolute -inset-3 border border-border-bright rounded-2xl" />
              <div className="absolute -inset-6 border border-border rounded-2xl opacity-40" />

              <div className="relative rounded-2xl overflow-hidden aspect-square sm:aspect-video lg:aspect-3/4 shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=700&auto=format&fit=crop&q=80"
                  alt={`${restaurantInfo.chef} - Head Chef at Dum Chronicles`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="eager"
                  priority 
                />
                <div className="absolute inset-0 bg-linear-to-t from-bg/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-center">
                  <p className="font-display font-bold text-xl text-text">{restaurantInfo.chef}</p>
                  <p className="text-accent text-xs tracking-widest uppercase font-body mt-1">Head Chef & Founder</p>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-accent text-bg rounded-full w-20 h-20 flex flex-col items-center justify-center text-center shadow-xl">
                <span className="font-display font-bold text-base xs:text-lg leading-none">{new Date().getFullYear() - restaurantInfo.established}</span>
                <span className="text-[9px] font-body font-bold uppercase leading-tight">Years</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}