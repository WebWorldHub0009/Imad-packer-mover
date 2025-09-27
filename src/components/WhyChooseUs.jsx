import React from "react";
import { FaShieldAlt, FaClock, FaTruckMoving, FaSmile } from "react-icons/fa";
import why1 from "../assets/new/ss2.jpg"; 
import why2 from "../assets/new/ss3.jpg";
import bg from "../assets/home/abg.jpg"; 

export default function WhyChooseUs() {
  return (
    <section
      className="relative w-full text-white py-16 px-6 md:px-16 bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-center text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide mb-6">
          WHY <span className="text-[#20B2AA]">IMAD PACKERS & MOVERS</span>
        </h2>
        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12 text-lg">
          We combine <span className="text-[#20B2AA] font-semibold">experience, technology, and care</span>  
          to deliver premium relocation solutions across India. From homes to offices,  
          we move more than just goods — we move <span className="text-[#C62828] font-semibold">trust</span>.
        </p>

        {/* Row 1 */}
        <div className="grid md:grid-cols-2 gap-12 items-center border-y border-gray-600 py-10">
          {/* Image */}
          <div className="order-1 md:order-1">
            <img
              src={why1}
              alt="Safe & Reliable Shifting"
              className="w-full h-[300px] sm:h-[300px] object-cover rounded-2xl shadow-lg border-4 border-[#20B2AA]/50"
            />
          </div>

          {/* Text */}
          <div className="order-2 md:order-2 text-gray-200 leading-relaxed text-lg space-y-4">
            <p>
              At <span className="text-[#20B2AA] font-semibold">Imad Packers & Movers</span>, 
              we focus on delivering <span className="text-white">safe, fast, and hassle-free relocations</span>.  
              Every step — from packing to delivery — is handled with precision and care using  
              modern equipment, premium materials, and trained professionals.
            </p>
            <p>
              We don’t just shift goods, we provide <span className="text-[#C62828] font-semibold">peace of mind</span>.  
              Our tracking-enabled moves, insured packages, and dedicated support team ensure  
              that your journey with us is <span className="text-[#20B2AA]">stress-free</span>.
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid md:grid-cols-2 gap-12 items-center border-b border-gray-600 py-10 mt-12">
          {/* Text */}
          <div className="order-2 md:order-1 text-gray-200 leading-relaxed text-lg space-y-4">
            <p>
              With expertise in <span className="text-[#C62828] font-semibold">household, office, and vehicle shifting</span>,  
              we promise <span className="text-white font-semibold">reliability, timeliness, and complete safety</span>.  
              Our customized packages make sure your move is smooth, budget-friendly,  
              and tailored to your needs.
            </p>
            <p>
              Choosing <span className="text-[#20B2AA] font-semibold">Imad Packers & Movers</span> means choosing  
              <span className="text-[#C62828]"> excellence and trust</span>. From fragile items to bulk transport,  
              every relocation is handled with unmatched professionalism.
            </p>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2">
            <img
              src={why2}
              alt="Professional Relocation"
              className="w-full h-[300px] sm:h-[300px] object-cover rounded-2xl shadow-lg border-4 border-[#C62828]/60"
            />
          </div>
        </div>

        {/* Icon Features */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8 text-center">
          {[
            { icon: <FaShieldAlt />, title: "Safe & Secure" },
            { icon: <FaClock />, title: "On-Time Delivery" },
            { icon: <FaTruckMoving />, title: "Modern Fleet" },
            { icon: <FaSmile />, title: "Customer Satisfaction" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-md p-2 rounded-2xl shadow-xl border border-gray-700 hover:border-[#20B2AA] transition group"
            >
              <div className="flex items-center justify-center mb-2">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-[#20B2AA] to-[#C62828] shadow-lg group-hover:scale-110 transition">
                  <div className="text-2xl text-white">{item.icon}</div>
                </div>
              </div>
              <h4 className="text-lg font-semibold text-gray-100">{item.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
