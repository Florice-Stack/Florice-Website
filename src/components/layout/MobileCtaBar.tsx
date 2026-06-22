import Link from "next/link";

export default function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--border)] bg-white/95 p-3 backdrop-blur-sm sm:hidden">
      <Link href="/contact" className="btn btn-primary w-full">
        Book Consultation
      </Link>
    </div>
  );
}
