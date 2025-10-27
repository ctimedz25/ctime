'use client';

import React from 'react';
import Image from 'next/image';

const formationsData = [
  {
    id: 1,
    titre: 'Formation en Métrologie',
    description: (
      <>
        Adapté aux besoins de collaborateurs souhaitant acquérir les connaissances de base en métrologie dimensionnelle.
        <br style={{ margin: '20px 0', borderTop: '2px solid #ccc' }} />
        <strong>Formation théorique et pratique.</strong>
      </>
    ),
    image: '/IMG_20241205_121057.jpg',
  },
  {
    id: 2,
    titre: 'Formation en Matériaux',
    description: 'Adaptée au collaborateur souhaitant acquérir des connaissances de base dans la caractérisation du comportement mécanique des matériaux.',
    image: '/canva.png',
  },
];

const Formations = () => {
  return (
    <div className="bg-gradient-to-br from-[#b01614] via-gray-600 to-gray-900 p-10 min-h-screen">
      <h1 className="text-5xl text-center font-extrabold text-white drop-shadow-lg mb-6">Nos Formations</h1>

      <div className="flex flex-col items-center">
        {formationsData.map((formation) => (
          <div
            key={formation.id}
            className="bg-white/10 shadow-xl rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-red-500/50 w-full max-w-2xl mb-8"
          >
            <div className="relative w-full h-60">
              <Image
                src={formation.image}
                alt={formation.titre}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-6 text-center">
              <h2 className="text-2xl font-semibold text-white mb-2">{formation.titre}</h2>
              <p className="text-gray-200">{formation.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Formations;
