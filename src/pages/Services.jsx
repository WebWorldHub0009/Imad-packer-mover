// src/pages/Services.jsx
import React from "react";
import ServicesHero from "../components/ServiceHero";
import ServicesSection from "../components/ServiceSection";


const Services = () => {
  return (
    <>
      <ServicesHero />
      <ServicesSection />

      {/* Shortened Premium Features Section */}
      <section className="relative w-full py-10 bg-[#F9F9F9] text-black font-[Poppins] text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-6">
            Why  Imad Packers & Movers?
          </h2>
          <p className="text-gray-800 text-lg mb-12">
            Moving is more than transport — it's about{" "}
            <span className="text-red-800 font-semibold">trust, care & reliability</span>.  
            We combine experience, technology & premium service for a smooth, stress-free move.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {[
              { title: "🛡️ Safety First", desc: "Secure packing & loading at every step." },
              { title: "🚚 Door-to-Door", desc: "Pickup & delivery straight to your new location." },
              { title: "🌍 Nationwide", desc: "Seamless relocation anywhere across India." },
             
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-white/5 border border-[#3CB371]/20 rounded-2xl p-6 shadow hover:scale-105 hover:border-[#3CB371] transition"
              >
                <h3 className="text-xl font-semibold text-red-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-800">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-12">
            <a
              href="tel:+918077534394"
              className="px-12 py-4 rounded-full bg-black text-white font-bold shadow-xl hover:scale-105 transition-transform"
            >
              📞 Get Free Moving Consultation
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
