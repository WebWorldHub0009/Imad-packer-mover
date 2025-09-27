// src/components/TestimonialSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const testimonials = [
  { name: "Rohit Malhotra", title: "Software Engineer, Noida", text: "Imad Packers And Movers handled my home shifting smoothly. Professional, on time, and stress-free service!" },
  { name: "Simran Kaur", title: "Entrepreneur, Chandigarh", text: "They moved my office setup flawlessly. Every item was packed with care and delivered without a scratch." },
  { name: "Aditya Sharma", title: "Doctor, Gurgaon", text: "I had to relocate urgently, and they made it hassle-free. The team is polite, skilled, and reliable." },
  { name: "Neha Gupta", title: "Marketing Manager, Delhi", text: "Highly impressed with their punctuality and service quality. My family’s relocation was completely stress-free." },
  { name: "Karan Mehta", title: "Hotel Owner, Jaipur", text: "Their packing quality is excellent. From fragile items to heavy furniture, everything was moved with care." },
  { name: "Pooja Nair", title: "Teacher, Lucknow", text: "We shifted our house with them, and it was a wonderful experience. Affordable, professional, and secure." },
];

export default function TestimonialSlider() {
  return (
    <section className="relative w-full py-10 px-4 md:px-10 font-[poppins] overflow-hidden bg-gradient-to-b from-white via-[#F9FAFB] to-[#F3F4F6]">
      
      {/* Floating background SVG effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-red-700/10 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-[#003366]/10 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-[#FFC107]/10 blur-2xl rounded-full animate-pulse"></div>
      </div>

      {/* Heading */}
      <div className="relative max-w-7xl mx-auto text-center mb-14 z-10">
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#003366] drop-shadow-sm">
          What Our Clients <span className="text-red-700">Say About Us</span>
        </h2>
        <p className="italic text-[#4A4A4A] mt-3 text-sm md:text-lg max-w-2xl mx-auto">
          “Trusted by families, businesses, and professionals across India for safe and premium relocation services.”
        </p>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        spaceBetween={30}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-7xl mx-auto relative z-10"
      >
        {testimonials.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex flex-col justify-between p-8 h-full bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl border border-gradient-to-r from-red-700 to-[#003366] hover:shadow-2xl transition-transform duration-500 hover:-translate-y-3">
              
              <FaQuoteLeft className="text-4xl mb-4 text-red-700" />

              <p className="mb-6 italic text-gray-800 leading-relaxed text-base md:text-lg">
                "{item.text}"
              </p>

              <div className="mt-auto">
                <p className="font-bold text-lg text-[#003366]">{item.name}</p>
                <p className="text-sm text-gray-500">{item.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Optional truck animation */}
      <div className="absolute bottom-0 left-0 w-full h-20 overflow-hidden -z-10">
        <div className="animate-truck inline-block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="140"
            height="70"
            viewBox="0 0 640 512"
            className="text-[#003366] fill-[#003366] drop-shadow-lg"
          >
            <path d="M624 352h-16V275.9c0-16.9-6.7-33.1-18.7-45.2l-83.9-83.9C493.3 134.7 477.1 128 460.1 128H416V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h17.7c13.2 37.1 48.4 64 90.3 64s77.2-26.9 90.3-64h142.6c13.2 37.1 48.4 64 90.3 64s77.2-26.9 90.3-64H624c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM464 176l80 80v16H416v-96h48zM156 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"/>
          </svg>
        </div>
      </div>

      {/* Truck Animation CSS */}
      <style>
        {`
          @keyframes truckAnimation {
            0% { transform: translateX(-180px); }
            40% { transform: translateX(45vw); }
            60% { transform: translateX(45vw); }
            100% { transform: translateX(110vw); }
          }
          .animate-truck {
            animation: truckAnimation 15s linear infinite;
          }
        `}
      </style>
    </section>
  );
}
