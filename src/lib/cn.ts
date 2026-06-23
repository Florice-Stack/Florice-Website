import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Alternating page section backgrounds — even index uses tinted glass surface, odd stays clear. */
export function sectionBandClass(sectionIndex: number) {
  return sectionIndex % 2 === 0 ? "section-surface" : "section-clear";
}
