import { useEffect, useState } from "react";

interface TypewriterTextProps {
  text: string;
  speed?: number;
  startDelay?: number;
}

export function TypewriterText({ text, speed = 70, startDelay = 0 }: TypewriterTextProps) {
  const [displayedChars, setDisplayedChars] = useState(0);
  const [started, setStarted] = useState(startDelay === 0);

  useEffect(() => {
    if (startDelay === 0) return;

    const delayTimer = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(delayTimer);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;

    if (displayedChars >= text.length) return;

    const interval = setInterval(() => {
      setDisplayedChars((prev) => {
        if (prev >= text.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [started, displayedChars, text.length, speed]);

  return (
    <span className="hero-title-accent">
      {text.slice(0, displayedChars)}
      {started && <span className="typewriter-cursor" />}
    </span>
  );
}