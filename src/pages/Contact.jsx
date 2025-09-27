// src/pages/Contact.jsx
import React from "react";
import ContactHero from "../components/ContactHero";
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaYoutube, FaMapMarkerAlt } from "react-icons/fa";
import bg from "../assets/home/ah2.jpg";
import MapSection from "../components/MapSection";

const Contact = () => {
  return (
    <>
      <ContactHero />

      <section className="w-full min-h-screen flex flex-col lg:flex-row bg-[#FFFFFF] text-[#1C1C1C] mt-1 font-[Poppins]">
        {/* Left Panel: Info */}
        <div className="w-full lg:w-1/2 bg-[#F9F9F9] px-8 py-16 shadow-2xl">
          <h2 className="text-4xl font-bold mb-6 pb-3 inline-block border-b-4 border-[#C62828] text-[#003366]">
            Let’s Connect
          </h2>
          <p className="text-lg text-[#5E5E5E] mb-10 leading-relaxed">
            At <span className="text-[#3CB371] font-semibold">Imad Packers And Movers</span>, we ensure safe, professional, and stress-free relocation services tailored to your needs.
          </p>

          <div className="space-y-4 text-sm sm:text-base">
            <div>
              <h4 className="font-semibold text-[#C62828]">Owner</h4>
              <p className="font-bold text-xl">Amir Khan</p>
            </div>

            <div>
              <h4 className="font-semibold text-[#C62828]">Contact Numbers</h4>
              <p>📞 <a href="tel:+918077534394" className="hover:text-[#3CB371]">+91 80775 34394</a></p>
              <p>📞 <a href="tel:+919410009870" className="hover:text-[#3CB371]">+91 94100 09870</a></p>
              <p>📞 <a href="tel:+918077534394" className="hover:text-[#3CB371]">+91 80775 34394</a></p>
            </div>

            <div>
              <h4 className="font-semibold text-[#C62828]">Email</h4>
              <p>✉️ <a href="mailto:Imadpackersmovers@gmail.com" className="hover:text-[#3CB371]">Imadpackersmovers@gmail.com</a></p>
            </div>

            <div>
              <h4 className="font-semibold text-[#C62828]">Office Addresses</h4>
              <p className="leading-relaxed">
                House No 183 Ground Floor, Road No 6, Chand Wali Masjid, Shikari Nagar, Nai Basti, Bannadevi, Aligarh, Uttar Pradesh - 202001
              </p>
              <p className="mt-2 leading-relaxed">
                Plot No. 12/70 Ground Floor, Nearby Starfield Renewables Pvt Ltd, Opposite Ganga Devi School, Hathras Road, Ram Bagh, Agra, Uttar Pradesh - 282006
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-[#C62828]">GST & UDYAM</h4>
              <p>UDYAM-UP-02-0024524</p>
              <p>GST No: 09GYIPK2802J1Z7</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="mt-8 flex space-x-5 text-2xl text-[#4B4B4B]">
            {[FaLinkedinIn, FaInstagram, FaFacebookF, FaYoutube, FaMapMarkerAlt].map((Icon, i) => (
              <Icon key={i} className="hover:text-[#C62828] transition-colors cursor-pointer" />
            ))}
          </div>
        </div>

        {/* Right Panel: Form */}
        <div className="w-full lg:w-1/2 relative flex items-center justify-center shadow-2xl">
          {/* Background Image */}
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }} />
          <div className="absolute inset-0 bg-black/60" />

          {/* Form */}
          <form
            action="https://formsubmit.co/Imadpackersmovers@gmail.com"
            method="POST"
            className="relative z-10 w-full max-w-lg px-8 py-6"
          >
            <h3 className="text-2xl font-bold text-[#C62828] mb-6 border-b-2 border-[#FFC107] inline-block">
              Get in Touch
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <input type="text" name="name" placeholder="Your Name" required className="bg-transparent border-b border-[#D9D9D9] text-white placeholder-gray-300 py-2 focus:border-[#3CB371] outline-none" />
              <input type="email" name="email" placeholder="Your Email" required className="bg-transparent border-b border-[#D9D9D9] text-white placeholder-gray-300 py-2 focus:border-[#3CB371] outline-none" />
              <input type="text" name="phone" placeholder="Phone" required className="bg-transparent border-b border-[#D9D9D9] text-white placeholder-gray-300 py-2 focus:border-[#3CB371] outline-none" />
              <input type="text" name="move_from" placeholder="Moving From" required className="bg-transparent border-b border-[#D9D9D9] text-white placeholder-gray-300 py-2 focus:border-[#3CB371] outline-none" />
              <input type="text" name="move_to" placeholder="Moving To" required className="bg-transparent border-b border-[#D9D9D9] text-white placeholder-gray-300 py-2 focus:border-[#3CB371] outline-none" />

              {/* Services Dropdown */}
              <select name="service" required className="bg-transparent border-b border-[#D9D9D9] text-white py-2 focus:border-[#3CB371] outline-none">
                <option value="" disabled selected className="text-gray-400">Select Service</option>
                <option value="Home Shifting" className="text-black">Home Shifting</option>
                <option value="Office Relocation" className="text-black">Office Relocation</option>
                <option value="Car/Bike Transportation" className="text-black">Car/Bike Transportation</option>
                <option value="Local Shifting" className="text-black">Local Shifting</option>
                <option value="Domestic Relocation" className="text-black">Domestic Relocation</option>
                <option value="Warehouse & Storage" className="text-black">Warehouse & Storage</option>
              </select>

              <textarea name="message" placeholder="Your Message" required rows={4} className="col-span-full bg-transparent border-b border-[#D9D9D9] text-white placeholder-gray-300 py-2 focus:border-[#3CB371] outline-none" />
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full bg-black text-white py-3 font-semibold rounded-full hover:bg-[#3CB371] transition duration-300 shadow-lg">
              🚚 Send Message
            </button>

            {/* Formsubmit config */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://www.imadpackers.in/" />
          </form>
        </div>
      </section>

      <MapSection />
    </>
  );
};

export default Contact;
