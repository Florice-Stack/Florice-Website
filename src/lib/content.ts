export const site = {
  name: "Florice Milling Spare & Solution",
  tagline: "Milling Spare & Solution",
  email: "consult@floricemilling.com",
  phone: "+91 98765 43210",
  description:
    "Vendor-neutral consulting, auxiliary machinery, and spare parts for rice mills, wheat flour mills, and grain processing plants",
};

export const navLinks = [
  { href: "/services", label: "Services & Projects" },
  { href: "/spare-parts", label: "Machinery & Spare Parts" },
  { href: "/milling-trains", label: "Milling Trains" },
  { href: "/about", label: "About & FAQ" },
] as const;

export type SparePartCategory = {
  id: string;
  anchor: string;
  index: string;
  eyebrow: string;
  title: string;
  description: string;
  machineTags: string[];
  parts: string[];
  images?: {
    src: string;
    alt: string;
    caption: string;
  }[];
};

export type MachineryProduct = {
  id: string;
  anchor: string;
  title: string;
  description: string;
  tags: string[];
  image: {
    src: string;
    alt: string;
  };
};

export const machineryIntro = {
  eyebrow: "Auxiliary machinery",
  title: "Material handling & plant auxiliaries",
  description:
    "We supply auxiliary machinery for grain and milling plants — belt and screw conveyors, bucket elevators, pneumatic lines, spouting, ducting, industrial magnets, tanks, and related equipment",
  notListedNote:
    "If your machine is not listed — no worries, reach out to us and we will arrange it",
  notListedCta: "Request a quote",
};

export const machineryProducts: MachineryProduct[] = [
  {
    id: "belt-conveyor",
    anchor: "belt-conveyor",
    title: "Belt Conveyor",
    description: "Trough and flat belt conveyors for grain, flour, bran, and bulk material transfer between process stages",
    tags: ["Multi-ply belts", "Food-grade options"],
    image: {
      src: "/machinery/auxiliary/belt-conveyor.png",
      alt: "Industrial belt conveyor with rubber belt and galvanized frame for grain handling",
    },
  },
  {
    id: "screw-conveyor",
    anchor: "screw-conveyor",
    title: "Screw Conveyor",
    description: "Helical screw conveyors and feeders for controlled transfer of grain, flour, and by-products in enclosed troughs",
    tags: ["Left & right helix", "Custom pitch & diameter"],
    image: {
      src: "/machinery/auxiliary/screw-conveyor.png",
      alt: "Stainless steel screw conveyor with helical flight in an industrial trough",
    },
  },
  {
    id: "bucket-elevator",
    anchor: "bucket-elevator",
    title: "Bucket Elevator",
    description: "Vertical bucket elevators with MS or SS buckets, head and boot sections, and belt or chain drive for elevation duties",
    tags: ["MS & SS buckets", "Head / boot assemblies"],
    image: {
      src: "/machinery/auxiliary/bucket-elevator.png",
      alt: "Industrial bucket elevator with metal buckets on a rubber belt in a milling plant",
    },
  },
  {
    id: "pneumatic-line",
    anchor: "pneumatic-line",
    title: "Pneumatic Conveying Line",
    description: "Dense-phase and dilute-phase pneumatic lines with cyclones, airlocks, diverter gates, and blowers for grain and flour transfer",
    tags: ["Cyclones & airlocks", "Diverter gates"],
    image: {
      src: "/machinery/auxiliary/pneumatic-line.png",
      alt: "Pneumatic conveying line with cyclone separator and rotary airlock in a mill",
    },
  },
  {
    id: "spouting",
    anchor: "spouting",
    title: "Spouts & Spouting",
    description: "Stainless and galvanized spouting, branch pipes, reducers, flow pipes, and observation glasses for gravity product routing",
    tags: ["SS branch pipes", "Sight glasses"],
    image: {
      src: "/machinery/auxiliary/spouting.png",
      alt: "Polished stainless steel spouting with branch pipe and sight glass in a milling plant",
    },
  },
  {
    id: "ducting",
    anchor: "ducting",
    title: "Ducting & Aspiration",
    description: "Aspiration ducting, filter sleeves, jet filter components, and pneumatic ductwork for dust control and air handling",
    tags: ["Filter sleeves", "Jet filter parts"],
    image: {
      src: "/machinery/auxiliary/ducting.png",
      alt: "Industrial aspiration ducting with filter housing and flexible sleeves",
    },
  },
  {
    id: "magnets",
    anchor: "industrial-magnets",
    title: "Industrial Magnets",
    description: "Tubular, grate, bar, and cylinder magnets for ferrous contamination control in intake and process lines",
    tags: ["Tubular & grate types", "Inline installation"],
    image: {
      src: "/machinery/auxiliary/industrial-magnets.png",
      alt: "Industrial tubular magnet with access door for grain cleaning line",
    },
  },
  {
    id: "tanks",
    anchor: "storage-tanks",
    title: "Tanks & Hoppers",
    description: "Storage tanks, surge hoppers, dust-stop hoppers, and fabricated vessels for intake, buffering, and discharge duties",
    tags: ["Custom fabrication", "Dust control hoppers"],
    image: {
      src: "/machinery/auxiliary/storage-tanks.png",
      alt: "Industrial storage hopper and cylindrical tank in a grain processing plant",
    },
  },
];

export const sparePartsIntro = {
  title: "Auxiliary machinery & spare parts for rice mills, flour mills, and grain plants",
  description:
    "Auxiliary machinery and spare parts for cleaning, milling, conveying, and aspiration — matched to your equipment",
  note: "Not in the catalogue? Send nameplate photos and part numbers — we confirm fit before you order",
};

