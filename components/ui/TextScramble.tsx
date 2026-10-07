"use client";
import { useCallback, useEffect, useRef, useState } from "react";

const CHARS = "!<>-_\\/[]{}—=+*^?#ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

interface Props {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  trigger?: "hover" | "mount" | "inview";
  delay?: number;
  speed?: number;
  as?: React.ElementType;
}

export default function TextScramble({
  text,
  className,
  style,
  trigger = "hover",
  delay = 0,
  speed = 1,
  as: Tag = "span",
}: Props) {
  const [displayed, setDisplayed] = useState(trigger === "mount" ? "" : text);
  const frameRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const iterRef = useRef(0);

  const scramble = useCallback(() => {
    if (frameRef.current) clearTimeout(frameRef.current);
    const len = text.length;
    iterRef.current = 0;
    const totalFrames = Math.ceil(len * 2.4 / speed);

    const step = () => {
      iterRef.current++;
      const progress = iterRef.current / totalFrames;
      const resolved = Math.floor(progress * len);

      setDisplayed(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < resolved) return char;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      if (iterRef.current < totalFrames) {
        frameRef.current = setTimeout(step, 28 / speed);
      } else {
        setDisplayed(text);
      }
    };

    step();
  }, [text, speed]);

  useEffect(() => {
    if (trigger !== "mount") return;
    const t = setTimeout(() => scramble(), delay);
    return () => clearTimeout(t);
  }, [trigger, delay, scramble]);

  useEffect(() => {
    return () => { if (frameRef.current) clearTimeout(frameRef.current); };
  }, []);

  const handlers =
    trigger === "hover"
      ? { onMouseEnter: scramble }
      : {};

  return (
    <Tag className={className} style={{ ...style, fontVariantNumeric: "tabular-nums" }} {...handlers}>
      {displayed}
    </Tag>
  );
}
