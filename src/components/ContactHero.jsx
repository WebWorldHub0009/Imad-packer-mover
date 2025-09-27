// src/components/Hero.jsx
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import bg from "../assets/new/ss6.jpg"; // Replace with Imad Packers premium hero bg

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] font-[Poppins] overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0">
        <img
          src={bg}
          alt="Relocation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-4xl text-white">
          Experience{" "}
          <span className="text-[#C62828]">Premium Relocation</span>{" "}
          Services with Imad Packers And Movers
        </h1>

        <p className="mt-6 text-lg md:text-xl text-[#D9D9D9] max-w-2xl">
          Safe, reliable, and affordable moving solutions across India. We
          ensure your home, office, and valuables are relocated with the utmost
          care and professionalism.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex gap-4 flex-wrap">
          {/* Email Now Button */}
          <a
            href="mailto:Imadpackersmovers@gmail.com"
            className="px-8 py-3 cursor-pointer rounded-xl bg-[#3CB371] text-black font-semibold shadow-lg hover:bg-[#2aa066] transition-all"
          >
            Email Now
          </a>

          {/* Call Now Button */}
          <a
            href="tel:+918077534394"
            className="px-8 py-3 cursor-pointer rounded-xl border-2 border-[#C62828] font-semibold flex items-center gap-2 text-white hover:bg-[#C62828] hover:text-black transition-all shadow-lg"
          >
            <FaPhoneAlt /> Call Now
          </a>
        </div>
      </div>

      {/* Optional Floating Gradient Blobs for Premium Look */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#3CB371]/20 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-96 h-96 bg-[#C62828]/20 blur-3xl rounded-full animate-pulse"></div>
      </div>
    </section>
  );
}
