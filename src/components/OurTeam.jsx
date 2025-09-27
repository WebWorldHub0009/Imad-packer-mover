// src/components/OurTeam.jsx
import React from "react";
import { FaUserTie, FaLinkedin } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const teamMembers = [
  { name: "Azhar Khan", position: "Supervisor" },
  { name: "Azran Khan", position: "Supervisor" },
  { name: "Israr Khan", position: "Market Head" },
  { name: "Muzammil Khan", position: "Account" },
  { name: "Gushan Kumar", position: "Admin HR" },
  { name: "Farman Khan", position: "Operations" },
  { name: "Shashi Kumar", position: "Logistics" },
  { name: "Pintu Kumar", position: "Customer Relations" },
  { name: "Shivam Kumar", position: "Coordinator" },
  { name: "Muajmmil Khan", position: "Team Lead" },
  { name: "Ishrat Khan", position: "Supervisor" },
  { name: "Arkan Khan", position: "Manager" },
  { name: "Arzan Khan", position: "Operations" },
  { name: "Pappu Singh", position: "Logistics" },
];

export default function OurTeam() {
  return (
    <section className="relative py-16 px-6 font-[poppins] overflow-hidden ">
      {/* SVG Background */}
      <svg
        className="absolute inset-0 w-full h-full -z-10 opacity-10"
        viewBox="0 0 1200 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="200" cy="200" r="200" fill="#D32F2F" />
        <circle cx="1000" cy="200" r="200" fill="#008080" />
      </svg>

      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h4 className="text-red-700 font-semibold mb-2 text-sm uppercase tracking-wide">
          Strong Leadership
        </h4>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-black">
          Meet Our Team
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          The driving force behind{" "}
          <span className="text-red-700 font-semibold">Imad Packers & Movers</span> — experienced leaders who ensure trust, reliability, and excellence in every relocation.
        </p>
      </div>

      {/* Autoplay Team Slider */}
      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
         
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {teamMembers.map((member, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col items-center p-6 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105">
                <div className="w-28 h-28 rounded-full border-2 border-gray-200 flex items-center justify-center bg-gray-100 mb-4">
                  <FaUserTie className="text-4xl text-red-700" />
                </div>
                <h4 className="text-xl font-bold text-black mb-1">{member.name}</h4>
                <p className="text-gray-500">{member.position}</p>
                <div className="flex gap-3 mt-2 text-red-700 text-xl">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
