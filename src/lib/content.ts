export const site = {
  name: "Florice Milling Spare & Solution",
  tagline: "Milling Spare & Solution",
  email: "consult@floricemilling.com",
  phone: "+91 98765 43210",
  description:
    "Independent consulting for rice mills, wheat flour mills, parboiling plants, and grain processing machinery optimization.",
};

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/spare-parts", label: "Machinery & Spare Parts" },
  { href: "/milling-trains", label: "Milling Trains" },
  { href: "/work", label: "Projects" },
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
  eyebrow: "Complete plant lines",
  title: "Machinery for grain processing plants",
  description:
    "Complete milling and specialty grain lines — specified, sourced, and commissioned to your capacity and product mix.",
};

export const machineryProducts: MachineryProduct[] = [
  {
    id: "flour-mill",
    anchor: "flour-mill-machinery",
    title: "Flour Mill Machinery",
    description: "Roller flour mill plants — cleaning through bagging with consistent extraction.",
    tags: ["Break-reduction milling", "Plansifter lines"],
    image: {
      src: "/machinery/plant-lines/flour-mill-machinery.png",
      alt: "Roller flour mill system processing wheat into flour in an industrial milling plant",
    },
  },
  {
    id: "rice-mill",
    anchor: "rice-mill-machinery",
    title: "Rice Mill Machinery",
    description: "Complete rice milling lines — cleaning, hulling, whitening, polishing, and grading.",
    tags: ["Paddy to head rice", "Parboiling ready"],
    image: {
      src: "/machinery/plant-lines/rice-mill-machinery.png",
      alt: "Industrial rice mill cleaning and grading machinery on a mill floor",
    },
  },
  {
    id: "pulse-plant",
    anchor: "pulse-processing-plant",
    title: "Pulse Processing Plant",
    description: "Pulse de-husking, splitting, and grading lines sized for your throughput and variety.",
    tags: ["Multi-pulse capable", "Silo integration"],
    image: {
      src: "/machinery/plant-lines/pulse-processing-plant.png",
      alt: "Pulse processing plant with sorting machinery, silos, and processed lentils in bins",
    },
  },
  {
    id: "besan-plant",
    anchor: "besan-plant",
    title: "Besan Plant",
    description: "Gram flour plants with precision milling, sifting, and dust-controlled bag-off.",
    tags: ["Consistent particle size", "Food-grade design"],
    image: {
      src: "/machinery/plant-lines/besan-plant.png",
      alt: "Besan grinding machine processing chickpeas into gram flour beside labeled sacks",
    },
  },
  {
    id: "dalia-machine",
    anchor: "dalia-making-machine",
    title: "Dalia Making Machine",
    description: "Broken wheat (dalia) lines with cutting, tempering, and uniform grading stages.",
    tags: ["Capacity matched", "Stainless build"],
    image: {
      src: "/machinery/plant-lines/dalia-making-machine.png",
      alt: "Stainless steel dalia making machine discharging processed flakes into a collection bowl",
    },
  },
  {
    id: "energy-food",
    anchor: "energy-food-plant",
    title: "Energy Food Plant",
    description: "Specialty grain and energy-food lines for blended, fortified, and ready-to-use products.",
    tags: ["Multi-recipe staging", "Hygiene focused"],
    image: {
      src: "/machinery/plant-lines/energy-food-plant.png",
      alt: "Stainless steel energy food processing line with hopper, conveyors, and status lights",
    },
  },
];

export const sparePartsIntro = {
  title: "Machinery & spare parts for rice mills, flour mills, and grain processing plants",
  description:
    "Florice specifies and sources complete milling and processing lines — plus coordinates genuine spare parts for cleaning, milling, polishing, conveying, and aspiration equipment matched to your make, capacity, and wear pattern.",
  note:
    "For machinery projects, share capacity targets and product mix. For parts, send nameplate photos, part numbers, and quantity — we confirm fit and lead time before you order.",
};

