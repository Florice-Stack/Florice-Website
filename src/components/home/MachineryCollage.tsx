import Image from "next/image";

export default function MachineryCollage() {
  return (
    <figure className="w-full">
      <div className="relative aspect-[4/3] w-full bg-white">
        <Image
          src="/machinery/mill-equipment-collage.png"
          alt="Grain milling equipment including pre-cleaner, polisher, aspiration system, paddy separator, and whitener"
          fill
          priority
          className="object-contain p-4 sm:p-5"
          sizes="(max-width: 1024px) 100vw, 440px"
        />
      </div>
      <figcaption className="border-t border-[var(--border)] px-4 py-3 text-center text-[11px] leading-relaxed text-charcoal-muted sm:px-6">
        Pre-cleaner · polisher · aspiration · paddy separator · whitener
      </figcaption>
    </figure>
  );
}
