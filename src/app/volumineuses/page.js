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
      title: "Matériaux de haute résistance à la traction jusqu'à 600 kN",
      définitions: [
        {
          subtitle: "Les matériaux capables de supporter des charges de traction aussi élevées sont généralement des métaux ou des alliages à haute performance.",
          items: [
            "Aciers haute résistance : (Aciers alliés, Aciers inoxydables)",
            "Alliages d’aluminium : (Alliages d'aluminium série 7000)",
            "Superalliages",
            "Titane et ses alliages",
          ],
        },
      ],
      images: ["/Capture3.PNG"],
    },
  ];

  return (
    <div className="bg-gradient-to-br from-[#b01614] via-gray-600 to-gray-900 bg-gradient-lg animate-watery min-h-screen flex flex-col items-center p-4">
      {/* Image de fond */}
      <div
        className={`relative bg-white/10 shadow-xl rounded-xl overflow-hidden transition-all duration-500 transform mb-8 ${isVisible ? 'scale-100' : 'scale-95'}`}
      >
        <Image
          src="/41-imageonline.co-merged.jpg"
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
        <div className="relative flex flex-col items-center text-center mt-12">
          {/* Title */}
          <h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-6">
            Pièces <span className="text-red-500">Volumineuses</span>
          </h1>

          {/* Merged Card */}
          <div className="relative w-full max-w-3xl bg-white/10 shadow-xl rounded-xl overflow-hidden transition-all duration-500 transform p-6 z-10">
            <p className="text-lg text-gray-200 leading-relaxed">
              Il constitue une gamme de solutions d’application plus étendue, de très longue portée et extrêmement portable. Une mesure 3D dans un grand volume est une solution rapide et précise qui convient à de multiples applications industrielles:
            </p>
            <ul className="text-lg text-gray-200 leading-relaxed list-disc list-inside">
              <li> Grande pièce industrielle</li>
              <li> Bâtiment industriel</li>
              <li> Ouvrage d’art</li>
              <li> Mat de forage</li>
              <li> Construction navale</li>
              <li> Tours (Administratif, habitation, etc.)</li>
              <li> Engins</li>
              <li> Wagon</li>
            </ul>
          </div>
        </div>

        {/* Services */}

      </div>
    </div>
  );
};

export default EtalonnagePage;
