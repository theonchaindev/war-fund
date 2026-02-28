"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { charities } from "@/lib/charities";
import AnimatedCounter from "./AnimatedCounter";

const focusColors: Record<string, string> = {
  "Emergency Relief": "text-red border-red/30",
  "Medical Aid": "text-amber border-amber/30",
  "Refugee Support": "text-cyan border-cyan/30",
  "Children's Aid": "text-purple-400 border-purple-400/30",
  "Crisis Response": "text-orange-400 border-orange-400/30",
  "Medical Supplies": "text-green border-green/30",
  Healthcare: "text-cyan border-cyan/30",
};

export default function Charities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="charities" className="py-28 px-4 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 max-w-[60px] bg-red" />
            <span className="font-mono text-xs text-red tracking-widest">DOSSIERS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold font-mono tracking-tighter">
            THE <span className="text-red text-glow-red">CHARITIES</span>
          </h2>
          <p className="text-muted font-mono text-sm mt-3 max-w-lg">
            &gt; Every cent from creator fees goes to these verified organizations on the front lines.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {charities.map((charity, i) => (
            <motion.a
              key={charity.shortName}
              href={charity.website}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-card border border-card-border overflow-hidden hover:border-red/40 transition-all"
              style={{ clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))" }}
            >
              {/* CLASSIFIED watermark */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] group-hover:opacity-0 transition-opacity">
                <span className="font-mono text-6xl font-bold text-red -rotate-12 select-none">
                  CLASSIFIED
                </span>
              </div>

              <div className="relative p-6">
                {/* Top row: logo + status */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded bg-white/5 border border-card-border flex items-center justify-center overflow-hidden group-hover:border-red/30 transition-colors">
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
                    <span className="w-2 h-2 bg-green rounded-full pulse-dot" />
                    <span className="font-mono text-[10px] text-green tracking-wider">ACTIVE</span>
                  </div>
                </div>

                {/* Focus tag */}
                <div className="mb-3">
                  <span className={`inline-block text-[10px] font-mono font-bold px-2 py-0.5 border tracking-wider ${focusColors[charity.focus] || "text-red border-red/30"}`}>
                    {charity.focus.toUpperCase()}
                  </span>
                </div>

                {/* Name */}
                <h3 className="font-mono font-bold text-sm mb-2 group-hover:text-red transition-colors tracking-tight">
                  {charity.name}
                </h3>

                {/* Description */}
                <p className="text-muted text-xs leading-relaxed mb-5 line-clamp-3">
                  {charity.description}
                </p>

                {/* Raised amount */}
                <div className="border-t border-card-border pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-mono text-muted tracking-wider mb-1">RAISED</div>
                      <div className="font-mono font-bold text-amber text-glow-amber text-lg">
                        <AnimatedCounter target={charity.raised} prefix="$" duration={2 + i * 0.2} />
                      </div>
                    </div>
                    <div className="text-right">
                      {charity.acceptsCrypto && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono text-green">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          CRYPTO
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Hover arrow */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-4 h-4 text-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Total raised bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 bg-card border border-card-border p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))" }}
        >
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 bg-red rounded-full pulse-dot" />
            <span className="font-mono text-sm text-muted tracking-wider">TOTAL DISTRIBUTED TO CHARITIES</span>
          </div>
          <div className="font-mono font-bold text-2xl sm:text-3xl text-amber text-glow-amber">
            <AnimatedCounter target={74900} prefix="$" duration={2.5} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
