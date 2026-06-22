import Link from "next/link";
import type { SparePartCategory } from "@/lib/content";

const categoryTagStyles = [
  "border-olive/25 bg-olive/10 text-olive",
  "border-[#d4bc8a]/50 bg-[#f5efe3] text-[#7a5c1e]",
  "border-[#c5cdd8] bg-[#eef1f4] text-[#4a5568]",
  "border-[#b8d4c4] bg-[#edf3f0] text-[#3d5c4a]",
  "border-[#e9e4f0] bg-[#f3ebf4] text-[#5d4e67]",
  "border-[#f0d9b8] bg-[#fef3e8] text-[#9a6b2f]",
  "border-[#c5d7fa] bg-[#e8f0fe] text-[#3b5bdb]",
  "border-[#f5c2d4] bg-[#fce8ef] text-[#9b4d6a]",
  "border-[#b8ded9] bg-[#e6f6f4] text-[#2f6f6d]",
  "border-[#d4dfb8] bg-[#f0f4e8] text-[#5a6b3c]",
] as const;

type SparePartsCategoryNavProps = {
  categories: SparePartCategory[];
  className?: string;
};

export default function SparePartsCategoryNav({ categories, className = "" }: SparePartsCategoryNavProps) {
  return (
    <nav
      className={`grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5 ${className}`.trim()}
      aria-label="Jump to machinery and spare parts sections"
    >
      <Link
        href="#machinery-lines"
        className="inline-flex w-fit justify-self-start rounded-full border border-[#5d4e67]/30 bg-[#f3ebf4] px-3 py-1.5 text-xs font-semibold text-[#5d4e67] motion-safe:transition-all motion-safe:duration-200 hover:-translate-y-0.5 hover:shadow-sm"
      >
        Machinery lines
      </Link>
      {categories.map((category, index) => (
        <Link
          key={category.id}
          href={`#${category.anchor}`}
          className={`inline-flex w-fit justify-self-start rounded-full border px-3 py-1.5 text-xs font-semibold motion-safe:transition-all motion-safe:duration-200 hover:-translate-y-0.5 hover:shadow-sm ${categoryTagStyles[index % categoryTagStyles.length]}`}
        >
          {category.eyebrow}
        </Link>
      ))}
    </nav>
  );
}
