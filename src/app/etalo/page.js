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
      title: "Cales étalons 0,1 … 100 mm",
      Capacite: [
        "a) Avec démagnétisation précédente et enlèvement de formation de morfil : Détermination de la longueur centrale et la variation de la longueur suivant ISO 3650.",
        "b) Seulement pour des cales étalons nouvelles : Détermination de la longueur centrale et la variation de la longueur suivant ISO 3650.",
      ],
      images: ["/19.jpg", "/20.jpg"],
    },
    {
      title: "Étalonnage de pieds à coulisse",
      Capacite: [
        "-0 .. 150 mm",
        "-0 .. 300 mm",
        "-0 .. 500 mm",
        "-0 .. 1000 mm",
        "-0 .. 2000 mm",
      ],
      images: ["/12.jpg"],
    },
    {
      title: "Micromètres d'extérieur",
      Capacite: [
        "0 .. 25 mm",
        "25 .. 100 mm",
        "100 .. 500 mm",
        "500 .. 1000 mm",
        "1000 .. 1500 mm",
      ],
      images: ["/4.jpg", "/5.jpg"],
    },
    {
      title: "Comparateurs",
      subtitle: "(DIN 878 ou conforme)",
      Capacite: [
        "0 .. 13 mm",
        "> 13 mm",
      ],
      images: ["/7.png"],
    },
    {
      title: "Palpeurs orientables (Puppitast…)",
      subtitle: "(DIN 2270 ou conforme)",
      Capacite: [],
      images: ["/15.jpg"],
    },
    {
      title: "Bagues de réglage (bagues lisses) jusqu'à 250 mm",
      Capacite: [
        "Étalonnage diamètre (standard) : Détermination du diamètre à 2 niveaux par niveau : 2 mesurages (90° tourné).",
        "Étalonnage diamètre + circularité : Détermination du diamètre à 2 niveaux par niveau : 2 mesurages (90° tourné).",
        "Détermination de la cylindricité à deux niveaux.",
      ],
      images: ["/21.jpg", "/16.jpg"],
    },
    {
      title: "Tampons lisses (2 côtés, combinaison GO + NO GO)",
      Capacite: [
        "Détermination du diamètre par 2 x deux mesurages à 90° l'un sur l'autre à 2 niveaux du côté de GO.",
        "1 x deux mesurages à 90° l'un sur l'autre du côté de NO GO.",
        "Diamètre : 0 .. 100 mm",
        "> 100 mm",
      ],
      images: ["/28.jpg"],
    },
    {
      title: "Calibres mâchoires (combinaison GO + NO GO)",
      Capacite: [
        "Grandeur : 0 .. 100 mm",
        "100 .. 200 mm",
        "200 .. 300 mm",
      ],
      images: ["/30.jpg"],
    },
    {
      title: "Bagues filetées: type cylindrique",
      subtitle: "Calibre GO ou NO GO",
      Capacite: [
        "Flankendiameter diamètre :",
        "3 .. 100 mm",
        "100 .. 150 mm",
        "150 .. 200 mm",
      ],
      images: ["/40.jpg"],
    },
    {
      title: "Tampons de filetage: type cylindrique",
      subtitle: "Calibre 2 côtés (GO + NO GO)",
      Capacite: [
        "Diamètre : ≤ 100 mm",
        "> 100 mm",
      ],
      images: ["/38.png"],
    },
    {
      title: "Calibre 1 côté (GO ou NO GO)",
      Capacite: [
        "Diamètre : ≤ 100 mm",
        "100 mm",
      ],
      images: ["/39.jpg"],
    },
  ];

  return (
    <div className="bg-gradient-to-br from-[#b01614] via-gray-600 to-gray-900 bg-gradient-lg animate-watery min-h-screen flex flex-col items-center p-4">
      {/* Image de fond */}
      <div
        className={`relative bg-white/10 shadow-xl rounded-xl overflow-hidden transition-all duration-500 transform mb-8 ${isVisible ? 'scale-100' : 'scale-95'}`}
      >
        <Image
          src="/59b74429-e2a7-4281-85af-9eed1f43f74d-imageonline.co-merged.png"
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
          <h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-14">
            Service d&apos;<span className="text-red-500">Étalonnage</span> des Instruments
          </h1>

          {/* Merged Card */}
          <div className="relative w-full max-w-4xl bg-white/10 shadow-xl rounded-xl overflow-hidden transition-all duration-500 transform p-6 z-10">
            <p className="text-lg text-gray-200 leading-relaxed">
              Nous proposons un service professionnel d&apos;<span className="text-red-500">étalonnage</span> pour tous vos instruments de mesure.
              Assurez-vous de la précision de vos outils et respectez les normes en vigueur.
            </p>
          </div>
        </div>

        {/* Services */}
        <h2 className="text-3xl font-bold text-center text-white mt-16">Nos services</h2>
        <div className="flex justify-center mt-10 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 justify-center">
            {services.map(({ title, Capacite, images, subtitle }, index) => (
              <div
                key={index}
                className={`relative bg-white/10 shadow-xl rounded-xl overflow-hidden transition-all duration-500 transform ${
                  hoveredIndex === index ? "scale-105 shadow-red-500/50" : "scale-100"
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="flex flex-col md:flex-row items-center max-w-[800px] mx-auto">
                  <div className="w-full md:w-1/2 flex flex-col gap-2 p-4">
                    {images.map((img, idx) => (
                      <Image
                        key={idx}
                        src={img}
                        alt={title}
                        className="w-full h-40 object-contain rounded-lg shadow-md transition-transform transform hover:scale-105"
                        width={300}
                        height={160}
                      />
                    ))}
                  </div>
                  <div className="w-full md:w-1/2 p-4">
                    <h2 className="text-xl font-semibold text-white hover:text-red-500 transition-colors duration-300 mb-2">
                      {title}
                    </h2>
                    {subtitle && <h3 className="text-lg text-gray-300 mb-2">{subtitle}</h3>}
                    <h3 className="font-semibold text-lg text-gray-300 mb-2">Capacités :</h3>
                    <ul className="list-disc list-inside text-gray-200">
                      {Capacite.map((cap, idx) => (
                        <li key={idx}>{cap}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Processus d'Étalonnage */}
        <section className="relative w-full max-w-4xl bg-white/10 shadow-xl rounded-xl overflow-hidden transition-all duration-500 transform p-6 z-10 mb-8 max-w-[800px] mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Processus d&apos;Étalonnage</h2>
          <ol className="list-decimal list-inside text-gray-200">
            <li>Réception et vérification de l&apos;instrument.</li>
            <li><span className="text-red-500">Étalonnage</span> selon les spécifications requises.</li>
            <li>Tests de précision et ajustements.</li>
            <li>Émission d&apos;un certificat d&apos;<span className="text-red-500"></span>étalonnage.</li>
          </ol>
        </section>
      </div>
    </div>
  );
};

export default EtalonnagePage;
