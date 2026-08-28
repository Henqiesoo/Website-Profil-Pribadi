/**
 * Tanda lensa dari logo HENQIESOO, digambar ulang sebagai vektor supaya
 * tetap tajam di ukuran berapa pun. Lingkaran dasar abu terang, satu
 * bilah merah di kanan atas, satu bilah abu gelap di kiri bawah.
 */
export function Lensa({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      width="100%"
      height="100%"
      className={className}
      aria-hidden
      focusable="false"
    >
      <defs>
        <clipPath id="lensa-batas">
          <circle cx="50" cy="50" r="50" />
        </clipPath>
      </defs>
      <g clipPath="url(#lensa-batas)">
        <circle cx="50" cy="50" r="50" fill="#a2a4a3" />
        <circle cx="62" cy="33" r="38" fill="#aa595f" />
        <circle cx="28" cy="70" r="31" fill="#636363" />
      </g>
    </svg>
  );
}
