import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaHome,
  FaInfoCircle,
  FaTruckMoving,
  FaCertificate,
  FaContao,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import VisitorCounter from "./VisitorCounter";
import Translator from "./Translator";

import footerBg from "../assets/avbg.jpg"; 
import logo from "../assets/ipm.png";    

const services = [
  { title: "Relocation Services", slug: "relocation-services" },
  { title: "Packing Services", slug: "packing-services" },
  { title: "Moving Services", slug: "moving-services" },
  { title: "Transport Services", slug: "transport-services" },
  { title: "Cargo Services", slug: "cargo-services" },
  { title: "Commercial Moving", slug: "commercial-moving" },
];

export default function Footer() {
  return (
    <footer className="relative pt-10 pb-16 px-6 md:px-16 font-[poppins] text-[#1C1C1C] overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center  z-0"
        style={{ backgroundImage: `url(${footerBg})` }}
      />

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-sm">

        {/* About Section */}
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col items-start gap-3">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Imad Packers And Movers Logo"
                className="w-50 md:w-50"
              />
            </div>
            <p className="text-2xl md:text-4xl font-bold text-[#C62828] tracking-wide">
              Imad Packers & Movers
            </p>
          </div>

          <p className="leading-relaxed text-[#1C1C1C] text-md mt-2">
            Your trusted partner for safe, professional, and timely relocation, packing, and cargo services across Uttar Pradesh and India.
          </p>

          {/* Social Icons */}
          <div className="mt-4 flex space-x-4">
            {[
              ["https://www.instagram.com", FaInstagram],
              ["https://www.facebook.com", FaFacebookF],
              [
                "https://api.whatsapp.com/send/?phone=918077534394&text=Hello%20Imad%20Packers%20and%20Movers&type=phone_number&app_absent=0",
                FaWhatsapp,
              ],
            ].map(([url, Icon], i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3CB371] hover:text-[#C62828] transition duration-300"
              >
                <Icon size={22} />
              </a>
            ))}
          </div>

          <div className="mt-4">
            <a
              href="mailto:Imadpackersmovers@gmail.com"
              className="inline-flex items-center gap-2 bg-[#1C1C1C] text-[#FFFFFF] px-4 py-2 rounded-lg font-semibold hover:bg-[#3CB371] hover:text-[#FFFFFF] transition duration-300"
            >
              <FaEnvelope /> Email Us
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-3xl mb-4 text-[#C62828]">Quick Links</h4>
          <ul className="space-y-3">
            {[
              ["Home", "/", <FaHome />],
              ["About Us", "/about", <FaInfoCircle />],
              ["Services", "/services", <FaTruckMoving />],
              ["Contact Us", "/contact", <FaContao />],
              ["Certificates", "/certificate", <FaCertificate />],
            ].map(([text, link, icon], i) => (
              <li key={i}>
                <Link
                  to={link}
                  className="flex items-center gap-2 text-[#1C1C1C] hover:text-[#3CB371] transition duration-300"
                >
                  {icon} {text}
                </Link>
              </li>
            ))}
          </ul>

          <h4 className="font-semibold text-3xl mt-6 mb-2 text-[#C62828]">Business Info</h4>
          <ul className="space-y-2 text-[#1C1C1C]">
            <li>UDYAM: UP-02-0024524</li>
            <li>GST No: 09GYIPK2802J1Z7</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold text-3xl mb-4 text-[#C62828]">Our Services</h4>
          <ul className="space-y-3">
            {services.map(({ title, slug }, i) => (
              <li key={i} className="flex items-center gap-2">
                <FaTruckMoving className="text-[#3CB371]" />
                <Link
                  to={`/services/${slug}`}
                  className="text-[#1C1C1C] hover:text-[#3CB371] transition duration-300"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold text-3xl mb-4 text-[#C62828]">Contact Info</h4>
          <address className="not-italic leading-relaxed mb-4 text-[#1C1C1C]">
            House No 183 Ground Floor, Road No 6, Chand Wali Masjid, Shikari Nagar, Nai Basti, Bannadevi, Aligarh, Uttar Pradesh 202001
          </address>
          <address className="not-italic leading-relaxed mb-4 text-[#1C1C1C]">
            Plot No. 12/70 Ground Floor, Nearby Starfield Renewables Pvt Ltd, Opposite Ganga Devi School, Hathras Road, Ram Bagh, Agra, Uttar Pradesh 282006
          </address>

          {["+91 8077534394", "+91 94100 09870", "+91 8077534394"].map((num, i) => (
            <p key={i} className="text-sm mb-2 flex items-center gap-2">
              <FaPhoneAlt className="text-[#C62828]" />
              <a href={`tel:${num.replace(/\s/g, "")}`} className="hover:text-[#3CB371] transition duration-300">
                {num}
              </a>
            </p>
          ))}

          <div className="mb-4 flex justify-start items-center">
            <Translator />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 text-center text-xs text-[#1C1C1C] border-t border-[#D9D9D9] pt-6 space-y-2 relative z-10">
        <VisitorCounter />
        <p>© {new Date().getFullYear()} Imad Packers & Movers. All rights reserved.</p>
        <p>
          Designed by{" "}
          <a
            href="https://webworldhub.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:text-[#C62828] transition duration-300"
          >
            Web World Hub
          </a>
        </p>
      </div>
    </footer>
  );
}
