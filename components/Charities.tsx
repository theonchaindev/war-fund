"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { charities } from "@/lib/charities";
import AnimatedCounter from "./AnimatedCounter";

const focusBadge: Record<string, string> = {
  "Emergency Relief": "bg-red-50 text-red-600 border-red-100",
  "Medical Aid":      "bg-amber-light text-amber border-amber/20",
  "Refugee Support":  "bg-sky-light text-sky border-sky/20",
  "Children's Aid":   "bg-purple-50 text-purple-600 border-purple-100",
  "Crisis Response":  "bg-orange-50 text-orange-600 border-orange-100",
  "Medical Supplies": "bg-sage-light text-sage border-sage/20",
  Healthcare:         "bg-teal-50 text-teal-600 border-teal-100",
};

export default function Charities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="charities" className="py-28 px-4" ref={ref}>
      <div className="section-divider mb-28" />
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-sage uppercase tracking-widest mb-3">Aid Recipients</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Trusted humanitarian partners
          </h2>
          <p className="text-muted max-w-xl mx-auto text-base">
            Every cent from creator fees flows directly to these verified organizations working on the front lines.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {charities.map((charity, i) => (
            <motion.a
              key={charity.shortName}
              href={charity.website}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-card rounded-2xl border border-card-border p-6 card-hover shadow-sm flex flex-col"
            >
              {/* Logo + status */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-subtle border border-card-border flex items-center justify-center overflow-hidden group-hover:border-sky/30 transition-colors">
                  <Image
                    src={charity.logo}
                    alt={charity.shortName}
                    width={32}
                    height={32}
                    className="object-contain"
                    unoptimized
                  />
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-sage pulse-dot" />
                  <span className="text-xs text-sage font-medium">Active</span>
                </div>
              </div>

              {/* Focus badge */}
              <div className="mb-3">
                <span className={`inline-block text-xs font-medium px-2.5 py-0.5 rounded-full border ${focusBadge[charity.focus] ?? "bg-sky-light text-sky border-sky/20"}`}>
                  {charity.focus}
                </span>
              </div>

              {/* Name + description */}
              <h3 className="font-semibold text-sm mb-2 group-hover:text-sky transition-colors">
                {charity.name}
              </h3>
              <p className="text-muted text-xs leading-relaxed mb-5 flex-1 line-clamp-3">
                {charity.description}
              </p>

              {/* Raised */}
              <div className="pt-4 border-t border-card-border flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-muted uppercase tracking-wider mb-0.5">Raised</div>
                  <div className="font-bold text-sage text-base">
                    <AnimatedCounter target={charity.raised} prefix="$" duration={2 + i * 0.15} />
                  </div>
                </div>
                {charity.acceptsCrypto && (
                  <span className="inline-flex items-center gap-1 text-xs text-sage font-medium">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Crypto
                  </span>
                )}
              </div>
            </motion.a>
          ))}
        </div>

        {/* Total raised */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-10 bg-gradient-to-r from-sky-light via-sage-light/50 to-amber-light/30 rounded-2xl p-8 border border-sky/10 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div>
            <p className="text-sm font-medium text-muted mb-1">Total distributed to all charities</p>
            <p className="text-xs text-muted/70">Updated in real-time as donations are made on-chain</p>
          </div>
          <div className="text-3xl sm:text-4xl font-bold text-foreground">
            <AnimatedCounter target={74900} prefix="$" duration={2.5} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
