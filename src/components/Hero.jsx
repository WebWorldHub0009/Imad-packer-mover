// src/components/HeroSection.jsx
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiPackage, FiTruck, FiHome, FiBox } from "react-icons/fi";
import { FaPhoneAlt } from "react-icons/fa";
import baseImage from "../assets/home/car.jpg";

// Packer Mover related images
import localMove from "../assets/new/ss2.jpg";
import officeMove from "../assets/new/ss4.jpg";
import houseShift from "../assets/new/ss5.jpg";
import carTransport from "../assets/home/car.jpg";

const slides = [
  {
    id: 1,
    title: "Safe, Fast & Reliable",
    subtitle: "Trusted Packers & Movers for every shifting need",
    rightTitle: "For Shifting",
    rightSubtitle: "Quick & Hassle-Free",
    icon: <FiHome />,
    img: localMove || baseImage,
    phone: "+91 9773760041",
  },
  {
    id: 2,
    title: "Corporate & Office Moves",
    subtitle: "Seamless relocation for businesses & teams",
    rightTitle: "Office Relocation",
    rightSubtitle: "Professional Handling",
    icon: <FiPackage />,
    img: officeMove || baseImage,
    phone: "+91 9773760042",
  },
  {
    id: 3,
    title: "Stress-Free Home Shifting",
    subtitle: "Door-to-door premium household moving solutions",
    rightTitle: "Household Shifting",
    rightSubtitle: "All India Service",
    icon: <FiTruck />,
    img: houseShift || baseImage,
    phone: "+91 9540457075",
  },
  {
    id: 4,
    title: "Secure Car & Bike Transport",
    subtitle: "Safe, reliable, and on-time vehicle delivery",
    rightTitle: "Vehicle Transport",
    rightSubtitle: "Nationwide Service",
    icon: <FiBox />,
    img: carTransport || baseImage,
  },
];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const activeSlide = slides[activeIndex];
  const bgKey = useMemo(() => `bg-${activeIndex}`, [activeIndex]);

  const handleSlideClick = (i) => {
    setActiveIndex(i);
    setLoaded(false);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    if (!value) return setSuggestions([]);

    const filtered = slides.filter(
      (s) =>
        s.title.toLowerCase().includes(value) ||
        s.subtitle.toLowerCase().includes(value) ||
        s.rightTitle.toLowerCase().includes(value) ||
        s.rightSubtitle.toLowerCase().includes(value)
    );
    setSuggestions(filtered);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && suggestions.length > 0) {
      const firstMatchIndex = slides.findIndex(
        (s) => s.id === suggestions[0].id
      );
      if (firstMatchIndex >= 0) {
        setActiveIndex(firstMatchIndex);
        setSuggestions([]);
        setQuery("");
      }
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden font-[Poppins]">
      {/* Background with Blur Loader */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={bgKey}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${activeSlide.img || baseImage})`,
            }}
          >
            {!loaded && (
              <div className="absolute inset-0 bg-gray-900 animate-pulse" />
            )}
            <img
              src={activeSlide.img}
              alt={activeSlide.title}
              onLoad={() => setLoaded(true)}
              className="hidden"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/50 to-black/80" />
      </div>

      {/* LEFT SLIDE LIST (desktop only) */}
      <div className="absolute top-0 left-0 h-full w-1/3 bg-black/60 hidden lg:block">
        <div className="h-full w-full flex items-center pl-8 md:pl-16 pr-6 py-8">
          <ul className="space-y-6 w-full max-w-sm">
            {slides.map((slide, i) => {
              const isActive = i === activeIndex;
              return (
                <li
                  key={slide.id}
                  onClick={() => handleSlideClick(i)}
                  className="relative cursor-pointer"
                >
                  {isActive && (
                    <span className="absolute -left-6 top-0 bottom-0 w-1 rounded bg-[#C62828]" />
                  )}
                  <p
                    className={`text-sm mb-1 ${
                      isActive ? "text-[#20B2AA]" : "text-gray-400"
                    }`}
                  >
                    {slide.id.toString().padStart(2, "0")} .
                  </p>
                  <h3
                    className={`leading-tight ${
                      isActive
                        ? "text-2xl md:text-[28px] font-semibold text-white"
                        : "text-lg text-gray-300"
                    }`}
                  >
                    {slide.title}
                  </h3>
                  <p
                    className={`mt-0.5 text-sm ${
                      isActive ? "text-gray-200" : "text-gray-400/80"
                    }`}
                  >
                    {slide.subtitle}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="absolute inset-x-0 top-24 md:top-1/2 md:right-24 md:inset-x-auto md:-translate-y-1/2 text-white px-6 text-center lg:text-right">
        <h2 className="text-sm md:text-lg font-light mb-2 text-[#20B2AA] tracking-wide uppercase">
          {activeSlide.rightSubtitle}
        </h2>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg">
          {activeSlide.rightTitle}
        </h1>

        {/* Phone CTA */}
        {activeSlide.phone && (
          <a
            href={`tel:${activeSlide.phone.replace(/\s+/g, "")}`}
            className="group mt-6 inline-flex items-center gap-3 text-lg md:text-xl font-semibold text-white px-6 py-3 rounded-full bg-[#20B2AA]/90 hover:bg-[#20B2AA] shadow-xl transition relative overflow-hidden"
          >
            <span className="absolute left-3 w-10 h-10 rounded-full bg-[#20B2AA] opacity-30 animate-ping"></span>
            <span className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-[#C62828] group-hover:bg-[#a41e1e] transition">
              <FaPhoneAlt />
            </span>
            <span className="relative z-10">{activeSlide.phone}</span>
          </a>
        )}

        {/* Search Box */}
        <div className="relative mt-6 w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto lg:ml-auto">
          <div className="flex items-center border-b-2 border-[#20B2AA] pb-2">
            <FiSearch className="text-[#20B2AA] text-xl mr-3" />
            <input
              type="text"
              placeholder="Search services..."
              value={query}
              onChange={handleSearchChange}
              onKeyDown={handleKeyDown}
              className="bg-transparent w-full focus:outline-none placeholder-gray-200 text-base md:text-lg text-white"
            />
          </div>
          {suggestions.length > 0 && (
            <ul className="absolute top-full mt-2 left-0 w-full bg-black/80 backdrop-blur-md rounded-lg shadow-lg border border-[#20B2AA]/40 z-50 max-h-40 overflow-y-auto">
              {suggestions.map((s) => (
                <li
                  key={s.id}
                  className="px-4 py-2 text-sm text-white hover:bg-[#20B2AA]/30 cursor-pointer"
                  onClick={() => {
                    setActiveIndex(slides.findIndex((sl) => sl.id === s.id));
                    setSuggestions([]);
                    setQuery("");
                  }}
                >
                  {s.rightTitle} —{" "}
                  <span className="opacity-70">{s.subtitle}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* 📱 Mobile Center Premium Content */}
      <div className="absolute inset-x-0 top-72 sm:top-36 flex justify-center items-center text-center px-6 block lg:hidden">
        <motion.div
          key={activeSlide.id}
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -30, scale: 0.95 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="px-6 py-6 max-w-sm mx-auto bg-black/30 backdrop-blur-md rounded-2xl shadow-lg"
        >
          <div className="flex flex-col items-center space-y-3">
            <div className="text-[#20B2AA] text-4xl">{activeSlide.icon}</div>
            <p className="text-gray-100 opacity-90 text-xl leading-relaxed">
              {activeSlide.subtitle}
            </p>
          </div>
        </motion.div>
      </div>

      {/* 📱 Mobile Slide Buttons */}
      <div className="absolute bottom-6 left-0 w-full px-4 block lg:hidden">
        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
          {slides.map((slide, i) => (
            <button
              key={slide.id}
              onClick={() => handleSlideClick(i)}
              className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm transition shadow-md ${
                i === activeIndex
                  ? "bg-[#20B2AA] text-white font-semibold shadow-lg scale-105"
                  : "bg-white/20 text-white/80 hover:bg-white/30"
              }`}
            >
              <span className="text-base">{slide.icon}</span>
              {slide.rightTitle}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