export const sparePartsPrinciples = [
  {
    title: "Right part, first time",
    description:
      "Parts are verified against machine model, TPH rating, and install history — not generic catalogue guesses",
  },
  {
    title: "Competitive sourcing",
    description:
      "We compare OEM, aftermarket, and workshop-fabricated options where appropriate, with clear trade-offs on life and cost",
  },
  {
    title: "Fastest practical delivery",
    description:
      "Critical wear items — screens, rubber rolls, belts, and aspiration sleeves — prioritized to reduce unplanned downtime",
  },
] as const;

export const sparePartsProcess = [
  {
    step: "1",
    title: "Identify",
    description: "Share machine tag, worn part photos, and operating hours since last change",
  },
  {
    step: "2",
    title: "Confirm fit",
    description: "We cross-check dimensions, material spec, and compatible OEM or workshop sources",
  },
  {
    step: "3",
    title: "Quote & ship",
    description: "You receive itemized pricing, lead time, and packing list before dispatch",
  },
  {
    step: "4",
    title: "Install support",
    description: "Optional on-site or remote guidance for critical fits — whitener screens, cam sets, roll gaps",
  },
] as const;

export const sparePartsQuoteIntro = {
  title: "Request auxiliary machinery or spare parts quote",
  description:
    "Tell us what you need — conveyors, pneumatic lines, spouting, ducting, magnets, tanks, or individual spare parts. We confirm scope, fit, and send pricing with lead time before you order.",
  responseNote:
    "Attach nameplate photos or layout sketches when you can. If your machine or part is not listed, reach out anyway — we will arrange it.",
};

export const sparePartsQuoteChecklist = [
  "Auxiliary machinery type or spare part category",
  "Machine manufacturer, model, or target capacity (TPH)",
  "Part description, part number, or scope of supply",
  "Quantity required or project timeline",
  "Whether this is a breakdown, planned shutdown, or new installation",
];

export const sparePartsClosingCta = {
  eyebrow: "Get a quote",
  title: "Need auxiliary equipment, spare parts, or something not listed?",
  paragraphs: [
    "We supply belt and screw conveyors, bucket elevators, pneumatic lines, spouting, ducting, magnets, tanks, and related auxiliaries — and source wear parts across rice, flour, and grain processing lines",
    "If your machine or part is not in the catalogue, reach out anyway — send photos and part numbers and we will arrange it and confirm fit before dispatch",
  ],
  sparePartsButton: "Request machinery or parts quote",
  consultingButton: "View consulting services",
};

export { sparePartsCategories } from "@/lib/sparePartsCatalogData";

export type MillingTrainStepDetail = {
  id: string;
  title: string;
  description: string;
  equipment: string[];
  consultingFocus: string;
};

export type MillingTrainDetail = {
  id: string;
  anchor: string;
  eyebrow: string;
  title: string;
  overview: string;
  typicalPlants: string;
  keyMetrics: string[];
  infrastructure: string;
  steps: MillingTrainStepDetail[];
};

export const millingTrainsIntro = {
  title: "Rice and flour milling trains — stage by stage",
  description:
    "Recovery and downtime are decided at every transfer point — not only at the whitener or break roll. Follow the diagrams and stage map for equipment and where we consult most often.",
};

export const riceMillingTrain: MillingTrainDetail = {
  id: "rice",
  anchor: "rice-train",
  eyebrow: "Rice milling train",
  title: "From paddy intake to head rice bagging",
  overview:
    "Paddy becomes head rice, brokens, and by-products. Balance hulling, whitening, and broken % — especially when variety or moisture shifts between seasons.",
  typicalPlants: "Raw and basmati lines · 2–20+ TPH",
  keyMetrics: ["Head rice %", "Broken %", "Degree of milling", "Whitener power"],
  infrastructure:
    "Aspiration, pneumatic lifts, and elevators tie stages together. Air balance issues here often mimic whitener or grader faults.",
  steps: [
    {
      id: "intake",
      title: "Paddy intake",
      description:
        "Paddy from field or drier into silos or day bins. Moisture, variety, and trash at intake cap downstream recovery.",
      equipment: ["Intake pits", "Pre-hoppers", "Magnets"],
      consultingFocus: "Capacity matching, moisture tracking, even draw to pre-clean.",
    },
    {
      id: "preclean",
      title: "Pre-clean",
      description:
        "Remove straw, stones, and overs before de-stoning. Weak pre-clean overloads the huller and raises brokens later.",
      equipment: ["Vibrating screens", "Scourers", "Air aspirators"],
      consultingFocus: "Screen aperture, aspiration balance, stable feed rate.",
    },
    {
      id: "destone",
      title: "De-stone",
      description:
        "Gravity separation for stones and heavy impurities. Stones in the huller damage rolls and cause sudden stops.",
      equipment: ["Gravity selectors", "Destoners", "Indented cylinders"],
      consultingFocus: "Air table tuning, deck angle, bypass for mixed varieties.",
    },
    {
      id: "hull",
      title: "Hull / shell",
      description:
        "Rubber roll hullers remove husk from brown rice. Roll gap, speed, and moisture drive efficiency and crack rate.",
      equipment: ["Rubber roll hullers", "Paddy separators", "Husk aspirators"],
      consultingFocus: "Roll gap audits, separator efficiency, husk routing.",
    },
    {
      id: "whiten",
      title: "Whiten",
      description:
        "Whiteners remove bran to target degree of milling. Over-whitening raises brokens; under-whitening hurts grade.",
      equipment: ["Abrasive whiteners", "Friction polishers", "Silky polishers"],
      consultingFocus: "Screen sizing, stone pressure, water mist, multi-pass balance.",
    },
    {
      id: "grade",
      title: "Grade",
      description:
        "Split head rice, brokens, and brewers rice. Length graders recover head rice from broken streams.",
      equipment: ["Plan sifters / graders", "Length graders", "Color sorters"],
      consultingFocus: "Sieve selection, split ratios, tail-stream recovery.",
    },
    {
      id: "pack",
      title: "Bagging",
      description: "Weigh, bag, or bulk load finished rice. Metal detection and check-weighing at dispatch.",
      equipment: ["Bagging lines", "Weighers", "Metal detectors"],
      consultingFocus: "Pack line balance with upstream capacity, dust control.",
    },
  ],
};

