"use client";

import { useState } from "react";
import LegalModal from "@/components/LegalModal";
import { legalMeta, privacyPolicy, termsOfUse } from "@/lib/legal";

export default function FooterLegalLinks() {
  const [openDoc, setOpenDoc] = useState<"privacy" | "terms" | null>(null);

  return (
    <>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <button
          type="button"
          onClick={() => setOpenDoc("privacy")}
          className="text-white/60 underline-offset-2 hover:text-white hover:underline"
        >
          Privacy Policy
        </button>
        <span className="text-white/30" aria-hidden>
          ·
        </span>
        <button
          type="button"
          onClick={() => setOpenDoc("terms")}
          className="text-white/60 underline-offset-2 hover:text-white hover:underline"
        >
          Terms of Use
        </button>
      </div>

      <LegalModal
        open={openDoc === "privacy"}
        title={legalMeta.privacy.title}
        effectiveDate={legalMeta.privacy.effectiveDate}
        sections={privacyPolicy}
        onClose={() => setOpenDoc(null)}
      />
      <LegalModal
        open={openDoc === "terms"}
        title={legalMeta.terms.title}
        effectiveDate={legalMeta.terms.effectiveDate}
        sections={termsOfUse}
        onClose={() => setOpenDoc(null)}
      />
    </>
  );
}
