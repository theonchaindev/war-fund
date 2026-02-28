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
    { href: "#how-it-works", label: "How It Works" },
    { href: "#charities", label: "Charities" },
    { href: "#transparency", label: "Transparency" },
    { href: "#token", label: "Token" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-card-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sky to-sage flex items-center justify-center shadow-sm">
              {/* Dove icon */}
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3C10.4 3 9 4.4 9 6c0 .8.3 1.5.8 2H6c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1l-2 4h4l1-2h4l1 2h4l-2-4h1c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2h-3.8c.5-.5.8-1.2.8-2 0-1.6-1.4-3-3-3zm0 2c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z"/>
              </svg>
            </div>
            <span className="font-semibold text-base text-foreground group-hover:text-sky transition-colors">
              War Fund
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#token"
              className="bg-sky hover:bg-sky-dark text-white text-sm font-medium px-5 py-2 rounded-full transition-colors shadow-sm shadow-sky/20"
            >
              Buy $WARFUND
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-foreground"
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

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-card-border mt-2 pt-4 bg-white/95 rounded-b-2xl">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2.5 text-sm text-muted hover:text-foreground transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#token"
              className="mt-3 block text-center bg-sky hover:bg-sky-dark text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Buy $WARFUND
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