export const flourMillingTrain: MillingTrainDetail = {
  id: "flour",
  anchor: "flour-train",
  eyebrow: "Wheat / flour milling train",
  title: "From wheat intake to flour bagging",
  overview:
    "Break and reduction release endosperm from bran; purifiers and plansifters sort middlings by size and ash. Ash drift and sifter overload usually signal a train that needs review.",
  typicalPlants: "Chakki to industrial roller mills · 20–500+ TPD",
  keyMetrics: ["Extraction %", "Maida ash", "Bran yield", "Sifter utilization"],
  infrastructure:
    "Plansifters, purifiers, and pneumatic conveying link the break system. Lift blockages to the sifter floor often drive ash drift and low extraction.",
  steps: [
    {
      id: "intake",
      title: "Wheat intake",
      description: "Wheat from silos or road intake. Moisture and protein set conditioning time and break behaviour.",
      equipment: ["Intake pits", "Pre-cleaners", "Magnets"],
      consultingFocus: "Variety segregation, moisture monitoring, intake vs capacity.",
    },
    {
      id: "clean",
      title: "Clean",
      description: "Scouring and aspiration remove dust and stones. Clean wheat cuts roll wear and helps sifter performance.",
      equipment: ["Scourers", "Destoners", "Aspiration cyclones"],
      consultingFocus: "Cleaning efficiency vs loss, cyclone sizing.",
    },
    {
      id: "condition",
      title: "Condition",
      description: "Water toughens bran and softens endosperm before first break. Wrong moisture hurts flour release in reduction.",
      equipment: ["Dampeners", "Intensive dampeners", "Tempering bins"],
      consultingFocus: "Tempering time and temperature for local varieties.",
    },
    {
      id: "break",
      title: "Break",
      description: "Break rolls open the kernel. Corrugation, differential, and feed rate control endosperm release without over-grinding bran.",
      equipment: ["Break rolls (B1–B8)", "Scratch rolls", "Bran finishers"],
      consultingFocus: "Roll settings, sifter load balance, pneumatic chokes.",
    },
    {
      id: "purify",
      title: "Purify",
      description: "Purifiers split middlings by gravity and air. Pure endosperm to reduction; bran-rich stock back for re-milling.",
      equipment: ["Purifiers", "Supersifters", "Centrifugal reels"],
      consultingFocus: "Air per compartment, feed rate, stock routing.",
    },
    {
      id: "reduce",
      title: "Reduce",
      description: "Reduction rolls grind endosperm into flour. Multiple passages target maida, atta, and suji ash levels.",
      equipment: ["Reduction rolls", "Plansifters", "Bran dusters"],
      consultingFocus: "Ash by stream, roll maintenance, screen plans.",
    },
    {
      id: "pack",
      title: "Bagging",
      description: "Blend, treat if needed, and pack for retail or bulk dispatch.",
      equipment: ["Flour blenders", "Bagging machines", "Magnet traps"],
      consultingFocus: "Blend consistency, sanitation, pack line vs mill output.",
    },
  ],
};

export const homeHero = {
  eyebrow: "Florice Milling Spare & Solution",
  title: "Consulting, auxiliary machinery & spare parts for rice, flour & grain plants",
  description:
    "One vendor-neutral partner — project delivery, plant auxiliaries, and wear-part supply from feasibility through dispatch",
  image: {
    src: "/home/carousel/plant-installation.png",
    alt: "Engineering team supervising machinery installation in a food processing plant",
  },
  primaryCta: { label: "Book a Consultation", href: "/contact" },
  secondaryCta: { label: "Request Machinery or Parts", href: "/spare-parts/quote" },
} as const;

export const homeTrustLine = [
  { value: "20+", label: "Years in grain processing" },
  { value: "18", label: "Countries with on-site work" },
  { value: "0", label: "Equipment sales commissions" },
  { value: "Vendor-neutral", label: "Independent specs & sourcing" },
] as const;

export const homePillars = [
  {
    id: "services",
    eyebrow: "Services & Projects",
    title: "Consulting, project management & operational support",
    highlights: [
      "Greenfield & brownfield — feasibility through commissioning",
      "Audits, retrofits, operator training & contract mill operation",
      "Itemised Total Plant Cost Sheets before procurement",
    ],
    href: "/services",
    cta: "View services",
  },
  {
    id: "machinery",
    eyebrow: "Auxiliary Machinery",
    title: "Material handling & plant auxiliaries",
    highlights: [
      "Conveyors, elevators & pneumatic conveying lines",
      "Spouting, ducting, magnets, tanks & custom vessels",
      "Machine not listed — reach out and we will arrange it",
    ],
    href: "/spare-parts#machinery-lines",
    cta: "Browse machinery",
  },
  {
    id: "spare-parts",
    eyebrow: "Spare Parts",
    title: "Wear parts for rice, flour & grain lines",
    highlights: [
      "Whitener, polisher, plansifter & cleaning machine spares",
      "Fit confirmed against machine tag before dispatch",
      "Part not in catalogue — send nameplate photos",
    ],
    href: "/spare-parts",
    cta: "Browse spare parts",
  },
] as const;

