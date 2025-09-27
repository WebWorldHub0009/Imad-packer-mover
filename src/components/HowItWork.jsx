import React from "react";
import {
  FaTruckMoving,
  FaClipboardCheck,
  FaCalendarCheck,
  FaSmileBeam,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const steps = [
  {
    id: 1,
    title: "Share Your Moving Details",
    description:
      "Tell us where you’re moving from and to, along with your preferred date. We’ll tailor the service to your exact needs.",
    icon: <FaClipboardCheck className="text-5xl text-[#20B2AA]" />,
    extra: "Getting started is quick and hassle-free.",
  },
  {
    id: 2,
    title: "Get a Customized Plan",
    description:
      "Our experts assess your requirements and offer you the most reliable, affordable, and stress-free moving plan.",
    icon: <FaTruckMoving className="text-5xl text-[#20B2AA]" />,
    extra: "Every move is customized for your convenience.",
  },
  {
    id: 3,
    title: "Book in Just Minutes",
    description:
      "Confirm your plan online with ease. Receive instant booking confirmation via WhatsApp, SMS, or Email.",
    icon: <FaCalendarCheck className="text-5xl text-[#20B2AA]" />,
    extra: "No paperwork. Instant, digital confirmation.",
  },
  {
    id: 4,
    title: "Enjoy a Smooth Move",
    description:
      "Sit back and relax while our professional team carefully packs, transports, and sets up your belongings safely.",
    icon: <FaSmileBeam className="text-5xl text-[#20B2AA]" />,
    extra: "Safe. Reliable. On-Time. Every time.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-16 bg-gradient-to-b from-white to-gray-100">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="uppercase text-sm font-semibold tracking-wider text-gray-500">
          Imad Packers And Movers
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          How <span className="text-red-700">Our Process</span> Works
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-lg">
          From your first call to final delivery, our step-by-step process ensures a
          secure, reliable, and stress-free relocation.
        </p>
      </div>

      {/* Steps Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
        {steps.map((step, idx) => (
          <div
            key={step.id}
            className="relative bg-white rounded-2xl shadow-lg border border-gray-100 
                       p-8 group hover:-translate-y-3 hover:shadow-2xl transition-all duration-500"
          >
            {/* Top Badge */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-[#20B2AA] to-red-700 
                              text-white font-bold text-lg shadow-md">
                {idx + 1}
              </div>
            </div>

            {/* Icon */}
            <div className="flex justify-center mb-6 mt-6">{step.icon}</div>

            {/* Title */}
            <h3 className="text-center font-semibold text-xl mb-3 text-gray-800 group-hover:text-red-700 transition">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-center text-gray-600 text-sm mb-3 leading-relaxed">
              {step.description}
            </p>

            {/* Extra */}
            <p className="text-center text-gray-500 text-xs italic">
              {step.extra}
            </p>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center px-6 max-w-3xl mx-auto">
        <p className="text-lg text-gray-700 font-medium mb-6">
          Move with peace of mind —{" "}
          <span className="text-red-700 font-semibold">Imad Packers And Movers</span>{" "}
          makes relocation seamless and stress-free.
        </p>
        <Link to="/contact">
          <button className="px-8 py-3 rounded-full cursor-pointer bg-gradient-to-r from-[#20B2AA] to-red-700 
                             text-white text-lg font-semibold shadow-lg hover:scale-105 transition duration-300">
            Book Your Move Today
          </button>
        </Link>
      </div>

      {/* Background glow */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-[#20B2AA]/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-52 h-52 bg-red-700/20 blur-3xl rounded-full"></div>
    </section>
  );
}
