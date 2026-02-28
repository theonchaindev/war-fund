"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
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

        {/* Dove illustration — floating */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex justify-center mb-6"
        >
          <div className="animate-float">
            <svg width="120" height="100" viewBox="0 0 120 100" fill="none" className="drop-shadow-md">
              {/* Body */}
              <ellipse cx="58" cy="55" rx="28" ry="18" fill="#e0f2fe" stroke="#7dd3fc" strokeWidth="1.5" />
              {/* Wing */}
              <path d="M30 48 Q15 30 40 38 Q20 42 35 52Z" fill="#bae6fd" stroke="#7dd3fc" strokeWidth="1" />
              <path d="M86 48 Q101 30 76 38 Q96 42 81 52Z" fill="#bae6fd" stroke="#7dd3fc" strokeWidth="1" />
              {/* Head */}
              <circle cx="82" cy="44" r="12" fill="#e0f2fe" stroke="#7dd3fc" strokeWidth="1.5" />
              {/* Eye */}
              <circle cx="85" cy="42" r="2" fill="#0ea5e9" />
              <circle cx="85.8" cy="41.2" r="0.6" fill="white" />
              {/* Beak */}
              <path d="M92 44 L98 46 L92 48Z" fill="#f59e0b" />
              {/* Tail */}
              <path d="M32 58 Q20 65 28 70 Q22 62 36 62Z" fill="#bae6fd" stroke="#7dd3fc" strokeWidth="1" />
              {/* Olive branch */}
              <path d="M95 50 Q100 55 98 62" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
              <ellipse cx="98" cy="54" rx="4" ry="2.5" fill="#6ee7b7" transform="rotate(30 98 54)" />
              <ellipse cx="99" cy="59" rx="3.5" ry="2" fill="#6ee7b7" transform="rotate(-20 99 59)" />
              <ellipse cx="97" cy="63" rx="3" ry="2" fill="#34d399" transform="rotate(10 97 63)" />
            </svg>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 leading-tight"
        >
          Trade with{" "}
          <span className="text-shimmer">purpose</span>
          <br />
          <span className="text-foreground">Fund the</span>{" "}
          <span className="text-sky">front lines</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          War Fund is a Solana token where every trade sends creator fees directly
          to humanitarian organizations helping civilians caught in conflict.
          Finance peace — one transaction at a time.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
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

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="grid grid-cols-3 gap-6 max-w-lg mx-auto"
        >
          {[
            { value: 8, suffix: "", label: "Charities" },
            { value: 100, suffix: "%", label: "Fees Donated", color: "text-sky" },
            { value: 74900, prefix: "$", label: "Total Raised", color: "text-sage" },
          ].map((stat) => (
            <div key={stat.label} className="bg-card/80 rounded-2xl px-4 py-5 border border-card-border shadow-sm">
              <div className={`text-2xl sm:text-3xl font-bold ${stat.color ?? "text-foreground"}`}>
                <AnimatedCounter
                  target={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  duration={1.8}
                />
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
          className="flex flex-col items-center gap-1"
        >
          <svg className="w-5 h-5 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
