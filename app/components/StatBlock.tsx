"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 5, suffix: "★", label: "Perfect Google rating" },
  { value: 26, suffix: "+", label: "Verified 5-star reviews" },
  { value: 9, suffix: " pm", label: "Available daily until 9pm" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1200;
          const steps = 40;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current = Math.min(current + increment, target);
            setCount(Math.round(current));
            if (current >= target) clearInterval(timer);
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function StatBlock() {
  return (
    <div className="grid grid-cols-3 gap-0 divide-x" style={{ borderColor: "var(--border-dark)" }}>
      {stats.map((stat, i) => (
        <div key={i} className="px-6 lg:px-10 py-8 text-center">
          <div
            className="text-4xl lg:text-5xl font-black mb-1"
            style={{ fontFamily: "var(--font-nunito)", color: "var(--text-on-surface)" }}
          >
            <CountUp target={stat.value} suffix={stat.suffix} />
          </div>
          <p
            className="text-sm font-medium"
            style={{ color: "oklch(72% 0.030 95)", fontFamily: "var(--font-dmsans)" }}
          >
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
