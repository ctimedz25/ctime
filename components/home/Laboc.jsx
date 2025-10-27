import React from "react";
import Link from 'next/link';
import { WrenchScrewdriverIcon } from "@heroicons/react/20/solid";

const services = [
  {
    step: "01",
    name: "Laboratoire d'Essais Mécaniques",
    imageUrl: "/20210322_092413.jpg",
    description: "Notre laboratoire d'essais mécaniques est équipé pour réaliser une variété d'essais sur les matériaux.",
    link: "/services/labo2",
  },
  {
    step: "02",
    name: "Laboratoire de Métrologie Dimensionnelle",
    imageUrl: "/labo1.jpg",
    description: "Le laboratoire de métrologie dimensionnelle est spécialisé dans la mesure précise des dimensions.",
    link: "/services/labo1",
  },
  {
    step: "03",
    name: "Laboratoire d'étalonnage",
    imageUrl: "/etalo.jpeg",
    description: "Nous proposons un service professionnel d'étalonnage pour tous vos instruments de mesure.",
    link: "https://ctime-rose.vercel.app/etalo",
  },
];

const formations = [
  {
    step: "04",
    name: "Formation en Métrologie",
    imageUrl: "/IMG_20241205_121057.jpg",
    description: "Les bases de la métrologie dimensionnelle",
    link: "/blog",
  },
  {
    step: "05",
    name: "Formation en Matériaux",
    imageUrl: "/IMG-20241205-WA0000.jpg",
    description: "Introduction à la science des matériaux",
    link: "/blog",
  },
];

const FlipCardComponent = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center p-6">
      <div className="relative max-w-7xl w-full p-12 rounded-2xl shadow-xl bg-black/20 backdrop-blur-md border border-white/10 flex flex-col items-center">

        <p className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl text-center mb-12">
          Nos Laboratoires & Formations
        </p>

        <div className="flex flex-col items-center w-full mb-16">
          <p className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl text-center mb-12">
            Nos Laboratoires
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {services.map((service) => (
              <div key={service.name} className="group h-72 w-64 [perspective:1000px]">
                <div className="relative h-full w-full rounded-2xl shadow-lg transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  <div className="absolute inset-0 h-full w-full rounded-2xl bg-cover bg-center transition duration-300 shadow-lg bg-white/10"
                       style={{ backgroundImage: `url(${service.imageUrl})`, backgroundSize: 'cover' }}>
                    <h2 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-lg font-semibold text-gray-300 bg-black/50 px-6 py-2 rounded-full shadow-xl max-w-[90%] text-center">
                      {service.name}
                    </h2>
                  </div>
                  <div className="absolute inset-0 h-full w-full rounded-2xl bg-gray-900/90 px-6 text-center text-gray-300 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center items-center">
                    <p className="text-lg text-center mb-4">
                      {service.description}
                    </p>
                    <Link href={service.link}>
                      <button className="mt-4 bg-gradient-to-r from-red-700 to-red-500 hover:from-red-600 hover:to-red-400 text-white font-bold py-2 px-6 rounded-full inline-flex items-center shadow-lg transition duration-300">
                        <span>En savoir plus</span>
                        <WrenchScrewdriverIcon className="h-5 w-5 ml-2" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center w-full">
          <p className="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl text-center mb-12">
            Nos Formations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {formations.map((formation) => (
              <div key={formation.name} className="group h-72 w-64 [perspective:1000px]">
                <div className="relative h-full w-full rounded-2xl shadow-lg transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  <div className="absolute inset-0 h-full w-full rounded-2xl bg-cover bg-center transition duration-300 shadow-lg bg-white/10"
                       style={{ backgroundImage: `url(${formation.imageUrl})`, backgroundSize: 'cover' }}>
                    <h2 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-lg font-semibold text-gray-300 bg-black/50 px-6 py-2 rounded-full shadow-xl max-w-[90%] text-center">
                      {formation.name}
                    </h2>
                  </div>
                  <div className="absolute inset-0 h-full w-full rounded-2xl bg-gray-900/90 px-6 text-center text-gray-300 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center items-center">
                    <p className="text-lg text-center mb-4">
                      {formation.description}
                    </p>
                    <Link href={formation.link}>
                      <button className="mt-4 bg-gradient-to-r from-red-700 to-red-500 hover:from-red-600 hover:to-red-400 text-white font-bold py-2 px-6 rounded-full inline-flex items-center shadow-lg transition duration-300">
                        <span>En savoir plus</span>
                        <WrenchScrewdriverIcon className="h-5 w-5 ml-2" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FlipCardComponent;
