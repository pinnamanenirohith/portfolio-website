import { cn } from "@/lib/cn";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export function GlassCard({ children, className, hover = false, glow = false }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass glass-inner-glow rounded-2xl",
        hover && "glass-hover cursor-pointer",
        glow && "shadow-[0_0_40px_-12px_rgba(59,130,246,0.2)]",
        className
      )}
    >
      {children}
    </div>
  );
}
