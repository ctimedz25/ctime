'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const EtalonnagePage = () => {
  const services = [
    {
      title: "• Échelle de Brinell :",
      définitions: [
        {
          items: [
            "• Les pénétrateurs bille en acier trempé Brinell (Ø1mm, Ø2.5mm, Ø5mm, Ø10mm)",
            "• La charge est choisie en fonction de la taille de la bille et du matériau à tester.",
          ],
        },
      ],
      images: ["/Capture5.PNG"],
    },
    {
      title: "• Échelle de Vickers :",
      définitions: [
        {
          items: [
            "Le pénétrateur Bille de forme pyramidale Vickers diamant 136°",
            "Cette échelle est adaptée à une large gamme de matériaux et de tailles d'échantillons.",
          ],
        },
      ],
      images: ["/Capture12.PNG"],
    },
    {
      title: "• Échelle de Rockwell :",
      définitions: [
        {
          items: [
            "Utilise différents pénétrateurs (bille en acier ou) et applique une précharge suivie d'une charge principale.",
            "Les charges appliquées varient en fonction de l'échelle Rockwell utilisée (A, B, C, etc.) et du matériau à tester.",
            "Le pénétrateur Rockwell cône diamant 120°",
          ],
        },
      ],
      images: ["/Capture7.PNG"],
    },
    {
      title: "Essai de dureté Portatif",
      définitions: [
        {
          items: [
            "Grâce à notre duromètre portable, nous réalisons des essais de dureté directement sur vos pièces, sans les déplacer. Gagnez du temps et bénéficiez de résultats fiables.",
            "Notre duromètre portable permet de mesurer la dureté de vos matériaux en toute mobilité. Idéal pour le contrôle qualité sur site ou pour des pièces de grandes dimensions.",
          ],
        },
      ],
      images: ["/8.jpg"],
    },
  ];

  return (
    <div className="flex flex-col items-center p-4 min-h-screen bg-gradient-to-br from-[#b01614] via-gray-600 to-gray-900">
      <motion.img
        src="/image (2).jpg"
        alt="Étalonnage des Instruments"
        className="w-full max-w-4xl h-[350px] object-cover mb-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      <h1 className="text-4xl font-extrabold text-red-600 mb-6 text-center">Essai de Dureté</h1>

      <section className="bg-white/10 shadow-xl rounded-lg p-8 mb-10 w-full max-w-5xl">
        <p className="text-gray-200 text-lg leading-relaxed">
          La dureté est une propriété physique qui caractérise la résistance d’un matériau à être pénétré, rayé ou déformé. Elle mesure la capacité d’un matériau à résister à l’usure, à la pénétration d’un objet plus dur et à la déformation plastique.
        </p>
      </section>

      {services.map((service, index) => (
        <motion.section
          key={index}
          className="bg-white/10 shadow-xl rounded-lg p-6 mb-5 w-full max-w-3xl transition-transform transform hover:shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <h2 className="text-2xl font-semibold text-gray-200 mb-4 text-center">
            {service.title}
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/2 p-4 bg-gray-100/10 rounded-lg shadow-md">
              {service.définitions.map((def, idx) => (
                <div key={idx} className="mb-6">
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

            <div className="w-full md:w-1/2 flex flex-col gap-4 p-4">
              {service.images.map((img, idx) => (
                <motion.img
                  key={idx}
                  src={img}
                  alt={service.title}
                  className={`w-full ${service.title === "• Échelle de Vickers :" || service.title === "• Échelle de Brinell :" || service.title === "• Échelle de Rockwell :" ? 'max-w-[50%]' : 'max-w-[500px]'} h-auto object-contain rounded-lg shadow-md transition-transform transform hover:scale-105`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/path/to/placeholder.jpg"; // Path to placeholder image
                  }}
                />
              ))}
            </div>
          </div>
        </motion.section>
      ))}
    </div>
  );
};

export default EtalonnagePage;