export const sparePartsPrinciples = [
  {
    title: "Right part, first time",
    description:
      "Parts are verified against machine model, TPH rating, and install history — not generic catalogue guesses.",
  },
  {
    title: "Competitive sourcing",
    description:
      "We compare OEM, aftermarket, and workshop-fabricated options where appropriate, with clear trade-offs on life and cost.",
  },
  {
    title: "Fastest practical delivery",
    description:
      "Critical wear items — screens, rubber rolls, belts, and aspiration sleeves — prioritized to reduce unplanned downtime.",
  },
] as const;

export const sparePartsProcess = [
  {
    step: "1",
    title: "Identify",
    description: "Share machine tag, worn part photos, and operating hours since last change.",
  },
  {
    step: "2",
    title: "Confirm fit",
    description: "We cross-check dimensions, material spec, and compatible OEM or workshop sources.",
  },
  {
    step: "3",
    title: "Quote & ship",
    description: "You receive itemized pricing, lead time, and packing list before dispatch.",
  },
  {
    step: "4",
    title: "Install support",
    description: "Optional on-site or remote guidance for critical fits — whitener screens, cam sets, roll gaps.",
  },
] as const;

export const sparePartsQuoteIntro = {
  title: "Request a machinery or spare parts quote",
  description:
    "Tell us what you need — a complete line, upgraded section, or individual parts. We confirm scope, fit, and send pricing with lead time before you order.",
  responseNote:
    "Attach layout sketches or nameplate photos when you can. Breakdown part enquiries and greenfield machinery projects are both welcome.",
};

export const sparePartsQuoteChecklist = [
  "Machinery line type or spare part category",
  "Target capacity (TPH) or machine manufacturer and model",
  "Part description, part number, or scope of supply",
  "Quantity required or project timeline",
  "Whether this is a breakdown, planned shutdown, or greenfield project",
];

export const sparePartsClosingCta = {
  eyebrow: "Get a quote",
  title: "Need a complete line, spare parts, or something not listed?",
  paragraphs: [
    "Greenfield flour mills, rice and pulse lines, besan and dalia plants — we scope machinery with vendor-neutral specs and commissioning support.",
    "For breakdowns, mark your enquiry urgent and include photos. We prioritize screens, belts, rubber rolls, and aspiration items that block production.",
  ],
  sparePartsButton: "Request machinery or parts quote",
  consultingButton: "View consulting services",
};

