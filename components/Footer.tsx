import { charities } from "@/lib/charities";

export default function Footer() {
  return (
    <footer className="border-t border-card-border bg-card/60 py-16 px-4 mt-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sky to-sage flex items-center justify-center shadow-sm">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3C10.4 3 9 4.4 9 6c0 .8.3 1.5.8 2H6c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1l-2 4h4l1-2h4l1 2h4l-2-4h1c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2h-3.8c.5-.5.8-1.2.8-2 0-1.6-1.4-3-3-3zm0 2c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z"/>
                </svg>
              </div>
              <span className="font-semibold text-base">War Fund</span>
            </div>
            <p className="text-muted text-sm leading-relaxed">
              100% of creator fees fund humanitarian relief for civilians affected by conflict.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Navigation</h4>
            <div className="space-y-2.5">
              {[
                { href: "#how-it-works", label: "How It Works" },
                { href: "#charities", label: "Charities" },
                { href: "#transparency", label: "Transparency" },
                { href: "#token", label: "Token" },
              ].map((link) => (
                <a key={link.href} href={link.href} className="block text-sm text-muted hover:text-foreground transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Charities */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Charities</h4>
            <div className="space-y-2.5">
              {charities.slice(0, 4).map((c) => (
                <a
                  key={c.shortName}
                  href={c.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-muted hover:text-foreground transition-colors"
                >
                  {c.shortName}
                </a>
              ))}
            </div>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Community</h4>
            <div className="space-y-2.5">
              <a href="#" className="block text-sm text-muted hover:text-foreground transition-colors">Twitter / X</a>
              <a href="#" className="block text-sm text-muted hover:text-foreground transition-colors">Telegram</a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-card-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted text-center sm:text-left">
            War Fund is a community-driven initiative. Donations made transparently on-chain. Not financial advice.
          </p>
          <p className="text-xs text-muted">&copy; {new Date().getFullYear()} War Fund</p>
        </div>
      </div>
    </footer>
  );
}
