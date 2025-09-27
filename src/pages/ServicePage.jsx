// src/pages/ServicePage.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import servicesData from "../data/servicesData";
import { FaHome } from "react-icons/fa";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaQuestionCircle,
  FaAngleRight,
  FaHandsHelping,
  FaShieldAlt,
  FaPlus,
  FaMinus,
} from "react-icons/fa";
import { motion } from "framer-motion";


const ServicePage = () => {
  const { slug } = useParams();
  const [service, setService] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    const foundService = servicesData.find((s) => s.slug === slug);
    setService(foundService);
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="h-screen flex items-center justify-center text-2xl text-red-600 font-bold">
        Service Not Found
      </div>
    );
  }

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="w-full min-h-screen bg-white text-gray-900 font-poppins">

      {/* TOP BUTTONS: Home & Back to Services */}
      <div className="container mx-auto px-6 md:px-12 py-5 flex justify-between gap-4">
       <Link
  to="/"
  className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full flex items-center justify-center transition-shadow shadow-md hover:shadow-lg"
  title="Home"
>
  <FaHome className="text-xl" />
</Link>
        <Link
          to="/services"
          className="bg-blue-500 hover:bg-blue-600 rounded text-white px-4 py-2 transition"
        >
          Back to Services
        </Link>
      </div>

      {/* CENTERED TITLE + SHORT DESCRIPTION */}
      <div className="container mx-auto px-6 md:px-12 py-8 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-red-800">
          {service.title}
        </h1>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          {service.shortDescription}
        </p>
      </div>

      {/* IMAGE LEFT + LONG DESCRIPTION RIGHT */}
      <div className="container mx-auto px-6 md:px-12 py-10 flex flex-col md:flex-row items-center gap-10">
        {/* Left: Image */}
        <div className="md:w-1/2">
          <img
            src={service.image}
            alt={service.title}
            className="w-full rounded-2xl shadow-lg object-cover"
          />
        </div>

        {/* Right: Long Description */}
        <div className="md:w-1/2 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-4">
              Overview
            </h2>
            <p className="text-gray-700 text-lg md:text-2xl font-[poppins]">
              {service.longDescription}
            </p>
          </motion.div>
        </div>
      </div>

      {/* QUICK POINTS */}
      <div className="container mx-auto px-6 md:px-12 py-10">
        <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-6">
          Quick Highlights
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.quickPoints.map((point, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-yellow-50 p-4 rounded-xl flex items-center gap-3 shadow-sm hover:shadow-lg transition duration-300 cursor-pointer"
            >
              <FaAngleRight className="text-red-800" />
              <p className="text-gray-900 font-medium">{point}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ADVANTAGES & DISADVANTAGES */}
      <div className="container mx-auto px-6 md:px-12 py-10 grid md:grid-cols-2 gap-10">
        {/* Advantages */}
        <div>
          <h2 className="text-3xl font-bold text-green-600 mb-6 flex items-center gap-2">
            <FaCheckCircle /> Advantages
          </h2>
          <ul className="space-y-4">
            {service.advantages.map((adv, idx) => (
              <li
                key={idx}
                className="flex items-center gap-3 bg-green-50 p-4 rounded-xl hover:bg-green-100 transition duration-300 shadow-sm hover:shadow-lg"
              >
                <FaHandsHelping className="text-green-500" />
                <span className="text-gray-900">{adv}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Disadvantages */}
        <div>
          <h2 className="text-3xl font-bold text-red-600 mb-6 flex items-center gap-2">
            <FaTimesCircle /> Disadvantages
          </h2>
          <ul className="space-y-4">
            {service.disadvantages.map((dis, idx) => (
              <li
                key={idx}
                className="flex items-center gap-3 bg-red-50 p-4 rounded-xl hover:bg-red-100 transition duration-300 shadow-sm hover:shadow-lg"
              >
                <FaShieldAlt className="text-red-500" />
                <span className="text-gray-900">{dis}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* FAQ */}
      <div className="container mx-auto px-6 md:px-12 py-10">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-500 mb-6 flex items-center gap-2">
          <FaQuestionCircle className="animate-bounce" /> Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {service.faq.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-blue-50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full flex justify-between items-center p-5 text-gray-900 font-semibold text-lg"
              >
                {item.q}
                {activeFaq === idx ? (
                  <FaMinus className="text-blue-500" />
                ) : (
                  <FaPlus className="text-blue-500" />
                )}
              </button>
              <div
                className={`px-5 pb-5 text-gray-700 text-base transition-all duration-500 ${
                  activeFaq === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {item.a}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* BOOK NOW BUTTON */}
      <div className="container mx-auto px-6 md:px-12 py-10 text-center">
        <Link
          to="/contact"
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl text-xl font-semibold transition"
        >
          Book Now
        </Link>
      </div>

      
    </div>
  );
};

export default ServicePage;
