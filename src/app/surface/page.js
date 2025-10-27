"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const EtalonnagePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-gradient-to-br from-[#b01614] via-gray-600 to-gray-900 bg-gradient-lg animate-watery min-h-screen flex flex-col items-center p-4">
      {/* Image de fond */}
      <div
        className={`relative bg-white/10 shadow-xl rounded-xl overflow-hidden transition-all duration-500 transform mb-8 ${isVisible ? 'scale-100' : 'scale-95'}`}
      >
        <Image
          src="/27-imageonline.co-merged.png"
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
          <h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-12">
            État de <span className="text-red-500">Surface</span> et Contour de <span className="text-red-500">Profil</span>
          </h1>

          {/* Merged Card */}
          <div className="relative w-full max-w-xl bg-white/10 shadow-xl rounded-xl overflow-hidden transition-all duration-500 transform p-6 z-10">
            <p className="text-lg text-gray-200 leading-relaxed">
              Le CTIME propose un service avancé de mesure des paramètres de l&apos;état de surface et du contour de vos pièces mécaniques, en utilisant des équipements de très haute précision. Grâce à des technologies de pointe, nous offrons une analyse complète et précise des caractéristiques critiques de vos pièces.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed">
              Nos services incluent :
            </p>
            <ul className="text-lg text-gray-200 leading-relaxed list-disc list-inside">
              <li><strong>Mesure de la rugosité de surface :</strong> Détection et quantification des irrégularités de surface (raies, aspérités, etc.) selon les normes définies.</li>
              <li><strong>Analyse des dimensions et du contour :</strong> Vérification de la forme et des dimensions avec une précision micrométrique, assurant la conformité aux spécifications techniques.</li>
              <li><strong>Contrôle topographique 2D et 3D :</strong> Modélisation détaillée des contours et des surfaces pour des rapports approfondis.</li>
            </ul>
            <p className="text-lg text-gray-200 leading-relaxed">
              Les résultats sont fournis sous forme de rapports détaillés, avec des visualisations graphiques. Nous garantissons des résultats rapides, fiables et adaptés à vos besoins spécifiques.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EtalonnagePage;
