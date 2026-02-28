"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Radial glow behind title */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red/5 rounded-full blur-[120px]" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-cyan/5 rounded-full blur-[100px]" />

      {/* HUD frame decorations */}
      <div className="absolute top-24 left-8 hidden lg:block">
        <div className="font-mono text-[10px] text-red/40 space-y-1">
          <div className="animate-flicker">SYS.ONLINE</div>
          <div>LAT: 35.6892</div>
          <div>LON: 51.3890</div>
          <div className="text-green/40">STATUS: ACTIVE</div>
        </div>
      </div>
      <div className="absolute top-24 right-8 hidden lg:block text-right">
        <div className="font-mono text-[10px] text-red/40 space-y-1">
          <div>SECTOR: GLOBAL</div>
          <div>NET: SOLANA</div>
          <div className="animate-flicker">FEED: LIVE</div>
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        {/* Classification badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 border border-red/30 bg-red/5 font-mono text-xs tracking-wider">
            <span className="w-2 h-2 bg-red rounded-full pulse-dot" />
            <span className="text-red">MISSION ACTIVE</span>
            <span className="text-muted">—</span>
            <span className="text-muted">100% CREATOR FEES TO HUMANITARIAN RELIEF</span>
          </div>
        </motion.div>

        {/* Glitch title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold tracking-tighter mb-2 font-mono">
            <span
              className="glitch-text text-foreground inline-block"
              data-text="WAR"
            >
              WAR
            </span>{" "}
            <span
              className="glitch-text text-red text-glow-red inline-block"
              data-text="FUND"
            >
              FUND
            </span>
          </h1>
        </motion.div>

        {/* Subtitle with typing feel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mb-10"
        >
          <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed font-mono">
            <span className="text-red">&gt;</span> A Solana token with a mission. Every trade generates creator fees
            donated directly to humanitarian organizations helping civilians
            caught in the Iran-USA conflict.
            <span className="inline-block w-2 h-5 bg-red/80 ml-1 animate-blink align-middle" />
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#token"
            className="relative w-full sm:w-auto bg-red hover:bg-red-dark text-white font-mono font-bold px-10 py-4 transition-all text-sm tracking-wider glow-red"
            style={{ clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))" }}
          >
            VIEW TOKEN
          </a>
          <a
            href="#charities"
            className="w-full sm:w-auto border border-card-border hover:border-red/50 text-foreground font-mono font-bold px-10 py-4 transition-all text-sm tracking-wider"
            style={{ clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))" }}
          >
            SEE CHARITIES
          </a>
        </motion.div>

        {/* Stats with animated counters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="grid grid-cols-3 gap-8 max-w-xl mx-auto"
        >
          <div className="hud-corners p-4">
            <div className="text-3xl sm:text-4xl font-bold font-mono text-foreground">
              <AnimatedCounter target={8} duration={1.5} />
            </div>
            <div className="text-[10px] font-mono text-muted mt-1 tracking-widest uppercase">Charities</div>
          </div>
          <div className="hud-corners p-4">
            <div className="text-3xl sm:text-4xl font-bold font-mono text-red text-glow-red">
              <AnimatedCounter target={100} suffix="%" duration={1.5} />
            </div>
            <div className="text-[10px] font-mono text-muted mt-1 tracking-widest uppercase">Fees Donated</div>
          </div>
          <div className="hud-corners p-4">
            <div className="text-3xl sm:text-4xl font-bold font-mono text-amber text-glow-amber">
              <AnimatedCounter target={74900} prefix="$" duration={2} />
            </div>
            <div className="text-[10px] font-mono text-muted mt-1 tracking-widest uppercase">Total Raised</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-mono text-muted tracking-widest">SCROLL</span>
          <svg className="w-4 h-4 text-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
