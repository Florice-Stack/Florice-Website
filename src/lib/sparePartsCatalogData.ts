type SparePartCategory = {
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

export const sparePartsCategories: SparePartCategory[] = [
  {
    id: "cleaning",
    anchor: "cleaning-machines",
    index: "01",
    eyebrow: "Cleaning machines",
    title: "Classifier, destoner & pre-cleaner spares",
    description:
      "Wooden decks, rubber valves, and inlet bags wear with abrasive paddy and wheat — correct sieve aperture and deck tension protect downstream hullers and break rolls",
    machineTags: ["Classifier", "Destoner", "Pre-cleaner", "Gravity selector"],
    parts: [
      "Wooden frame classifier sieves and frame sets",
      "Classifier inlet bags and wooden frames",
      "Destoner wooden decks — standard and compact units",
      "Rubber valves — product and stone sides",
      "Rubber hollow springs and inlet hose bags",
      "Destoner wire mesh, nail sets, and adapters",
      "Aspiration inlet hoses and flexible connections",
    ],
    images: [
      {
        src: "/spare-parts/catalog/cleaning-classifier-destoner.png",
        alt: "Wooden classifier sieve frames and destoner rubber valves for grain cleaning machines",
        caption: "Classifier sieves, wooden decks, and destoner rubber valves",
      },
      {
        src: "/spare-parts/catalog/cleaning-inlet-hoses.png",
        alt: "Fabric inlet hose bags and flexible aspiration connectors for cleaning machines",
        caption: "Inlet hose bags and flexible aspiration connections",
      },
    ],
  },
  {
    id: "separator",
    anchor: "separators",
    index: "02",
    eyebrow: "Separators & grain cleaners",
    title: "Universal separator, LKGA & TAS spares",
    description:
      "Sieve frames and ball grounds affect throughput and overs carry-over — we match LKGA, TAS, Grain Plus, and plant-specific separator configurations",
    machineTags: ["Universal separator", "Grain Plus", "LKGA", "TAS 152"],
    parts: [
      "Sieve with frame assemblies",
      "LKGA sieves — slotted and round patterns",
      "TAS 152 sieves — slotted and round patterns",
      "Ball grounds and rubber cleaning balls",
      "Classifier lock and manual slide gates",
      "Left and right inlet chute liners",
      "Knife edge supporters and wear plates",
    ],
    images: [
      {
        src: "/spare-parts/catalog/separator-lkga-tas-sieves.png",
        alt: "LKGA slotted sieves and TAS round-hole separator screens with frame assemblies",
        caption: "LKGA and TAS slotted / round sieves",
      },
      {
        src: "/spare-parts/catalog/separator-ball-grounds.png",
        alt: "Separator ball grounds with rubber cleaning balls and sieve frame",
        caption: "Ball grounds and rubber cleaning balls",
      },
    ],
  },
  {
    id: "whitener",
    anchor: "rice-whitener",
    index: "03",
    eyebrow: "Rice whitener",
    title: "Whitener spares — 4, 8 & 16 TPH",
    description:
      "Screens, screw feeders, and wear rings define degree of milling and broken percentage — grinding wheels and brake bars need periodic replacement on abrasive varieties",
    machineTags: ["Whitener 4 TPH", "Whitener 8 TPH", "Whitener 16 TPH"],
    parts: [
      "SS hardened screens and sieve frames",
      "Screw feeders and brake bars",
      "Wear rings, bush sets, and clamping levers",
      "Grinding flanges and grinding wheels — Ø450, Ø340, Ø250 mm",
      "Rotor shafts and outlet rings",
      "Timing pulleys and timer belts",
    ],
    images: [
      {
        src: "/spare-parts/catalog/whitener-screens-wheels.png",
        alt: "Rice whitener SS screens, screw feeder, and grinding wheels in multiple diameters",
        caption: "Screens, screw feeders, and grinding wheels",
      },
      {
        src: "/spare-parts/catalog/whitener-wear-rings.png",
        alt: "Whitener wear rings, grinding flanges, and clamping levers",
        caption: "Wear rings, flanges, and clamping levers",
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
      "Cam profiles, mixing tubes, and reducer rings control silky finish and brokens — timing belts and cam trays are common failure points on high-duty lines",
    machineTags: ["Polisher 8 TPH", "Polisher 16 TPH", "Silky polisher"],
    parts: [
      "Polisher screens and sieve frames",
      "Screw feeders, mixing tubes, and cam lock sets",
      "Reducer rings — D150 to D180 mm",
      "Taper and straight cams with cam teeth",
      "Cam hubs, cam tray weldments, and baffle rings",
      "Rotor shafts, eye bolts, nylock nuts, and timing belts",
      "Outlet rings (SS) and artificial bristle pipes",
    ],
    images: [
      {
        src: "/spare-parts/catalog/polisher-cams-screens.png",
        alt: "Rice polisher taper and straight cams with sieve frames and mixing tubes",
        caption: "Polisher screens, cams, and mixing tubes",
      },
      {
        src: "/spare-parts/catalog/polisher-bristle-outlet.png",
        alt: "Polisher artificial bristle pipe, outlet ring, and timing belt set",
        caption: "Bristle pipes, outlet rings, and timing belts",
      },
    ],
  },
  {
    id: "paddy-huller",
    anchor: "paddy-huller",
    index: "05",
    eyebrow: "Paddy separator & huller",
    title: "Paddy separator, huller & husk handling spares",
    description:
      "Knife edges, chute assemblies, and huller consumables affect brown rice recovery and hulling efficiency — fan wheels and paddles sustain husk separation duty",
    machineTags: ["Paddy separator", "Rubber roll huller", "Husk separator", "Slide gate"],
    parts: [
      "Left and right inlet chute assemblies",
      "Paddy plates and knife edge supporters",
      "Knife edge sets and classifier locks",
      "Manual slide gate parts and seals",
      "Rubber rolls and roll housing consumables",
      "Husker shafts, adopters, and U-bolt sets",
      "Fan wheels, SS paddles, and screw conveyor shafts",
      "Husk pneumatic line wear parts",
    ],
    images: [
      {
        src: "/spare-parts/catalog/paddy-chutes-knife-edges.png",
        alt: "Paddy separator inlet chutes, knife edge plates, and slide gate components",
        caption: "Chute assemblies, knife edges, and slide gates",
      },
      {
        src: "/spare-parts/catalog/huller-fan-paddles.png",
        alt: "Huller fan wheel, SS paddles, and husker shaft assemblies",
        caption: "Fan wheels, paddles, and husker shafts",
      },
    ],
  },
  {
    id: "roller-mill",
    anchor: "roller-mill",
    index: "06",
    eyebrow: "Roller mill & wheat preparation",
    title: "Roller mill rolls, scourer & dampener spares",
    description:
      "Roll surfaces, scrapers, and beaters define extraction and ash in flour milling — feed rolls, spreader rolls, and dampener beaters wear against sand and dockage",
    machineTags: ["Roller mill", "Scourer", "Dampener", "Intensive dampener"],
    parts: [
      "Smooth and fluted roller mill rolls — 150–1000 mm diameter",
      "Feed rolls and spreader rolls",
      "Roll scraper blades and goose-down / nylon brushes",
      "Fine adjustment gauges and roll shells",
      "Roll pulleys, gears, and sight glasses",
      "Scourer beaters, jackets with frames, and outlets",
      "Dampener beaters and rotor shafts",
      "Bran duster screens and beaters",
    ],
    images: [
      {
        src: "/spare-parts/catalog/roller-mill-rolls-scrapers.png",
        alt: "Fluted roller mill rolls, scraper blades, and roll brushes for flour milling",
        caption: "Roller mill rolls, scrapers, and brushes",
      },
      {
        src: "/spare-parts/catalog/scourer-dampener-beaters.png",
        alt: "Scourer beaters, dampener rotor shafts, and jacket frames",
        caption: "Scourer and dampener beaters",
      },
    ],
  },
  {
    id: "sifter",
    anchor: "plansifter",
    index: "07",
    eyebrow: "Plansifter & purifier",
    title: "Sieve boxes, frames, mesh & cleaners",
    description:
      "Plastic, wooden, and aluminium insert frames each need matched sieves and cleaning accessories — stainless and nylon mesh, sieve cleaners, and tensioning tools keep plansifters running",
    machineTags: ["Plansifter", "Purifier", "Control sifter", "Bran sifter"],
    parts: [
      "Plastic, wooden, and aluminium insert sieve boxes and frames",
      "Purifier sieve frames and frame drawers",
      "Purifier brushes and perforated sheets — oblong, triangle, round",
      "Stainless wire mesh and nylon mesh — full aperture range",
      "Mesh adhesive, accelerator, and tensioning meters",
      "Triangular, diamond, and fabric sieve cleaners",
      "Rubber cleaning balls and plansifter hanging rods",
      "Bran sifter sieves and wooden decks with wire mesh",
    ],
    images: [
      {
        src: "/spare-parts/catalog/plansifter-frames-mesh.png",
        alt: "Plansifter wooden and plastic sieve boxes with stainless wire mesh inserts",
        caption: "Sieve boxes, insert frames, and wire mesh",
      },
      {
        src: "/spare-parts/catalog/sieve-cleaners-balls.png",
        alt: "Plansifter triangular sieve cleaners and rubber cleaning balls",
        caption: "Sieve cleaners and rubber balls",
      },
    ],
  },
  {
    id: "conveying",
    anchor: "conveying",
    index: "08",
    eyebrow: "Conveying & elevation",
    title: "Bucket elevator, belt, screw & chain conveyor spares",
    description:
      "Belts, buckets, and pulleys set the real plant capacity ceiling — HDP and metal elevator buckets, screw flights, and chain scrapers suit abrasive flour and bran duties",
    machineTags: ["Bucket elevator", "Belt conveyor", "Screw conveyor", "Drag chain"],
    parts: [
      "HDP and metal elevator buckets — full size range",
      "Bucket bolts, nuts, washers, and spacers",
      "Rubber belts, multi-ply belts, and HRC belts",
      "Elevator and conveyor belt rolls",
      "Screw conveyor flights — left and right helix",
      "Chain with scrapers and individual scraper paddles",
      "Timing pulleys, timer belts, and general pulleys",
      "Trough liners and screw conveyor paddles",
    ],
    images: [
      {
        src: "/spare-parts/catalog/elevator-buckets-belts.png",
        alt: "Metal and plastic elevator buckets with industrial conveyor belts",
        caption: "Elevator buckets and conveyor belts",
      },
      {
        src: "/spare-parts/catalog/screw-chain-conveyors.png",
        alt: "Screw conveyor flight and chain conveyor with scraper paddles",
        caption: "Screw flights and chain scrapers",
      },
    ],
  },
  {
    id: "pneumatic",
    anchor: "pneumatic",
    index: "09",
    eyebrow: "Pneumatic & airlocks",
    title: "Pneumatic cylinders, cyclones, airlocks & diverter gates",
    description:
      "Pneumatic actuators, rotary airlocks, and cyclones move grain and flour between process stages — diverter gates and flow balancers route product without manual intervention",
    machineTags: ["Rotary airlock", "Pneumatic cyclone", "Diverter gate", "Flow balancer"],
    parts: [
      "Pneumatic cylinders, pistons, and solenoid valves",
      "Filter control devices and pneumatic actuators",
      "Blow-through rotary airlocks and air locks",
      "Pneumatic cyclones — full size range",
      "Pneumatic line diverter gates and sliding gates",
      "Flow balancers and air adjustment gates",
      "Pressure gauges, fittings, and air preparation units",
    ],
    images: [
      {
        src: "/spare-parts/catalog/pneumatic-airlocks-cyclones.png",
        alt: "Rotary airlock valve and pneumatic cyclone separator for grain conveying",
        caption: "Rotary airlocks and pneumatic cyclones",
      },
      {
        src: "/spare-parts/catalog/pneumatic-diverter-gates.png",
        alt: "Pneumatic diverter gate and sliding gate for material routing",
        caption: "Diverter gates and sliding gates",
      },
    ],
  },
  {
    id: "spouting",
    anchor: "spouting-fittings",
    index: "10",
    eyebrow: "Spouting & pipe fittings",
    title: "Branch pipes, reducers, sight glasses & connection parts",
    description:
      "Stainless spouting routes product by gravity between machines — branch pipes, reducers, control pipes, and sight glasses suit plansifter outlets and pneumatic lines",
    machineTags: ["Branch pipe", "Spout", "Sight glass", "Pipe clamp"],
    parts: [
      "Manual branch pipe gates and Y-branch pipes",
      "Straight steel pipes and flow pipes — 105–250 mm",
      "Symmetric branch pipes — 60°, 80°, 90° angles",
      "Conical reducers and control pipes with observation glass",
      "Pipe segments, injectors, and steel pipe clamps",
      "Pneumatic line sight glasses — 51–120 mm",
      "Product observation glasses for purifiers and destoners",
      "SS pipe fittings for pneumatic and spout lines",
    ],
    images: [
      {
        src: "/spare-parts/catalog/spouting-branch-pipes.png",
        alt: "Polished stainless steel branch pipes and Y-junction spouting for milling plants",
        caption: "Branch pipes and spouting sections",
      },
      {
        src: "/spare-parts/catalog/spouting-sight-glasses.png",
        alt: "Pneumatic line sight glasses and control pipes with observation windows",
        caption: "Sight glasses and control pipes",
      },
    ],
  },
  {
    id: "aspiration",
    anchor: "aspiration-rubber",
    index: "11",
    eyebrow: "Aspiration & rubber parts",
    title: "Filter sleeves, rubber parts & gaskets",
    description:
      "Aspiration sleeves, filter bags, and rubber connectors seal pneumatic and dust-control lines — gaskets, diaphragms, and vibration chocks protect equipment and air quality",
    machineTags: ["Filter sleeve", "Jet filter", "Rubber sleeve", "Aspiration"],
    parts: [
      "Plansifter top and bottom sleeves — polyester",
      "Jet filter sleeves and filter cages",
      "Glass tube flowmeters",
      "Rubber sleeves and airlock sleeves — full diameter range",
      "Diaphragm rubbers — large and small",
      "Silo discharger and surrounding rubbers",
      "Rubber chocks, gaskets, and covers",
      "Hanging bearing bushings and spiral hose connectors",
      "Acrylic sight-glass rubber sleeves and rubber caps",
    ],
    images: [
      {
        src: "/spare-parts/catalog/aspiration-filter-sleeves.png",
        alt: "White polyester filter sleeves and filter cages for jet filter aspiration systems",
        caption: "Filter sleeves and filter cages",
      },
      {
        src: "/spare-parts/catalog/rubber-parts-gaskets.png",
        alt: "Industrial rubber sleeves, diaphragms, gaskets, and vibration chocks",
        caption: "Rubber sleeves, diaphragms, and gaskets",
      },
    ],
  },
  {
    id: "power-transmission",
    anchor: "power-transmission",
    index: "12",
    eyebrow: "Power transmission & automation",
    title: "Bearings, couplings, magnets, sensors & mill hardware",
    description:
      "Bearings, chains, and couplings keep drives running — industrial magnets protect product quality, and automation sensors, loadcells, and control components support modern mill lines",
    machineTags: ["Bearings", "Magnets", "Sensors", "Loadcell"],
    parts: [
      "Ball bearings, pillow blocks, and flange bearing housings",
      "Spherical roller bearings and hanging bearing bushings",
      "V-belt bushings, gears, sprockets, and chain couplings",
      "Jaw couplings and chain couplings",
      "Tubular, grate, bar, and cylinder magnets",
      "Rotors, chains, and polyamide gears",
      "Limit switches, proximity sensors, and sensor cables",
      "Loadcells, push buttons, and cable ducts",
      "Handles, locks, and general mill hardware",
    ],
    images: [
      {
        src: "/spare-parts/catalog/bearings-couplings.png",
        alt: "Industrial ball bearings, pillow block housings, and flexible shaft couplings",
        caption: "Bearings and couplings",
      },
      {
        src: "/spare-parts/catalog/magnets-sensors.png",
        alt: "Tubular industrial magnet, proximity sensors, and loadcell for milling plants",
        caption: "Magnets, sensors, and loadcells",
      },
    ],
  },
];
