import React from "react";
import { motion } from "framer-motion";
import { FaTruckMoving } from "react-icons/fa";
import bgImage from "../assets/new/ss7.jpg";
import { Link } from "react-router-dom";

const AboutHero = () => {
  return (
    <section
      className="relative py-14 px-6 md:px-16 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Gradient + Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-[#003366]/80 -z-20"></div>

      {/* Floating Decorative Shape */}
      <motion.div
        className="absolute top-20 left-10 w-40 h-40 rounded-full bg-red-800/20 blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />
    

      {/* Content Card */}
      <div className="relative max-w-5xl mx-auto text-center ">
        {/* Tagline */}
        <p className="text-sm font-bold tracking-widest text-teal-400 uppercase mb-4">
          Who We Are
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          <span className="text-white drop-shadow-md">Trusted </span>
          <span className="text-teal-400">Packers & Movers</span>
          <br />
          <span className="text-red-600">for Every Relocation</span>
        </h1>

        {/* Description */}
        <p className="mt-4 text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
          At{" "}
          <span className="font-semibold text-white">
            Imad Packers & Movers
          </span>
          , we specialize in{" "}
          <span className="text-red-500 font-semibold">safe, reliable,</span>{" "}
          and{" "}
          <span className="text-teal-400 font-semibold">hassle-free</span>{" "}
          relocation services. With years of expertise and a trusted team,{" "}
          <span className="underline decoration-red-500">
            we move your world with care & professionalism.
          </span>
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          <Link
            to="/services"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-teal-500 to-teal-700 text-white font-bold shadow-lg hover:shadow-teal-500/40 hover:scale-105 transition"
          >
            Explore Services
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-red-600 to-red-800 text-white font-bold shadow-lg hover:shadow-red-500/40 hover:scale-105 transition"
          >
            Get a Quote
          </Link>
        </div>
      </div>

      {/* Animated Truck Icon */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-teal-400/40"
        animate={{ y: [0, -12, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        <FaTruckMoving size={90} />
      </motion.div>
    </section>
  );
};

export default AboutHero;
