import React from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaTruck,
} from "react-icons/fa";

export default function QuoteForm() {
  return (
    <section className="relative  text-white py-6 px-6 flex items-center justify-center min-h-[40vh]">
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-2xl p-8">
        {/* Heading + Quote */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-red-700 mb-2">
            Get Your Free Moving Quote
          </h2>
          <p className="text-gray-700 italic text-lg">
            “Safe, Reliable & On-Time Moving Solutions You Can Trust.”
          </p>
        </div>

        {/* Form */}
        <form
          action="https://formsubmit.co/Imadpackersmovers@gmail.com"
          method="POST"
          className="space-y-6"
        >
          {/* Hidden Inputs */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input
            type="hidden"
            name="_subject"
            value="New Quote Request - Imad Packers & Movers"
          />
          <input
            type="hidden"
            name="_next"
            value="https://imadpackers.in"
          />

          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {/* Name */}
            <div className="flex items-center border rounded-xl px-3 bg-gray-50 shadow-sm">
              <FaUser className="text-gray-500 mr-2" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="w-full p-3 bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none"
              />
            </div>

            {/* Email */}
            <div className="flex items-center border rounded-xl px-3 bg-gray-50 shadow-sm">
              <FaEnvelope className="text-gray-500 mr-2" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full p-3 bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none"
              />
            </div>

            {/* Phone */}
            <div className="flex items-center border rounded-xl px-3 bg-gray-50 shadow-sm">
              <FaPhone className="text-gray-500 mr-2" />
              <input
                type="text"
                name="number"
                placeholder="Phone Number"
                required
                className="w-full p-3 bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none"
              />
            </div>

            {/* Address */}
            <div className="flex items-center border rounded-xl px-3 bg-gray-50 shadow-sm">
              <FaMapMarkerAlt className="text-gray-500 mr-2" />
              <input
                type="text"
                name="address"
                placeholder="Address"
                required
                className="w-full p-3 bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {/* Service */}
            <div className="flex items-center border rounded-xl px-3 bg-gray-50 shadow-sm">
              <FaTruck className="text-gray-500 mr-2" />
              <select
                name="service"
                required
                className="w-full p-3 bg-transparent text-gray-900 focus:outline-none"
              >
                <option value="">Select Service</option>
                <option value="Relocation Services">Relocation Services</option>
                <option value="Packing Services">Packing Services</option>
                <option value="Moving Services">Moving Services</option>
                <option value="Transport Services">Transport Services</option>
                <option value="Cargo Services">Cargo Services</option>
                <option value="Commercial Moving">Commercial Moving</option>
              </select>
            </div>

            {/* Moving From */}
            <div className="flex items-center border rounded-xl px-3 bg-gray-50 shadow-sm">
              <FaMapMarkerAlt className="text-gray-500 mr-2" />
              <input
                type="text"
                name="movingFrom"
                placeholder="Moving From"
                required
                className="w-full p-3 bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none"
              />
            </div>

            {/* Moving To */}
            <div className="flex items-center border rounded-xl px-3 bg-gray-50 shadow-sm">
              <FaMapMarkerAlt className="text-gray-500 mr-2" />
              <input
                type="text"
                name="movingTo"
                placeholder="Moving To"
                required
                className="w-full p-3 bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none"
              />
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="w-full px-8 py-3 bg-gradient-to-r from-teal-500 to-red-600 text-white font-bold rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
