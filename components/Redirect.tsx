"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/* Client redirect for legacy URLs (static export has no server redirects). */
export default function Redirect({ to }: { to: string }) {
  const router = useRouter();
  useEffect(() => {
    router.replace(to);
  }, [router, to]);
  return (
    <div className="flex min-h-[60vh] items-center justify-center pt-28">
      <p className="mono text-[13px] text-dim">
        Redirecting to <a href={to} className="text-lime underline">{to}</a>…
      </p>
    </div>
  );
}
