"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const EtalonnagePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#b01614] via-gray-600 to-gray-900 min-h-screen flex flex-col items-center p-4">
      {/* Image de fond */}
      <div
        className={`relative bg-white/10 shadow-xl rounded-xl overflow-hidden transition-all duration-500 transform mb-8 ${
          isVisible ? "scale-100" : "scale-95"
        }`}
      >
        <Image
          src="/MMT-2024-12-22-13h54m50s880-imageonline.co-merged.png"
          alt="Inspection et Étalonnage des Instruments"
          className="w-[850px] h-[250px] object-cover"
          width={1000}
          height={400}
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center"></div>
      </div>

      {/* Contenu principal fusionné */}
      <div
        className={`container mx-auto px-6 py-2 transition-opacity duration-1000 delay-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="relative flex flex-col items-center text-center mt-12">
          {/* Title */}
          <h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-6">
            Pièces <span className="text-red-500">Complexes</span>
          </h1>

          <div className="relative w-full max-w-3xl bg-white/10 shadow-xl rounded-xl overflow-hidden transition-all duration-500 transform p-6 z-10">
            <p className="text-lg text-gray-200 leading-relaxed">
              Le CTIME propose un service d&apos;inspection et de mesure de
              pièces complexes, utilisant des équipements de mesure de très
              haute précision...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EtalonnagePage;
