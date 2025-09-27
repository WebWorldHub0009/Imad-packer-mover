// src/components/ServicesHero.jsx
import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import bg from "../assets/new/ss5.jpg";

const ServicesHero = () => {
  return (
    <section className="relative w-full min-h-[80vh] font-[Poppins] overflow-hidden flex flex-col items-center justify-center text-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={bg}
          alt="Premium Relocation Services"
          className="w-full h-full object-cover scale-105 animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 px-6 max-w-5xl">
        <h1 className="text-3xl md:text-5xl font-bold tracking-[4px] md:tracking-[6px] uppercase text-[#3CB371] drop-shadow-md">
          Move With Care. Move With Confidence.
        </h1>

        <p className="mt-6 text-base md:text-xl text-gray-200 leading-relaxed">
          With{" "}
          <span className="text-red-800 font-semibold">
            Imad Packers And Movers
          </span>
          , every relocation becomes a{" "}
          <span className="text-red-800 font-semibold">premium experience</span>. From{" "}
          <span className="italic">household moves</span> to{" "}
          <span className="italic">corporate shifting</span> and{" "}
          <span className="italic">vehicle transport</span>, we combine safety, trust, and precision to deliver a smooth journey.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="tel:+918077534394"
            className="flex items-center gap-2 px-8 py-3 bg-[#1C1C1C] text-white rounded-xl font-semibold hover:bg-[#C62828] transition"
          >
            <FaPhoneAlt /> Call Now
          </a>
          <a
            href="mailto:Imadpackersmovers@gmail.com"
            className="flex items-center gap-2 px-8 py-3 bg-[#3CB371] text-white rounded-xl font-semibold hover:bg-[#1C7A5C] transition"
          >
            <FaEnvelope /> Email Now
          </a>
        </div>
      </div>

      {/* Bottom Mini Menu */}
      <div className="absolute bottom-4 w-full px-4">
        <div className="flex flex-wrap md:flex-nowrap justify-center gap-4 md:gap-8 text-xs sm:text-sm md:text-base tracking-wide overflow-x-auto scrollbar-hide">
          {[
            "Household Shifting",
            "Office Relocation",
            "Vehicle Transport",
            "Packing & Unpacking",
            "Storage Solutions",
            "Insurance Support",
          ].map((item, index) => (
            <a
              key={index}
              href="#"
              className="relative text-[#010952] hover:text-red-800 whitespace-nowrap transition duration-300 group"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#FFD700] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
