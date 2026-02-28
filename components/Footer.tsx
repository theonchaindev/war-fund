import { charities } from "@/lib/charities";

export default function Footer() {
  return (
    <footer className="relative border-t border-red/20 py-16 px-4">
      {/* Red laser divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red/50 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 border border-red bg-red/10 flex items-center justify-center" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}>
                <span className="text-red font-bold text-xs">W</span>
              </div>
              <span className="font-mono font-bold text-sm tracking-widest">WAR FUND</span>
            </div>
            <p className="text-muted text-xs font-mono leading-relaxed">
              100% of creator fees fund humanitarian relief for civilians affected by conflict.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-mono font-bold text-[10px] text-red tracking-widest mb-4">// NAVIGATION</h4>
            <div className="space-y-2">
              {["how-it-works", "charities", "transparency", "token"].map((id) => (
                <a key={id} href={`#${id}`} className="block text-xs font-mono text-muted hover:text-red transition-colors tracking-wider">
                  {id.toUpperCase().replace("-", "_")}
                </a>
              ))}
            </div>
          </div>

          {/* Charities */}
          <div>
            <h4 className="font-mono font-bold text-[10px] text-red tracking-widest mb-4">// CHARITIES</h4>
            <div className="space-y-2">
              {charities.slice(0, 4).map((c) => (
                <a
                  key={c.shortName}
                  href={c.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-xs font-mono text-muted hover:text-red transition-colors tracking-wider"
                >
                  {c.shortName.toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-mono font-bold text-[10px] text-red tracking-widest mb-4">// COMMUNITY</h4>
            <div className="space-y-2">
              <a href="#" className="block text-xs font-mono text-muted hover:text-red transition-colors tracking-wider">
                TWITTER / X
              </a>
              <a href="#" className="block text-xs font-mono text-muted hover:text-red transition-colors tracking-wider">
                TELEGRAM
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-card-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] text-muted text-center sm:text-left tracking-wider">
            WAR FUND IS A COMMUNITY-DRIVEN INITIATIVE. DONATIONS ARE MADE TRANSPARENTLY ON-CHAIN. NOT FINANCIAL ADVICE.
          </p>
          <p className="font-mono text-[10px] text-muted tracking-wider">
            &copy; {new Date().getFullYear()} WAR FUND
          </p>
        </div>
      </div>
    </footer>
  );
}
