"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const DEV_WALLET = "YOUR_DEV_WALLET_ADDRESS_HERE";

const logEntries = [
  { time: "2026-02-28 14:32:01", event: "SYSTEM INITIALIZED", type: "sys" },
  { time: "2026-02-28 14:32:02", event: "CONNECTING TO SOLANA MAINNET...", type: "sys" },
  { time: "2026-02-28 14:32:03", event: "CONNECTION ESTABLISHED", type: "ok" },
  { time: "2026-02-28 14:32:05", event: "MONITORING DEV WALLET FOR INCOMING FEES", type: "sys" },
  { time: "——————————", event: "AWAITING FIRST DONATION BATCH", type: "pending" },
];

const donations = [
  { org: "ICRC", amount: "PENDING", date: "Awaiting batch", status: "queue" },
  { org: "MSF", amount: "PENDING", date: "Awaiting batch", status: "queue" },
  { org: "UNHCR", amount: "PENDING", date: "Awaiting batch", status: "queue" },
  { org: "UNICEF", amount: "PENDING", date: "Awaiting batch", status: "queue" },
];

export default function Transparency() {
  const [copied, setCopied] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const copyWallet = () => {
    navigator.clipboard.writeText(DEV_WALLET);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="transparency" className="py-28 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 max-w-[60px] bg-red" />
            <span className="font-mono text-xs text-red tracking-widest">OPERATIONS CENTER</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold font-mono tracking-tighter">
            FULL <span className="text-red text-glow-red">TRANSPARENCY</span>
          </h2>
          <p className="text-muted font-mono text-sm mt-3 max-w-lg">
            &gt; Every transaction on-chain and verifiable. No hidden fees, no middlemen.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Terminal / wallet panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-card-border overflow-hidden"
            style={{ clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))" }}
          >
            {/* Terminal header bar */}
            <div className="flex items-center justify-between px-4 py-2 bg-red/5 border-b border-card-border">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red rounded-full pulse-dot" />
                <span className="font-mono text-[10px] text-red tracking-widest">LIVE TERMINAL</span>
              </div>
              <div className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red/50" />
                <span className="w-2 h-2 rounded-full bg-amber/50" />
                <span className="w-2 h-2 rounded-full bg-green/50" />
              </div>
            </div>

            <div className="p-6">
              {/* Wallet display */}
              <div className="mb-6">
                <div className="font-mono text-[10px] text-muted tracking-widest mb-2">DEV_WALLET_ADDRESS</div>
                <div className="bg-background border border-card-border p-3 flex items-center gap-3">
                  <code className="text-xs font-mono text-green text-glow-green flex-1 truncate">
                    {DEV_WALLET}
                  </code>
                  <button
                    onClick={copyWallet}
                    className="shrink-0 text-muted hover:text-green transition-colors"
                    title="Copy address"
                  >
                    {copied ? (
                      <svg className="w-4 h-4 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    )}
                  </button>
                </div>
                <a
                  href={`https://solscan.io/account/${DEV_WALLET}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-3 text-xs font-mono text-red hover:text-red-dark transition-colors tracking-wider"
                >
                  VIEW ON SOLSCAN
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              {/* Terminal log */}
              <div className="font-mono text-[11px] space-y-1">
                {logEntries.map((entry, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.8 + i * 0.15 }}
                    className="flex gap-2"
                  >
                    <span className="text-muted shrink-0">[{entry.time}]</span>
                    <span className={
                      entry.type === "ok" ? "text-green text-glow-green" :
                      entry.type === "pending" ? "text-amber" :
                      "text-muted"
                    }>
                      {entry.event}
                    </span>
                  </motion.div>
                ))}
                <div className="flex gap-2 mt-1">
                  <span className="text-green">$</span>
                  <span className="inline-block w-2 h-4 bg-green/80 animate-blink" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Donation queue */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-card border border-card-border overflow-hidden"
            style={{ clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))" }}
          >
            {/* Header bar */}
            <div className="flex items-center justify-between px-4 py-2 bg-amber/5 border-b border-card-border">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-amber rounded-full pulse-dot" />
                <span className="font-mono text-[10px] text-amber tracking-widest">DONATION QUEUE</span>
              </div>
              <span className="font-mono text-[10px] text-muted">{donations.length} PENDING</span>
            </div>

            <div className="p-6">
              <div className="space-y-0">
                {donations.map((d, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                    className="flex items-center justify-between py-4 border-b border-card-border last:border-0"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-amber/10 border border-amber/20 flex items-center justify-center font-mono text-xs text-amber font-bold">
                        {d.org.charAt(0)}
                      </div>
                      <div>
                        <div className="font-mono font-bold text-sm">{d.org}</div>
                        <div className="font-mono text-[10px] text-muted">{d.date}</div>
                      </div>
                    </div>
                    <div className="text-right flex items-center gap-2">
                      <span className="font-mono text-xs text-amber tracking-wider">{d.amount}</span>
                      <span className="w-1.5 h-1.5 bg-amber rounded-full pulse-dot" />
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 p-3 bg-background border border-card-border">
                <p className="font-mono text-[10px] text-muted tracking-wider text-center">
                  DONATIONS LOGGED ON-CHAIN AS THEY ARE EXECUTED
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
