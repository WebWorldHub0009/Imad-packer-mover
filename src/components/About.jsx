// src/components/AboutSection.jsx
import React from "react";
import { FiTruck, FiPackage, FiShield } from "react-icons/fi";
import aboutImg from "../assets/service/relocation.jpg"; 
import bg from "../assets/home/mobile.png";

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 px-6 md:px-12 py-20 font-[Poppins]">
      
      {/* ✅ SVG Background */}
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1440 800"
      >
        <path
          fill="url(#grad1)"
          d="M0,160L48,144C96,128,192,96,288,117.3C384,139,480,213,576,229.3C672,245,768,203,864,181.3C960,160,1056,160,1152,170.7C1248,181,1344,203,1392,213.3L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#20B2AA" />
            <stop offset="100%" stopColor="#C62828" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-[#000000] leading-snug">
            Moving Made Easy, <br /> With{" "}
            <span className="text-[#C62828]">Imad Packers & Movers</span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            At <span className="font-semibold text-[#20B2AA]">Imad Packers & Movers</span>, 
            we make your relocation smooth, secure, and stress-free. 
            With <span className="text-[#C62828] font-semibold">premium packing</span>, 
            safe transport, and reliable professionals, we handle every move with care— 
            whether it’s household shifting, office relocation, or vehicle transport across India.
          </p>

          {/* Promise Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 text-center">
            
            {/* Feature 1 */}
            <div className="flex flex-col items-center group">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#E6F9F8] text-[#20B2AA] mb-3 group-hover:scale-110 transition transform shadow-md">
                <FiShield className="text-2xl" />
              </div>
              <h3 className="text-base font-semibold text-[#000000]">Trusted & Secure</h3>
              <p className="text-sm text-gray-500 max-w-[220px] mx-auto">
                Safety-first approach with guaranteed protection.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center group">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#FFF1F1] text-[#C62828] mb-3 group-hover:scale-110 transition transform shadow-md">
                <FiPackage className="text-2xl" />
              </div>
              <h3 className="text-base font-semibold text-[#000000]">Premium Packing</h3>
              <p className="text-sm text-gray-500 max-w-[220px] mx-auto">
                High-quality material ensures damage-free delivery.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center group">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#E8F7FF] text-[#20B2AA] mb-3 group-hover:scale-110 transition transform shadow-md">
                <FiTruck className="text-2xl" />
              </div>
              <h3 className="text-base font-semibold text-[#000000]">On-Time Delivery</h3>
              <p className="text-sm text-gray-500 max-w-[220px] mx-auto">
                Fast & reliable transport across all locations.
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          {/* ✅ Mobile Image */}
          <img
            src={bg}
            alt="Imad Packers & Movers Mobile"
            className="rounded-xl shadow-2xl object-cover w-full h-[300px] md:hidden"
          />

          {/* ✅ Desktop Image */}
          <img
            src={aboutImg}
            alt="Imad Packers & Movers"
            className="hidden md:block rounded-xl shadow-2xl object-cover w-full h-[450px] md:h-[520px]"
          />

          {/* Floating Badge */}
          <div className="absolute -bottom-6 md:-bottom-8 left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-full px-6 md:px-10 py-3 border border-gray-200 flex items-center gap-3 text-sm md:text-base font-semibold">
            <FiShield className="text-[#20B2AA] text-lg" />
            <span className="text-gray-800 whitespace-nowrap">
              13+ Years of Trusted Service
            </span>
          </div>
        </div>
      </div>

      {/* Highlight Text Below */}
      <div className="relative text-center mt-16 max-w-4xl mx-auto">
        <p className="text-lg text-gray-700 leading-relaxed">
          <span className="text-[#20B2AA] font-semibold">Imad Packers & Movers</span> 
          is a name synonymous with <span className="text-[#C62828]">trust, efficiency,</span> 
          and premium relocation services. From careful packing to safe transportation, 
          we bring peace of mind to thousands of families and businesses nationwide.
        </p>
      </div>
    </section>
  );
}