export const homeSectors = [
  {
    title: "Rice milling",
    description: "Paddy cleaning, hulling, whitening, polishing & grading",
  },
  {
    title: "Wheat & flour",
    description: "Conditioning, break-reduction, purifiers, plansifters & mixing",
  },
  {
    title: "Pulses & grain",
    description: "Cleaning, de-stoning, grinding & value-added processing lines",
  },
  {
    title: "Handling systems",
    description: "Elevators, pneumatic conveying, spouting, ducting & cyclones",
  },
] as const;

export const homeClosingCta = {
  consulting: {
    title: "Planning a project, audit, or line upgrade?",
    description: "Share plant capacity, grain type, and your bottleneck — we respond within one business day",
    cta: { label: "Book a Consultation", href: "/contact" },
  },
  supply: {
    title: "Need auxiliary equipment or wear parts?",
    description: "Send machine tag, part photos, or scope — we confirm fit and quote before dispatch",
    cta: { label: "Request Machinery or Parts", href: "/spare-parts/quote" },
  },
} as const;

export const heroScope = [
  {
    title: "Rice milling",
    description: "Paddy cleaning, hulling, whitening, polishing, and grading",
  },
  {
    title: "Wheat & flour",
    description: "Conditioning, break-reduction, purifiers, plansifters, mixing systems",
  },
  {
    title: "Handling systems",
    description: "Bucket elevators, pneumatic conveying, spouting, ducting, cyclones",
  },
  {
    title: "Project support",
    description: "Layout design, machinery sourcing, spare parts, commissioning, troubleshooting",
  },
];

export const missionItems = [
  {
    title: "Increase productivity",
    description:
      "Higher head rice and flour recovery through effective, adaptable process and equipment decisions",
  },
  {
    title: "Reduce operating costs",
    description:
      "Lower downtime, aspiration load, and maintenance burden with right-sized machinery and stable parameters",
  },
  {
    title: "Build reliability",
    description:
      "Vendor-neutral specs, commissioning oversight, and machinery & spare parts coordination you can run shift after shift",
  },
];

export const consultingPage = {
  hero: {
    eyebrow: "Technical Consulting",
    title: "Services & Projects",
    description: "Consulting Services & Project Management for Greenfield & Brownfield Plants — from Design through Commissioning and Operational Support",
    image: {
      src: "/home/carousel/plant-installation.png",
      alt: "Engineering team supervising machinery installation in a food processing plant",
    },
  },
  totalPlantCostCallout: "Total Plant Cost Sheets — Itemised CAPEX before Procurement",
};

export type ConsultingScopePillar = {
  id: string;
  label: string;
  detail: string;
  details: {
    overview: string;
    highlights: string[];
  };
};

export const consultingScopePillars: ConsultingScopePillar[] = [
  {
    id: "greenfield-brownfield",
    label: "Greenfield & Brownfield",
    detail: "New · Expand · Modernise",
    details: {
      overview:
        "Consulting for new plant builds, capacity expansions, and modernisation of existing mills — scoped to your commodity, throughput, and budget.",
      highlights: [
        "Greenfield feasibility and layout planning",
        "Brownfield expansion without halting production",
        "Equipment upgrade and line modernisation",
        "Phased execution with defined downtime windows",
      ],
    },
  },
  {
    id: "design-commissioning",
    label: "Design to Commissioning",
    detail: "Feasibility · Erection · Startup",
    details: {
      overview:
        "End-to-end project support from techno-economic feasibility through engineering, erection oversight, and first production runs.",
      highlights: [
        "TEFR and technical project profiles",
        "Layout, machinery specs, and process flow design",
        "Erection, aspiration, and BOM support",
        "Startup parameter tuning and operator handover",
      ],
    },
  },
  {
    id: "cost-controlled",
    label: "Cost-Controlled",
    detail: "CAPEX Sheets & Tracking",
    details: {
      overview:
        "Itemised Total Plant Cost Sheets and strict CAPEX tracking — machinery, fabrication, utilities, and infrastructure budgeted before procurement.",
      highlights: [
        "Itemised capital expenditure breakdowns",
        "Machinery, fabrication, and utility cost lines",
        "Vendor evaluation with commercial comparison",
        "Budget control through erection and commissioning",
      ],
    },
  },
];

export type ConsultingSector = {
  title: string;
  applications: string[];
  image: {
    src: string;
    alt: string;
  };
  details: {
    overview: string;
    highlights: string[];
  };
};

