interface SectionHeadingProps {
  title: string;
  subtitle: string;
  align?: "left" | "center";
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <header className={`max-w-2xl mb-12 ${alignment}`}>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-agreste-areia tracking-tight">
        {title}
      </h2>
      <div className="w-16 h-1 bg-agreste-led-mandacaru mt-4 mb-4 rounded-full" />
      <p className="text-base sm:text-lg text-agreste-prata/80 leading-relaxed">
        {subtitle}
      </p>
    </header>
  );
}
