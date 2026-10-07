"use client";
import { useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface Props {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  intensity?: number;
  glare?: boolean;
}

export default function TiltCard({
  children,
  className,
  style,
  intensity = 12,
  glare = true,
}: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);

  const springCfg = { stiffness: 300, damping: 28, mass: 0.5 };
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [intensity, -intensity]), springCfg);
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-intensity, intensity]), springCfg);
  const scale = useSpring(1, { stiffness: 300, damping: 28 });

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    rawX.set(x);
    rawY.set(y);
    glareX.set(((e.clientX - rect.left) / rect.width) * 100);
    glareY.set(((e.clientY - rect.top) / rect.height) * 100);
  }, [rawX, rawY, glareX, glareY]);

  const onMouseLeave = useCallback(() => {
    rawX.set(0);
    rawY.set(0);
    scale.set(1);
  }, [rawX, rawY, scale]);

  const onMouseEnter = useCallback(() => {
    scale.set(1.02);
  }, [scale]);

  const glareOpacity = useTransform(
    [rawX, rawY],
    ([x, y]: number[]) => Math.sqrt(x * x + y * y) * 0.6
  );

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      className={className}
      style={{
        ...style,
        transformStyle: "preserve-3d",
        perspective: 800,
        rotateX,
        rotateY,
        scale,
      }}
    >
      {children}

      {glare && (
        <motion.div
          className="absolute inset-0 rounded-[inherit] pointer-events-none"
          style={{
            opacity: glareOpacity,
            background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.18) 0%, transparent 60%)`,
            zIndex: 1,
          }}
        />
      )}
    </motion.div>
  );
}
