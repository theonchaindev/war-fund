"use client";

export default function GridBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Warm cream base */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50/60 via-background to-emerald-50/40" />

      {/* Soft blobs */}
      <div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full animate-soft-pulse"
        style={{ background: "radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 70%)" }}
      />
      <div
        className="absolute top-1/3 -right-60 w-[700px] h-[700px] rounded-full animate-soft-pulse-delay"
        style={{ background: "radial-gradient(circle, rgba(16,185,129,0.10) 0%, transparent 70%)" }}
      />
      <div
        className="absolute -bottom-40 left-1/3 w-[500px] h-[500px] rounded-full animate-soft-pulse"
        style={{ background: "radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)" }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(14,165,233,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14,165,233,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
    </div>
  );
}
