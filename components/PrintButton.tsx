"use client";

import { Arrow } from "@/components/ui/Icons";

export default function PrintButton() {
  return (
    <button onClick={() => window.print()} className="btn btn-primary">
      Download PDF <Arrow className="arrow rotate-90" />
    </button>
  );
}