export const consultingSectors: ConsultingSector[] = [
  {
    title: "Rice & Paddy",
    applications: ["Rice Milling", "Paddy Drying", "Grist Milling"],
    image: {
      src: "/services/sectors/rice-paddy.png",
      alt: "Workers overseeing tiered grain drying racks and stainless steel processing equipment in a rice mill",
    },
    details: {
      overview:
        "Complete consulting for modern rice mills and paddy handling — from intake through head rice recovery and by-product routing.",
      highlights: [
        "2–40 TPH modern rice milling lines",
        "Paddy drying and moisture management systems",
        "Rice grist and broken rice milling trains",
        "Whitener, polisher, and grading train optimisation",
      ],
    },
  },
  {
    title: "Flour & Grain Milling",
    applications: ["Wheat Flour", "Chakki Atta", "Maize", "Semolina", "Daliya"],
    image: {
      src: "/services/sectors/flour-grain-milling.png",
      alt: "Stainless steel grain silos and roller milling equipment in a flour and grain processing plant",
    },
    details: {
      overview:
        "Roller flour mills, whole chakki atta plants, maize milling, semolina, and daliya lines — specified and commissioned to your ash, moisture, and extraction targets.",
      highlights: [
        "Break-reduction milling and plansifter lines",
        "Whole chakki atta and specialty flour grades",
        "Maize grits, semolina, and daliya processing",
        "Tempering, purifier, and bran finishing systems",
      ],
    },
  },
  {
    title: "Pulses & Lentils",
    applications: ["Pulse Milling", "Lentil Processing"],
    image: {
      src: "/machinery/plant-lines/pulse-processing-plant.png",
      alt: "Pulse processing and de-husking plant line",
    },
    details: {
      overview:
        "Pulse de-husking, splitting, and grading plants sized for your throughput, variety mix, and finished product specification.",
      highlights: [
        "Pre-cleaning and de-stoning upstream of de-huskers",
        "Splitting, polishing, and grading passages",
        "Capacity-matched conveying and aspiration",
        "Dust control and bagging line integration",
      ],
    },
  },
  {
    title: "Value-Added Processing",
    applications: ["Pasta", "Seed Processing", "Dry Fruit Grading"],
    image: {
      src: "/home/carousel/food-processing-line.png",
      alt: "Automated food packaging and processing line",
    },
    details: {
      overview:
        "Specialty processing lines beyond standard grain milling — pasta extrusion, seed conditioning, and dry fruit grading with packaging integration.",
      highlights: [
        "Pasta plant layout and process engineering",
        "Seed cleaning, treating, and bagging lines",
        "Dry fruit grading, sorting, and packaging",
        "Utility load and hygiene zone planning",
      ],
    },
  },
  {
    title: "Logistics & Biofuels",
    applications: ["Grain Storage", "Ethanol Milling Sections"],
    image: {
      src: "/services/sectors/logistics-biofuels.png",
      alt: "Grain silos and ethanol plant infrastructure with bulk feedstock storage and transfer systems",
    },
    details: {
      overview:
        "Grain logistics, silo storage, and ethanol plant cleaning and milling sections — engineered for reliable intake, transfer, and preparation upstream of fermentation.",
      highlights: [
        "Intake pits, pre-cleaners, and silo sizing",
        "Pneumatic and mechanical conveying networks",
        "Ethanol plant cleaning and milling sections",
        "Load analysis for storage and transfer structures",
      ],
    },
  },
  {
    title: "Other Agro-Based Products",
    applications: ["Custom Commodity Processing"],
    image: {
      src: "/machinery/plant-lines/besan-plant.png",
      alt: "Besan and specialty grain processing plant",
    },
    details: {
      overview:
        "Custom processing solutions for diverse agricultural commodities — besan, specialty flours, and niche grain products with tailored flow diagrams.",
      highlights: [
        "Commodity-specific cleaning and grinding trains",
        "Besan and gram flour plant engineering",
        "Flexible layout for multi-product lines",
        "Feasibility and CAPEX scoping for new products",
      ],
    },
  },
];

export type ProjectManagementPhase = {
  step: string;
  title: string;
  tags: string[];
  details: {
    overview: string;
    highlights: string[];
  };
};

export const projectManagementPhases: ProjectManagementPhase[] = [
  {
    step: "01",
    title: "Pre-Engineering & Reporting",
    tags: ["TEFR", "Project Profiles", "Feasibility"],
    details: {
      overview:
        "Techno-economic feasibility and technical project profiles for investors, lenders, and internal approval before detailed engineering begins.",
      highlights: [
        "Techno-Economic Feasibility Reports (TEFR)",
        "Capacity, product mix, and utility assumptions",
        "Preliminary CAPEX and operating cost estimates",
        "Technical project profiles for stakeholder review",
      ],
    },
  },
  {
    step: "02",
    title: "Layout & Engineering Drawings",
    tags: ["Layout Design", "Load Analysis", "Building Integration"],
    details: {
      overview:
        "Complete layout drawings with structural load data and building integration details — floor cutouts, load distributions, and equipment disposition.",
      highlights: [
        "Layout with cross-sections and longitudinal details",
        "Equipment load analysis for foundations",
        "Building disposition and floor cutout drawings",
        "Clearance and maintenance access planning",
      ],
    },
  },
  {
    step: "03",
    title: "Technological Project Design",
    tags: ["Machinery Specs", "Electrical Loads", "Process Flow", "CAPEX Sheet"],
    details: {
      overview:
        "Full technological design — machinery specifications, electrical loads, process flowcharts, vendor evaluation, and itemised Total Plant Cost Sheets.",
      highlights: [
        "Machinery and equipment specifications",
        "Motor lists, electrical load charts, and transformer sizing",
        "Milling flowcharts tracking stock movement",
        "Vendor evaluation matrices and Total Plant Cost Sheets",
      ],
    },
  },
  {
    step: "04",
    title: "Erection & Commissioning",
    tags: ["BOM & Spouting", "Aspiration Drawings", "Site Management"],
    details: {
      overview:
        "Execution support from BOM generation through erection oversight — spouting lists, aspiration drawings, and on-site manpower planning.",
      highlights: [
        "Bill of Materials, spouting lists, and fabrication estimates",
        "Exhaust and aspiration system drawings",
        "Erection sequencing and site manpower planning",
        "Pre-start checklists and commissioning oversight",
      ],
    },
  },
  {
    step: "05",
    title: "Local Fabrication Know-How",
    tags: ["Aspiration Systems", "Spouting & Ducts", "Conveyors & Elevators"],
    details: {
      overview:
        "Technical blueprints and parameters for locally fabricated utility and transfer components — reducing import dependency and lead times.",
      highlights: [
        "Aspiration systems, cyclones, and airlocks",
        "Spouting, gravity pipes, bends, and taper transitions",
        "Distributing spouting, valves, and outlet hoppers",
        "Screw conveyors, elevators, and sacking benches",
      ],
    },
  },
  {
    step: "06",
    title: "Procurement & Startup",
    tags: ["Vendor Selection", "Contractor Hiring", "Parameter Tuning"],
    details: {
      overview:
        "Expert procurement guidance and on-site startup support — machinery selection, contractor evaluation, and milling parameter optimisation.",
      highlights: [
        "Machinery and fabrication material selection",
        "Specialised contractor personnel evaluation",
        "On-site guidance during first production runs",
        "Parameter lock-in and operator handover",
      ],
    },
  },
];

