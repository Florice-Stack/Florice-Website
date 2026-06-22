import Link from "next/link";
import { navLinks, site } from "@/lib/content";
import FooterLegalLinks from "@/components/layout/FooterLegalLinks";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-olive-accent text-white">
      <div className="container-content grid gap-10 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-bold">Florice</p>
          <p className="mt-1 text-xs uppercase tracking-[0.14em] text-white/60">{site.tagline}</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/75">{site.description}</p>
        </div>
        <nav aria-label="Footer navigation">
          <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">Pages</h3>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-white/75 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
            <li>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-white">
                {site.phone}
              </a>
            </li>
            <li>Consulting worldwide · HQ India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-content flex flex-col gap-3 py-4 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.name}. All rights reserved.</p>
          <FooterLegalLinks />
        </div>
      </div>
    </footer>
  );
}
