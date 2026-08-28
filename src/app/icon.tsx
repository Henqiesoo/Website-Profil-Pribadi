import { ImageResponse } from "next/og";

import { profil } from "@/content/profil";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/** Monogram merek, memakai warna yang sama dengan blok hero. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#14332a",
          color: "#edeee8",
          fontSize: 44,
          fontWeight: 600,
          letterSpacing: "-0.04em",
        }}
      >
        {profil.nama.charAt(0)}
      </div>
    ),
    size,
  );
}
