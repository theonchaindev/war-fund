"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const DEV_WALLET = "YOUR_DEV_WALLET_ADDRESS_HERE";

const donations = [
  { org: "ICRC", amount: "Pending", date: "Awaiting first batch", status: "pending" },
  { org: "MSF", amount: "Pending", date: "Awaiting first batch", status: "pending" },
  { org: "UNHCR", amount: "Pending", date: "Awaiting first batch", status: "pending" },
  { org: "UNICEF", amount: "Pending", date: "Awaiting first batch", status: "pending" },
];

export default function Transparency() {
  const [copied, setCopied] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const copyWallet = () => {
    navigator.clipboard.writeText(DEV_WALLET);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="transparency" className="py-28 px-4" ref={ref}>
      <div className="section-divider mb-28" />
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-amber uppercase tracking-widest mb-3">On-Chain Proof</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Nothing to hide
          </h2>
          <p className="text-muted max-w-xl mx-auto text-base">
            Every fee collected and every donation made is fully verifiable on Solana.
            No intermediaries, no black boxes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Wallet card */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-2xl border border-card-border p-8 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-sky-light border border-sky/20 flex items-center justify-center text-sky">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-base">Dev Wallet</h3>
                <p className="text-xs text-muted">All creator fees accumulate here</p>
              </div>
            </div>

            <div className="bg-subtle rounded-xl p-4 flex items-center gap-3 mb-4 border border-card-border">
              <code className="text-xs font-mono text-foreground flex-1 truncate opacity-60">
                {DEV_WALLET}
              </code>
              <button
                onClick={copyWallet}
                className="shrink-0 text-muted hover:text-sky transition-colors"
                title="Copy address"
              >
                {copied ? (
                  <svg className="w-4 h-4 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              className="inline-flex items-center gap-2 text-sm text-sky hover:text-sky-dark transition-colors font-medium"
            >
              View on Solscan
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </motion.div>

          {/* Donation history */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="bg-card rounded-2xl border border-card-border p-8 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-sage-light border border-sage/20 flex items-center justify-center text-sage">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-base">Donation History</h3>
                <p className="text-xs text-muted">Track every disbursement</p>
              </div>
            </div>

            <div className="space-y-0 divide-y divide-card-border">
              {donations.map((d, i) => (
                <div key={i} className="flex items-center justify-between py-3.5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-subtle border border-card-border flex items-center justify-center text-xs font-bold text-muted">
                      {d.org.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium text-sm">{d.org}</div>
                      <div className="text-xs text-muted">{d.date}</div>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-muted bg-subtle px-2.5 py-1 rounded-full text-xs">
                    {d.amount}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-xs text-muted mt-5 text-center">
              Donations will appear here as they are executed on-chain
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
