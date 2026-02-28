"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

const CONTRACT_ADDRESS = "YOUR_TOKEN_CONTRACT_ADDRESS_HERE";

export default function TokenInfo() {
  const [copied, setCopied] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const copyCA = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="token" className="py-28 px-4" ref={ref}>
      <div className="section-divider mb-28" />
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-sky uppercase tracking-widest mb-3">Token</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            <span className="text-sky">$WARFUND</span> on Solana
          </h2>
          <p className="text-muted max-w-xl mx-auto text-base">
            Fast, low-cost transactions on Solana. Every trade funds humanitarian relief.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card rounded-3xl border border-card-border p-8 sm:p-12 shadow-lg shadow-sky/5"
        >
          {/* Contract address */}
          <div className="mb-10">
            <label className="text-xs font-semibold text-muted uppercase tracking-wider mb-2 block">
              Contract Address
            </label>
            <div className="bg-subtle rounded-xl p-4 flex items-center gap-3 border border-card-border">
              <code className="text-sm font-mono text-foreground flex-1 truncate opacity-60">
                {CONTRACT_ADDRESS}
              </code>
              <button
                onClick={copyCA}
                className="shrink-0 text-muted hover:text-sky transition-colors"
                title="Copy CA"
              >
                {copied ? (
                  <svg className="w-5 h-5 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              { label: "Total Supply", display: "1B", color: "text-foreground" },
              { label: "Fees to Charity", value: 100, suffix: "%", color: "text-sky" },
              { label: "Network", display: "Solana", color: "text-sage" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="text-center p-5 bg-subtle rounded-2xl border border-card-border"
              >
                <div className={`text-2xl sm:text-3xl font-bold ${item.color}`}>
                  {item.display ? (
                    item.display
                  ) : (
                    <AnimatedCounter target={item.value!} suffix={item.suffix} duration={2} />
                  )}
                </div>
                <div className="text-xs text-muted mt-2">{item.label}</div>
              </motion.div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-sky hover:bg-sky-dark text-white font-semibold py-3.5 rounded-full transition-colors shadow-md shadow-sky/20"
            >
              Buy on Pump.fun
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center border border-card-border hover:border-sky/30 bg-card hover:bg-sky-light/30 text-foreground font-semibold py-3.5 rounded-full transition-all"
            >
              DEX Screener
            </a>
            <a
              href={`https://solscan.io/token/${CONTRACT_ADDRESS}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center border border-card-border hover:border-sky/30 bg-card hover:bg-sky-light/30 text-foreground font-semibold py-3.5 rounded-full transition-all"
            >
              Solscan
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
