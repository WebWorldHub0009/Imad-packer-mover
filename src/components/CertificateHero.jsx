// src/components/CertificateHero.jsx
import React from "react";
import bg from "../assets/new/ss3.jpg"; // Premium background for Imad Packers

const CertificateHero = () => {
  return (
    <section className="relative w-full min-h-[70vh] md:min-h-[75vh] font-[Poppins] overflow-hidden flex flex-col items-center justify-center text-center px-6">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0">
        <img
          src={bg}
          alt="Certified Movers"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20"></div>
      </div>

      {/* Center Content */}
      <div className="relative z-10 max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-extrabold uppercase tracking-[4px] text-[#C62828] drop-shadow-lg">
          Certified Excellence
        </h1>
        <p className="mt-6 text-base md:text-lg text-[#D9D9D9] leading-relaxed">
          <span className="font-semibold text-[#3CB371]">
            Imad Packers And Movers
          </span>{" "}
          is backed by industry-recognized{" "}
          <span className="text-[#C62828] font-medium">certifications</span> and{" "}
          <span className="text-[#C62828] font-medium">licenses</span> ensuring
          every move is safe, reliable, and compliant. Our dedication to{" "}
          <span className="italic text-[#3CB371]">quality, transparency, and trust</span>{" "}
          makes us a preferred choice nationwide.
        </p>

        {/* CTA Button */}
        <a
          href="mailto:Imadpackersmovers@gmail.com"
          className="mt-8 inline-block px-8 py-3 bg-[#3CB371] text-black font-semibold rounded-full shadow-lg hover:bg-[#2aa066] transition-all duration-300"
        >
          📧 Contact Us
        </a>
      </div>

      {/* Bottom Mini Menu (Certificate Highlights) */}
      <div className="absolute bottom-4 w-full px-4">
        <div className="flex flex-wrap md:flex-nowrap justify-center gap-4 md:gap-8 text-xs sm:text-sm md:text-base tracking-wide overflow-x-auto scrollbar-hide">
          {[
            "ISO 9001:2015 Certified",
            "Govt. Approved",
            "Trusted by Corporates",
          ].map((item, index) => (
            <a
              key={index}
              href="#"
              className="relative text-[#C62828] hover:text-[#3CB371] whitespace-nowrap transition duration-300 group"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FFD700] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificateHero;