export type PostCommissioningService = {
  title: string;
  tagline: string;
  image: {
    src: string;
    alt: string;
  };
  details: {
    overview: string;
    highlights: string[];
  };
};

export const postCommissioningServices: PostCommissioningService[] = [
  {
    title: "Contract Mill Operation",
    tagline: "Full Plant Operations under Florice Oversight",
    image: {
      src: "/services/operational/contract-mill-operation.png",
      alt: "Engineers supervising stainless steel grain processing equipment during active mill operation",
    },
    details: {
      overview:
        "Florice takes complete operational responsibility for your mill — shift planning, parameter control, quality checks, and daily production reporting under senior technical oversight.",
      highlights: [
        "End-to-end shift and production management",
        "Recovery, broken %, and moisture targets tracked daily",
        "Operator supervision and process parameter lock-in",
        "Monthly performance reports for owners and lenders",
      ],
    },
  },
  {
    title: "Plant Performance Audits",
    tagline: "Yield, Power, Wear & Machine Settings",
    image: {
      src: "/services/operational/plant-performance-audits.png",
      alt: "Plant engineers reviewing performance data and production metrics on the mill floor",
    },
    details: {
      overview:
        "Structured audits of running plants to benchmark machinery performance, power draw, wear patterns, and machine settings — with a prioritised action register for yield and uptime gains.",
      highlights: [
        "Head rice / flour extraction and broken % benchmarking",
        "Power consumption per tonne by machine and line section",
        "Wear inspection on rolls, screens, and aspiration elements",
        "Machine setting review with before/after recovery targets",
      ],
    },
  },
  {
    title: "Plant Retrofits",
    tagline: "Capacity & Quality Upgrades",
    image: {
      src: "/services/operational/plant-retrofits.png",
      alt: "Technician monitoring upgraded milling machinery with a tablet on the production floor",
    },
    details: {
      overview:
        "Engineering upgrades to raise capacity, improve product grade consistency, or modernise ageing equipment — scoped and phased to minimise production downtime.",
      highlights: [
        "Capacity expansion and bottleneck removal studies",
        "Whitener, plansifter, and pneumatic line upgrades",
        "PLC / SCADA visibility and interlock improvements",
        "Phased execution with defined downtime windows",
      ],
    },
  },
  {
    title: "Maintenance Support",
    tagline: "AMC & 48-Hour Breakdown Response",
    image: {
      src: "/services/operational/maintenance-support.png",
      alt: "Maintenance technicians servicing industrial milling equipment on site",
    },
    details: {
      overview:
        "On-call technical support for breakdown diagnosis, spare parts identification, and corrective action — including Annual Maintenance Contracts and emergency site visits within 48 hours.",
      highlights: [
        "Root-cause diagnosis for blockages, trips, and grade drift",
        "Annual Maintenance Contracts (AMC) for planned upkeep",
        "Emergency breakdown visits within 48 hours",
        "Spare parts specification and sourcing coordination",
      ],
    },
  },
  {
    title: "Workforce Training",
    tagline: "Operator & Maintenance Programs",
    image: {
      src: "/services/operational/workforce-training.png",
      alt: "Consultant leading a technical training session with plant staff on the factory floor",
    },
    details: {
      overview:
        "Hands-on training programs for plant operators and maintenance teams — covering machine settings, cleaning procedures, safety interlocks, and basic troubleshooting on your equipment.",
      highlights: [
        "Operator training on roll gaps, air gates, and feed rates",
        "Maintenance team briefings on wear parts and lubrication schedules",
        "Shift handover and quality-check SOP development",
        "On-site sessions tailored to your milling train layout",
      ],
    },
  },
];

export type ConsultingValueProp = {
  title: string;
  tagline: string;
  details: {
    overview: string;
    highlights: string[];
  };
};

