// src/components/ModernNavbar.jsx
import React, { useState, useRef, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaHome,
  FaTruckMoving,
  FaInfoCircle,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import logo2 from "../assets/ipm.png";

const navItems = [
  { name: "Home", path: "/", icon: <FaHome className="inline mr-1" /> },
  { name: "About Us", path: "/about", icon: <FaInfoCircle className="inline mr-1" /> },
  { name: "Services", path: "/services", icon: <FaTruckMoving className="inline mr-1" /> },
  { name: "Contact Us", path: "/contact", icon: <FaPhoneAlt className="inline mr-1" /> },
  { name: "Certificates", path: "/certificate", icon: <FaEnvelope className="inline mr-1" /> },
];

const socialLinks = {
  facebook: "https://www.facebook.com/",
  instagram: "https://www.instagram.com",
  whatsapp: "https://wa.me/918077534394",
};

const ModernNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const panelRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const navLinkClasses = (path) =>
    `cursor-pointer transition flex items-center gap-1 hover:text-[#C62828] ${
      pathname === path ? "text-[#20B2AA] font-semibold" : "text-[#000000]"
    }`;

  return (
    <>
      {/* ✅ Slim Top Header (Desktop Only) */}
      <div className="hidden md:block w-full bg-gradient-to-r from-[#20B2AA] via-[#1C8C85] to-[#20B2AA] text-white font-sans">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-2 px-4 text-xs md:text-sm gap-1">
          {/* Left: Email */}
          <a
            href="mailto:Imadpackersmovers@gmail.com"
            className="flex items-center gap-2 hover:underline"
          >
            ✉️ Imadpackersmovers@gmail.com
          </a>

          {/* Right: Numbers */}
          <div className="flex flex-wrap gap-3">
            <a href="" className="hover:underline">
              📧GST No. 09GYIPK2802J1Z7
            </a>
            <a href="" className="hover:underline">
             📃 UDYAM-UP-02-0024524
            </a>
            <a href="tel:+918077534394" className="hover:underline">
              📞 +91 80775 34394
            </a>
          </div>
        </div>
      </div>

      {/* ✅ Main Navbar */}
      <nav className="w-full px-4 md:px-12 py-2 bg-white shadow-md relative z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center relative">
          {/* Logo Left */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo2}
              alt="Imad Packers and Movers Logo"
              className="h-14 md:h-16 object-contain"
            />
          </Link>

          {/* Center Nav Items (Desktop) */}
          <ul className="hidden md:flex gap-6 text-sm font-medium uppercase">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className={navLinkClasses(item.path)}>
                  {item.icon}
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right: Social + Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Social Desktop */}
            <div className="hidden md:flex gap-3 text-[#000000]">
              {Object.entries(socialLinks).map(([k, url]) => (
                <a
                  key={k}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C62828]"
                >
                  {React.createElement(
                    {
                      facebook: FaFacebookF,
                      instagram: FaInstagram,
                      whatsapp: FaWhatsapp,
                    }[k],
                    { size: 16 }
                  )}
                </a>
              ))}
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden text-[#000000]">
              <FaBars onClick={toggleMenu} className="cursor-pointer text-xl" />
            </div>
          </div>
        </div>

        {/* ✅ Mobile Panel */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 flex">
            {/* Slide-out */}
            <div
              ref={panelRef}
              className="w-72 h-full bg-white shadow-xl px-6 py-4 flex flex-col"
            >
              {/* Mobile brand row */}
              <div className="flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2">
                  <img
                    src={logo2}
                    alt="Imad Packers and Movers Logo"
                    className="h-20 object-contain"
                  />
                </Link>
                <FaTimes
                  className="text-xl text-[#000000] cursor-pointer"
                  onClick={toggleMenu}
                />
              </div>

              <hr className="my-4" />

              {/* Mobile Nav Items */}
              <nav className="flex flex-col gap-3 text-sm">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-2 ${
                      pathname === item.path
                        ? "font-semibold text-[#20B2AA]"
                        : "text-[#000000]"
                    }`}
                    onClick={toggleMenu}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                ))}
              </nav>

              <hr className="my-4" />

              {/* ✅ Mobile Contact Info (Premium Style) */}
              <div className="bg-gradient-to-r from-[#20B2AA] to-[#1C8C85] p-4 rounded-xl shadow-md text-white text-sm font-semibold space-y-2">
                <a
                  href="mailto:Imadpackersmovers@gmail.com"
                  className="flex items-center gap-2 hover:text-[#FFD700] transition"
                >
                  <FaEnvelope className="text-lg" /> Imadpackersmovers@gmail.com
                </a>
                <a
                  href="tel:+918077534394"
                  className="flex items-center gap-2 hover:text-[#FFD700] transition"
                >
                  <FaPhoneAlt className="text-lg" /> +91 80775 34394
                </a>
                <a
                  href="tel:+919410009870"
                  className="flex items-center gap-2 hover:text-[#FFD700] transition"
                >
                  <FaPhoneAlt className="text-lg" /> +91 94100 09870
                </a>
              </div>

              {/* Quick WhatsApp */}
              <div className="mt-6">
                <a
                  href="https://wa.me/918077534394"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white text-sm font-semibold py-2 shadow hover:opacity-95 transition"
                >
                  <FaWhatsapp /> WhatsApp Us
                </a>
              </div>

              {/* Mobile Social */}
              <div className="mt-auto pt-4 border-t text-xs">
                <div className="flex gap-3 mt-3 text-lg text-[#000000]">
                  {Object.entries(socialLinks).map(([k, url]) => (
                    <a
                      key={k}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#C62828]"
                    >
                      {React.createElement(
                        {
                          facebook: FaFacebookF,
                          instagram: FaInstagram,
                          whatsapp: FaWhatsapp,
                        }[k]
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Overlay */}
            <div
              className="flex-1 bg-black/10 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />
          </div>
        )}
      </nav>
    </>
  );
};

export default ModernNavbar;
