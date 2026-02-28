"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

const CONTRACT_ADDRESS = "YOUR_TOKEN_CONTRACT_ADDRESS_HERE";

export default function TokenInfo() {
  const [copied, setCopied] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const copyCA = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="token" className="py-28 px-4" ref={ref}>
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 max-w-[60px] bg-red" />
            <span className="font-mono text-xs text-red tracking-widest">INTEL</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold font-mono tracking-tighter">
            <span className="text-red text-glow-red">$WARFUND</span> TOKEN
          </h2>
          <p className="text-muted font-mono text-sm mt-3 max-w-lg">
            &gt; Built on Solana. Fast, low-cost. Every trade funds humanitarian relief.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative bg-card border border-card-border overflow-hidden"
          style={{ clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))" }}
        >
          {/* Radar pulse decoration */}
          <div className="absolute -top-20 -right-20 w-60 h-60 pointer-events-none opacity-10">
            <div className="absolute inset-0 rounded-full border border-red" />
            <div className="absolute inset-6 rounded-full border border-red/50" />
            <div className="absolute inset-12 rounded-full border border-red/25" />
            <div className="absolute top-1/2 left-1/2 w-1/2 h-px bg-red origin-left radar-sweep" />
          </div>

          <div className="relative p-8 sm:p-12">
            {/* Contract address */}
            <div className="mb-10">
              <div className="font-mono text-[10px] text-muted tracking-widest mb-2 flex items-center gap-2">
                CONTRACT_ADDRESS
                <span className="w-1.5 h-1.5 bg-green rounded-full pulse-dot" />
              </div>
              <div className="bg-background border border-card-border p-4 flex items-center gap-3">
                <code className="text-sm font-mono text-amber text-glow-amber flex-1 truncate">
                  {CONTRACT_ADDRESS}
                </code>
                <button
                  onClick={copyCA}
                  className="shrink-0 text-muted hover:text-amber transition-colors"
                  title="Copy CA"
                >
                  {copied ? (
                    <svg className="w-5 h-5 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Tokenomics */}
            <div className="grid sm:grid-cols-3 gap-4 mb-10">
              {[
                { label: "TOTAL SUPPLY", value: 1000000000, suffix: "", display: "1B" },
                { label: "FEES TO CHARITY", value: 100, suffix: "%", isRed: true },
                { label: "NETWORK", display: "SOLANA", isAmber: true },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="text-center p-5 bg-background border border-card-border hud-corners"
                >
                  <div className={`text-2xl sm:text-3xl font-bold font-mono ${item.isRed ? "text-red text-glow-red" : item.isAmber ? "text-amber text-glow-amber" : "text-foreground"}`}>
                    {item.display ? (
                      item.display
                    ) : (
                      <AnimatedCounter target={item.value!} suffix={item.suffix} duration={2} />
                    )}
                  </div>
                  <div className="font-mono text-[10px] text-muted mt-2 tracking-widest">{item.label}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-red hover:bg-red-dark text-white font-mono font-bold py-4 transition-all text-sm tracking-wider glow-red"
                style={{ clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))" }}
              >
                BUY ON PUMP.FUN
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center border border-card-border hover:border-red/50 text-foreground font-mono font-bold py-4 transition-all text-sm tracking-wider"
                style={{ clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))" }}
              >
                DEX SCREENER
              </a>
              <a
                href={`https://solscan.io/token/${CONTRACT_ADDRESS}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center border border-card-border hover:border-red/50 text-foreground font-mono font-bold py-4 transition-all text-sm tracking-wider"
                style={{ clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))" }}
              >
                SOLSCAN
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
