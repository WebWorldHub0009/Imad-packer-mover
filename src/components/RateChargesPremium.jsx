import React from "react";
import { motion } from "framer-motion";
import { BadgeIndianRupee, Truck, Info, Phone } from "lucide-react";

// Brand palette for Imad Packers & Movers
const COLORS = {
  seaGreen: "#20B2AA", // Light Sea Green (Trust + Freshness)
  red: "#C62828", // Textured Red (Urgency + Boldness)
  black: "#1C1C1C", // Charcoal Black
  gray: "#D9D9D9", // Neutral Gray
  white: "#FFFFFF", // White
};

const headers = [
  { key: "type", label: "Shifting Type" },
  { key: "50", label: "Up to 50 KM" },
  { key: "500", label: "Up to 500 KM" },
  { key: "1000", label: "Up to 1000 KM" },
  { key: "1500", label: "Up to 1500 KM" },
  { key: "2500", label: "Within 2500 KM" },
];

// ✅ Cheaper & attractive price list
const rows = [
  {
    type: "1 BHK Home",
    "50": "₹5,000 – 8,000",
    "500": "₹9,000 – 12,000",
    "1000": "₹14,000 – 18,000",
    "1500": "₹18,000 – 24,000",
    "2500": "₹25,000 – 30,000",
  },
  {
    type: "2 BHK Home",
    "50": "₹7,000 – 11,000",
    "500": "₹12,000 – 16,000",
    "1000": "₹18,000 – 24,000",
    "1500": "₹25,000 – 32,000",
    "2500": "₹30,000 – 38,000",
  },
  {
    type: "3 BHK Home ⭐ Best Value",
    "50": "₹10,000 – 14,000",
    "500": "₹18,000 – 24,000",
    "1000": "₹28,000 – 35,000",
    "1500": "₹35,000 – 42,000",
    "2500": "₹40,000 – 55,000",
  },
  {
    type: "4 BHK / Villa",
    "50": "₹15,000 – 20,000",
    "500": "₹25,000 – 32,000",
    "1000": "₹38,000 – 48,000",
    "1500": "₹45,000 – 55,000",
    "2500": "₹55,000 – 70,000",
  },
  {
    type: "Car Transportation",
    "50": "₹6,500 – 8,500",
    "500": "₹9,500 – 12,500",
    "1000": "₹14,000 – 17,000",
    "1500": "₹18,000 – 22,000",
    "2500": "–",
  },
  {
    type: "Bike Transportation",
    "50": "₹2,000 – 4,500",
    "500": "₹5,000 – 7,500",
    "1000": "₹7,500 – 10,000",
    "1500": "₹10,000 – 12,500",
    "2500": "–",
  },
];

export default function RatesChargesPremium() {
  return (
    <section className="relative w-full overflow-hidden" style={{ background: COLORS.white }}>
      {/* Background glowing accents */}
      <div
        className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full blur-[120px] opacity-20"
        style={{ background: COLORS.seaGreen }}
      />
      <div
        className="pointer-events-none absolute -bottom-24 -right-24 h-[400px] w-[400px] rounded-full blur-[120px] opacity-25"
        style={{ background: COLORS.red }}
      />

      <div className="mx-auto max-w-7xl px-4 py-12 md:py-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <h2 className="text-3xl font-extrabold sm:text-4xl md:text-5xl text-gray-900">
            <span className="mr-2">Affordable Rates & Charges –</span>
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: `linear-gradient(90deg, ${COLORS.seaGreen}, ${COLORS.red})` }}
            >
              Imad Packers & Movers
            </span>
          </h2>
          <p className="mt-3 text-base md:text-lg font-medium text-gray-700">
            Premium relocation at the most{" "}
            <span className="text-red-700 font-semibold">competitive prices</span>.
          </p>
        </motion.div>

        {/* Table */}
        <div
          className="relative overflow-x-auto rounded-2xl shadow-2xl"
          style={{ background: COLORS.white }}
        >
          {/* Gradient top bar */}
          <div className="h-1.5 w-full" style={{ background: `linear-gradient(90deg, ${COLORS.seaGreen}, ${COLORS.red})` }} />

          <table className="min-w-[900px] w-full">
            <thead>
              <tr>
                {headers.map((h, idx) => (
                  <th
                    key={h.key}
                    className="px-5 py-4 text-left text-sm md:text-base font-semibold uppercase tracking-wide text-white"
                    style={{
                      background: idx === 0
                        ? `linear-gradient(90deg, ${COLORS.black}, ${COLORS.seaGreen})`
                        : COLORS.seaGreen,
                    }}
                  >
                    {h.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rIdx) => (
                <tr
                  key={row.type}
                  className={`transition-all hover:bg-gray-50 ${rIdx % 2 === 0 ? "bg-gray-50/30" : ""}`}
                >
                  {headers.map((h, cIdx) => {
                    const value = row[h.key] ?? "–";
                    return (
                      <td
                        key={h.key}
                        className={`px-5 py-4 text-sm md:text-base ${cIdx === 0 ? "font-semibold" : ""}`}
                        style={{
                          borderTop: `1px solid ${COLORS.gray}`,
                          color: COLORS.black,
                        }}
                      >
                        {cIdx === 0 ? (
                          <div className="flex items-center gap-2">
                            <span
                              className="inline-block h-2.5 w-2.5 rounded-full"
                              style={{ background: rIdx % 2 === 0 ? COLORS.seaGreen : COLORS.red }}
                            />
                            <span>{value}</span>
                          </div>
                        ) : (
                          <span className="whitespace-nowrap">{value}</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Note */}
        <div className="mt-6 flex items-center gap-3 text-sm max-w-3xl mx-auto text-center justify-center">
          <Info className="h-4 w-4" color={COLORS.seaGreen} />
          <p className="text-gray-700">
            <span className="font-semibold">Note:</span> Prices are approximate and may vary depending on distance, goods volume,
            packing quality, and additional services.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="/contact"
            className="rounded-full px-6 py-3 font-semibold shadow-xl transition-transform hover:scale-105"
            style={{ background: `linear-gradient(90deg, ${COLORS.seaGreen}, ${COLORS.red})`, color: COLORS.white }}
          >
            Get Free Quote
          </a>
          <a
            href="tel:+918077534394"
            className="flex items-center gap-2 rounded-full px-6 py-3 font-semibold shadow-md hover:scale-105 transition"
            style={{ background: COLORS.black, color: COLORS.white }}
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
