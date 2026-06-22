"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import FloriceLogo from "@/components/layout/FloriceLogo";
import { navLinks } from "@/lib/content";
import { cn } from "@/lib/cn";

const SCROLL_THRESHOLD = 72;
const SCROLL_DELTA = 10;

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        const currentY = window.scrollY;
        setScrolled(currentY > 12);

        if (open || mediaQuery.matches) {
          setHidden(false);
        } else if (currentY <= SCROLL_THRESHOLD) {
          setHidden(false);
        } else if (currentY - lastScrollY.current > SCROLL_DELTA) {
          setHidden(true);
        } else if (lastScrollY.current - currentY > SCROLL_DELTA) {
          setHidden(false);
        }

        lastScrollY.current = currentY;
        ticking = false;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    mediaQuery.addEventListener("change", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      mediaQuery.removeEventListener("change", onScroll);
    };
  }, [open]);

  useEffect(() => {
    if (open) {
      setHidden(false);
    }
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b bg-white/95 backdrop-blur-sm motion-safe:transition-[transform,box-shadow] motion-safe:duration-300",
        scrolled ? "border-[var(--border)] shadow-md" : "border-[var(--border)] shadow-none",
        hidden ? "-translate-y-full" : "translate-y-0",
      )}
    >
      <div className="container-content flex min-h-28 items-center justify-between gap-4 py-3">
        <Link href="/" className="shrink-0 text-charcoal" onClick={() => setOpen(false)}>
          <FloriceLogo priority className="h-24 w-auto sm:h-28" />
        </Link>

        <nav className="hidden items-center gap-2 lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "group relative px-4 py-2.5 text-sm font-semibold uppercase tracking-[0.12em] motion-safe:transition-colors motion-safe:duration-200",
                  active ? "text-charcoal" : "text-charcoal-muted hover:text-charcoal",
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-olive motion-safe:transition-all motion-safe:duration-200",
                    active ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100",
                  )}
                  aria-hidden
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)]"
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
                className="block rounded-md px-2 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-charcoal hover:bg-ivory-muted"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
