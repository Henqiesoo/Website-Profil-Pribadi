"use client";

import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  /** Jeda kecil antar elemen dalam satu grup, dalam milidetik. */
  delay?: number;
  className?: string;
};

/**
 * Memunculkan isinya sekali saja saat masuk viewport.
 * Tujuannya menuntun urutan baca dari atas ke bawah, bukan hiasan.
 * Atribut data-shown ditulis langsung ke DOM supaya tidak memicu render ulang.
 */
export function Reveal({ children, delay = 0, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const tampilkan = () => {
      el.dataset.shown = "true";
    };

    if (typeof IntersectionObserver === "undefined") {
      tampilkan();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        tampilkan();
        observer.disconnect();
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-shown="false"
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal${className ? ` ${className}` : ""}`}
    >
      {children}
    </div>
  );
}
