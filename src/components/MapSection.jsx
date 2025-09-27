// src/components/MapSection.jsx
import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const MapSection = () => {
  return (
    <section className="w-full min-h-[80vh] bg-[#F9F9F9] flex flex-col lg:flex-row font-[Poppins]">
      
      {/* Left: Info */}
      <div className="w-full lg:w-1/2 flex items-center justify-center text-[#1C1C1C] p-10 md:p-14 relative">
        <div className="relative z-10 max-w-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-[#C62828] mb-4">
            Find Us On Map - Imad Packers & Movers
          </h2>
          <p className="text-[#3CB371] mb-6 text-lg leading-relaxed">
            We ensure safe and reliable relocation services across India. Visit us or get in touch today for a premium moving experience.
          </p>

          <div className="space-y-4 mt-4">
            <p className="flex items-center gap-2 text-[#1C1C1C] font-medium">
              <FaMapMarkerAlt className="text-[#C62828]" /> 
              House No 183, Ground Floor, Road No 6, Chand Wali Masjid, Shikari Nagar, Nai Basti, Bannadevi, Aligarh, Uttar Pradesh - 202001
            </p>
            <p className="flex items-center gap-2 text-[#1C1C1C] font-medium">
              <FaPhoneAlt className="text-[#3CB371]" /> 
              +91 80775 34394 | +91 94100 09870
            </p>
            <p className="flex items-center gap-2 text-[#1C1C1C] font-medium">
              <FaEnvelope className="text-[#C62828]" /> 
              Imadpackersmovers@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* Right: Map */}
      <div className="w-full lg:w-1/2 h-[60vh] lg:h-auto shadow-lg border-2 border-[#3CB371] rounded-xl overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d56419.121276196776!2d78.026615738889!3d27.895986234139382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3974a52c73723417%3A0x537be6f62a40e003!2sImad%20Relocation%20Service%2C%20Road%20No%206%2C%20Chand%20Wali%20Masjid%2C%20H%20No%20183%2C%20Shikari%20Nagar%2C%20Nai%20Basti%2C%20Bannadevi%2C%20Aligarh%2C%20Uttar%20Pradesh%20202001!3m2!1d27.8959165!2d78.0678157!4m5!1s0x3974a52c73723417%3A0x537be6f62a40e003!2sRoad%20No%206%2C%20Imad%20Relocation%20Service%2C%20Chand%20Wali%20Masjid%2C%20H%20No%20183%2C%20Shikari%20Nagar%2C%20Nai%20Basti%2C%20Bannadevi%2C%20Aligarh%2C%20Uttar%20Pradesh%20202001!3m2!1d27.8959165!2d78.0678157!5e0!3m2!1sen!2sin!4v1758881274166!5m2!1sen!2sin"
          className="w-full h-full"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default MapSection;
