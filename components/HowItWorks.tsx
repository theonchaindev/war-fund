"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Trade",
    description:
      "Buy and sell $WARFUND on Solana decentralized exchanges. Every transaction generates creator fees automatically.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
      </svg>
    ),
    color: "bg-sky-light text-sky border-sky/20",
    glow: "shadow-sky/10",
  },
  {
    number: "02",
    title: "Fees Collected",
    description:
      "Creator fees accumulate in the dev wallet with every trade. Every transaction is transparent and verifiable on-chain.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "bg-amber-light text-amber border-amber/20",
    glow: "shadow-amber/10",
  },
  {
    number: "03",
    title: "Aid Delivered",
    description:
      "Fees are converted and donated directly to verified humanitarian organizations. Every donation is tracked on-chain.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    color: "bg-sage-light text-sage border-sage/20",
    glow: "shadow-sage/10",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how-it-works" className="py-28 px-4" ref={ref}>
      <div className="section-divider mb-28" />
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-sky uppercase tracking-widest mb-3">How It Works</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Every trade becomes a lifeline
          </h2>
          <p className="text-muted max-w-xl mx-auto text-base">
            A simple, transparent mechanism that turns market activity into direct humanitarian aid.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector */}
          <div className="hidden md:flex absolute top-14 left-[22%] right-[22%] items-center">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="h-px flex-1 bg-gradient-to-r from-sky/30 via-amber/30 to-sage/30 origin-left"
            />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
            >
              <div className={`bg-card rounded-2xl p-8 border border-card-border shadow-lg ${step.glow} card-hover h-full`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${step.color}`}>
                    {step.icon}
                  </div>
                  <span className="text-sm font-semibold text-muted">Step {step.number}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
