export function SectionLabel({
  index,
  children,
  tone = "dark",
}: {
  index: string;
  children: string;
  tone?: "dark" | "light";
}) {
  const color = tone === "dark" ? "text-ink/50" : "text-white/50";
  return (
    <div
      className={`flex items-center gap-4 font-corporate text-[11px] tracking-[0.3em] ${color}`}
    >
      <span className="text-ember">{index}</span>
      <span className="h-px w-10 bg-current opacity-40" />
      <span>{children}</span>
    </div>
  );
}
