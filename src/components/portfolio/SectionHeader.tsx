export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={`${align === "center" ? "text-center" : "text-left"} mb-12 md:mb-14`}>
      <p className="text-stone-500 dark:text-stone-400 text-sm mb-1">{eyebrow}</p>
      <h2 className="text-2xl md:text-3xl font-bold text-stone-900 dark:text-stone-50">{title}</h2>
      {subtitle && (
        <p
          className={`mt-2 text-sm text-stone-500 dark:text-stone-400 max-w-xl ${align === "center" ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
