"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

const TOTAL_DONATED = 74900;

export default function Hero() {
  return (
    <section
      id="hero-section"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4"
    >
      {/* Live badge */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 mb-16 px-4 py-1.5 rounded-full bg-sky-light border border-sky/20 text-sky-dark text-sm font-medium"
      >
        <span className="w-2 h-2 rounded-full bg-sage pulse-dot" />
        100% of creator fees fund humanitarian relief
      </motion.div>

      {/* Donation total — the centrepiece */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="text-center mb-6"
      >
        <p className="text-xs font-semibold text-muted uppercase tracking-[0.2em] mb-5">
          Total Donated to Charities
        </p>
        <div className="text-[clamp(4rem,16vw,10rem)] font-bold leading-none tracking-tight text-foreground">
          <AnimatedCounter target={TOTAL_DONATED} prefix="$" duration={2.2} />
        </div>
        <div className="flex items-center justify-center gap-2 mt-5">
          <span className="w-2 h-2 rounded-full bg-sage pulse-dot" />
          <span className="text-sm text-sage font-medium">Live — updated on-chain</span>
        </div>
      </motion.div>

      {/* Horizontal rule */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="w-16 h-px bg-card-border mx-auto my-12"
      />

      {/* Tagline + CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center max-w-xl mx-auto"
      >
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground mb-3">
          Trade with purpose.{" "}
          <span className="text-sky">Fund the front lines.</span>
        </h1>
        <p className="text-muted text-base leading-relaxed mb-10">
          A Solana token where every trade sends creator fees directly to
          humanitarian organisations helping civilians caught in conflict.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#token"
            className="w-full sm:w-auto bg-sky hover:bg-sky-dark text-white font-semibold px-8 py-3.5 rounded-full transition-colors shadow-lg shadow-sky/20"
          >
            View Token
          </a>
          <a
            href="#charities"
            className="w-full sm:w-auto border border-card-border hover:border-sky/40 bg-card text-foreground font-semibold px-8 py-3.5 rounded-full transition-all hover:shadow-md"
          >
            See the Charities
          </a>
        </div>
      </motion.div>

      {/* Scroll cue */}
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
