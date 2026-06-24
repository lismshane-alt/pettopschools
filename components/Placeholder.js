// Simple image placeholder. Swap for next/image + real assets later.
export default function Placeholder({ label = "Image", className = "", ratio = "aspect-[4/3]" }) {
  return (
    <div className={`placeholder rounded-2xl ${ratio} ${className}`}>
      <div className="z-10 flex flex-col items-center gap-2 text-center">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="opacity-60">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="8.5" cy="8.5" r="1.8" stroke="currentColor" strokeWidth="1.5" />
          <path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
        <span className="text-xs font-medium uppercase tracking-wide">{label}</span>
      </div>
    </div>
  );
}
