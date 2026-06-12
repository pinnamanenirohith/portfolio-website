import { cn } from "@/lib/cn";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  subtle?: boolean;
  as?: "span" | "h1" | "h2" | "h3" | "p";
}

export function GradientText({
  children,
  className,
  subtle = false,
  as: Tag = "span",
}: GradientTextProps) {
  return (
    <Tag className={cn(subtle ? "gradient-text-subtle" : "gradient-text", className)}>
      {children}
    </Tag>
  );
}
