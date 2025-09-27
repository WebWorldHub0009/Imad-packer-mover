// src/components/MainAbout.jsx
import React from "react";
import aboutImg from "../assets/new/ss1.jpg";
import {
  FaTruckMoving,
  FaUsers,
  FaHistory,
  FaShieldAlt,
} from "react-icons/fa";

const stats = [
  { icon: <FaTruckMoving />, title: "5000+ Moves", desc: "Nationwide Success" },
  { icon: <FaUsers />, title: "13+ Years", desc: "Trusted by Clients" },
  { icon: <FaHistory />, title: "24/7 Support", desc: "Always Available" },
  { icon: <FaShieldAlt />, title: "100% Safe", desc: "Hassle-Free Service" },
];

export default function MainAbout() {
  return (
    <section className="relative bg-gray-50 py-10 overflow-hidden font-poppins">
      {/* Diagonal Background Shape */}
      <div className="absolute -top-20 left-0 w-full h-96 bg-red-700/10 -skew-y-12 rounded-b-3xl -z-10"></div>
      <div className="absolute -bottom-20 right-0 w-full h-96 bg-teal-700/10 skew-y-12 rounded-t-3xl -z-10"></div>

      <div className="container mx-auto px-6 lg:px-20">
        {/* New Hero Card */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-8">
          {/* Image */}
          <div className="md:w-1/2 relative rounded-3xl overflow-hidden shadow-2xl">
            <img src={aboutImg} alt="Imad Packers & Movers" className="w-full h-auto object-cover" />
            <div className="absolute bottom-4 left-4 bg-gradient-to-r from-red-700 to-teal-500 text-white px-6 py-3 rounded-xl font-bold shadow-lg">
              13+ Years of Excellence
            </div>
          </div>

          {/* Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-5xl font-extrabold text-red-700 mb-4">Imad Packers & Movers</h2>
            <h3 className="text-3xl font-semibold text-black mb-6">Reliable & Hassle-Free Relocation</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              We specialize in <span className="font-bold text-red-700">safe, seamless, and stress-free</span> relocation services. From household moves to office shifting and vehicle transport, we handle every detail with precision.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Over a decade of trusted experience ensures your belongings reach their destination securely. We move more than just boxes—we deliver peace of mind.
            </p>
          </div>
        </div>

        {/* Stats Ribbon */}
        <div className="relative flex flex-wrap justify-center md:justify-between gap-6 md:gap-0">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center md:w-1/4 bg-white rounded-3xl shadow-xl p-8 hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            >
              <div className="text-4xl text-red-700 mb-3">{item.icon}</div>
              <h4 className="text-xl font-bold text-black mb-1">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.desc}</p>
              {/* Decorative line for desktop */}
              {idx < stats.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 w-full h-1 bg-gradient-to-r from-red-700 to-teal-500 -z-10"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
