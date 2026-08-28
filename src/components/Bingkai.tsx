/**
 * Empat siku di sudut viewport, mengambil bingkai REC dari logo.
 * Murni penanda ruang: tidak menangkap pointer dan tidak dibacakan
 * pembaca layar. Disembunyikan di layar kecil supaya tidak menyenggol teks.
 */
export function Bingkai() {
  const siku =
    "pointer-events-none fixed z-40 h-7 w-7 border-line-strong hidden md:block";

  return (
    <div aria-hidden>
      <span className={`${siku} top-4 left-4 border-t border-l`} />
      <span className={`${siku} top-4 right-4 border-t border-r`} />
      <span className={`${siku} bottom-4 left-4 border-b border-l`} />
      <span className={`${siku} bottom-4 right-4 border-b border-r`} />
    </div>
  );
}
