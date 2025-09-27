// src/data/servicesData.js
import relocation from "../assets/service/relocation.jpg";
import pack from "../assets/service/packing.jpg";
import move from "../assets/service/movea.jpg";
import car from "../assets/home/car.jpg";
import cargo from "../assets/service/cargoa.jpg";
import warehouse from "../assets/service/cmove.jpg"; // 🔄 Replacing commercial

const servicesData = [
  {
    id: 1,
    image: relocation,
    slug: "relocation-services",
    title: "Relocation Services",
    shortDescription:
      "Comprehensive domestic and international relocation solutions handled with expertise and care.",
    longDescription:
      "Our Relocation Services are designed for a completely stress-free move. From your initial planning to final delivery, every step is managed meticulously. Whether relocating locally, intercity, or internationally, we provide professional packing, secure loading, transportation, unloading, and careful unpacking. Personalized relocation managers guide you throughout, ensuring timelines are met, fragile items are protected, and all legal and logistical requirements are taken care of. With years of expertise, advanced tracking, and premium customer support, your move becomes seamless and reliable.",
    quickPoints: [
      "Door-to-door shifting solutions",
      "Expert packing and loading",
      "Local, domestic & international moves",
      "Real-time GPS tracking",
      "Secure and timely delivery",
      "Dedicated relocation manager",
    ],
    advantages: [
      "Full relocation assistance",
      "Professional and trained staff",
      "Advanced packing techniques",
      "Customizable service packages",
    ],
    disadvantages: [
      "Costs may be higher for long-distance moves",
      "Dependent on transport schedules",
      "Requires advance planning",
      "Limited last-minute flexibility",
    ],
    faq: [
      {
        q: "Do you provide international relocation?",
        a: "Yes, our services cover both domestic and international moves, including customs clearance support.",
      },
      {
        q: "How do you ensure fragile items are safe?",
        a: "We use multi-layer packing with bubble wrap, foam, and custom crates to protect delicate items.",
      },
      {
        q: "Can I track my shipment?",
        a: "Yes, every relocation includes real-time GPS tracking for transparency.",
      },
      {
        q: "Do you unpack at the destination?",
        a: "Yes, our team handles careful unpacking and arrangement at your new location.",
      },
    ],
  },
  {
    id: 2,
    image: pack,
    slug: "packing-services",
    title: "Packing Services",
    shortDescription:
      "Professional packing services using premium materials for maximum protection.",
    longDescription:
      "Our Packing Services ensure that your belongings are fully protected during relocation or storage. We use high-quality packing materials including bubble wrap, corrugated sheets, stretch films, and customized crates. Our team labels and organizes every item systematically for easy unpacking. From delicate glassware to heavy furniture, everything is packed with care to prevent damage. We also offer eco-friendly packaging options for sustainable moving. With our expert packing service, your items remain safe, organized, and ready for transport or storage.",
    quickPoints: [
      "High-quality packing materials",
      "Fragile item handling",
      "Custom wooden crates",
      "Waterproof & dustproof protection",
      "Systematic labeling",
      "Professional trained staff",
    ],
    advantages: [
      "Minimizes damage risk",
      "Time-efficient",
      "Professional assurance",
      "Organized unpacking",
    ],
    disadvantages: [
      "Premium packing may cost extra",
      "Takes longer for detailed packing",
      "Bulky packing may require more space",
      "Not ideal for last-minute moves",
    ],
    faq: [
      {
        q: "Do you provide packing materials?",
        a: "Yes, we provide all premium packing materials as part of the service.",
      },
      {
        q: "Can I request eco-friendly packing?",
        a: "Absolutely, we offer sustainable packing options on request.",
      },
      {
        q: "Do you pack office items too?",
        a: "Yes, our packing service covers residential and commercial items.",
      },
      {
        q: "Will you unpack at the destination?",
        a: "Yes, unpacking is included in our comprehensive packing service.",
      },
    ],
  },
  {
    id: 3,
    image: move,
    slug: "moving-services",
    title: "Moving Services",
    shortDescription:
      "Complete household and office moving handled with precision, safety, and care.",
    longDescription:
      "Our Moving Services provide safe and reliable transportation for households and offices. We tailor our moving solutions to your needs, whether it’s local shifting, intercity moves, or office relocation. Our fleet is equipped with GPS tracking and advanced safety systems, while trained movers handle loading, transportation, and unloading with utmost care. Every move is organized and efficient, minimizing risk and ensuring a smooth transition. Optional insurance ensures complete peace of mind for valuable goods. With personalized support and modern logistics, we guarantee an effortless moving experience.",
    quickPoints: [
      "Timely and safe transportation",
      "Local and intercity solutions",
      "GPS-enabled fleet",
      "Skilled movers",
      "Flexible moving packages",
      "Insurance coverage available",
    ],
    advantages: [
      "Complete moving support",
      "Customizable transport options",
      "Professional workforce",
      "On-time delivery commitment",
    ],
    disadvantages: [
      "Dependent on traffic and weather",
      "Possible extra charges for bulky items",
      "Advance scheduling required",
      "Limited flexibility for last-minute moves",
    ],
    faq: [
      {
        q: "Is insurance available?",
        a: "Yes, insurance is offered to protect goods during the move.",
      },
      {
        q: "Can I schedule same-day moving?",
        a: "Yes, local same-day moving is possible, depending on availability.",
      },
      {
        q: "How is heavy furniture handled?",
        a: "We use specialized equipment and trained manpower for heavy items.",
      },
      {
        q: "Do you handle office moves?",
        a: "Yes, we provide dedicated solutions for office and commercial relocation.",
      },
    ],
  },
  {
    id: 4,
    image: car,
    slug: "transport-services",
    title: "Transport Services",
    shortDescription:
      "Reliable transportation solutions for goods of all sizes across India.",
    longDescription:
      "Our Transport Services cater to personal and commercial transportation needs. With a large fleet of vehicles, including small vans, trucks, and container carriers, we transport goods safely and efficiently. All drivers are trained and verified, and shipments are monitored in real-time via GPS. Flexible pricing and documentation support make the process smooth and reliable. Whether transporting small parcels or large consignments, we guarantee timely delivery and secure handling.",
    quickPoints: [
      "Fleet for small & bulk shipments",
      "Experienced and verified drivers",
      "Real-time tracking & monitoring",
      "Flexible pricing options",
      "Insurance & documentation support",
      "Timely delivery assurance",
    ],
    advantages: [
      "Wide transport network",
      "Reliable & affordable",
      "Quick scheduling",
      "For personal & business use",
    ],
    disadvantages: [
      "Dependent on road conditions",
      "Fuel surcharges may apply",
      "Limited customization for small loads",
      "Vehicle availability may vary",
    ],
    faq: [
      {
        q: "Do you provide transport for small items?",
        a: "Yes, we have vehicle options for both small and large consignments.",
      },
      {
        q: "Is GPS tracking available?",
        a: "Yes, all our vehicles are GPS-enabled for live tracking.",
      },
      {
        q: "Do you handle commercial logistics?",
        a: "Yes, our transport solutions cover residential and commercial needs.",
      },
      {
        q: "Can I book transport on short notice?",
        a: "Yes, based on vehicle availability.",
      },
    ],
  },
  {
    id: 5,
    image: cargo,
    slug: "cargo-services",
    title: "Cargo Services",
    shortDescription:
      "Comprehensive cargo handling for domestic and international shipments.",
    longDescription:
      "Our Cargo Services ensure safe, secure, and timely delivery of shipments. We handle everything from small parcels to bulk consignments, including packaging, documentation, warehousing, and transportation. Air, sea, and road freight options are available to meet your needs. Advanced tracking systems and customs support ensure complete transparency and reliability. Our trained staff manage fragile and high-value cargo with utmost care, ensuring every shipment reaches its destination in perfect condition.",
    quickPoints: [
      "Domestic & international cargo",
      "Air, sea, and road freight",
      "Secure packaging & labeling",
      "Warehousing & storage options",
      "Customs clearance & documentation",
      "On-time delivery",
    ],
    advantages: [
      "Multiple freight options",
      "Global logistics network",
      "Full cargo tracking",
      "Professional documentation support",
    ],
    disadvantages: [
      "Customs may cause delays",
      "Weather can impact transit",
      "Higher cost for urgent shipments",
      "Size restrictions for certain cargo",
    ],
    faq: [
      {
        q: "Do you provide air cargo?",
        a: "Yes, both domestic and international air cargo services are available.",
      },
      {
        q: "Is customs clearance included?",
        a: "Yes, all documentation and clearance is handled by our team.",
      },
      {
        q: "Can I store cargo before shipment?",
        a: "Yes, secure warehousing is available.",
      },
      {
        q: "Do you handle fragile cargo?",
        a: "Yes, fragile cargo is handled with special care and packaging.",
      },
    ],
  },
  {
    id: 6,
    image: warehouse,
    slug: "warehouse-services",
    title: "Warehouse Services",
    shortDescription:
      "Safe, organized, and scalable warehouse solutions for businesses and individuals.",
    longDescription:
      "Our Warehouse Services provide secure storage for personal belongings, office equipment, and commercial inventory. Facilities are monitored 24/7 with CCTV, fire safety systems, and trained staff. We offer flexible storage durations, climate-controlled areas for sensitive items, and systematic organization for easy retrieval. Additionally, inventory management and real-time updates help clients track stored goods efficiently. From short-term storage during relocation to long-term inventory management, our warehouse solutions are tailored for convenience, security, and peace of mind.",
    quickPoints: [
      "Secure storage with 24/7 monitoring",
      "Climate-controlled areas",
      "Inventory management & tracking",
      "Short-term & long-term solutions",
      "Flexible storage plans",
      "Trained & professional staff",
    ],
    advantages: [
      "Safe & organized storage",
      "Scalable space for business & personal needs",
      "Advanced monitoring systems",
      "Efficient retrieval & management",
    ],
    disadvantages: [
      "Requires advance booking",
      "Limited space during peak periods",
      "Additional charges for special handling",
      "Access may be limited during non-working hours",
    ],
    faq: [
      {
        q: "Can I store items short-term?",
        a: "Yes, flexible short-term storage options are available.",
      },
      {
        q: "Are the warehouses secure?",
        a: "Absolutely, monitored 24/7 with CCTV and professional staff.",
      },
      {
        q: "Can I track my stored inventory?",
        a: "Yes, real-time tracking and inventory management are provided.",
      },
      {
        q: "Do you provide climate-controlled storage?",
        a: "Yes, for sensitive items like electronics or documents.",
      },
    ],
  },
];

export default servicesData;
