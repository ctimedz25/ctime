'use client';

import React from 'react';
import { motion } from 'framer-motion';

const EtalonnagePage = () => {
  const services = [
    {
      title: "Matériaux de haute résistance à la traction jusqu'à 600 kN",
      définitions: [
        {
          subtitle: "Les matériaux capables de supporter des charges de traction aussi élevées sont généralement des métaux ou des alliages à haute performance.",
          items: [
            "Acier haute résistance : (Acier allié, Acier inoxydable)",
            "Alliages d’aluminium : (Alliages d'aluminium série 7000)",
            "Superalliages",
            "Titane et ses alliages",
          ],
        },
      ],
      images: ["/Capture3.PNG"],
    },
    {
      title: "Matériaux de faible résistance à la traction jusqu'à 5 kN",
      définitions: [
        {
          subtitle: "Les matériaux de faible résistance à la traction sont généralement plus doux et plus faciles à déformer. On les retrouve souvent dans des applications où la flexibilité et l'absorption d'énergie sont primordiales. Voici quelques exemples :",
          items: [
            "Polymères thermoplastiques : (Polyéthylène (PE), polypropylène (PP), polystyrène (PS), etc.)",
            "Caoutchouc naturel et synthétique",
            "Bois",
            "Céramiques traditionnelles",
          ],
        },
      ],
      images: ["/Capture.PNG"],
    },
    {
      title: "Les paramètres mesurés",
      définitions: [
        {
          items: [
            "Limite élastique",
            "Résistance à la traction",
            "Allongement à la rupture",
            "Module d’Young",
            "Domaine élastique",
            "Point élastique",
            "Domaine plastique",
            "Striction",
            "Rupture",
          ],
        },
      ],
      images: ["/extention metre.png"],
    },
    {
      title: "Essai de traction à température ambiante",
      définitions: [
        {
          subtitle: "L’essai de traction à température ambiante est une méthode simple et efficace pour évaluer la résistance et la ductilité d'un matériau (23°C).",
        },
      ],
      images: ["/different types de matiere.png"],
    },
    {
      title: "Essai de traction à haute température jusqu'à 1200°C",
      définitions: [
        {
          items: [
            "L'essai est réalisé à une température élevée pour étudier le comportement du matériau à chaud.",
          ],
        },
      ],
      images: ["/Capture2.PNG"],
    },
  ];

  return (
    <div className="flex flex-col items-center p-4 min-h-screen bg-gradient-to-br from-[#b01614] via-gray-600 to-gray-900">
      <motion.img
        src="/image (4).jpg"
        alt="Étalonnage des Instruments"
        className="w-full max-w-5xl mb-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      <h1 className="text-4xl font-extrabold text-red-600 mb-6 text-center">Essai de traction</h1>

      <section className="bg-white/10 shadow-xl rounded-lg p-8 mb-10 w-full max-w-5xl">
        <p className="text-gray-200 text-lg leading-relaxed">
          Un essai de traction est une méthode d&apos;essai mécanique qui consiste à soumettre un échantillon de matériau à une force de traction croissante jusqu&apos;à sa rupture. Cette méthode permet d&apos;obtenir des informations cruciales sur les propriétés mécaniques du matériau.
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
              {/* Loop through the definitions */}
              {service.définitions.map((def, idx) => (
                <div key={idx} className="mb-6">
                  <h6 className="text-gray-200">{def.subtitle}</h6>
                  <ul className="list-disc list-inside text-gray-200 leading-relaxed">
                    {def.items && def.items.length > 0 ? (
                      def.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))
                    ) : (
                      <li></li>
                    )}
                  </ul>
                </div>
              ))}
            </div>

            <div className="w-full md:w-1/2 flex flex-col gap-4 p-4">
              {/* Display images */}
              {service.images.map((img, idx) => (
                <motion.img
                  key={idx}
                  src={img}
                  alt={service.title}
                  className="w-full h-auto object-contain rounded-lg shadow-md transition-transform transform hover:scale-105"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/path/to/placeholder.jpg"; // Placeholder image path
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
