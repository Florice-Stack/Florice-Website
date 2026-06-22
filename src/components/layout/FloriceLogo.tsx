import Image from "next/image";
import { cn } from "@/lib/cn";

type FloriceLogoProps = {
  variant?: "default" | "light" | "mark" | "mark-light";
  className?: string;
  priority?: boolean;
};

const logoSources = {
  default: {
    src: "/brand/florice-logo.png",
    width: 280,
    height: 280,
    alt: "Florice Milling Spare & Solution",
  },
  light: {
    src: "/brand/florice-logo-light.png",
    width: 280,
    height: 280,
    alt: "Florice Milling Spare & Solution",
  },
  mark: {
    src: "/brand/florice-mark.png",
    width: 280,
    height: 160,
    alt: "Florice",
  },
  "mark-light": {
    src: "/brand/florice-mark-light.png",
    width: 280,
    height: 160,
    alt: "Florice",
  },
} as const;

export default function FloriceLogo({
  variant = "default",
  className,
  priority = false,
}: FloriceLogoProps) {
  const logo = logoSources[variant];

  return (
    <Image
      src={logo.src}
      alt={logo.alt}
      width={logo.width}
      height={logo.height}
      priority={priority}
      className={cn("h-auto w-auto object-contain", className)}
    />
  );
}
