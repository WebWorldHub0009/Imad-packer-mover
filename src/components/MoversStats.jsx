// src/components/MoversStats.jsx
import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import {
  FaTruck,
  FaUsers,
  FaBuilding,
  FaBoxOpen,
  FaMapMarkedAlt,
  FaSmile,
  FaShieldAlt,
  FaClock,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import bgImage from "../assets/home/ksbg.jpg"; // ✅ Add your background image

// Animated Counter
function Counter({ from = 0, to, inView }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => {
    if (to >= 1000000) return `${(latest / 1000000).toFixed(1)}M+`;
    if (to >= 1000) return `${Math.floor(latest / 1000)}K+`;
    return Math.floor(latest);
  });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: 2.5, ease: "easeOut" });
      return controls.stop;
    }
  }, [to, inView]);

  return <motion.span>{rounded}</motion.span>;
}

// Stats Data
const stats = [
  { label: "Deliveries Completed", value: 250000, icon: <FaTruck className="text-[#3CB371] text-3xl" /> },
  { label: "Happy Customers", value: 120000, icon: <FaSmile className="text-[#C62828] text-3xl" /> },
  { label: "Cities Covered", value: 100, icon: <FaMapMarkedAlt className="text-[#3CB371] text-3xl" /> },
  { label: "Corporate Clients", value: 8000, icon: <FaBuilding className="text-[#C62828] text-3xl" /> },
  { label: "Years of Trust", value: 25, icon: <FaShieldAlt className="text-[#3CB371] text-3xl" /> },
  { label: "Parcels Packed", value: 750000, icon: <FaBoxOpen className="text-[#C62828] text-3xl" /> },
  { label: "On-Time Delivery", value: 98, icon: <FaClock className="text-[#3CB371] text-3xl" /> },
  { label: "Team Members", value: 5000, icon: <FaUsers className="text-[#C62828] text-3xl" /> },
];

export default function MoversStats() {
  return (
    <section className="relative font-[Poppins] py-10 px-6 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80 z-0"></div>

      

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-16 max-w-3xl mx-auto text-white relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Trusted by Thousands, <span className="text-[#3CB371]">Moving India Forward</span>
        </h2>
        <p className="text-[#D9D9D9] text-lg">
          Imad Packers And Movers delivers safety, speed, and reliability with every move. Household or corporate, we ensure your relocation is seamless and stress-free.
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto relative z-10">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center p-6 transition-all duration-500"
          >
            <div className="mb-3">{stat.icon}</div>
            <h3 className="text-3xl font-bold text-[#3CB371]">
              <Counter to={stat.value} inView={true} />
            </h3>
            <p className="text-white font-medium mt-2">{stat.label}</p>
            <span className="text-[#C62828] text-sm mt-1">{stat.change}</span>
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-8 text-center relative z-10"
      >
        <Link to="/contact">
          <button className="px-10 py-4 font-semibold bg-gradient-to-r from-[#3CB371] via-[#C62828] to-[#3CB371] text-black rounded-full shadow-xl hover:scale-105 transition-all duration-500">
            Get a Free Quote
          </button>
        </Link>
      </motion.div>
    </section>
  );
}
