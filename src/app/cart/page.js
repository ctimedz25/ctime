import React from "react";
import { CheckCircle } from "lucide-react";

export default function PresentationCTIME() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#b01614] via-gray-600 to-gray-900 px-6">
      {/* Bannière */}
      <div className="relative mb-10 w-full max-w-5xl">
        <div className="overflow-hidden rounded-lg shadow-lg relative">
          <img
            src="/Eprouvette-imageonline.co-merged.png"
            alt="Bannière CTIME"
            className="w-full h-64 object-cover transform transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <h1 className="absolute bottom-6 left-6 text-3xl sm:text-4xl text-white font-extrabold drop-shadow-lg">
            Présentation du CTIME
          </h1>
        </div>
      </div>

      {/* Sections Alternées */}
      <div className="w-full max-w-5xl space-y-12">
        {/* Section 1 */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-white  mb-4">
              Qui sommes-nous ?
            </h2>
            <p className="text-white leading-relaxed">
              Le <strong>Centre Technique des Industries Mécaniques</strong> et Transformatrices des Métaux &laquo; CTIME &raquo; a été créé en 2010 sous la tutelle du <strong>Ministère de l’Industrie</strong>.
            </p>
            <p className="text-white leading-relaxed mt-2">
              Nous accompagnons les entreprises industrielles avec des services de pointe pour améliorer la <strong>qualité</strong> et la <strong>précision</strong> de leurs productions.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="/Engrenage.png"
              alt="Industrie"
              className="w-full rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* Section 2 (Nos Valeurs) */}
        <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-6">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-white  mb-4">
              Nos Valeurs
            </h2>
            <p className="text-white leading-relaxed">
              Nous nous engageons à garantir un service d'<strong>excellence</strong> avec des équipements de dernière génération. La satisfaction client est notre priorité.
            </p>
            <p className="text-white leading-relaxed mt-2">
              Grâce à une expertise reconnue, nous aidons nos partenaires industriels à optimiser leur <strong>productivité</strong> et leur <strong>fiabilité</strong>.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="/Flexion.JPG"
              alt="Innovation"
              className="w-full rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* 🚀 Nos Services (Dernière section avec un espace avant le footer) */}
      <div className="text-center w-full max-w-5xl mt-16 mb-20">
        <h2 className="text-2xl font-bold text-[#E0E0E0] mb-6">
          Nos Services Principaux
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-2">
          {[
            "Étalonnage dimensionnel",
            "Contrôle de CNC",
            "Mesure des pièces complexes",
            "Digitalisation",
          ].map((service, index) => (
            <li
              key={index}
              className="flex items-center bg-gray-800 bg-opacity-50 p-3 rounded-md shadow-sm hover:shadow-md transition duration-300 ease-in-out transform hover:scale-105"
            >
              <CheckCircle className="text-[#C04040] w-6 h-6 mr-3" />
              <span className="text-white font-bold">{service}</span>
            </li>
          ))}
        </ul>
        {/* Dernier service centré */}
        <div className="mt-4 flex justify-center">
          <div className="flex items-center bg-gray-800 bg-opacity-50 p-3 rounded-md shadow-sm hover:shadow-md transition duration-300 ease-in-out transform hover:scale-105 w-3/4 sm:w-1/2">
            <CheckCircle className="text-[#C04040] w-6 h-6 mr-3" />
            <span className="text-white font-bold">Essais mécaniques</span>
          </div>
        </div>
      </div>
    </div>
  );
}
