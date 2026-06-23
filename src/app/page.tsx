import HomeBusinessPillars from "@/components/home/HomeBusinessPillars";
import HomeClosingCta from "@/components/home/HomeClosingCta";
import HomeHero from "@/components/home/HomeHero";
import HomeSectorsBand from "@/components/home/HomeSectorsBand";
import { homeClosingCta, homeHero, homePillars, homeSectors, homeTrustLine } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <HomeHero content={homeHero} trustLine={homeTrustLine} />
      <HomeBusinessPillars pillars={homePillars} />
      <HomeSectorsBand sectors={homeSectors} />
      <HomeClosingCta content={homeClosingCta} />
    </>
  );
}
