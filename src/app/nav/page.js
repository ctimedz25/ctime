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
      title: "Capacités de la machine",
      définitions: [
        {
          subtitle: "",
          items: [
            "Capacité en essai dynamique ±100KN",
            "Capacité en essai statique ±150KN",
            "Fréquence de 0.01Hz à 50 Hz",
          ],
        },
      ],
      images: ["/Capturehb.PNG"],
    },
    {
      title: "Les paramètres mesurés",
      définitions: [
        {
          subtitle: "",
          items: [
            "Nombre de cycles à la rupture (Nf)",
            "Amplitude de la contrainte (Δσ)",
            "Rapport de contrainte (R)",
            "Température",
            "Fréquence de résonance",
          ],
        },
      ],
      images: ["/IMG_4412.JPG"],
    },
  ];

  return (
    <div className="bg-gradient-to-br from-[#b01614] via-gray-600 to-gray-900 bg-gradient-lg animate-watery min-h-screen flex flex-col items-center p-4">
      {/* Image de fond */}
      <div
        className={`relative bg-white/10 shadow-xl rounded-xl overflow-hidden transition-all duration-500 transform mb-8 ${isVisible ? 'scale-100' : 'scale-95'}`}
      >
        <Image
          src="/image (17).jpg"
          alt="Étalonnage des Instruments"
          className="w-full h-[250px] object-cover"
          width={1000}
          height={400}
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center"></div>
      </div>

      {/* Contenu principal */}
      <div
        className={`container mx-auto px-6 py-2 transition-opacity duration-1000 delay-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="relative flex flex-col items-center text-center mt-12">
          {/* Title */}
          <h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-6">
            Essai de&nbsp;<span className="text-red-500">Fatigue</span>
          </h1>

          {/* Merged Card */}
          <div className="relative w-full max-w-4xl bg-white/10 shadow-xl rounded-xl overflow-hidden transition-all duration-500 transform p-6 z-10">
            <p className="text-lg text-gray-200 leading-relaxed">
              L&apos;essai de <span className="text-red-500">fatigue</span> est un outil indispensable pour évaluer la durée de vie d&apos;un matériau soumis à des sollicitations cycliques. Il permet de garantir la fiabilité des structures et d&apos;optimiser la conception des composants.
            </p>
          </div>
        </div>

        {/* Services */}
        <h2 className="text-3xl font-bold text-center text-white mt-16">Nos services</h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-10 mb-10 justify-center">
            {services.map(({ title, définitions, images }, index) => (
              <div
                key={index}
                className={`relative bg-white/10 shadow-xl rounded-xl overflow-hidden transition-all duration-500 transform ${
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
                  height={192}
                />
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold text-white hover:text-red-500 transition-colors duration-300">
                    {title}
                  </h3>
                  {définitions.map((def, idx) => (
                    <div key={idx} className="mb-4">
                      <p className="text-gray-200">{def.subtitle}</p>
                      <ul className="list-disc list-inside text-gray-200 leading-relaxed">
                        {def.items && def.items.length > 0 ? (
                          def.items.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))
                        ) : (
                          <li>Pas d&apos;éléments disponibles</li>
                        )}
                      </ul>
                    </div>
                  ))}
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