export const consultingValueProps: ConsultingValueProp[] = [
  {
    title: "End-to-End Expertise",
    tagline: "Raw Intake to Final Packaging",
    details: {
      overview:
        "Practical, expert advice spanning raw material intake through milling, handling, and final packaging — not isolated equipment recommendations.",
      highlights: [
        "Feasibility, layout, and process design in one scope",
        "Vendor-neutral machinery and fabrication specifications",
        "Erection oversight and commissioning support",
        "Post-startup audits, training, and operational guidance",
      ],
    },
  },
  {
    title: "Unmatched Value",
    tagline: "Engineering that Maximises ROI",
    details: {
      overview:
        "High-utility engineering focused on recovery, uptime, and capital efficiency — so every project phase returns measurable value to your operation.",
      highlights: [
        "Total Plant Cost Sheets before procurement commits spend",
        "Right-sized equipment matched to actual throughput",
        "Phased upgrades that minimise downtime and rework",
        "Independent consulting with no equipment sales commissions",
      ],
    },
  },
];

export const services = [
  {
    tag: "Rice · Wheat · Pulses",
    title: "Plant Assessment",
    description:
      "Walk-through of your milling train with recovery mapping at each stage — from paddy intake or wheat conditioning through final grading and bagging.",
    deliverables: [
      "Head rice / flour extraction baseline",
      "Bottleneck and aspiration audit",
      "Prioritized improvement register",
    ],
  },
  {
    tag: "Equipment · Capex",
    title: "Machinery Selection",
    description:
      "Specification of hullers, rubber roll huskers, whiteners, plansifters, destoners, and conveying elements matched to your grain variety and TPH target.",
    deliverables: [
      "Vendor-neutral equipment shortlist",
      "Capacity and power load estimates",
      "Layout clearance and install notes",
    ],
  },
  {
    tag: "Process · Yield",
    title: "Process Optimization",
    description:
      "Adjustment of roll gaps, screen sizes, air volumes, and feed rates to raise extraction while controlling broken percentage, bran carry-over, and moisture drift.",
    deliverables: [
      "Parameter setting sheets per machine",
      "Before/after recovery comparison",
      "Operator tuning guidelines",
    ],
  },
  {
    tag: "Capacity · Layout",
    title: "Expansion Planning",
    description:
      "Feasibility and phased layout for additional milling capacity, new product grades, or brownfield line extensions without halting current production.",
    deliverables: [
      "Material flow and silo sizing",
      "Capex phasing with downtime windows",
      "Utility and aspiration load review",
    ],
  },
  {
    tag: "Startup · Handover",
    title: "Commissioning Support",
    description:
      "On-site oversight during equipment installation and first production runs — alignment, aspiration balancing, interlock verification, and operator sign-off.",
    deliverables: [
      "Pre-start mechanical checklist",
      "Run-in and parameter lock-in",
      "Handover documentation pack",
    ],
  },
  {
    tag: "Downtime · Root cause",
    title: "Technical Troubleshooting",
    description:
      "Diagnosis of blockages in pneumatic lines, high broken rice after variety change, plansifter overload, motor trips, and inconsistent grade output.",
    deliverables: [
      "Root-cause report with evidence",
      "Corrective action sequence",
      "Spare parts identification where needed",
    ],
  },
];

export const industries = [
  {
    label: "Primary",
    title: "Rice Milling",
    description:
      "Paddy pre-cleaning through final polishing — including 2–40 TPH modern mills, aromatic basmati lines, and traditional mills adding automated hulling and grading stages.",
  },
  {
    label: "Primary",
    title: "Wheat Flour Milling",
    description:
      "Intensive dampening, break and reduction passages, purifiers, and bran finishers for atta, maida, semolina, and bakery flour with ash and moisture targets.",
  },
  {
    label: "Intake",
    title: "Grain Cleaning & Grading",
    description:
      "Pre-cleaners, scouring machines, gravity selectors, indent cylinders, and optical sorters upstream of milling or storage silos.",
  },
  {
    label: "Process",
    title: "Pulses & Lentils",
    description:
      "Pulse de-husking, splitting, and grading lines sized for throughput, variety mix, and finished product specification.",
  },
  {
    label: "Dispatch",
    title: "Packaging Lines",
    description:
      "Open-mouth and valve bagging, gross weigh-fill systems, metal detection, and palletizing matched to mill output and bag weight tolerances.",
  },
  {
    label: "Upgrade",
    title: "Modernization Projects",
    description:
      "PLC replacement, SCADA visibility, pneumatic conveying retrofits, bucket elevator upgrades, and aspiration system rebalancing for aging plants.",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Diagnose",
    description:
      "Site visit, shift log review, and operator interviews. Map recovery at each machine, downtime events, and material flow constraints.",
  },
  {
    step: "02",
    title: "Evaluate",
    description:
      "Benchmark head rice, flour yield, broken percentage, and energy per tonne against comparable mills running your grain type and capacity.",
  },
  {
    step: "03",
    title: "Recommend",
    description:
      "Issue a prioritized action list — process parameter changes, equipment replacements, layout revisions — with cost range and expected recovery gain.",
  },
  {
    step: "04",
    title: "Implement",
    description:
      "Support procurement review, installation oversight, setting of roll gaps and air gates, and hands-on operator training during the change window.",
  },
  {
    step: "05",
    title: "Stabilize",
    description:
      "Monitor two to four production cycles post-change. Lock parameters into SOPs and verify recovery holds after our team departs.",
  },
];

