"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaRulerCombined, FaCogs } from "react-icons/fa";

const EtalonnagePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: <FaRulerCombined className="text-4xl text-red-600 mx-auto mb-4" />,
      title: "Caractéristiques",
      description: "Énergie max : 450 J, Poids du marteau : 30.3 kg, Longueur du pendule : 770 mm, Résolution en énergie : 0.01 J",
      images: ["/Capture17.PNG"],
    },
    {
      icon: <FaCogs className="text-4xl text-red-600 mx-auto mb-4" />,
      title: "Types d'entailles",
      description: "L’entaille en V, L’entaille en U",
      images: ["/Eprouvette 10mm avec entaille V 2 mm.png"],
    },
  ];

  return (
    <div className="bg-gradient-to-br from-[#b01614] via-gray-600 to-gray-900 bg-gradient-lg animate-watery">
      {/* Image de fond */}
      <div
        className={`relative bg-white/10 shadow-xl rounded-xl overflow-hidden transition-all duration-500 transform mb-8 ${isVisible ? 'scale-100' : 'scale-95'}`}
      >
        <Image
          src="/etal.png"
          alt="Étalonnage des Instruments"
          className="w-full h-[400px] object-cover"
          width={1000}
          height={400}
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
          <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
            Essai de&nbsp;<span className="text-red-500">Charpy</span>
          </h1>
        </div>
      </div>

      {/* Contenu principal */}
      <div
        className={`container mx-auto px-6 py-2 transition-opacity duration-1000 delay-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="relative flex flex-col items-center text-center mt-12">
          {/* Merged Card */}
          <div className="relative w-full max-w-4xl bg-white/10 shadow-xl rounded-xl overflow-hidden transition-all duration-500 transform p-6 z-10">
            <p className="text-lg text-gray-200 leading-relaxed">
              L&apos;essai de <span className="text-red-500">Charpy</span> est une méthode standardisée utilisée en métallurgie pour évaluer la résistance d&apos;un matériau à la rupture par choc. Il est particulièrement pertinent pour les matériaux métalliques, mais peut également être appliqué à d&apos;autres types de matériaux. Cet essai mesure l&apos;énergie absorbée par un matériau lorsqu&apos;il est soumis à un choc soudain, ce qui permet d&apos;évaluer sa ténacité.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed mt-4">
              Les essais mécaniques sont cruciaux pour évaluer la résistance, la déformabilité et le comportement d&apos;un matériau lors de différentes sollicitations.
            </p>
          </div>
        </div>

        {/* Services */}
        <h2 className="text-3xl font-bold text-center text-white mt-16">Nos services</h2>
        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center gap-10 mt-10 mb-10">
            {services.map(({ icon, title, description, images }, index) => (
              <div
              key={index}
              className={`max-w-[350px] w-full bg-white/10 shadow-xl rounded-xl overflow-hidden transition-all duration-500 transform ${
                hoveredIndex === index ? "scale-105 shadow-red-500/50" : "scale-100"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
                <Image
                  src={images[0]}
                  alt={title}
                  className="w-full h-48 object-cover"
                  width={300}
                  height={200}
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-white hover:text-red-500 transition-colors duration-300">
                    {title}
                  </h3>
                  {icon}
                  <p className="text-gray-200 mt-3">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EtalonnagePage;
