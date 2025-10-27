"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const EtalonnagePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: "Calibration de machines CNC",
      définitions: [
        {
          subtitle: "",
          items: [
            "Utilisation de techniques d’interférométrie de haute précision.",
            "Mesures extrêmement précises des déplacements linéaires et angulaires des axes.",
            "Amélioration de la précision des usinages.",
            "Assurance d’une longévité accrue de vos équipements.",
            "Réduction des coûts liés aux erreurs de fabrication.",
            "Respect des délais rapides pour maximiser la productivité.",
          ],
        },
      ],
      images: ["/Capture3.JPG"],
    },
  ];

  return (
    <div className="bg-gradient-to-br from-[#b01614] via-gray-600 to-gray-900 min-h-screen flex flex-col items-center p-4">
      <div
        className={`relative bg-white/10 shadow-xl rounded-xl overflow-hidden transition-all duration-500 transform mb-8 ${isVisible ? 'scale-100' : 'scale-95'}`}
      >
        <Image
          src="/19-imageonline.co-merged (1).jpg"
          alt="Vérification de moyens de production"
          className="w-[850px] h-[250px] object-cover"
          width={1000}
          height={400}
        />
      </div>

      <div className={`container mx-auto px-6 py-2 transition-opacity duration-1000 delay-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        <div className="relative flex flex-col items-center text-center mt-12">
          <h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-14">
            Vérification de <span className="text-red-500">Moyens de Production</span>
          </h1>
          <div className="relative w-full max-w-xl bg-white/10 shadow-xl rounded-xl overflow-hidden transition-all duration-500 transform p-6 z-10">
            <p className="text-lg text-gray-200 leading-relaxed">
              Le CTIME propose un service de calibration de vos machines à commande numérique (CNC) utilisant des techniques d’interférométrie de haute précision.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center text-white mt-16">Nos services</h2>
        <div className="flex justify-center mt-10 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 justify-center">
            {services.map(({ title, définitions, images }, index) => (
              <div
                key={index}
                className={`relative bg-white/10 shadow-xl rounded-xl overflow-hidden transition-all duration-500 transform ${
                  hoveredIndex === index ? "scale-105 shadow-red-500/50" : "scale-100"
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="flex flex-col md:flex-row items-center">
                  <div className="w-full md:w-1/2 h-full">
                    {images.map((img, idx) => (
                      <div key={idx} className="w-full h-full">
                        <Image
                          src={img}
                          alt={title}
                          className="w-full h-full object-cover rounded-lg"
                          width={500}
                          height={500}
                          layout="intrinsic"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="w-full md:w-1/2 p-4">
                    <h2 className="text-xl font-semibold text-white hover:text-red-500 transition-colors duration-300 mb-2">
                      {title}
                    </h2>
                    {définitions.map((def, idx) => (
                      <div key={idx} className="mb-4">
                        <h3 className="text-lg text-gray-300 mb-2">{def.subtitle}</h3>
                        <ul className="list-disc list-inside text-gray-200 leading-relaxed">
                          {def.items && def.items.length > 0 ? (
                            def.items.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))
                          ) : (
                            <li>No items available</li>
                          )}
                        </ul>
                      </div>
                    ))}
                  </div>
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