export const sparePartsCategories: SparePartCategory[] = [
  {
    id: "cleaning",
    anchor: "cleaning-machines",
    index: "01",
    eyebrow: "Cleaning machines",
    title: "Classifier, destoner & pre-cleaner spares",
    description:
      "Wooden decks, rubber valves, and inlet bags wear with abrasive paddy and wheat. Correct sieve aperture and deck tension protect downstream hullers and break rolls.",
    machineTags: ["Classifier", "Destoner", "Pre-cleaner", "Gravity selector"],
    parts: [
      "Wooden frame classifier sieves and frame sets",
      "Destoner wooden decks (standard and compact units)",
      "Rubber valves — product and stone sides",
      "Rubber hollow springs and inlet hose bags",
      "Destoner wire mesh and nail sets",
      "Aspiration inlet hoses and flexible connections",
    ],
    images: [
      {
        src: "/spare-parts/classifier-sieve-frame.png",
        alt: "Wooden classifier sieve frame with perforated metal screens",
        caption: "Wooden frame classifier sieves and frame sets",
      },
      {
        src: "/spare-parts/inlet-flexible-connectors.png",
        alt: "Rubber expansion joint and fabric inlet hose bag for cleaning machines",
        caption: "Rubber hollow springs, inlet hose bags, and flexible connections",
      },
    ],
  },
  {
    id: "separator",
    anchor: "separators",
    index: "02",
    eyebrow: "Separators & grain cleaners",
    title: "Universal separator & grain-plus spares",
    description:
      "Sieve frames and ball grounds affect throughput and overs carry-over. We match LKGA, TAS, and plant-specific separator configurations.",
    machineTags: ["Universal separator", "Grain Plus", "LKGA", "TAS"],
    parts: [
      "Sieve with frame assemblies",
      "LKGA and TAS slotted / round sieves",
      "Ball grounds and rubber cleaning balls",
      "Classifier lock and manual slide gates",
      "Inlet chute liners and wear plates",
    ],
    images: [
      {
        src: "/spare-parts/lkga-tas-sieves.png",
        alt: "LKGA slotted sieve and TAS round-hole sieve for universal separators",
        caption: "LKGA and TAS slotted / round sieves",
      },
      {
        src: "/spare-parts/separator-wear-plates.png",
        alt: "Separator inlet chute with bolt-on wear plates and spare liner set",
        caption: "Inlet chute liners and wear plates",
      },
    ],
  },
  {
    id: "whitener",
    anchor: "rice-whitener",
    index: "03",
    eyebrow: "Rice whitener",
    title: "Whitener spares — 4, 8 & 16 TPH lines",
    description:
      "Screens, screw feeders, and wear rings define degree of milling and broken percentage. Grinding wheels and brake bars need periodic replacement on abrasive varieties.",
    machineTags: ["Whitener 4 TPH", "Whitener 8 TPH", "Whitener 16 TPH", "MM whitener"],
    parts: [
      "SS hardened screens and sieve frames",
      "Screw feeders and brake bars",
      "Wear rings, clamping levers, and grinding flanges",
      "Grinding wheels — Ø450, Ø340, and Ø250 mm",
      "Rotor shafts, bush sets, and outlet rings",
    ],
    images: [
      {
        src: "/spare-parts/whitener-grinding-wheels.png",
        alt: "Whitener grinding wheels in 450 mm, 340 mm, and 250 mm diameters",
        caption: "Grinding wheels — Ø450, Ø340, and Ø250 mm",
      },
      {
        src: "/spare-parts/whitener-shafts-bush-outlet-ring.png",
        alt: "Whitener rotor shafts, bush set, and stainless outlet ring",
        caption: "Rotor shafts, bush sets, and outlet rings",
      },
    ],
  },
  {
    id: "polisher",
    anchor: "rice-polisher",
    index: "04",
    eyebrow: "Rice polisher",
    title: "Polisher spares — 8 & 16 TPH",
    description:
      "Cam profiles, mixing tubes, and reducer rings control silky finish and brokens. Timing belts and cam trays are common failure points on high-duty lines.",
    machineTags: ["Polisher 8 TPH", "Polisher 16 TPH", "Silky polisher"],
    parts: [
      "Polisher screens and sieve frames",
      "Screw feeders, mixing tubes, and reducer rings",
      "Taper and straight cams with cam teeth",
      "Cam hubs, cam tray weldments, and baffle rings",
      "Rotor shafts, eye bolts, nylock nuts, and timing belts",
      "Outlet rings (SS) and artificial bristle pipes",
    ],
    images: [
      {
        src: "/spare-parts/polisher-cams-gears.png",
        alt: "Polisher taper cam, straight cam, and cam hub gear set",
        caption: "Taper and straight cams with cam teeth",
      },
      {
        src: "/spare-parts/polisher-nuts-bristle-pipe.png",
        alt: "Polisher nylock nuts, artificial bristle brushes, and mixing tube",
        caption: "Eye bolts, nylock nuts, and artificial bristle pipes",
      },
    ],
  },
  {
    id: "paddy",
    anchor: "paddy-separator",
    index: "05",
    eyebrow: "Paddy separator",
    title: "Paddy separator & slide gate spares",
    description:
      "Knife edges and chute assemblies affect brown rice recovery from the separator. Left/right chute fit must match your machine orientation.",
    machineTags: ["Paddy separator", "Slide gate", "Hulling line"],
    parts: [
      "Left and right inlet chute assemblies",
      "Paddy plates and knife edge supporters",
      "Knife edge sets and classifier locks",
      "Manual slide gate parts and seals",
    ],
    images: [
      {
        src: "/spare-parts/paddy-knife-edge-plates.png",
        alt: "Paddy separator knife edge plates and knife edge supporter assembly",
        caption: "Paddy plates, knife edge sets, and classifier locks",
      },
      {
        src: "/spare-parts/paddy-slide-gate-parts.png",
        alt: "Manual slide gate rollers, seals, profiles, and mounting hardware",
        caption: "Manual slide gate parts and seals",
      },
    ],
  },
  {
    id: "huller",
    anchor: "huller-husk",
    index: "06",
    eyebrow: "Huller & husk handling",
    title: "Rubber roll huller & husk separator spares",
    description:
      "Fan wheels, paddles, and husker shafts sustain hulling duty cycles. SS paddles and U-bolt sets are stocked for common OEM layouts.",
    machineTags: ["Rubber roll huller", "Husk separator", "Husker fan"],
    parts: [
      "Rubber rolls and roll housing consumables",
      "Husker shafts, adopters, and U-bolt sets",
      "Fan wheels and SS paddles",
      "Screw conveyor and paddle shafts",
      "Husk pneumatic line wear parts",
    ],
    images: [
      {
        src: "/spare-parts/husk-pneumatic-wear-parts.png",
        alt: "Husk pneumatic line wear parts including flanges, elbows, and mounting hardware",
        caption: "Husk pneumatic line wear parts",
      },
      {
        src: "/spare-parts/huller-screw-paddle-shafts.png",
        alt: "Huller screw conveyor auger and SS paddle shaft assemblies",
        caption: "Screw conveyor and paddle shafts",
      },
    ],
  },
  {
    id: "flour-prep",
    anchor: "flour-scourer-dampener",
    index: "07",
    eyebrow: "Wheat preparation",
    title: "Scourer, dampener & intensive dampener spares",
    description:
      "Beaters and jackets wear against sand and dockage in incoming wheat. Correct beat pattern preserves bran release in later break passes.",
    machineTags: ["Scourer", "Dampener", "Intensive dampener", "Bran duster"],
    parts: [
      "Scourer beaters and jackets with frames",
      "Dampener beaters and rotor shafts",
      "Scourer outlet and wear liners",
      "Bran duster screens and beaters",
    ],
    images: [
      {
        src: "/spare-parts/scourer-dampener-beaters.png",
        alt: "Scourer and dampener beater assemblies with rotor shafts",
        caption: "Scourer beaters and dampener rotor shafts",
      },
      {
        src: "/spare-parts/scourer-screens-paddle-shaft.png",
        alt: "Scourer wire mesh screens and bran duster paddle shaft",
        caption: "Scourer jackets, bran duster screens, and beaters",
      },
    ],
  },
  {
    id: "sifter",
    anchor: "plansifter",
    index: "08",
    eyebrow: "Plansifter & aspiration",
    title: "Sifter frames, sieves & aspiration parts",
    description:
      "Wooden, aluminum insert, and plastic sifter frames each need matched sieves and cleaning accessories. Aspiration sleeves and filter media protect downstream air quality.",
    machineTags: ["Plansifter", "Control sifter", "Purifier", "Aspiration"],
    parts: [
      "Wooden, aluminum insert, and plastic sifter frames",
      "Perforated sieves and bran sifter sieves",
      "Sifter cleaning pads and roll brushes",
      "Filter sleeves and aspiration rubber sleeves",
      "Rubber caps and acrylic sight-glass fittings",
      "SS pipe fittings for pneumatic and spout lines",
    ],
    images: [
      {
        src: "/spare-parts/sifter-rubber-caps-sight-glass.png",
        alt: "Aspiration rubber caps, sleeves, and acrylic sight-glass fittings",
        caption: "Rubber caps and acrylic sight-glass fittings",
      },
      {
        src: "/spare-parts/sifter-ss-pipe-fittings.png",
        alt: "Stainless steel pipe fittings for pneumatic and spout lines",
        caption: "SS pipe fittings for pneumatic and spout lines",
      },
    ],
  },
  {
    id: "conveying",
    anchor: "conveying",
    index: "09",
    eyebrow: "Conveying & elevation",
    title: "Bucket elevator, belt & screw conveyor spares",
    description:
      "Belts, buckets, and pulleys set the real plant capacity ceiling. Multi-ply belts and HRC rubber belts suit abrasive flour and bran duties.",
    machineTags: ["Bucket elevator", "Belt conveyor", "Screw conveyor", "Drag chain"],
    parts: [
      "MS and SS elevator buckets",
      "Rubber belts, multi-ply belts, and HRC belts",
      "Timing pulleys, timer belts, and general pulleys",
      "Screw conveyor paddles and trough liners",
      "Blowthrough airlocks and diverter wear parts",
    ],
    images: [
      {
        src: "/spare-parts/conveying-belts.png",
        alt: "Elevator rubber belts, timing belts, and V-belt sections",
        caption: "Rubber belts, multi-ply belts, and timing belts",
      },
      {
        src: "/spare-parts/conveying-screw-auger.png",
        alt: "Screw conveyor auger flight assembly in trough",
        caption: "Screw conveyor paddles and trough liners",
      },
    ],
  },
  {
    id: "general",
    anchor: "general-spares",
    index: "10",
    eyebrow: "General mill spares",
    title: "Fabricated structures & miscellaneous wear",
    description:
      "Spouting, ducting, and custom fabricated items complement catalogue parts — especially on brownfield lines with non-standard layouts.",
    machineTags: ["Spouting", "Ducting", "Custom fabrication"],
    parts: [
      "Galvanized and SS spouting sections",
      "Aspiration ducting and cyclone internals",
      "Custom sieve frames and wooden decks with wire mesh",
      "Magnet trap elements and inspection hatches",
      "General mill hardware and clamp sets",
    ],
    images: [
      {
        src: "/spare-parts/general-mill-hardware.png",
        alt: "General mill hardware including bolts, nuts, washers, and C-clamps",
        caption: "General mill hardware and clamp sets",
      },
      {
        src: "/spare-parts/general-cyclones-magnet-trap.png",
        alt: "Stainless cyclone housings, magnet trap grate, and inspection hatch",
        caption: "Aspiration cyclone internals, magnet traps, and inspection hatches",
      },
    ],
  },
];

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
  typicalPlants: "Raw, parboiled, and basmati lines · 2–20+ TPH",
  keyMetrics: ["Head rice %", "Broken %", "Degree of milling", "Whitener power"],
  infrastructure:
    "Aspiration, pneumatic lifts, and elevators tie stages together. Air balance issues here often mimic whitener or grader faults.",
  steps: [
    {
      id: "intake",
      title: "Paddy intake",
      description:
        "Paddy from field, drier, or parboiling line into silos or day bins. Moisture, variety, and trash at intake cap downstream recovery.",
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

export const heroScope = [
  {
    title: "Rice & parboiling",
    description: "Paddy cleaning, hulling, whitening, polishing, soaking, steaming, drying",
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
      "Higher head rice and flour recovery through effective, adaptable process and equipment decisions.",
  },
  {
    title: "Reduce operating costs",
    description:
      "Lower downtime, aspiration load, and maintenance burden with right-sized machinery and stable parameters.",
  },
  {
    title: "Build reliability",
    description:
      "Vendor-neutral specs, commissioning oversight, and machinery & spare parts coordination you can run shift after shift.",
  },
];

export const services = [
  {
    tag: "Rice · Wheat · Parboiling",
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
    title: "Parboiling",
    description:
      "Batch and continuous soaking, steaming vessels, and dryer integration — gelatinization control, steam distribution, and energy balance before milling.",
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
    title: "Head rice / flour recovery",
    description:
      "Typical gain from whitener train rebalancing, screen changes, and feed rate correction — verified against monthly production reports.",
  },
  {
    value: "−30%",
    title: "Unplanned stoppages",
    description:
      "Fewer pneumatic blockages, elevator overload trips, and emergency clean-outs after duct sizing and interlock corrections.",
  },
  {
    value: "Spec'd",
    title: "Right-sized equipment",
    description:
      "Machinery matched to paddy variety, moisture range, and actual TPH — avoiding overspend on capacity you cannot feed consistently.",
  },
  {
    value: "Held",
    title: "Stable shift parameters",
    description:
      "Documented roll settings, air volumes, and grading splits that operators maintain without constant supervisor intervention.",
  },
];

export const projects = [
  {
    meta: "Rice mill · Andhra Pradesh · 12 TPH · 6-week engagement",
    title: "Multi-stage whitener recovery audit",
    result: "Head rice: 58.1% → 63.4%",
    problem:
      "Basmati variety switch dropped head rice 4 points; broken rose to 22%. Operators over-compensating on final polisher.",
    scope:
      "Rubber roll gap audit on huller, MM whitener screen sizing, air gate calibration on silky polisher, and length grader re-split.",
    outcome:
      "Head rice restored to 63.4% within six weeks. Broken reduced to 18.6%. Power draw on whitening section down 8%.",
    type: "rice" as const,
    highlights: ["Huller roll gaps", "Whitener screens", "Length grader", "Silky polisher air gates"],
    metrics: [
      { label: "Head rice", before: "58.1%", after: "63.4%" },
      { label: "Broken rice", before: "22%", after: "18.6%" },
      { label: "Whitening power", before: "Baseline", after: "−8%" },
    ],
  },
  {
    meta: "Flour mill · Punjab · 200 TPD · Pneumatic retrofit",
    title: "Break system aspiration & conveying",
    result: "Blockages: −72% · Aspiration kW: −14%",
    problem:
      "Daily blockages on pneumatic lift to plansifter floor. Cyclone choke causing break passage starvation and ash drift on maida stream.",
    scope:
      "Duct velocity survey, cyclone and rotary valve replacement spec, PLC pressure interlocks, and rotary valve maintenance schedule.",
    outcome:
      "Blockage incidents dropped from 11/month to 3. Aspiration motor load reduced 14%. Maida ash stabilized within grade spec.",
    type: "flour" as const,
    highlights: ["Duct velocity survey", "Cyclone spec", "PLC interlocks", "Rotary valve PM"],
    metrics: [
      { label: "Blockages / month", before: "11", after: "3" },
      { label: "Aspiration load", before: "Baseline", after: "−14%" },
      { label: "Maida ash", before: "Out of spec", after: "In grade" },
    ],
  },
  {
    meta: "Parboiling · Nigeria · 8 TPH greenfield · Commissioning",
    title: "Steaming & drying line startup",
    result: "Design capacity in 22 days",
    problem:
      "New soaking tanks and vertical steamer failing gelatinization targets. Dryer bottleneck forcing paddy back into soaking cycle.",
    scope:
      "Steam trap and distribution audit, soak time/temperature curves, dryer plenum balancing, and 5-day operator training program.",
    outcome:
      "Stable parboiled paddy output at 8 TPH within 22 days of startup. Milling recovery on parboiled rice reached 68% by month two.",
    type: "parboiling" as const,
    highlights: ["Soak curves", "Steam distribution", "Dryer balancing", "Operator training"],
    metrics: [
      { label: "Line output", before: "Unstable", after: "8 TPH" },
      { label: "Startup time", before: "Stalled", after: "22 days" },
      { label: "Milling recovery", before: "Below target", after: "68%" },
    ],
  },
];

export const machineryGroups = [
  {
    title: "Intake & cleaning",
    description: "Receiving, pre-cleaning, and stone removal before the milling core",
    items: ["Pre-cleaners & scouring machines", "Destoners & gravity selectors", "Silos, hoppers, spouting & ducting"],
  },
  {
    title: "Milling core",
    description: "Break, hull, whiten, sift, and grade to finished product spec",
    items: [
      "Rubber roll hullers & shellers",
      "Whiteners, polishers & silky polishers",
      "Plansifters, purifiers & graders",
      "Hammer mills & impact detachers",
      "Dampeners & intensive dampening",
    ],
  },
  {
    title: "Handling & aspiration",
    description: "Lift, convey, and exhaust without blockages or overload trips",
    items: ["Bucket elevators & screw conveyors", "Pneumatic conveying & cyclones"],
  },
  {
    title: "Packaging & control",
    description: "Bagging lines and automation that hold shift parameters",
    items: ["Bagging, dosing & packaging lines", "PLC, SCADA & motor control panels"],
  },
];

export const machineryCategories = [
  "Pre-cleaners & scouring machines",
  "Destoners & gravity selectors",
  "Rubber roll hullers & shellers",
  "Whiteners, polishers & silky polishers",
  "Plansifters, purifiers & graders",
  "Hammer mills & impact detachers",
  "Bucket elevators & screw conveyors",
  "Pneumatic conveying & cyclones",
  "Bagging, dosing & packaging lines",
  "PLC, SCADA & motor control panels",
  "Dampeners & intensive dampening",
  "Silos, hoppers, spouting & ducting",
];

export const faqItems = [
  {
    question: "How do I know if my plant needs a full assessment or just a single-machine review?",
    answer:
      "Start with a single-machine review if one piece of equipment changed and recovery dropped shortly after — for example, a new whitener or polisher. A full assessment is appropriate when recovery has drifted over months, downtime is rising across multiple stages, or you are planning capex and need a baseline across the entire milling train.",
  },
  {
    question: "Can you help us choose between replacing a whitener train vs. adding a polishing stage?",
    answer:
      "Yes. We model both options against your paddy variety, target head rice percentage, and available floor space. We compare capex, power load, operator skill required, and expected recovery gain — without tying the recommendation to a specific OEM.",
  },
  {
    question: "We want to increase capacity from 8 TPH to 12 TPH. What should we plan first?",
    answer:
      "Begin with intake, cleaning, and hulling capacity — bottlenecks often appear upstream of the whitener. We review silo draw rates, elevator capacities, aspiration loads, and utility headroom before specifying new milling equipment. A phased layout plan helps you upgrade without a full shutdown.",
  },
  {
    question: "Do you work with our existing equipment supplier, or do you specify independently?",
    answer:
      "We specify independently and can review proposals from your preferred suppliers. Our role is to verify that equipment capacity, installation clearance, and process fit match your grain and throughput — not to sell machines.",
  },
  {
    question: "How long does a typical plant assessment take on site?",
    answer:
      "Most rice and flour mill assessments run 3–5 days on site: one day for walk-through and data collection, one to two days for machine-level checks and operator interviews, and one day for preliminary findings. A written report with prioritized actions follows within one to two weeks.",
  },
  {
    question: "Can you support commissioning after new equipment is installed?",
    answer:
      "Yes. Commissioning support includes pre-start mechanical checks, aspiration balancing, parameter setting during run-in, operator training, and verification that recovery and downtime targets hold over the first production cycles.",
  },
  {
    question: "We are modernizing an old pneumatic conveying system. Is remote review enough to start?",
    answer:
      "Remote review works for an initial scope if you share layout drawings, duct routes, blockage history, and motor load data. On-site duct velocity measurement and cyclone inspection are usually needed before final specifications — especially on flour mill break systems where ash drift is a risk.",
  },
  {
    question: "What information should we send before requesting a consultation?",
    answer:
      "Include plant type (rice, wheat, parboiling), rated capacity (TPH/TPD), main grain variety, current recovery or extraction figures, and a brief description of the problem or upgrade goal. Shift logs or monthly production reports accelerate our initial scope proposal.",
  },
];

export const brochurePoints = [
  "Plant assessment and recovery audit methodology",
  "Machinery selection and vendor-neutral specification process",
  "Rice, wheat, parboiling, and modernization project scope",
  "Commissioning support and troubleshooting response format",
  "Spare parts coordination and fabricated structures supply",
];

export const aboutCredentials = [
  { value: "20+", label: "Years in grain processing & milling systems" },
  { value: "18", label: "Countries with on-site consulting" },
  { value: "0", label: "Equipment sales commissions — fully independent" },
  { value: "Turnkey", label: "Project design, install oversight & PM support" },
];