export const outcomes = [
  {
    value: "+2–5%",
    title: "Recovery on tuned lines",
    description:
      "Head rice or flour yield gains documented on monthly production reports after whitener, break, or grading corrections",
  },
  {
    value: "−30%",
    title: "Unplanned stops",
    description:
      "Fewer pneumatic blockages, elevator trips, and emergency clean-outs following duct sizing and interlock fixes",
  },
  {
    value: "−14%",
    title: "Aspiration load",
    description:
      "Motor draw reduction on break-system retrofits where cyclone choke and duct velocity were the root cause",
  },
  {
    value: "6 wks",
    title: "To stable operation",
    description:
      "Typical window from first site visit to locked shift parameters and operator sign-off on focused engagements",
  },
];

export const faqItems = [
  {
    question: "What does Florice cover — consulting only, or machinery and spares too?",
    answer:
      "Three scopes under one roof: Services & Projects (greenfield and brownfield consulting, project management, and operational support), auxiliary machinery (conveyors, elevators, pneumatic lines, spouting, ducting, magnets, and tanks), and wear spare parts for rice, flour, and grain processing lines. See Capabilities on this page, or our Services and Machinery & Spare Parts pages for full detail",
  },
  {
    question: "Are you tied to a specific OEM or equipment supplier?",
    answer:
      "No — we are vendor-neutral with zero equipment sales commissions. We specify process and layout, compare supplier proposals, track itemised Total Plant Cost Sheets, and source auxiliaries and wear parts against your machine tag and throughput — not to push one brand",
  },
  {
    question: "What auxiliary machinery can you supply?",
    answer:
      "Belt and screw conveyors, bucket elevators, pneumatic conveying lines with cyclones, airlocks, and diverter gates, spouting, ducting, aspiration components, industrial magnets, storage tanks, hoppers, and custom-fabricated vessels. If your machine is not listed on our Machinery & Spare Parts page, reach out — we will arrange it",
  },
  {
    question: "How do you confirm a spare part fits before dispatch?",
    answer:
      "Share machine manufacturer, model, TPH rating, and photos of the worn part or nameplate. We cross-check dimensions and material spec against our catalogue — cleaning and separator spares, whitener and polisher screens, plansifter frames, elevator buckets, pneumatic components, and more — and confirm fit before you order",
  },
  {
    question: "Our part is not in your online catalogue. Can you still source it?",
    answer:
      "Yes — most requests start that way. Send part numbers, nameplate photos, and operating hours since last change. We identify compatible OEM, aftermarket, or workshop-fabricated options, quote itemised pricing and lead time, and dispatch only once fit is confirmed",
  },
  {
    question: "When should we request a full plant assessment vs focusing on one machine?",
    answer:
      "Single-machine review when one swap or setting change caused a sudden recovery or downtime shift — for example a whitener screen change or pneumatic choke. Full assessment when yield has drifted over months, stops are rising across multiple stages, or you are planning capex and need a baseline across the milling train",
  },
  {
    question: "Can you support greenfield or brownfield projects end to end?",
    answer:
      "Yes — six-phase project management from TEFR and layout through erection, fabrication, startup, and operational handover. Core sectors include rice, flour, pulses, value-added processing, and logistics. On running plants we also offer audits, retrofits, contract mill operation, maintenance support, and operator training",
  },
  {
    question: "What should we send before requesting a consultation or parts quote?",
    answer:
      "For consulting — plant type (rice, wheat, pulses), rated capacity, main variety, current recovery or extraction, and your upgrade or breakdown goal. For machinery or spares — equipment type or part category, manufacturer or model, quantity, and whether this is a breakdown, planned shutdown, or new installation. Shift logs and layout sketches speed up our response",
  },
];

export type CapabilityGroup = {
  id: string;
  eyebrow: string;
  title: string;
  href: string;
  items: string[];
};

export const capabilityGroups: CapabilityGroup[] = [
  {
    id: "services",
    eyebrow: "Services & Projects",
    title: "Consulting, project management & operational support",
    href: "/services",
    items: [
      "Greenfield, brownfield & modernisation — feasibility through commissioning",
      "Core sectors: rice, flour, pulses, value-added processing, logistics & agro products",
      "Six-phase project management from TEFR and layout to erection, fabrication & startup",
      "Operational support: contract mill operation, audits, retrofits, maintenance & training",
      "Total Plant Cost Sheets and vendor-neutral CAPEX tracking before procurement",
    ],
  },
  {
    id: "machinery",
    eyebrow: "Auxiliary Machinery",
    title: "Material handling & plant auxiliaries",
    href: "/spare-parts#machinery-lines",
    items: [
      "Belt conveyors, screw conveyors & bucket elevators",
      "Pneumatic conveying lines with cyclones, airlocks & diverter gates",
      "Spouting, ducting, aspiration systems & industrial magnets",
      "Storage tanks, hoppers & custom-fabricated vessels",
      "Machine not listed — reach out and we will arrange it",
    ],
  },
  {
    id: "spare-parts",
    eyebrow: "Spare Parts",
    title: "Wear parts for rice, flour & grain processing lines",
    href: "/spare-parts",
    items: [
      "Cleaning, separator, whitener, polisher, huller & roller mill spares",
      "Plansifter frames, mesh, sieve cleaners & wheat preparation parts",
      "Elevator buckets, belts, screw flights, chain scrapers & pneumatic components",
      "Spouting, pipe fittings, filter sleeves, rubber parts & bearings",
      "Part not in catalogue — send nameplate photos and we confirm fit before dispatch",
    ],
  },
];

export const aboutCredentials = [
  { value: "20+", label: "Years in grain processing & milling systems" },
  { value: "18", label: "Countries with on-site consulting" },
  { value: "0", label: "Equipment sales commissions — fully independent" },
  { value: "Turnkey", label: "Project design, install oversight & PM support" },
];
