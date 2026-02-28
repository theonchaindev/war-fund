"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#how-it-works", label: "// HOW IT WORKS" },
    { href: "#charities", label: "// CHARITIES" },
    { href: "#transparency", label: "// OPS" },
    { href: "#token", label: "// TOKEN" },
  ];

  return (
    <>
      {/* Red laser line at top */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red to-transparent z-[60] opacity-80" />

      <nav
        className={`fixed top-[2px] left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/90 backdrop-blur-md border-b border-red/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-red/20 rounded animate-ping" style={{ animationDuration: "3s" }} />
                <div className="relative w-8 h-8 border border-red bg-red/10 flex items-center justify-center" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}>
                  <span className="text-red font-bold text-xs">W</span>
                </div>
              </div>
              <span className="font-mono font-bold text-sm tracking-widest text-foreground group-hover:text-red transition-colors">
                WAR FUND
              </span>
            </a>

            <div className="hidden md:flex items-center gap-6">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs font-mono text-muted hover:text-red transition-colors tracking-wider"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#token"
                className="relative bg-red/10 border border-red/50 hover:bg-red/20 hover:border-red text-red text-xs font-mono font-bold px-4 py-2 transition-all tracking-wider glow-red"
                style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))" }}
              >
                BUY $WARFUND
              </a>
            </div>

            <button
              className="md:hidden text-red"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {menuOpen && (
            <div className="md:hidden pb-4 border-t border-red/20 mt-2 pt-4 bg-background/95 backdrop-blur-md">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block py-2 text-xs font-mono text-muted hover:text-red transition-colors tracking-wider"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#token"
                className="mt-3 block text-center bg-red/10 border border-red/50 text-red text-xs font-mono font-bold px-4 py-2.5 transition-colors tracking-wider"
                onClick={() => setMenuOpen(false)}
              >
                BUY $WARFUND
              </a>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
