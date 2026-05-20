import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  variant?: Variant;
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-agreste-led-mandacaru text-agreste-carvao font-semibold hover:bg-agreste-led-dim hover:shadow-[0_0_24px_#39FF1440] transition-all duration-300",
  secondary:
    "border-2 border-agreste-terracota text-agreste-terracota hover:bg-agreste-terracota hover:text-agreste-areia transition-all duration-300",
  ghost:
    "text-agreste-prata hover:text-agreste-led-mandacaru transition-colors duration-200",
};

export function Button({
  variant = "primary",
  href,
  children,
  className = "",
  onClick,
}: ButtonProps) {
  const base = "px-6 py-3 rounded-md font-display text-sm tracking-wide cursor-pointer";
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
