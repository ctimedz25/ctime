import React from "react";

export default function PresentationCTIME() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#b01614] via-gray-600 to-gray-900 px-6">
      {/* Section bannière avec animation */}
      <div className="relative mb-10 w-full max-w-5xl">
        <div className="overflow-hidden rounded-lg shadow-lg">
          <img
            src="/Eprouvette-imageonline.co-merged.png"
            alt="Bannière CTIME"
            className="w-full h-64 object-cover transform transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <h1 className="absolute bottom-6 left-6 text-4xl text-white font-extrabold drop-shadow-lg">
            MISSIONS
          </h1>
        </div>
      </div>

      {/* Introduction avec background image */}
      <section className="bg-white/10 shadow-xl rounded-lg p-6 mb-10 w-full max-w-5xl">
        <p className="mb-4 text-gray-200">
          Le Centre Technique Industriel des Industries Mécaniques et Transformatrices des Métaux à Constantine sera un centre qui s&apos;adaptera aux besoins de l&apos;industrie et un pôle industriel pour appuyer le développement des PME/PMI.
          Ses missions sont détaillées dans le décret de création du CTIME et se résument comme suit :
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-200">
          <li>Appuyer les politiques initiées par les pouvoirs publics</li>
          <li>Assistance technique aux entreprises</li>
          <li>Mise en place de bases de données</li>
          <li>Rapprochement entre l&apos;industrie et les milieux de R&D</li>
          <li>Formations spécifiques aux entreprises</li>
          <li>Études et conseils</li>
        </ul>

        <h2 className="mb-4 my-8 text-xl font-semibold text-gray-200">OBJECTIFS</h2>
        <p className="mb-4 text-gray-200">
          Être la référence nationale en matière d&apos;essais, d&apos;inspection, de vérification et de certification.
        </p>
      </section>
    </div>
  );
}