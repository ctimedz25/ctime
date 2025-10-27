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
      title: "Échelle de Brinell",
      définitions: [
        {
          items: [
            "Les pénétrateurs bille en acier trempé Brinell (Ø1mm, Ø2.5mm, Ø5mm, Ø10mm)",
            "La charge est choisie en fonction de la taille de la bille et du matériau à tester.",
          ],
        },
      ],
      images: ["/Capture5.PNG"],
    },
  ];




  return (

    <div className="bg-gradient-to-br from-[#b01614] via-gray-600 to-gray-900 bg-gradient-lg animate-watery min-h-screen flex flex-col items-center p-4">
      {/* Image de fond */}
      <div
        className={`relative bg-white/10 shadow-xl rounded-xl overflow-hidden transition-all duration-500 transform mb-8 ${isVisible ? 'scale-100' : 'scale-95'}`}
      >
        <Image
          src="/40-imageonline.co-merged.png"
          alt="Étalonnage des Instruments"
          className="w-[850px] h-[250px] object-cover"
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
        <div className="relative flex flex-col items-center text-center mt-12 mb-12">
          {/* Title */}
          <h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-6">
            <span className="text-red-500">Digitalisation</span> 3D
          </h1>

          {/* Merged Card */}
          <div className="relative w-full max-w-3xl bg-white/10 shadow-xl rounded-xl overflow-hidden transition-all duration-500 transform p-6 z-10">
            <p className="text-lg text-gray-200 leading-relaxed">
              Le CTIME propose un service de digitalisation 3D de vos pièces mécaniques utilisant un scanner de haute précision. Ce service vous permettra d&apos;obtenir des modèles 3D détaillés et des dessins de définition technique, parfaitement adaptés à vos besoins de conception et de production. Grâce à notre technologie avancée, nous garantissons une précision micrométrique, idéale pour des pièces complexes ou de petite taille. Nous assurons un traitement rapide des données et la génération de fichiers CAO compatibles (.STL, .STEP, .IGES, etc.). Nos solutions permettent de réduire les coûts de prototypage et d&apos;améliorer la gestion des pièces existantes.
            </p>
          </div>
        </div>
    
      </div>
    </div>
  );
};

export default EtalonnagePage;
