"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/lib/content";
import { cn } from "@/lib/cn";

function LogoMark() {
  return (
    <svg className="h-10 w-10 shrink-0" viewBox="0 0 48 48" aria-hidden>
      <rect x="3" y="3" width="42" height="42" fill="#1a1a1a" stroke="none" />
      <circle cx="24" cy="24" r="11" fill="none" stroke="#ffffff" strokeWidth="1.25" />
      <circle cx="24" cy="24" r="4" fill="none" stroke="#ffffff" strokeWidth="1" />
      <path
        d="M24 6v6M24 36v6M6 24h6M36 24h6"
        stroke="#ffffff"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-white/95 backdrop-blur-sm motion-safe:transition-shadow motion-safe:duration-300",
        scrolled ? "border-[var(--border)] shadow-md" : "border-[var(--border)] shadow-none",
      )}
    >
      <div className="container-content flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 text-charcoal" onClick={() => setOpen(false)}>
          <LogoMark />
          <span className="leading-tight">
            <span className="block font-display text-base font-bold">Florice</span>
            <span className="block text-[0.6rem] font-medium uppercase tracking-[0.14em] text-charcoal-muted underline decoration-charcoal-muted/40 underline-offset-2">
              {site.tagline}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "group relative px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] motion-safe:transition-colors motion-safe:duration-200",
                  active ? "text-charcoal" : "text-charcoal-muted hover:text-charcoal",
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-olive motion-safe:transition-all motion-safe:duration-200",
                    active ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100",
                  )}
                  aria-hidden
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/contact" className="btn btn-primary hidden sm:inline-flex">
            Book Consultation
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        className={cn(
          "overflow-hidden border-t border-[var(--border)] bg-white lg:hidden motion-safe:transition-all motion-safe:duration-300",
          open ? "max-h-96 opacity-100" : "pointer-events-none max-h-0 opacity-0 border-transparent",
        )}
        aria-label="Mobile navigation"
        aria-hidden={!open}
      >
          <ul className="container-content flex flex-col py-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-md px-2 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-charcoal hover:bg-ivory-muted"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link href="/contact" className="btn btn-primary w-full" onClick={() => setOpen(false)}>
                Book Consultation
              </Link>
            </li>
          </ul>
        </nav>
    </header>
  );
}
