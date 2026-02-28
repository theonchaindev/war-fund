"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

const TOTAL = 74900;

export default function StickyDonationBadge() {
  const [visible, setVisible] = useState(false);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero-section");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  // Only animate the counter once when it first becomes visible
  useEffect(() => {
    if (visible && !triggered) setTriggered(true);
  }, [visible, triggered]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.92 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <a
            href="#charities"
            className="group flex items-center gap-3 bg-white border border-card-border rounded-2xl px-5 py-4 shadow-xl shadow-sage/10 hover:shadow-sage/20 hover:border-sage/30 transition-all"
          >
            {/* Pulse indicator */}
            <div className="relative shrink-0">
              <span className="absolute inset-0 rounded-full bg-sage/30 animate-ping" />
              <span className="relative w-3 h-3 rounded-full bg-sage block" />
            </div>

            <div>
              <div className="text-[10px] font-medium text-muted uppercase tracking-widest leading-none mb-1">
                Total Donated
              </div>
              <div className="text-2xl font-bold text-foreground leading-none">
                {triggered ? (
                  <AnimatedCounter target={TOTAL} prefix="$" duration={1.6} />
                ) : (
                  `$0`
                )}
              </div>
            </div>

            {/* Arrow */}
            <svg
              className="w-4 h-4 text-muted group-hover:text-sage transition-colors ml-1 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
