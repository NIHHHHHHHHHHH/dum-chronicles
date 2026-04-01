export default function SectionBadge({ children, className = "" }) {
  return (
    <div className={`inline-flex items-center gap-2 mb-4 ${className}`}>
      <span className="w-8 h-px bg-accent" />
      <span className="text-accent font-body text-xs font-bold tracking-[0.25em] uppercase">
        {children}
      </span>
      <span className="w-8 h-px bg-accent" />
    </div>
  );
}