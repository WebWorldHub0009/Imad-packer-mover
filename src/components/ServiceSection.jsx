import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";

// ✅ Example service images (replace with real ones)
import relocation from "../assets/service/relocation.jpg";
import pack from "../assets/service/packing.jpg";
import move from "../assets/home/mooov.jpeg";
import car from "../assets/home/caar.jpeg";
import cargo from "../assets/home/cargoo.jpeg";
import commercial from "../assets/service/cmove.jpg";

const services = [
  { title: "Relocation Services", slug: "relocation-services", image: relocation },
  { title: "Packing Services", slug: "packing-services", image: pack },
  { title: "Moving Services", slug: "moving-services", image: move },
  { title: "Transport Services", slug: "transport-services", image: car },
  { title: "Cargo Services", slug: "cargo-services", image: cargo },
  { title: "Warehouse", slug: "warehouse-services", image: commercial },
];

export default function ServicesSection() {
  return (
    <section className="relative font-[Poppins] py-8 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Section Heading */}
      <div className="relative mx-auto px-6 text-center mb-16">
        <h2 className="font-bold text-5xl md:text-6xl text-gray-900 tracking-wide drop-shadow-lg">
          Our Premium <span className="text-[#C62828]">Services</span>
        </h2>
        <p className="mt-6 text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed">
          At <span className="text-[#20B2AA] font-semibold">Imad Packers & Movers</span>,  
          we provide <span className="text-[#C62828] font-semibold">safe, reliable, and professional</span> moving solutions across India.  
          From <span className="font-semibold">packing to relocation</span>, we handle everything with care and precision.
        </p>
      </div>

      {/* Swiper Slider */}
      <div className="relative max-w-7xl mx-auto px-6">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <Link to={`/services/${service.slug}`}>
                <div className="relative rounded-2xl overflow-hidden group shadow-xl bg-black/30">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent group-hover:via-black/80 transition-all duration-500"></div>

                  {/* Floating Number */}
                  <div className="absolute top-6 left-6 font-bold text-white text-7xl opacity-20 tracking-tight">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Service Content */}
                  <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-300 mt-2 leading-snug">
                      Premium & professional {service.title.toLowerCase()} you can rely on.
                    </p>
                    <button className="mt-5 px-6 py-2 bg-gradient-to-r from-[#20B2AA] to-[#C62828] text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition">
                      Explore More
                    </button>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Decorative glowing circles */}
      <style>
        {`
          @keyframes floatGlow {
            0%, 100% { transform: translateY(0) scale(1); opacity: 0.5; }
            50% { transform: translateY(-14px) scale(1.1); opacity: 1; }
          }
          .animate-glow {
            animation: floatGlow 6s infinite ease-in-out;
          }
        `}
      </style>

      <div className="absolute top-10 left-10 w-44 h-44 bg-[#20B2AA]/20 rounded-full blur-3xl animate-glow"></div>
      <div className="absolute bottom-10 right-10 w-52 h-52 bg-[#C62828]/20 rounded-full blur-3xl animate-glow"></div>
    </section>
  );
}
