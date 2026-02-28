"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

const TOTAL_DONATED = 74900;

export default function Hero() {
  return (
    <section id="hero-section" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-sky-light border border-sky/20 text-sky-dark text-sm font-medium"
        >
          <span className="w-2 h-2 rounded-full bg-sage pulse-dot inline-block" />
          100% of creator fees fund humanitarian relief
        </motion.div>

        {/* ── BIG DONATION TOTAL — hero centrepiece ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mb-10"
        >
          <p className="text-sm font-medium text-muted uppercase tracking-widest mb-4">
            Total Donated to Charities
          </p>
          <div className="text-7xl sm:text-8xl md:text-[9rem] font-bold leading-none tracking-tight text-foreground">
            <AnimatedCounter target={TOTAL_DONATED} prefix="$" duration={2.2} />
          </div>
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className="w-2 h-2 rounded-full bg-sage pulse-dot" />
            <span className="text-sm text-sage font-medium">Live — updated on-chain</span>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="w-24 h-px bg-gradient-to-r from-transparent via-card-border to-transparent mx-auto mb-10"
        />

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-5 leading-tight"
        >
          Trade with{" "}
          <span className="text-shimmer">purpose</span>
          {" · "}
          Fund the{" "}
          <span className="text-sky">front lines</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="text-base sm:text-lg text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          War Fund is a Solana token where every trade sends creator fees directly
          to humanitarian organizations helping civilians caught in conflict.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <a
            href="#token"
            className="w-full sm:w-auto bg-sky hover:bg-sky-dark text-white font-semibold px-8 py-3.5 rounded-full transition-colors text-base shadow-lg shadow-sky/25"
          >
            View Token
          </a>
          <a
            href="#charities"
            className="w-full sm:w-auto border border-card-border hover:border-sky/40 bg-card text-foreground font-semibold px-8 py-3.5 rounded-full transition-all text-base hover:shadow-md"
          >
            See the Charities
          </a>
        </motion.div>

        {/* Supporting stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="grid grid-cols-2 gap-4 max-w-xs mx-auto"
        >
          {[
            { value: 8, suffix: "", label: "Charities Supported" },
            { value: 100, suffix: "%", label: "Fees Donated", color: "text-sky" },
          ].map((stat) => (
            <div key={stat.label} className="bg-card/80 rounded-2xl px-4 py-4 border border-card-border shadow-sm">
              <div className={`text-2xl font-bold ${stat.color ?? "text-foreground"}`}>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} duration={1.8} />
              </div>
              <div className="text-xs text-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg className="w-5 h-5 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
