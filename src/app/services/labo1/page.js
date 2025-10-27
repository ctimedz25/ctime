'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaTools, FaRulerCombined, FaCogs, FaDraftingCompass, FaCheckCircle, FaObjectGroup } from 'react-icons/fa';
import Image from 'next/image';

const LaboratoireDeMetrologie = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
   
    { icon: <FaRulerCombined className="text-4xl text-red-600 mx-auto mb-4" />, title: "Inspection d'engrenage", description: "Étalonnage précis des instruments à cote variable et des étalons de référence.", link: '/engrenage', imgSrc: '/Engrenage.png' },
    { icon: <FaCogs className="text-4xl text-red-600 mx-auto mb-4" />, title: "Vérification de moyens de production", description: "Vérification des formes, des positions et des états de surface.", link: '/production', imgSrc: '/moyens de production.jpg' },
    { icon: <FaDraftingCompass className="text-4xl text-red-600 mx-auto mb-4" />, title: "Etat de surface et contour de profil", description: "Détecter les caractéristiques géométriques et les caractéristiques de surface des pièces.", link: '/surface', imgSrc: '/imgonline-com-ua-collage-B6xL8tvDBCD.jpg' },
    { icon: <FaCheckCircle className="text-4xl text-red-600 mx-auto mb-4" />, title: "Pièces complexe", description: "Contrôle rigoureux des moyens de production pour une qualité optimale.", imgSrc: '/téléchargement2.jpg' ,link: '/complexe' },
    { icon: <FaObjectGroup className="text-4xl text-red-600 mx-auto mb-4" />, title: "Pièces volumineuse", description: "Réalisation de rétro-conception et vérification de pièces volumineuses.", link: '/volumineuses', imgSrc: '/39-imageonline.co-merged.jpg' },
    { icon: <FaObjectGroup className="text-4xl text-red-600 mx-auto mb-4" />, title: "Digitalisation 3D", description: "Réalisation de rétro-conception et vérification de pièces volumineuses.", link: '/Digitalisation', imgSrc: '/imgonline-com-ua-twotoone-Xqs0kucM0vXfxunV.jpg' },
  ];

  return (
    <div className="bg-gradient-to-br from-[#b01614] via-gray-600 to-gray-900">
      <div className="container mx-auto px-4 py-12">
        {/* Image Card */}
        <div
          className={`relative bg-white/10 shadow-xl rounded-xl overflow-hidden transition-all duration-500 transform mb-8 ${isVisible ? 'scale-100' : 'scale-95'}`}
        >


          <Image
            src="/Equipements-CTIME.jpg"
            alt="Laboratoire de Métrologie Dimensionnelle"
            className="w-full h-[350px] object-cover"
            width={1000}
            height={250}
          />
          {/* Translucent Banner Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
            
          </div>
        </div>

        <h1 className={`text-5xl font-bold text-white drop-shadow-lg text-center transition-opacity duration-1000 delay-200 mb-6 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          Laboratoire de Métrologie Dimensionnelle
        </h1>
        <p className="text-center text-lg text-gray-200 mb-8">
          Vous souhaitez garantir la précision de vos mesures ? Notre laboratoire de métrologie dimensionnelle vous offre une gamme complète de services pour vérifier et certifier les dimensions de vos pièces et composants.
        </p>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-white my-6 text-center">La métrologie dimensionnelle : l&apos;art de la mesure précise</h2>
          <p className="text-lg text-gray-300 mb-4 text-center">
            La métrologie dimensionnelle est essentielle pour assurer la conformité des dimensions des pièces, garantissant ainsi leur bon fonctionnement et leur interchangeabilité.
          </p>

          <div
            className={`bg-white/10 p-6 rounded-lg shadow-lg mb-6 transition-transform duration-300 ${hoveredCard === 'why' ? 'scale-105 shadow-red-500/50' : 'scale-100'}`}
            onMouseEnter={() => setHoveredCard('why')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <h3 className="text-2xl font-semibold text-white mb-4">Pourquoi réaliser des contrôles de métrologie dimensionnelle ?</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-4">
                <span className="text-red-500"><strong>•</strong></span>
                <span className="text-gray-200"><strong>Précision :</strong> Assurer des mesures exactes pour une qualité optimale.</span>
              </li>
              <li className="flex items-center space-x-4">
                <span className="text-red-500"><strong>•</strong></span>
                <span className="text-gray-200"><strong>Conformité :</strong> Vérifier que les pièces respectent les normes et spécifications.</span>
              </li>
              <li className="flex items-center space-x-4">
                <span className="text-red-500"><strong>•</strong></span>
                <span className="text-gray-200"><strong>Amélioration continue :</strong> Identifier les écarts et optimiser les processus de fabrication.</span>
              </li>
              <li className="flex items-center space-x-4">
                <span className="text-red-500"><strong>•</strong></span>
                <span className="text-gray-200"><strong>Fiabilité :</strong> Renforcer la confiance dans les produits finis.</span>
              </li>
            </ul>
          </div>

          <div
            className={`bg-white/10 p-6 rounded-lg shadow-lg transition-transform duration-300 ${hoveredCard === 'parameters' ? 'scale-105 shadow-red-500/50' : 'scale-100'}`}
            onMouseEnter={() => setHoveredCard('parameters')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <h3 className="text-2xl font-semibold text-white mb-4">Les paramètres mesurés</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-4">
                <span className="text-red-500"><strong>•</strong></span>
                <span className="text-gray-200"><strong>Des dimensions : </strong> longueur, largeur, hauteur, angle …</span>
              </li>
              <li className="flex items-center space-x-4">
                <span className="text-red-500"><strong>•</strong></span>
                <span className="text-gray-200"><strong>Dimensionnement et tolérance géométriques ‘GD&T’ :</strong></span>
                
              </li>
              <li className="flex items-center space-x-4">
                <span className="text-red-500"><strong>•</strong></span>
                <span className="text-gray-200"><strong>La rugosité (État de surface)</strong></span>
              </li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-semibold text-center text-white mb-25 my-20">Nos services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
          {services.map(({ icon, title, description, link, imgSrc }, index) => (
            <div
              key={index}
              className={`relative bg-white/10 shadow-xl rounded-xl overflow-hidden transition-all duration-500 transform ${hoveredIndex === index ? 'scale-105 shadow-red-500/50' : 'scale-100'}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image
                src={imgSrc}
                alt={title}
                className="w-full h-48 object-cover"
                width={300}
                height={200}
              />
              <div className="p-6">
                {link ? (
                  <Link href={link}>
                    <h3 className="text-xl font-semibold text-white hover:text-red-500 transition-colors duration-300">
                      {title}
                    </h3>
                  </Link>
                ) : (
                  <h3 className="text-xl font-semibold text-white">{title}</h3>
                )}
                {icon}
                <p className="text-gray-200 mt-3">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LaboratoireDeMetrologie;
