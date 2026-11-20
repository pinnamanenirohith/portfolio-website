import { SIGNATURE_GLYPHS, SIGNATURE_VIEWBOX } from "./signature-data";

/* Shared geometry for the handwritten "Rohith Pinnamaneni" signature.
   The intro draws it large; SignatureMark is the small static version used
   as the site logo. Both use the same viewBox, so the intro can fly its
   signature onto the logo and land pixel-for-pixel on top of it. */

export const SIG_VB_W = SIGNATURE_VIEWBOX[2];
export const SIG_VB_H = 1060;
export const SIG_SWASH = "M 230 880 C 900 1010, 2600 990, 4200 930 S 5700 850, 6050 800";
/** Underline weight in the logo (viewBox units). The intro animates to this while flying. */
export const LOGO_SWASH_W = 70;

export default function SignatureMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox={`0 0 ${SIG_VB_W} ${SIG_VB_H}`}
      className={`overflow-visible ${className}`}
      data-signature-mark
      aria-hidden
    >
      <g style={{ fill: "currentColor" }}>
        {SIGNATURE_GLYPHS.map((g, i) => (
          <path key={i} d={g.contours.join("")} />
        ))}
      </g>
      <path
        d={SIG_SWASH}
        fill="none"
        strokeWidth={LOGO_SWASH_W}
        strokeLinecap="round"
        style={{ stroke: "var(--color-lime)" }}
        className="sig-swash"
      />
    </svg>
  );
}
