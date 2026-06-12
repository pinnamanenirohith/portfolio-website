import { cn } from "@/lib/cn";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  elevated?: boolean;
}

export function GlassCard({ children, className, hover = false, glow = false, elevated = false }: GlassCardProps) {
  return (
    <div
      className={cn(
        elevated ? "card-elevated" : "card",
        hover && "card-hover cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
}
