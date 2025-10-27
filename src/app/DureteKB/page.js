"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaHammer } from 'react-icons/fa';

const EssaiDuretePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-gray-100">
      {/* En-tête de la page */}
      <div className="relative h-[400px]">
        <Image
          src="/IMG_4042-imageonline.co-merged.jpg"
          alt="Essai de dureté"
          layout="fill"
          objectFit="cover"
          className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg">Essai de Dureté</h1>
        </div>
      </div>

      {/* Section Dureté */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-black mb-8 flex items-center justify-center">
            <FaHammer className="text-red-500 mr-2" /> Évaluation de la Dureté
          </h2>
          <p className="text-lg text-gray-800 my-4 w-full max-w-2xl mx-auto">
            Besoin d&apos;évaluer la dureté de vos pièces métalliques ? Notre laboratoire met à votre disposition des équipements de pointe pour réaliser des essais Brinell, Vickers et Rockwell. Bénéficiez de notre expertise pour garantir la conformité de vos matériaux aux normes les plus strictes.
          </p>
        </div>
      </div>

      {/* Échelle de Brinell */}
      <div className="bg-white py-12 shadow-md rounded-lg mb-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-semibold text-black my-4">• Échelle de Brinell :</h3>
          <Image
            src="/Bille Brinelle 10mm (1).jpg"
            alt="Échelle de Brinell"
            width={600}
            height={400}
            className="rounded-lg mx-auto shadow-lg transition-transform duration-500 hover:scale-105"
          />
          <p className="text-lg text-gray-800 my-2 max-w-2xl mx-auto">
            Les pénétrateurs bille en acier trempé Brinell (Ø1mm, Ø2.5mm, Ø5mm, Ø10mm). La charge est choisie en fonction de la taille de la bille et du matériau à tester.
          </p>
        </div>
      </div>

      {/* Échelle de Vickers */}
      <div className="bg-white py-12 shadow-md rounded-lg mb-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-semibold text-black my-4">• Échelle de Vickers :</h3>
          <Image
            src="/Bille Vikers.JPG"
            alt="Échelle de Vickers"
            width={200}
            height={200}
            className="rounded-lg mx-auto shadow-lg transition-transform duration-500 hover:scale-105"
          />
          <p className="text-lg text-gray-800 my-2 max-w-2xl mx-auto">
            Le pénétrateur bille de forme pyramidale Vickers diamant 136°. Cette échelle est adaptée à une large gamme de matériaux et de tailles d&apos;échantillons.
          </p>
        </div>
      </div>

      {/* Échelle de Rockwell */}
      <div className="bg-white py-12 shadow-md rounded-lg mb-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-semibold text-black my-4">• Échelle de Rockwell :</h3>
          <Image
            src="/Bille Rackoelle.JPG"
            alt="Échelle de Rockwell"
            width={200}
            height={200}
            className="rounded-lg mx-auto shadow-lg transition-transform duration-500 hover:scale-105"
          />
          <p className="text-lg text-gray-800 my-2 max-w-2xl mx-auto">
            Utilise différents pénétrateurs (bille en acier ou cône diamant 120°) et applique une précharge suivie d&apos;une charge principale. Les charges appliquées varient en fonction de l&apos;échelle Rockwell utilisée (A, B, C, etc.) et du matériau à tester.
          </p>
        </div>
      </div>

      {/* Pied de page */}
      <footer className="bg-black text-gray-200 py-6 mt-12">
        <div className="container mx-auto text-center">
          <p className="text-sm">&copy; 2024 Laboratoire de Métrologie Dimensionnelle. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
};

export default EssaiDuretePage;
