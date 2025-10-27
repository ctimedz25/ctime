'use client';

import Image from 'next/image';
import Link from "next/link";

export default function Formations() {
  const formations = [
    {
      id: 1,
      title: "Formation en Métrologie",
      description: "Les bases de la métrologie dimensionnelle",
      image: "/IMG_20241205_121057.jpg",
      link: "/blog",
    },
    {
      id: 2,
      title: "Formation en Matériaux",
      description: "Introduction à la science des matériaux",
      image: "/IMG-20241205-WA0000-imageonline.co-merged (1)-imageonline.co-merged.jpg",
      link: "/blog",
    },
  ];

  return (
    <section className="flex flex-col items-center p-8 bg-gray-100" style={{
      backgroundImage: "url('/5676719.jpg')", 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <h2 className="text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl text-center shadow-md p-4 rounded-lg bg-gradient-to-r from-gray-300 to-red-700">
        Nos Formations
      </h2>

      <div className="flex flex-col md:flex-row justify-around gap-10 w-full max-w-4xl">
        {formations.map((formation) => (
          <div key={formation.id} className="bg-white rounded-lg shadow-lg p-6 mb-4 md:mb-0 md:w-1/3 transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
            <Image
              src={formation.image}
              alt={formation.title}
              width={400}
              height={200}
              className="w-full h-32 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-2xl font-semibold mb-4 text-red-600">{formation.title}</h2>
            <p className="text-gray-800">{formation.description}</p>

            {/* Bottom Section - can be used for buttons, additional information, etc. */}
            <div className="mt-4">
              <Link href={formation.link || "#"} passHref>
                <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
                  {formation.link ? "En savoir plus" : "Plus d'infos"}
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
