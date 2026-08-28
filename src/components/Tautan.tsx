import type { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"a"> & {
  nada?: "isi" | "garis";
};

const dasar =
  "inline-flex h-12 items-center justify-center rounded-brand px-5 whitespace-nowrap sm:px-6 " +
  "font-[family-name:var(--font-archivo)] text-[0.9375rem] font-semibold tracking-[0.02em] " +
  "transition-[background-color,color,border-color,transform] duration-200 [transition-timing-function:var(--ease-out)] " +
  "active:scale-[0.98]";

export function Tombol({ nada = "isi", className = "", ...props }: ButtonProps) {
  const gaya =
    nada === "isi"
      ? "bg-accent text-on-accent hover:bg-accent-hover"
      : "border border-line-strong text-ink hover:border-accent hover:text-accent";

  return <a className={`${dasar} ${gaya} ${className}`} {...props} />;
}

/** Tautan teks dengan garis bawah yang tumbuh dari kiri saat disentuh kursor. */
export function TautanTeks({
  className = "",
  children,
  ...props
}: ComponentPropsWithoutRef<"a">) {
  return (
    <a
      className={`group relative inline-block text-ink transition-colors duration-200 [transition-timing-function:var(--ease-out)] hover:text-accent ${className}`}
      {...props}
    >
      {children}
      <span
        aria-hidden
        className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300 [transition-timing-function:var(--ease-out)] group-hover:scale-x-100"
      />
    </a>
  );
}
