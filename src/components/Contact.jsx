"use client";

import { FaMapMarkerAlt, FaPhone, FaClock } from "react-icons/fa";
import { restaurantInfo } from "@/data/restaurantData";
import { AnimatedSection, SectionBadge, Card } from "@/components/ui";

const contactCards = [
  {
    icon: FaMapMarkerAlt,
    label: "Find Us",
    value: restaurantInfo.address,
    href: `https://maps.google.com/?q=${encodeURIComponent(restaurantInfo.address)}`,
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: FaPhone,
    label: "Call Us",
    value: restaurantInfo.phone,
    href: restaurantInfo.phoneHref,
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: FaClock,
    label: "Timings",
    value: `Lunch: ${restaurantInfo.timings.lunch}\nDinner: ${restaurantInfo.timings.dinner}`,
    href: null,
    color: "text-highlight",
    bg: "bg-highlight/10",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-py bg-surface">
      <div className="container-xl">
        <AnimatedSection className="text-center mb-14">
          <SectionBadge>Visit Us</SectionBadge>
          <h2 className="font-display font-bold text-4xl lg:text-5xl mb-4">
            Come, Be Our{" "}
            <span className="text-gold-gradient italic">Guest</span>
          </h2>
          <div className="gold-divider" />
        </AnimatedSection>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {contactCards.map(({ icon: Icon, label, value, href, color, bg }, i) => (
            <AnimatedSection key={label} delay={i * 0.1}>
              {href ? (
                <a href={href} target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block h-full">
                  <Card className="p-6 h-full flex items-start gap-4 group" gold>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${bg} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`text-base xs:text-xl ${color}`} />
                    </div>
                    <div>
                      <p className="text-text-faint text-sm xs:text-base tracking-[0.25em] uppercase font-body font-bold mb-1">{label}</p>
                      <p className="text-text font-body text-xs xs:text-sm leading-relaxed whitespace-pre-line">{value}</p>
                    </div>
                  </Card>
                </a>
              ) : (
                <Card className="p-6 h-full flex items-start gap-4" gold>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${bg}`}>
                    <Icon className={`text-xl ${color}`} />
                  </div>
                  <div>
                    <p className="text-text-faint text-sm xs:text-base tracking-[0.25em] uppercase font-body font-bold mb-1">{label}</p>
                    <p className="text-text font-body text-xs xs:text-sm leading-relaxed whitespace-pre-line">{value}</p>
                    <p className="text-accent text-xs tracking-widest uppercase font-body font-bold mt-2">
                      {restaurantInfo.timings.days}
                    </p>
                  </div>
                </Card>
              )}
            </AnimatedSection>
          ))}
        </div>

        
        <AnimatedSection delay={0.3} className="rounded-2xl overflow-hidden border border-border h-105 shadow-2xl">
          <iframe
            title="Zafrani Darbar Location"
            src={restaurantInfo.mapEmbed}
            width="100%"
            height="100%"
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </AnimatedSection>
      </div>
    </section>
  );
}